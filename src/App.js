import Header from "./Components/Header";
import "./App.css";
import MenuContainer from "./Components/MenuContainer";
import {
  HomeRounded,
  Chat,
  AccountBalanceWalletRounded,
  Favorite,
  SummarizeRounded,
  Settings,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import BannerName from "./Components/BannerName";
import SubMenuContainer from "./Components/SubMenuContainer";
import MenuCard from "./Components/MenuCard";
import { MenuItems, Items } from "./Components/Data.js";
import ItemCard from "./Components/ItemCard";
import DebitCard from "./Components/DebitCard";
import CartItem from "./Components/CartItem";
import { useStateValue } from "./Components/StateProvider";

function App() {
  const [isMainData, setMainData] = useState(
    Items.filter((e) => e.itemId === "burger01")
  );

  const [{ cart }] = useStateValue();

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData,cart]);

  const setData = (itemId) => {
    setMainData(Items.filter((e) => e.itemId === itemId));
  };

  return (
    <div className="App">
      {/*Header section*/}
      <Header />
      {/*Main container*/}
      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName name={"Nano"} discount={"20"} link={"#"} />
            <img
              src="https://www.pngmart.com/files/7/Delivery-PNG-Image.png"
              alt=""
              className="deliveryPic"
            />
          </div>
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className="rowContainer">
              {
                /** "https://recetashamburguesacasera.online/wp-content/uploads/2021/08/Fargo-Hamburguesa-1.png" **/
                MenuItems &&
                  MenuItems.map((data) => (
                    <div key={data.id} onClick={() => setData(data.itemId)}>
                      <MenuCard
                        imgSrc={data.imgSrc}
                        name={data.name}
                        isActive={data.id === "" ? true : false}
                      />
                    </div>
                  ))
              }
            </div>
            <div className="dishitemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

          {!cart ? (<div></div>) : (
          <div className="cartCheckOutContainer">
            <SubMenuContainer name={"Carts Items"} />
            <div className="cartContainer">
              <div className="cartItems">
                {
                  cart && cart.map((data)=>(
                    <CartItem
                      key={data.id}
                      itemId={data.id}
                      name={data.name}
                      imgSrc={data.imgSrc}
                      price={data.price}
                    />
                  ))
                }
              </div>
            </div>
            <div className="totalSection">
              <h3>Total</h3>
              <p>
                <span>$ </span>45.0
              </p>
            </div>
            <button className="checkOut">Check Out</button>
          </div>
          )}

        </div>
      </main>
      {/*Bottom menu*/}
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={"#"} icon={<HomeRounded />} isHome />
          <MenuContainer link={"#"} icon={<Chat />} />
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
          <MenuContainer link={"#"} icon={<Favorite />} />
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          <MenuContainer link={"#"} icon={<Settings />} />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
