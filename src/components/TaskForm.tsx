import React, { Component } from "react";

//Style SCSS
import "../sass/taskForm.scss";

//Global state REDUX
import { connect } from "react-redux";
import { AnyAction } from "redux";

//Interfaces
interface IProps {
  tasks?: {
    id: string;
    title: string;
    description: string;
    done: boolean;
  };
  addTaskRedux: any;
}

interface IState {
  title: string;
  description: string;
}

interface ISubmitEvent {
  preventDefault: any;
}

interface IChangeEvent {
  target: HTMLInputElement | HTMLTextAreaElement;
}

class TaskForm extends Component<IProps, IState, AnyAction> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      title: "",
      description: "",
    };
  }

  onSubmit = (e: ISubmitEvent) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.description === "") {
      alert("Please, fill all the requested information.");
    } else {
      this.props.addTaskRedux(
        this.state.title.toUpperCase(),
        this.state.description
      );
      this.setState({
        title: "",
        description: "",
      });
    }
  };

  onChange = (e: IChangeEvent) => {
    const name: string = e.target.name;
    const value = e.target.value;
    //Asign the new valor everytime something is typed.
    this.setState({
      [name]: value,
    } as Pick<IState, keyof IState>);
  };

  render() {
    return (
      <div className="taskForm">
        <h1>Add a new task</h1>
        <p>Complete the requested information:</p>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Write the task title."
            maxLength={20}
            size={25}
            onChange={this.onChange}
            value={this.state.title}
          />{" "}
          <br />
          <br />
          <textarea
            name="description"
            placeholder="Write the task description."
            cols={30}
            rows={3}
            maxLength={40}
            style={{ resize: "none" }}
            onChange={this.onChange}
            value={this.state.description}
          ></textarea>
          <br />
          <button type="submit">Save task</button>
        </form>
      </div>
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
    addTaskRedux: (title: string, description: string) =>
      dispatch({ type: "ADD_NEW_TASK", title, description }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
