import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => {
    return state.cars.collection;
  });

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
