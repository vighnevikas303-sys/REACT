function Item1({ Todoname, Tododate }) {
  return (
    
    <div className="row">
      <div className="col-6">{Todoname}</div>
      <div className="col-4">{Tododate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger ">
          Delete
        </button>
      </div>
    </div>
  );
}
export default Item1;