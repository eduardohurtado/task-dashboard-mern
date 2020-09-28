import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//API GraphQL with apollo client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//Global state Redux Sagas
import { Provider } from "react-redux";
import reducer from "./store/store";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchAll } from "./store/sagas/root.sagas";

//Middlewares
const apolloClient = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});
const sagaMiddleware = createSagaMiddleware();

//Create store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

//Call middlewares
sagaMiddleware.run(watchAll);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.querySelector(".root")
);
