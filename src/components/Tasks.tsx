import React, { Component, InsHTMLAttributes } from "react";

//Global state REDUX
import { connect } from "react-redux";

//Components
import Task from "./Task";

//Interfaces
interface IProps {
  tasks?: {
    id: string;
    title: string;
    description: string;
    done: boolean;
  };
  Redux?: [];
}

class Tasks extends Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return this.props.Redux?.map((e: any) => <Task key={e.id} propTask={e} />);
  }
}

const mapStateToProps = (state: IProps) => ({
  Redux: state.tasks,
});

export default connect(mapStateToProps, null)(Tasks);
