import "./ContectItems.css";
import { memo, useContext } from "react";
import { HandlerContext } from "../App";

const ContectItems = ({ id, name, email }) => {
  const { onDelete } = useContext(HandlerContext);
  const onClick = () => {
    onDelete(id);
  };

  return (
    <div className="ContectItems">
      <div className="name">{name}</div>
      <div className="email">{email}</div>
      <button onClick={onClick}>🗑️ Remove</button>
    </div>
  );
};

export default memo(ContectItems);
