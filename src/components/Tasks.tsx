import React, { Component } from "react";

//Global state REDUX
import { connect } from "react-redux";

//Components
import Task from "./Task";

//Interfaces
interface IProps {
  Redux: {
    id: number;
    title: string;
    description: string;
    done: boolean;
  }[];
}

interface IMapToProps {
  tasks: {
    id: number;
    title: string;
    description: string;
    done: boolean;
  }[];
}

class Tasks extends Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return this.props.Redux?.map((e) => <Task key={e.id} propTask={e} />);
  }
}

const mapStateToProps = (state: IMapToProps) => ({
  Redux: state.tasks,
});

export default connect(mapStateToProps, null)(Tasks);
