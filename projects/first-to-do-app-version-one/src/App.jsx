
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Item1 from "./Todoitem1";
import Item2 from "./Todoitem2";  
import Item from "./Todoitem";

function App() {
  

  return (
    <center class='to-do-container'>

    
 <div class="container text-center">

   <Item/>
   <Item1/>
   <Item2/>
  
</div>

      </center>
   

  )
}


export default App;
