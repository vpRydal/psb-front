import { math } from 'polished';
import styled from 'styled-components';

export const Head = styled.div(({ theme }) => ({
  background: 'linear-gradient(90deg, #2B2C84 0%, #8D41BB 100%)',
  padding: `${math(`${theme.spacing.lg} * 5`)} 0`,
}));
