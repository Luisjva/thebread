import { colors } from "../../../utils";
import Price from "../price";
import Language from "../language";
import { CartContext } from "../../../pages/_app";

import { useState, useEffect, useContext } from "react";

export default function PackHorizontal({ id, nombre, name, price, newAmount }) {
  const [amountCart, setAmountCart] = useState(0);

  const { cartPacks, setCartPacks } = useContext(CartContext);

  const tourCart = () => {
    for (let i = 0; i < cartPacks.length; i++) {
      if (cartPacks[i].id == id) {
        setAmountCart(cartPacks[i].newAmount);
      }
    }
  };

  useEffect(() => {
    if (newAmount) {
      setAmountCart(newAmount);
    } else {
      if (cartPacks[0] !== null) {
        tourCart();
      } else {
        setAmountCart(0);
      }
    }
  }, []);

  const addCart = (value) => {
    let newAmount = amountCart;
    let newCart;
    cartPacks == [] ? (newCart = []) : (newCart = cartPacks);

    setCartPacks([null]);

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
      setCartPacks(newCart);
    }, 200);
  };

  return (
    <div className="packs">
      <div className="pack__cart">
        <h3 className="pack__h3">
          <Language texto={nombre} text={name} />
        </h3>
        <Price fontSize={1.1} value={price} />
        <div className="pack__btn__container">
          {amountCart ? (
            <div className="pack__btn__amount">
              <button onClick={() => addCart("-")}>
                <span>-</span>
              </button>
              <span>{amountCart}</span>
              <button onClick={() => addCart("+")}>
                <span>+</span>
              </button>
            </div>
          ) : (
            <button className="pack__btn" onClick={() => addCart("+")}>
              <span>Agregar al carrito</span>
            </button>
          )}
        </div>
      </div>
      <style jsx>{`
        .pack__cart {
          align-items: center;
          background: ${colors.blanco}44;
          border-radius: 10px;
          border: 3px solid ${colors.vino};
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          height: auto;
          justify-content: center;
          margin: auto;
          padding: 0.5rem;
          width: 100%;

          backdrop-filter: blur(3px);
        }

        .pack__h3 {
          font-weight: 500;
          font-size: 1.25rem;
          margin-block-start: 0;
          margin-block-end: 0;
        }

        .pack__btn {
          background: linear-gradient(90deg, ${colors.vino}, ${colors.naranja});
          cursor: pointer;
          font-size: 1rem;
          border: none;
          border-radius: 10px;
          margin-top: 0.75rem;
          width: 150px;
          padding: 2px;
          height: 30px;
        }

        .pack__btn > span {
          background: #f3f3f3;
          border-radius: 8px;
          display: inline-block;
          font-weight: 500;
          padding: 0.3rem 0.09rem;
          transition: 0.3s;
          width: 100%;
          height: 100%;
        }

        .pack__btn:hover > span {
          background: #fff0;
          color: #fff;
        }

        .pack__btn__amount {
          align-items: center;
          width: 150px;
          display: flex;
          justify-content: space-between;
          margin-top: 0.75rem;
          margin: auto;
        }

        .pack__btn__amount > button {
          background: linear-gradient(90deg, ${colors.vino}, ${colors.naranja});
          border-radius: 10px;
          border: none;
          cursor: pointer;
          height: 30px;
          padding: 2px;
          width: 30px;
        }

        .pack__btn__amount > button > span {
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

        .pack__btn__amount > button:hover > span {
          background: #fff0;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
