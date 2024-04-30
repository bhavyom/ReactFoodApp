import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch?";
const API_KEY = "**PASTE-YOUR-API-KEY-HERE**";
export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function getFoodList() {
      let response = await fetch(`${URL}query=${query}&apiKey=${API_KEY}`);
      let data = await response.json();
      setFoodData(data.results);
    }
    getFoodList();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
