import './App.css';

import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log("on est ds le use effect")
    const fetchData = async () => {
      const response = await axios.get("https://deliveroo-backend-chenda.herokuapp.com/")
      // console.log(response.data.restaurant.categories)
      setData(response.data);
      setIsLoading(false);
    }
    fetchData()
  }, []);

  return (
    isLoading === true ? (
      <span>En cours de chargement... </span>
    ) : (
      <h2>{data.restaurant.name}</h2>
    )
  )
}
export default App;
