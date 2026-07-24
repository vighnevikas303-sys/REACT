import Item1 from "./Addtodo";

const Todoitems = ({ todoitems }) => {
  return (
    <>
      <div className="items-container">
        {todoitems.map((item) => (
          <Item1
            Todoname={item.names}
            Tododate={item.duedate}
          />
        ))}
      </div>
    </>
  );
};

export default Todoitems;