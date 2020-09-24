import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import Task from '../components/Task'

//Unit test
test("Test Jest Installed", () => {
  expect(true).toBeTruthy();
  // expect().toBeCalledTimes(2);
  // expect().toBeCalledWith(x,y);
  // const add = jest.fn(() => 3); //Mock function
});

//Integration test
test("App render", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Task />, div);
  ReactDOM.unmountComponentAtNode(div);
});
