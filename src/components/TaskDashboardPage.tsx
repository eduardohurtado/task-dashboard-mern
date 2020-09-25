import React, { Component, Suspense } from "react";

//Lazy load components
import Loading from "./Loading";
const TasksContainer = React.lazy(() => import("./TasksContainer"));
const TaskForm = React.lazy(() => import("./TaskForm"));

//Style SCSS
import "../sass/taskDashboardPage.scss";

export default class TaskDashboardPage extends Component {
  render() {
    return (
      <div className="taskDashboardPage">
        <Suspense fallback={<Loading />}>
          <TaskForm />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <TasksContainer />
        </Suspense>
      </div>
    );
  }
}
