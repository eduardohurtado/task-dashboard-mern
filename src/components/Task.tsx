import React, { Component } from "react";

//Global state REDUX
import { connect } from "react-redux";

//Style SCSS
import "../sass/task.scss";

//Internal CSS Style
const styles = {
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
    id: string;
    title: string;
    description: string;
    done: boolean;
  };

  checkDoneRedux: (id: string) => void;
  deleteTaskRedux: (id: string) => void;
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

  render() {
    let task = this.props.propTask;

    return (
      <div className="task">
        <p style={this.styleCompleted()}>
          {"ID: "}
          {task.id}
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
            style={styles}
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
  checkDoneRedux(id: string) {
    dispatch({
      type: "TASK_TEXT_STYLE",
      id,
    });
  },

  deleteTaskRedux(id: string) {
    dispatch({
      type: "TASK_DELETE",
      id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
