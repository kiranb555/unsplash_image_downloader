import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/pages/home";
import ImageView from "./components/pages/imageView";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path={`/view:id`} component={ImageView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
