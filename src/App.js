import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import jwtDecode from "jwt-decode";
import axios from "axios";

// REDUX
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

//Component
import Navbar from "./components/Navbar";
import AuthRoute from "./util/AuthRoute";

//Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

//CSS
import "./App.css";
import GLOBAL_THEME from "./util/theme";

const theme = createMuiTheme(GLOBAL_THEME);

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  store.dispatch(logoutUser());
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <AuthRoute path="/login" exact component={Login} />
              <AuthRoute path="/signup" exact component={Signup} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
