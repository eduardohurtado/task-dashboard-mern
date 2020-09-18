import { takeLatest, all, put } from "redux-saga/effects";

//Interfaces
interface IAction {
  type: string;
  id: string;
  title: string;
  description: string;
  payload: any[];
}

interface INewTask {
  title: string;
  description: string;
  done: boolean;
}

function renameKeys(e: any): any {
  // function to rename ID
  e = e.map((obj: any) => {
    obj["id"] = obj["_id"]; //Assign new key
    delete obj["_id"]; //Delete old key
    delete obj["__v"]; //Delete useless key
    return obj;
  });
  return e;
}

function* downloadTasksAsync() {
  var payload: any[] = [];
  yield fetch("/api/tasks")
    .then((res) => res.json())
    .then((data) => {
      payload = renameKeys(data);
      console.log("DATA FOM MONGO DB SERVER");
      console.log(payload);
    });

  yield put({ type: "DOWNLOAD_TASKS_MONGO_ASYNC", payload });
}

function* addTaskReduxAsync(action: IAction) {
  console.log("Task to be saved in Mongo DB: ");
  console.log(action);

  let newTask: INewTask = {
    title: action.title,
    description: action.description,
    done: false,
  };
  //Save the new task to Mongo DB
  yield fetch("/api/tasks", {
    method: "POST",
    body: JSON.stringify(newTask),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  yield downloadTasksAsync();
}

export function* watchAll() {
  yield all([
    takeLatest("DOWNLOAD_TASKS_MONGO", downloadTasksAsync),
    takeLatest("ADD_NEW_TASK", addTaskReduxAsync),
  ]);
}
