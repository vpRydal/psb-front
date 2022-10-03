import isArray from 'lodash/isArray';
import { observer } from 'mobx-react-lite';
import React, {
  FC, ReactNode, useEffect, useRef,
} from 'react';

import { ServerActionStore } from '@stores/_misc/server-action';
import { AlertProps } from '@ui/_misc/alert';

import * as Styled from './style';

export interface IWrapperProps {
  children: ReactNode
}

export interface IExtendedAction {
  serverAction: ServerActionStore,
  ignoreError?: boolean
}

export interface IServerActionInformerProps {
  /** Экземпляр стора состояний запросов (если массив, то компонент ожидает
   *  окончание всех запросов, если есть ошибка, то показывает из первого) */
  serverAction: Array<ServerActionStore | IExtendedAction> | ServerActionStore;
  /** Показывать ли все ошибки или только одну (показываются только из первого стора состояний) */
  showAllMessages?: boolean;
  /** Пропсы для алерта */
  alertProps?: Partial<AlertProps>;
  /** Если оборачивать большой блок целиком, то подставится лоадер и вертикальный скролл будет "прыгать" */
  ignoreLoadingState?: boolean;
  /** Отключает показ ошибки, только состояние загрузки */
  disableShowError?: boolean;
  /** Показ лоадера поверх контента на время запроса */
  isOverlay?: boolean;
  /** Скролл к алерту с ошибкой */
  scrollToAlert?: boolean;
  /** Компоненты для дополнительной гибкости */
  components?: {
    alertWrapper?: React.ComponentType<IWrapperProps>,
    spinnerWrapper?: React.ComponentType<IWrapperProps>
  }
}

const ServerActionInformer: FC<IServerActionInformerProps> = observer(props => {
  const {
    children,
    serverAction,
    showAllMessages = false,
    alertProps,
    components,
    ignoreLoadingState = false,
    isOverlay = false,
    scrollToAlert = false,
    disableShowError,
  } = props;

  const actions = isArray(serverAction) ? serverAction : [serverAction];
  const alertRef = useRef<HTMLDivElement>(null);

  const withErrorFirst = actions.find(action => ('isError' in action
    ? action.isError : !action.ignoreError && action.serverAction.isError));
  const inPendingFirst = actions.find(action => ('isPending' in action ? action.isPending : action.serverAction.isPending));

  const inPending = inPendingFirst !== undefined;
  const isError = withErrorFirst !== undefined;

  // eslint-disable-next-line no-nested-ternary
  const firstMessage = isError ? 'isError' in withErrorFirst
    ? withErrorFirst.firstMessage : withErrorFirst.serverAction.firstMessage : null;
  // eslint-disable-next-line no-nested-ternary
  const errorMessages = isError ? 'isError' in withErrorFirst
    ? withErrorFirst.messages : withErrorFirst.serverAction.messages : [];

  useEffect(() => {
    const el = alertRef.current;

    if (scrollToAlert && el && isError) {
      window.scrollTo({
        top: el.getBoundingClientRect().top,
        behavior: 'smooth',
      });
    }
  }, [isError, scrollToAlert]);

  // RENDERERS
  function renderAlertWrapper(content: ReactNode) {
    const alertData = (
      <Styled.Alert ref={alertRef}>
        {content}
      </Styled.Alert>
    );

    if (components?.alertWrapper) {
      return (
        <components.alertWrapper>
          {alertData}
        </components.alertWrapper>
      );
    }

    return alertData;
  }

  if (inPending && !ignoreLoadingState) {
    let spinner = (
      <Styled.Loader />
    );

    if (components?.spinnerWrapper) {
      spinner = (
        <components.spinnerWrapper>
          {spinner}
        </components.spinnerWrapper>
      );
    }

    if (isOverlay) {
      // FIXME: вынести оверлей в отдельный UI компонент
      return (
        <Styled.Overlay>
          <Styled.OverlayBlurWrapper />
          <Styled.OverlaySpinnerWrapper>
            {spinner}
          </Styled.OverlaySpinnerWrapper>
          {children}
        </Styled.Overlay>
      );
    }

    return spinner;
  }

  if (isError && firstMessage && !disableShowError) {
    if (showAllMessages) {
      return renderAlertWrapper(errorMessages.map(message => message));
    }
    return renderAlertWrapper(firstMessage);
  }

  return (
    <>
      {children}
    </>
  );
});

export {
  ServerActionInformer,
};
