import React, {
  ElementType, FC, memo, SVGProps,
} from 'react';

import { IconWrapper } from '@icons/style';
import Size from '@specs/_common/size';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  Icon: ElementType<SVGProps<SVGSVGElement>>;
  size?: Size
}
const Icon: FC<IconProps> = props => {
  const {
    Icon: IconProp, size, className, ...rest
  } = props;

  return (
    <IconWrapper size={size!} className={className}>
      {Object.keys(IconProp).length && (
        <IconProp {...rest} />
      )}
    </IconWrapper>
  );
};

Icon.defaultProps = {
  size: Size.MD,
};

export default memo(Icon);
