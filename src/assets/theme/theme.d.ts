import { ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral?: PaletteColor;
    font?: PaletteColor;
    favourite?: PaletteColor;
  }

  interface PaletteOptions {
    neutral?: PaletteColorOptions;
    font?: PaletteColorOptions;
    favourite?: PaletteColorOptions;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
    mainLight?: string;
    mainDark?: string;
    bgLight?: string;
    bgDark?: string;
    border?: string;
    hover?: string;
    mobile_button?: string;
    alertColor?: string;
    alertBackground?: string;
  }

  interface PaletteColor {
    darker?: string;
    mainLight?: string;
    mainDark?: string;
    bgLight?: string;
    bgDark?: string;
    border?: string;
    hover?: string;
    mobile_button?: string;
    alertColor?: string;
    alertBackground?: string;
  }
}
