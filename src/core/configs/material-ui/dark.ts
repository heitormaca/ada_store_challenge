import { ThemeOptions } from "@mui/material";
 
export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: '#403C3D',
    },
    text: {
      primary: '#F2F2F2'
    },
    primary: {
      main: '#F29F05',
    },
    secondary: {
      main: '#F25C84'
    },
    modalPrimary: {
      main: '#262223',
      light: '#262223',
      dark: '#262223',
      contrastText: '#262223'
    },
    modalSecondary: {
      main: '#E9AB41',
      light: '#E9AB41',
      dark: '#E9AB41',
      contrastText: '#E9AB41'
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
        background: '#2C2828',
        color: '#F2F2F2',
       }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: '#F29F05',
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#2C2828'
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