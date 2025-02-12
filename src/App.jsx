import "./App.css";
import { useState, useReducer, useRef } from "react";
import ContectEditor from "./component/ContectEditor";
import ContectList from "./component/ContectList";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const idRef = useRef(0);
  const [list, dispatch] = useReducer(reducer, []);

  const onCreate = (input) => {
    dispatch({
      type: "CREATE",
      data: {
        ...input,
        id: idRef.current++,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      targetId: id,
    });
  };

  return (
    <div className="App">
      <h1>Contact List</h1>
      <ContectEditor onCreate={onCreate} />
      <ContectList list={list} onDelete={onDelete} />
    </div>
  );
}

export default App;
