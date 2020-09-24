import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

//Global state REDUX
import { connect } from "react-redux";

//Components
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import TaskDashboardPage from "./components/TaskDashboardPage";
import ContactPage from "./components/ContactPage";

//Notification component
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

//Style
import "./sass/normalize.scss";
import "./sass/app.scss";

//Font selector
import "./fonts/fontSelector.scss";

//Interfaces
interface IProps {
  downloadTasksMongo: any;
}

//<any "props", any "state">
class App extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      title: "",
      description: "",
    };
  }
  componentDidMount() {
    console.log("-APP COMPONENT DID MOUNT-");
    this.props.downloadTasksMongo();
  }
  render() {
    return (
      <Router>
        <ReactNotification />
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
              return <AboutPage />;
            }}
          ></Route>
          <Route
            exact
            path="/Contact"
            render={() => {
              return <ContactPage />;
            }}
          ></Route>
          <Route
            path="/TaskDashboard"
            render={() => {
              return <TaskDashboardPage />;
            }}
          ></Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state: IProps) => {
  return {
    //Passing the current state of "store.js" because
    Redux: state, //mapDispatchToProps don't work without
  }; //define mapStateToProps.
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    downloadTasksMongo: () => dispatch({ type: "DOWNLOAD_TASKS_MONGO" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
