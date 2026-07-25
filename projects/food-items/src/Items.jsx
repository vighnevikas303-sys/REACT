const Items = ({ item }) => {
    return (
        <ul className="list-group">
            {item.map((food) => (
                <li className="list-group-item d-flex justify-content-between">
                    <span>{food}</span>

                    <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => console.log(`${food} being bought`)}
                    >
                        Buy
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Items;