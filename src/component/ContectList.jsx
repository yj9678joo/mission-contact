import ContectItems from "./ContectItems";
import "./ContectList.css";
import { ListContext } from "../App";
import { useContext } from "react";

const ContectList = () => {
  const list = useContext(ListContext);

  return (
    <div className="ContectList">
      <h2>Contact List</h2>
      {list.length > 0
        ? list.map((item) => {
            return <ContectItems key={item.id} {...item} />;
          })
        : null}
    </div>
  );
};

export default ContectList;
