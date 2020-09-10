import React, { Component } from "react";

//Global state REDUX
import { connect } from "react-redux";

//Style SCSS
import "../sass/task.scss";

//Internal CSS Style
const btnDelete = {
  background: "#e44336",
  color: "#FFF",
  border: "none",
  padding: "8px 20px",
  borderRadius: "20%",
  cursor: "pointer",
  fontSize: "10px",
};

//Interfaces
interface IProps {
  propTask: {
    id: number;
    title: string;
    description: string;
    done: boolean;
  };

  checkDoneRedux: (id: number) => void;
  deleteTaskRedux: (id: number) => void;
}

class Task extends Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  styleCompleted() {
    return {
      fontSize: "15px",
      padding: "5px",
      color: this.props.propTask.done ? "gray" : "white",
      textDecoration: this.props.propTask.done ? "line-through" : "none",
    };
  }

  componentDidMount() {}

  render() {
    let task = this.props.propTask;

    return (
      <div className="task">
        <p style={this.styleCompleted()}>
          {"Number: "}
          {task.id + 1}
          {" / "}
          {"Title: "}
          {task.title}
          <br />
          <br />
          <br />
          {task.description}
          <br />
          <br />
          {"Done: "}
          <input
            type="checkbox"
            onChange={() => {
              this.props.checkDoneRedux(task.id);
            }}
          />{" "}
          {"Delete: "}
          <button
            style={btnDelete}
            onClick={() => {
              this.props.deleteTaskRedux(task.id);
            }}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state: IProps) => ({
  //Passing the current state of "store.js" because
  Redux: state, //mapDispatchToProps don't work without
}); //define mapStateToProps.

const mapDispatchToProps = (dispatch: any) => ({
  checkDoneRedux(id: number) {
    dispatch({
      type: "TASK_TEXT_STYLE",
      id,
    });
  },

  deleteTaskRedux(id: number) {
    dispatch({
      type: "TASK_DELETE",
      id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
