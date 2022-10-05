import ButtonThemeFactory from '@client/styles/themes/components/button';
import Size from '@specs/_common/size';

const buttonTheme: ButtonThemeFactory = theme => ({
  minWidth: {
    [Size.XS]: '340px',
    [Size.SM]: '340px',
    [Size.MD]: '340px',
    [Size.LG]: '340px',
    [Size.XL]: '340px',
  },
  padding: {
    [Size.XS]: '30px',
    [Size.SM]: '30px',
    [Size.MD]: '30px',
    [Size.LG]: '30px',
    [Size.XL]: '30px',
  },
  minHeight: {
    [Size.XS]: '73px',
    [Size.SM]: '73px',
    [Size.MD]: '73px',
    [Size.LG]: '73px',
    [Size.XL]: '73px',
  },
  iconSize: {
    [Size.XS]: Size.XL,
    [Size.SM]: Size.XL,
    [Size.MD]: Size.XL,
    [Size.LG]: Size.XL,
    [Size.XL]: Size.XL,
  },
  defaultSize: Size.MD,
  borderRadius: '5px',
});

export default buttonTheme;
