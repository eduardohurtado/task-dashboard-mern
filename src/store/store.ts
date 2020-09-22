//Interfaces
interface IAppStateMongo {
  tasks: {
    id: string;
    title: string;
    description: string;
    done: boolean;
  }[];
  isLoading: boolean;
}

interface IAction {
  type: string;
  id: string;
  title: string;
  description: string;
  payload: any;
}

//APP default initial state
const initialStateMongo: IAppStateMongo = {
  tasks: [],
  isLoading: true,
};

const reducer = (state = initialStateMongo, action: IAction) => {
  if (action.type === "DOWNLOAD_TASKS_MONGO_ASYNC") {
    return {
      ...state,

      tasks: action.payload,
      isLoading: false,
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
  } else if (action.type === "TASK_DELETE_ASYNC") {
    console.log("Task deleted from server:", action.id);
  }

  return state;
};

export default reducer;
