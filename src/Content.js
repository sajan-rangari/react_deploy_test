import ItemList from "./ItemList";
const Content = ({ items, handleCheck, handleDelete }) => {
  // const [name, setName]=useState("Sajan");
  // const [count , setCount]=useState(0);
  // const handleNameChange = () => {
  //   const names = ["Ram", "Shayam", "Raju"];
  //   const index = Math.floor(Math.random() * 3);
  //   setName(names[index]);
  // };

  // const handleClick = () => {
  //   setCount(count+1);
  //   setCount(count+1);
  //   console.log(count)
  // };
  // const handleClick2 = (name) => {
  //   console.log(count)
  //   // console.log(`${name} was clicked!`);
  // };
  // const handleClick3 = (e) => {
  //   console.log(e.target);
  // };

  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}

      {/* <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Print count</button>
      <button onClick={()=>handleClick2('Sajan')}>Click It</button> 
       <button onClick={(e)=>handleClick3(e)}>Click It</button> */}
    </>
  );
};

export default Content;
