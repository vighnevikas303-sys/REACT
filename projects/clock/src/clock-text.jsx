function Text(){
     const now=new Date();
  return <div>
 
   <p>This is the clock that shows the time in Bharat at all times </p>
  <p>This is the Current time:{now.toLocaleDateString()}-{now.toLocaleTimeString()}</p>    
  </div>

}
export default Text;