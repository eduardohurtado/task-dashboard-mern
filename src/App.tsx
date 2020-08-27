import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import AboutPage from './components/AboutPage'

//Style
import "./sass/normalize.scss";
import "./sass/app.scss";

interface IProps {}

//<any "props", any "state">
export class App extends React.Component<IProps, {}> {
  render() {
    return (
      <Router>
        <div className="gridContainer">
          <NavigationBar />
          <Route
            exact
            path="/"
            render={() => {
              return <HomePage />;
            }}
          ></Route>
          <Route
              exact
              path="/About"
              render={() => {
                return (
                  <>
                    <AboutPage />
                  </>
                );
              }}
            ></Route>
          <Footer />
        </div>
      </Router>
    );
  }
}
