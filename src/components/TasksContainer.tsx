import React, { Component } from "react";

//Loading
import ReactLoading from "react-loading";

//Global state REDUX
import { connect } from "react-redux";

//Components
import Tasks from "./Tasks";

//Style SCSS
import "../sass/tasksContainer.scss";

//Interfaces
interface IProps {
  Redux: any;
}

class TasksContainer extends Component<IProps, any, any> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className="tasksArea">
        <p>TODOS:</p>
        <div className="tasksArea__tasksContainer">
          <div id="lolz" className="center">
            {this.props.Redux.isLoading && (
              <ReactLoading
                type="bars"
                color="#55F"
                height={"20%"}
                width={"20%"}
              />
            )}
          </div>

          <Tasks />
        </div>
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

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);
