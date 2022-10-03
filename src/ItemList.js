import ListItem from "./LineItem";

const itemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem
          key={item.id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          item={item}
        />
      ))}
    </ul>
  );
};

export default itemList;
