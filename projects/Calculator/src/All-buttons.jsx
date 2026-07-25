import './All-buttons.css';
const AllButtons=()=> {
  
   
      const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', 'x', 'C', '=', '0', '/','.','%'];
      return <>
      {
        buttons.map(buttons =>  <button type="button" class="btn btn-outline-info row1">{buttons}</button>)
      }
     
  </>
}
export default AllButtons;