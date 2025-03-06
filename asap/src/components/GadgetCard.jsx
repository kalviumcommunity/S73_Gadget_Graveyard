const GadgetCard = ({ name, category, condition, price }) => {
    return (
      <div className="p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">Category: {category}</p>
        <p className="text-gray-600">Condition: {condition}</p>
        <p className="text-green-500 font-semibold">${price}</p>
      </div>
    );
  };
  
  export default GadgetCard;
  