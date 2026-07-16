
function App() {
  

  return (
    <center class='to-do-container'>
      <h1>Todo-App</h1>
    
 <div class="container text-center">

  <div class="row">
    
    <div  class="col-6"><input type="text" placeholder="Enter To Do Here" /></div>
    <div class="col-4"><input type="date" /></div>
    <div class="col-2"><button type="button" class="btn btn-success">Add</button></div>
  </div>

 <div class="row">
    
    <div  class="col-6">Buy Milk</div>
    <div class="col-4">16/07/2026</div>
    <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>
   <div class="row">
    
    <div  class="col-6">Go To College</div>
    <div class="col-4">17/07/2026</div>
    <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>
</div>
      </center>
  )
}

export default App
