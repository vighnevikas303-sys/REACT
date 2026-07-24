const Items=() => {
    const foodItems = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'];
    return<>
     {
        foodItems.map((item) => <ul className="list-group">
  <li className="list-group-item">{item}</li>
  
</ul>)
     }
    </>
}
export default Items;