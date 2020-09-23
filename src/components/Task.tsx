import React, { Component } from "react";
import $ from "jquery";

//Global state REDUX
import { connect } from "react-redux";

//Style SCSS
import "../sass/task.scss";

//Internal CSS Style
const styles = {
  background: "#D35",
  color: "#FFF",
  border: "none",
  padding: "6px 15px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "18px",
  marginLeft: "10px",
};

const doneTextStyle = {
  display: "inline",
  fontSize: "20px",
  marginRight: "10px",
};

//Interfaces
interface IProps {
  propTask: {
    id: string;
    title: string;
    description: string;
    done: boolean;
  };

  checkDoneRedux: (
    id: string,
    title: string,
    description: string,
    done: boolean
  ) => void;
  deleteTaskRedux: (id: string) => void;
}

class Task extends Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  styleCompleted() {
    return {
      fontSize: "16px",
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
          {/* {"ID: "}
          {task.id}
          {" / "} */}
          {/* {"Title: "} */}
          {task.title}
          <br />
          <br />
          <br />
          {task.description}
          <br />
          <br />
          <p style={doneTextStyle}>Done:</p>

          <input
            type="checkbox"
            checked={task.done}
            onChange={() => {
              this.props.checkDoneRedux(
                task.id,
                task.title,
                task.description,
                task.done
              );
              console.log(`Task title: ${task.title}`);
              console.log(`Task description: ${task.description}`);
              console.log(`Task done: ${task.done}`);
            }}
          />
          <button
            style={styles}
            onClick={() => {
              if (confirm("¿Are you sure to delete the task?")) {
                this.props.deleteTaskRedux(task.id);
              }
            }}
          >
            <img
              alt="Dust-Bin"
              src="https://live.staticflickr.com/65535/50372929266_ff2242337c_o.png"
              width="16px"
              height="16px"
            ></img>
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
  checkDoneRedux(
    id: string,
    title: string,
    description: string,
    done: boolean
  ) {
    dispatch({
      type: "TASK_DONE",
      id,
      title,
      description,
      done,
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
