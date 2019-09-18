const GLOBAL_THEME = {
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#00bcd4",
      dark: "#008394",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      contrastText: "#fff"
    },
    typography: {
      useNextVariants: true
    }
  },

  //this object is to spread this
  globalCSS: {
    form: {
      textAlign: "center"
    },
    image: {
      margin: "20px auto 20px auto"
    },
    pageTitle: {
      margin: "10px auto 20px auto"
    },
    textField: {
      margin: "10px auto 20px auto"
    },
    button: {
      position: "relative"
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      margin: "10px auto"
    },
    progress: {
      position: "absolute"
    }
  }
};

export default GLOBAL_THEME;
