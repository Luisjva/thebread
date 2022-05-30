import { colors } from "../../utils";
import Price from "./price";
import Language from "./language";
import { CartContext } from "../../pages/_app";

import { useState, useEffect, useContext } from "react";

let content;

export default function ProductHorizontal({
  id,
  nombre,
  name,
  price,
  img,
  newAmount,
}) {
  const [width, setWidth] = useState(100);
  const [amountCart, setAmountCart] = useState(0);

  const { cartProducts, setCartProducts } = useContext(CartContext);

  const tourCart = () => {
    for (let i = 0; i < cartProducts.length; i++) {
      if (cartProducts[i].id == id) {
        setAmountCart(cartProducts[i].newAmount);
      }
    }
  };

  useEffect(() => {
    content = document.querySelector(".product__cart");
    setWidth(content.clientHeight);
    window.addEventListener("resize", () => {
      content = document.querySelector(".product__cart");
      setWidth(content.clientHeight);
    });

    /* */
    if (newAmount) {
      setAmountCart(newAmount);
    } else {
      if (cartProducts[0] !== null) {
        tourCart();
      } else {
        setAmountCart(0);
      }
    }
  }, []);

  const addCart = (value) => {
    let newAmount = amountCart;
    let newCart;
    cartProducts == [] ? (newCart = []) : (newCart = cartProducts);

    setCartProducts([null]);

    if (value == "+") {
      newAmount = newAmount + 1;
    } else if (newAmount != 0) {
      newAmount = newAmount - 1;
    }

    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id == id) {
        newCart.splice(i, 1);
      }
    }

    if (newAmount != 0) {
      newCart.push({ id, name, nombre, img, price, newAmount });
      setAmountCart(newAmount);
    } else {
      setAmountCart(0);
    }
    setTimeout(() => {
      setCartProducts(newCart);
    }, 200);
  };

  return (
    <div className="products">
      <div className="product__cart">
        <div className="product__img"></div>
        <h3>
          <Language texto={nombre} text={name} />
        </h3>
        <div className="product__price">
          <Price fontSize={1.1} value={price} />
        </div>
        <div className="product__btn__container">
          {amountCart ? (
            <div className="product__btn__amount">
              <button onClick={() => addCart("-")}>
                <span>-</span>
              </button>
              <span>{amountCart}</span>
              <button onClick={() => addCart("+")}>
                <span>+</span>
              </button>
            </div>
          ) : (
            <button className="product__btn" onClick={() => addCart("+")}>
              <span>Agregar al carrito</span>
            </button>
          )}
        </div>
      </div>
      <style jsx>{`
        .product__cart {
          background: ${colors.blanco}44;
          border-radius: 10px;
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-template-areas:
            "img name"
            "img price"
            "img btn";
          height: auto;
          justify-content: flex-start;
          margin: auto;
          text-align: left;
          width: 100%;

          backdrop-filter: blur(3px);
        }

        .pack {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas:
            "name"
            "price"
            "btn";
          text-align: center;
        }

        .product h3 {
          font-weight: 500;
          font-size: 1.25rem;
          grid-area: name;
          margin-block-start: 0.75em;
          margin-block-end: 0.5em;
        }

        .product__img {
          background: url("${(document.domain == "localhost"
            ? `http://localhost:9000`
            : "https://thebreadimg.herokuapp.com") + `/static${img}`}");
          background-size: cover;
          background-position: center;
          border-radius: 10px;
          grid-area: img;
          margin-right: 1.5rem;
          height: ${width}px;
          width: ${width}px;
        }

        .product__price {
          grid-area: price;
        }

        .product__btn {
          background: linear-gradient(90deg, ${colors.vino}, ${colors.naranja});
          cursor: pointer;
          font-size: 1rem;
          border: none;
          border-radius: 10px;
          grid-area: btn;
          margin-top: 0.75rem;
          width: ${width}px;
          padding: 2px;
          height: 30px;
        }

        .product__btn > span {
          background: #f3f3f3;
          border-radius: 8px;
          display: inline-block;
          font-weight: 500;
          padding: 0.3rem 0.09rem;
          transition: 0.3s;
          width: 100%;
          height: 100%;
        }

        .product__btn:hover > span {
          background: #fff0;
          color: #fff;
        }

        .product__btn__amount {
          align-items: center;
          width: ${width}px;
          display: flex;
          justify-content: space-between;
          margin-top: 0.75rem;
          margin: auto;
        }

        .product__btn__amount > button {
          background: linear-gradient(90deg, ${colors.vino}, ${colors.naranja});
          border-radius: 10px;
          border: none;
          cursor: pointer;
          height: 30px;
          padding: 2px;
          width: 30px;
        }

        .product__btn__amount > button > span {
          background: #f3f3f3;
          border-radius: 8px;
          display: inline-block;
          font-size: 1.3rem;
          font-weight: 500;
          padding: 0.1rem 0.09rem;
          transition: 0.3s;
          width: 100%;
          height: 100%;
        }

        .product__btn__amount > button:hover > span {
          background: #fff0;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
