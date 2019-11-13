import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./Components/Layouts/Layout";

class App extends Component {
  childELm = () => {
    return <h1>heheheheh</h1>;
  };
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Layout />
      </React.Fragment>
    );
  }
}

export default App;
