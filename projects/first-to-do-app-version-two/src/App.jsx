
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Item1 from './Addtodo';
import Item from './Todoitem';
import Todoitems from './Todoitems';


function App() {
 const todoitems=
 [{
    names:"Buy Milk",
    duedate:"16/07/2026",

  },
  {
     names:"Go to school",
    duedate:"17/07/2026",
  },
  {
      names:"Go to interview",
    duedate:"18/07/2026",
  },
    {
      names:"Go to learning",
    duedate:"24/07/2026",
  },
  
  
];


  

  return (
    <center className='to-do-container'>

    
 <div className="container text-center">

   <Item/>
 
   <Todoitems todoitems={todoitems}/>

  
</div>

      </center>
   

  )
}


export default App;
