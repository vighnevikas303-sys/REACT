import './App.css'
function Item()
{
    return  <>
    <h1 className='heading'>To-Do App</h1>
    <div class="row">
    
    <div  className="col-6"><input type="text" placeholder="Enter To Do Here" /></div>
    <div className="col-4"><input type="date" /></div>
    <div className="col-2  add">
      <button type="button" className="btn btn-success  ">Add</button>
      </div>
  </div>
  </>    
}
export default Item;