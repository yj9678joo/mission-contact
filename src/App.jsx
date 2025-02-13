import "./App.css";
import { useState, useReducer, useRef, createContext, useMemo } from "react";
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

export const ListContext = createContext();
export const HandlerContext = createContext();

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

  const memorizedHandlers = useMemo(
    () => ({
      onCreate,
      onDelete,
    }),
    []
  );

  return (
    <div className="App">
      <h1>Contact List</h1>
      <ListContext.Provider value={list}>
        <HandlerContext.Provider value={memorizedHandlers}>
          <ContectEditor />
          <ContectList />
        </HandlerContext.Provider>
      </ListContext.Provider>
    </div>
  );
}

export default App;
