import {ThemeOptions} from '@mui/material';

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {
      default: '#F8E8EE',
    },
    text: {
      primary: '#262223'
    },
    primary: {
      main: '#F25C84',
      },
    secondary: {
      main: '#F2A7BB',
    },
    modalPrimary: {
      main: '#E9AB41',
      light: '#E9AB41',
      dark: '#E9AB41',
      contrastText: '#E9AB41'
    },
    modalSecondary: {
      main: '#ECB4C3',
      light: '#ECB4C3',
      dark: '#ECB4C3',
      contrastText: '#ECB4C3'
    }

  },
  typography: {
    fontFamily: [ 'Bree Serif','Alegreya','serif'].join(','),
    titleCard: {
      fontSize: '1rem',
      fontFamily: 'Bree Serif',
    },
    priceCard: {
      fontSize: '1.5rem',
      fontFamily: 'Bree Serif',
    },
    categoryCard: {
      fontSize: '0.875rem',
      fontFamily: 'Alegreya'
    },
    titleModal: {
      fontSize: '1.5rem',
      fontFamily: 'Bree Serif',
    },
    descriptionModal: {
      fontSize: '1rem',
      fontFamily: 'Alegreya'
    },
    priceModal: {
      fontSize: '2rem',
      fontFamily: 'Bree Serif',
    },
    categoryModal: {
      fontSize: '0.875rem',
      fontFamily: 'Alegreya'
    },
    filter: {
      fontSize: '1.125rem',
      fontFamily: 'Bree Serif',
    },
    menuOptions: {
      fontSize: '1rem',
      fontFamily: 'Alegreya'
    },
    theme: {
      fontSize: '1rem',
      fontFamily: 'Bree Serif',
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
       root: {
        background: '#ECB4C3',
        color: '#262223',
       }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: '#F8E8EE',
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#E9AB41'
        }
      }
    },
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    titleCard: React.CSSProperties;
    priceCard: React.CSSProperties;
    categoryCard: React.CSSProperties;
    titleModal: React.CSSProperties;
    descriptionModal: React.CSSProperties;
    priceModal: React.CSSProperties;
    categoryModal: React.CSSProperties;
    filter: React.CSSProperties;
    menuOptions: React.CSSProperties;
    theme: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    titleCard: React.CSSProperties;
    priceCard: React.CSSProperties;
    categoryCard: React.CSSProperties;
    titleModal: React.CSSProperties;
    descriptionModal: React.CSSProperties;
    priceModal: React.CSSProperties;
    categoryModal: React.CSSProperties;
    filter: React.CSSProperties;
    menuOptions: React.CSSProperties;
    theme: React.CSSProperties;
  }

  interface Palette {
    modalPrimary: Palette['primary'];
    modalSecondary: Palette['primary'];
  }

  interface PaletteOptions {
    modalPrimary: Palette['primary'];
    modalSecondary: Palette['primary'];
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    titleCard: true;
    priceCard: true;
    categoryCard: true;
    titleModal: true;
    descriptionModal: true;
    priceModal: true;
    categoryModal: true;
    filter: true;
    menuOptions: true;
    theme: true;
  }
}