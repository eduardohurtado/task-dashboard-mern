import React, { Suspense } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

//Global state REDUX
import { connect } from "react-redux";

//Components
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

//Lazy load components
import Loading from "./components/Loading";
const AboutPage = React.lazy(() => import("./components/AboutPage"));
const ContactPage = React.lazy(() => import("./components/ContactPage"));
const TaskDashboardPage = React.lazy(
  () => import("./components/TaskDashboardPage")
);

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
  downloadTasksMongo(): void;
}

//<any "props", any "state">
class App extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
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
              return (
                <Suspense fallback={<Loading />}>
                  <AboutPage />
                </Suspense>
              );
            }}
          ></Route>
          <Route
            exact
            path="/Contact"
            render={() => {
              return (
                <Suspense fallback={<Loading />}>
                  <ContactPage />
                </Suspense>
              );
            }}
          ></Route>
          <Route
            path="/TaskDashboard"
            render={() => {
              return (
                <Suspense fallback={<Loading />}>
                  <TaskDashboardPage />
                </Suspense>
              );
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
