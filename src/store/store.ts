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
  payload: any;
}

interface INewTask {
  id: string;
  title: string;
  description: string;
  done: boolean;
}

//APP default initial state
const initialStateMongo: IAppStateMongo = {
  tasks: [
    {
      id: "1",
      title: "DOWNLOADING TASKS FROM MONGO DB",
      description: "The software is loading...",
      done: false,
    },
    {
      id: "2",
      title: "DOWNLOADING TASKS FROM MONGO DB",
      description: "The software is loading...",
      done: false,
    },
  ],
};

const reducer = (state = initialStateMongo, action: IAction) => {
  if (action.type === "DOWNLOAD_TASKS_MONGO_ASYNC") {
    return {
      ...state,

      tasks: action.payload,
    };
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
  }

  return state;
};

export default reducer;
