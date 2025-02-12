import ContectItems from "./ContectItems";
import "./ContectList.css";

const ContectList = ({ list, onDelete }) => {
  return (
    <div className="ContectList">
      <h2>Contact List</h2>
      {list.length > 0
        ? list.map((item) => {
            return <ContectItems key={item.id} {...item} onDelete={onDelete} />;
          })
        : null}
    </div>
  );
};

export default ContectList;
