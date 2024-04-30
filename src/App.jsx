import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div>
      <Search setFoodData={setFoodData} />
      {foodData.map((item) => (
        <li>{item.title}</li>
      ))}
    </div>
  );
}

export default App;
