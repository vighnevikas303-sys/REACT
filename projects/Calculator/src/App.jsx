import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Display from './Display';
import AllButtons from './All-buttons';
function Add() {
  return <>
    <center>
       <h1 className='heading'>Calculator</h1>
      <div className='calculator'>
        <Display />
        <AllButtons />

      </div>

    </center>
  </>

}
export default Add;