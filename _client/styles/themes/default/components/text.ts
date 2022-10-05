import TextThemeFactory from '@client/styles/themes/components/text';
import Intent from '@specs/ui/intent';
import TextName from '@specs/ui/text-name';

const textTheme: TextThemeFactory = theme => ({
  [TextName.BUTTON]: {
    fontName: theme.fontNames.Gilroy,
    weight: 600,
    uppercase: true,
    fontSize: '20px',
    tagName: 'span',
    color: theme.color.font.SECONDARY,
    intent: {
      [Intent.PRIMARY]: theme.color.font.SECONDARY,
      [Intent.SECONDARY]: theme.color.font.SECONDARY,
      [Intent.SUCCESS]: theme.color.font.SECONDARY,
      [Intent.WARNING]: theme.color.font.SECONDARY,
      [Intent.DANGER]: theme.color.font.SECONDARY,
      [Intent.INFO]: theme.color.font.SECONDARY,
    },
  },
  [TextName.MAIN]: {
    fontName: theme.fontNames.Gilroy,
    weight: 400,
    color: theme.color.font.PRIMARY,
    uppercase: false,
    fontSize: '32px',
    tagName: 'span',
  },
  [TextName.TITLE_H1]: {
    fontName: theme.fontNames.Gilroy,
    weight: 600,
    color: theme.color.font.PRIMARY,
    uppercase: false,
    fontSize: '48px',
    tagName: 'h1',
  },
  [TextName.TITLE_H2]: {
    fontName: theme.fontNames.Gilroy,
    weight: 600,
    uppercase: false,
    color: theme.color.font.PRIMARY,
    fontSize: '48px',
    tagName: 'h2',
  },
  [TextName.TITLE_H3]: {
    fontName: theme.fontNames.Gilroy,
    weight: 600,
    uppercase: false,
    color: theme.color.font.PRIMARY,
    fontSize: '48px',
    tagName: 'h4',
  },
  [TextName.TITLE_H4]: {
    fontName: theme.fontNames.Gilroy,
    weight: 600,
    uppercase: false,
    color: theme.color.font.PRIMARY,
    fontSize: '48px',
    tagName: 'h4',
  },
});

export default textTheme;
