import "./ContectItems.css";
const ContectItems = ({ id, name, email, onDelete }) => {
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

export default ContectItems;
