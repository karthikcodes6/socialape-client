import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

//Component
import Navbar from "./components/Navbar";

//Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

//CSS
import "./App.css";

const theme = createMuiTheme({
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
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
