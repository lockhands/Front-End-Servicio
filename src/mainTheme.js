import { createTheme } from '@mui/material/styles';
import { purple, lightBlue } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[900]
    },
    secondary: {
      main: purple[900]
    },
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontFamily: '"Roboto", "Helvetica", sans-serif',

    h1: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "1.125rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 400,
    },
    h5: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "1.1rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        underlineNone: {
          color: "black",
          fontWeight: 500,
          "&:hover": {
            color: "#01579b",
          },
        },
        underlineHover: {
        },
        underlineAlways: {
          color: "#000000",
        },
      },
      defaultProps: {
        underline: "none",
        fontFamily: '"Roboto", "Helvetica", sans-serif',
        fontSize: "1.14rem",
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          color: "white",
          fontSize: "1.2rem",
          '& svg': {
            color: "white",
          },
        },
      },
    },
  },
});

theme = createTheme(theme, {
  components: {
    MyCustomForm: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          marginTop: "1rem",
          alignItems: "flex-start",
          justifyContent: "space-between",
          '& Button': {
            marginTop: "1rem",
          },
          '& > div': {
            minWidth: "400px",
            [theme.breakpoints.down("sm")]: {
              minWidth: "340px",
            },
            [theme.breakpoints.down("xs")]: {
              minWidth: "240px",
            },
            marginBottom: "1rem",
          }
        },
      },
    },
  },
});

export default theme;
