import { CartContext } from "../../../pages/_app";
import Language from "../language";
import { colors } from "../../../utils";
import ProductHorizontal from "../product-horizontal";
import PackHorizontal from "../packs/pack-horizontal";

import Link from "next/link";
import { useContext } from "react";

export default function NavCarrito({ visible, setVisible }) {
  const { cartProducts, setCartProducts, cartPacks, setCartPacks } =
    useContext(CartContext);

  return (
    <div
      className={
        visible == "cart"
          ? "nav__cart__list nav__cart__list--visible"
          : "nav__cart__list"
      }
    >
      {cartProducts != null &&
        cartPacks != null &&
        cartProducts.length == 0 &&
        cartPacks.length == 0 && (
          <div className="nav__cart__list__none">
            <p>
              <Language
                texto="No tiene productos en el carrito"
                text="It does not have products in the cart"
              />
            </p>
            <Link href="/store">
              <a onClick={() => setVisible(false)}>
                <Language
                  texto="Ver todos los productos"
                  text="See all products"
                />
              </a>
            </Link>
          </div>
        )}

      {cartPacks != null && cartPacks.length > 0 && (
        <div>
          <p>
            <Language
              texto="Paquetes agregados en el carrito:"
              text="Packages added in the cart:"
            />
          </p>
          <ul>
            {cartPacks[0] != null &&
              cartPacks.map((pack) => {
                return (
                  <li key={pack.id}>
                    <PackHorizontal
                      id={pack.id}
                      nombre={pack.titulo}
                      name={pack.title}
                      price={pack.price}
                      newAmount={pack.newAmount}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      )}

      {cartProducts != null && cartProducts.length > 0 && (
        <div>
          <p>
            <Language
              texto="Productos agregados en el carrito:"
              text="Products added in the cart:"
            />
          </p>
          <ul>
            {cartProducts[0] != null &&
              cartProducts.map((product) => {
                return (
                  <li key={product.id}>
                    <ProductHorizontal
                      id={product.id}
                      nombre={product.nombre}
                      name={product.name}
                      price={product.price}
                      img={product.img}
                      newAmount={product.newAmount}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      )}
      <style jsx>{`
        .nav__cart__list {
          background: #fffa;
          border-radius: 15px;
          box-shadow: 3px 3px 10px #0002;
          max-height: 80vh;
          max-width: 560px;
          padding: 1rem;
          position: fixed;
          right: 5%;
          text-align: center;
          top: -100vh;
          transition: 1s;
          width: 90%;
          z-index: 200;
          overflow-y: auto;

          backdrop-filter: blur(5px);
        }

        .nav__cart__list--visible {
          top: 4.25rem;
        }

        .nav__cart__list__none {
          align-items: center;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
          margin: 1rem auto;
          width: 100%;
        }

        .nav__cart__list__none > a {
          background: linear-gradient(90deg, ${colors.vino}, ${colors.naranja});
          border-radius: 10px;
          color: #fff;
          padding: 0.5rem 0.7rem;
        }

        ul {
          gap: 1rem;
          display: flex;
          flex-direction: column;
          list-style-type: none;
          padding-inline-start: 0;
        }

        @media screen and (min-width: 1500px) {
          .nav__cart__list {
            right: 15%;
          }
        }
      `}</style>
    </div>
  );
}
