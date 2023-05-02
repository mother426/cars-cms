import { useSelector } from "react-redux";

function CarList() {
  const cars = useSelector((state) => {
    return state.cars.collection;
  }); 

  return <div>CarList</div>;
}

export default CarList;
