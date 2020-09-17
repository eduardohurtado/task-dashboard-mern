import { createStore } from "redux";
import Tasks from "../components/Tasks";

//Interfaces
interface IAppStateMongo {
  tasks: {
    id: string;
    title: string;
    description: string;
    done: boolean;
  }[];
}

interface IAction {
  type: string;
  id: string;
  title: string;
  description: string;
}

interface INewTask {
  id: string;
  title: string;
  description: string;
  done: boolean;
}

//Initial state from server
const initialStateMongo: IAppStateMongo = {
  tasks: [
    {
      id: "xoxo",
      title: "BUY GROCERIES",
      description: "Buy 2 eggs, 3 carrots and one liter of milk.",
      done: false,
    },
  ],
};

const reducer = (state = initialStateMongo, action: IAction) => {
  function renameKeys(e: any): any {
    // function to rename ID
    e = e.map((obj: any) => {
      obj["id"] = obj["_id"]; // Assign new key
      delete obj["_id"]; // Delete old key
      delete obj["__v"];
      return obj;
    });
    return e;
  }

  if (action.type === "UPDATE_TASKS_FROM_SERVER") {
    var taskFromMongo: any = [];
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((data) => {
        taskFromMongo = renameKeys(data);
        state.tasks = taskFromMongo; //NEED TO TRIGGER A RENDER
        console.log(state.tasks);
      });
  } else if (action.type === "TASK_TEXT_STYLE") {
    return {
      ...state,

      tasks: state.tasks.map((e) => {
        if (e.id === action.id) {
          e.done = !e.done;
        }
        return e;
      }),
    };
  } else if (action.type === "TASK_DELETE") {
    return {
      ...state,

      tasks: state.tasks.filter((e) => e.id !== action.id),
    };
  } else if (action.type === "ADD_NEW_TASK") {
    console.log("REDUX ADD TASK");
    if (action.title === "" || action.description === "") {
      console.log("FATAL ERROR: Task title or description is empty.");
    } else {
      const newTask: INewTask = {
        id: "xoxo",
        title: action.title,
        description: action.description,
        done: false,
      };
      //Save the new task to Mongo DB
      // fetch("/api/tasks", {
      //   method: "POST",
      //   body: JSON.stringify(newTask2),
      //   headers: {
      //     "Accept": "application/json",
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((res) => res.json())
      //   .then((data) => console.log(data))
      //   .catch((err) => console.log(err));

      return {
        ...state,

        tasks: [...state.tasks, newTask],
      };
    }
  }

  return state;
};

export default createStore(reducer);
