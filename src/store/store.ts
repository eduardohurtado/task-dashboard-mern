import { createStore } from "redux";

//Interfaces
export interface IAppState {
  tasks: {
    id: number;
    title: string;
    description: string;
    done: boolean;
  }[];
}

interface IAction {
  type: string;
  id: number;
  title: string;
  description: string;
}

interface INewTask {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

interface INewTask2 {
  title: string;
  description: string;
  done: boolean;
}

//Initial state
const initialState: IAppState = {
  tasks: [
    {
      id: 0,
      title: "BUY GROCERIES",
      description: "Buy 2 eggs, 3 carrots and one liter of milk.",
      done: false,
    },
    {
      id: 1,
      title: "CALL MOM :)",
      description: "Don't forget to call mom at 14:00h.",
      done: false,
    },
    {
      id: 2,
      title: "FINISH THE ESSAY",
      description: "Collect the remaining information.",
      done: false,
    },
  ],
};

const reducer = (state = initialState, action: IAction) => {
  function findFreeId(): number {
    var idFree = 0;
    var flag = false; //This flag controls if the id is taked by another component.
    var arrayTaskIdRedux = [];

    function checkIdIsFree(id: number) {
      return id !== idFree;
    }

    for (let i = 0; i < state.tasks.length; i++) {
      arrayTaskIdRedux[i] = state.tasks[i].id;
    }

    do {
      flag = arrayTaskIdRedux.every(checkIdIsFree);
      if (flag === false) {
        idFree += 1;
      }
    } while (flag === false);
    flag = false;
    return idFree;
  }

  if (action.type === "TASK_TEXT_STYLE") {
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
        id: findFreeId(),
        title: action.title,
        description: action.description,
        done: false,
      };

      const newTask2: INewTask2 = {
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
