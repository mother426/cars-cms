import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(({ cars: { collection, searchTerm } }) => {
    return collection.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // const cars = useSelector((state) => {
  //   console.log(state.cars.collection)
  //   return state.cars.collection;
  // });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const carData = cars.map((car) => {
    return (
      <div key={car.id}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {carData}
      <hr />
    </div>
  );
}

export default CarList;
