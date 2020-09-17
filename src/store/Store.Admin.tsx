import React, { Component } from "react";

//Global state REDUX
import { connect } from "react-redux";
import { AnyAction } from "redux";

//Interfaces
interface IProps {
  addTaskRedux: any;
}

interface IState {}

class StoreAdmin extends Component<IProps, IState, AnyAction> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("-STORE ADMIN READY-");
    // this.fetchTasks();
    this.props.addTaskRedux();
  }

  fetchTasks() {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state: IProps) => ({
  //Passing the current state of "store.js" because
  Redux: state, //mapDispatchToProps don't work without
}); //define mapStateToProps.

const mapDispatchToProps = (dispatch: any) => ({
  addTaskRedux() {
    dispatch({
      type: "UPDATE_TASKS_FROM_SERVER",
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreAdmin);
