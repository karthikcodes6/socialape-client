import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

class Home extends Component {
  state = {
    screams: null
  };

  componentDidMount() {
    axios
      .get("/screams")
      .then(res => this.setState({ screams: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map(scream => <p>{scream.body}</p>)
    ) : (
      <p>Loading....</p>
    );
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>content....</p>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
