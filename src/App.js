import './App.css';

import { useEffect, useState } from "react";
import axios from "axios";
import logo from "./assets/img/logo.png"
import headerImg from "./assets/img/header-image.png"
import image8 from "./assets/img/item-image-8.png"
import image1 from "./assets/img/item-image-1.png"

function App() {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log("on est ds le use effect")
    const fetchData = async () => {
      const response = await axios.get("https://deliveroo-backend-chenda.herokuapp.com/")
        .then(response => {
          console.log(response.data)
          return response.data
        })
        .then(data => {
          setData(data[0].name)
        })
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <div className="header">
        <div className="header-logo">
          <div className="header-center">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="infoRestaurant-center">
          <div className="infoRestaurant-texts">
            <h1>Le Pain Quotidien - Montorgueil</h1>
            <p>Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien propose des ingrédients simples et sains, du bon pain, des fruits et des légumes frais et de saison issus de l’agriculture biologique.</p>
          </div>
          <img src={headerImg} alt="picture information restaurant" />
        </div>
      </div>
      <div className="content">
        <div className="content-center">
          <div className="menu">
            <div className="menu-items">
              <h2>Brunchs</h2>
              <div className="menu-item">
                <div className="menu-item-card">
                  <div className="menu-item-card-text">
                    <h3>Brunch authentique 1 personne</h3>
                    <p>Assiette de jambon cuit, jambon fumeì, terrine, comté bio &</p>
                    <div className="menu-item-card-info">
                      <span className="price">25,00 €</span>
                      <span className="popular">
                        populaire</span>
                    </div>
                  </div>
                  <div className="menu-item-card-pic">
                    <img src={image8} />
                  </div>
                </div>
              </div>

              <div className="menu-item">
                <div className="menu-item-card">
                  <div className="menu-item-card-text">
                    <h3>Brunch vegan</h3>
                    <p>Falafels bio, houmous bio, avocat aux super graines bio, lentilles au</p>
                    <div className="menu-item-card-info">
                      <span className="price">25,00 €</span>
                      {/* <span className="popular">
                        populaire</span> */}
                    </div>
                  </div>
                  <div className="menu-item-card-pic">
                    <img src={image1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart">
            <p>le panier soon</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
