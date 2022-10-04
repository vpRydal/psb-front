import styled, { css, CSSObject } from 'styled-components';

interface Focusable {
  isFocused: boolean
}
export const StyledFormField = styled.div<Focusable & { colsSpan?: number }>(({ colsSpan, theme }) => css`
  &:not(:last-child) {
    margin-bottom: ${theme.spacing.md};
  }

  grid-column-start: ${colsSpan} span;

  .form-field-input-wrapper{
    display: block;
    width: 100%;
    & > * {
      width: 100%;
    }
  }
`);

export const Label = styled.label`
  display: inline; 
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 21px;
`;

export const LabelWrapper = styled.div(({ theme }) => css`
  margin-bottom: ${theme.spacing.sm};
`);

export const Description = styled.div`
`;

export const InvalidMessage = styled.div(() => css``);
