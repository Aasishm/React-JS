import { useState } from "react";
import Header from "./Components/Layout/Header";
import Modal from "./Components/Layout/Modal";
import Meals from "./Components/Meals/Meals";
import MealsSummary from "./Components/Meals/MealsSummary";

function App() {

  const [clicked, setClicked] = useState(false);

  const cartHandler = () => setClicked(!clicked);

  return (
    <>
      {clicked && <Modal onCancel={cartHandler}/>}
      <Header onClick={cartHandler}/>
      <MealsSummary />
      <Meals />
    </>
  );
}

export default App;
