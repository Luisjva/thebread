import { colors } from "../../../utils";
import Price from "../price";
import Language from "../language";
import { CartContext } from "../../../pages/_app";

import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function Pack({
  id,
  title,
  titulo,
  price,
  description,
  descripcion,
  includes,
  incluye,
  textInclude,
  textoIncluir,
  link,
  newAmount,
}) {
  const router = useRouter();

  const [amountCart, setAmountCart] = useState(0);

  const { cartPacks, setCartPacks } = useContext(CartContext);

  const linkOrCart = () => {
    if (link) {
      router.push(link);
    } else {
      addCart("+");
    }
  };

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
      newCart.push({ id, title, titulo, price, includes, incluye, newAmount });
      setAmountCart(newAmount);
    } else {
      setAmountCart(0);
    }
    setTimeout(() => {
      setCartPacks(newCart);
      console.log(newCart);
    }, 200);
  };

  return (
    <div className="pack">
      <h3>
        <Language text={title} texto={titulo} />
      </h3>
      {price && <Price fontSize={4} value={price} />}
      <p>
        <Language text={description} texto={descripcion} />
      </p>
      <p>
        <Language text={textInclude} texto={textoIncluir} />:
      </p>
      <ul>
        {includes.map((include, index) => {
          return (
            <li className={index != 0 && "pack__li--border-top"} key={index}>
              <Language text={include} texto={incluye[index]} />
            </li>
          );
        })}
      </ul>

      {amountCart == 0 ? (
        <button onClick={() => linkOrCart()}>
          {!link ? "Agregar al carrito" : "Ver los paquetes"}
        </button>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "50%",
          }}
        >
          <button onClick={() => addCart("-")}>-</button>
          <span>{amountCart}</span>
          <button onClick={() => addCart("+")}>+</button>
        </div>
      )}
      <style jsx>{`
        .pack {
          align-items: center;
          background: #fff0;
          border: 5px solid ${colors.vino};
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 1rem auto;
          max-width: 350px;
          padding-bottom: 3rem;
          padding: 1.5rem;

          backdrop-filter: blur(5px);
        }

        p {
          text-align: center;
        }

        .pack ul {
          display: grid;
          gap: 3px;
          grid-template-columns: 1fr;
          list-style-type: none;
          margin-bottom: 2rem;
          padding-inline-start: 0;
          padding: 0;
          text-align: left;
          width: 80%;
        }

        .pack li {
          text-align: center;
          width: 100%;
          padding: 0.5rem 0;
        }

        .pack__li--border-top {
          border-top: 3px solid ${colors.blanco};
        }

        .pack button {
          background: linear-gradient(90deg, ${colors.vino}, ${colors.naranja});
          border: none;
          border-radius: 10px;
          color: #fff;
          font-size: 1rem;
          font-weight: 300;
          padding: 0.5rem 0.6rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: auto;
          min-width: 35px;
        }

        @media screen and (min-width: 500px) {
          .pack ul {
            margin: 0 10px 2rem 10px;
          }
        }
      `}</style>
    </div>
  );
}
