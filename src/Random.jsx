function Randomf() {
  let number = Math.random() * 10;
  return <h1 style={{color:"#328463"}} >Random number is : {Math.round(number)}</h1>
}
export default Randomf;