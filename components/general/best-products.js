import { useEffect, useState, useContext } from "react";

import Language from "./language";
import Product from "./product";
import { ProductsContext } from "../../pages/_app";

let containerProducts;

export default function BestProducts() {
  const [touchScreen, setTouchScreen] = useState(undefined);
  const [moveSliderLeft, setMoveSliderLeft] = useState(false);
  const [moveSliderRight, setMoveSliderRight] = useState(true);
  const [bestProducts, setBestProducts] = useState([]);

  const { products } = useContext(ProductsContext);

  useEffect(() => {
    setTouchScreen(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
    );
  }, []);

  useEffect(() => {
    if (products) {
      let listProducts = [];

      products.map((product) => {
        if (product.OUTSTANDING === "Y") {
          listProducts.push(product);
        }
      });
      setBestProducts(listProducts);
    }
  }, [products]);

  const move = (e) => {
    containerProducts = document.querySelector(".best__products__container");
    let scrollNow = containerProducts.scrollLeft;
    let widthContainerProducts = containerProducts.clientWidth;
    let scrollContainerProducts = containerProducts.scrollWidth;

    if (e.target.innerText === ">") {
      containerProducts.scroll(scrollNow + widthContainerProducts * 0.8, 0);
      let newMoveSliderLeft = moveSliderLeft;
      let newMoveSliderRight = moveSliderRight;

      if (!moveSliderLeft) newMoveSliderLeft = true;

      setTimeout(() => {
        scrollNow = containerProducts.scrollLeft;

        if (scrollNow + widthContainerProducts >= scrollContainerProducts) {
          newMoveSliderRight = false;
        } else {
          newMoveSliderRight = true;
        }

        setMoveSliderLeft(newMoveSliderLeft);
        setMoveSliderRight(newMoveSliderRight);
      }, 500);
    } else {
      containerProducts.scroll(scrollNow - widthContainerProducts * 0.8, 0);
      let newMoveSliderLeft = moveSliderLeft;
      let newMoveSliderRight = moveSliderRight;

      if (!moveSliderRight) newMoveSliderRight = true;

      setTimeout(() => {
        scrollNow = containerProducts.scrollLeft;

        if (scrollNow === 0) {
          newMoveSliderLeft = false;
        } else {
          newMoveSliderLeft = true;
        }

        setMoveSliderLeft(newMoveSliderLeft);
        setMoveSliderRight(newMoveSliderRight);
      }, 500);
    }
  };

  return (
    <div className="responsive best__container">
      <div className="best__container__describe">
        <h2>
          <Language text="Featured Products" texto="Productos Destacados" />
        </h2>

        <p className="best__container__describe__text">
          <Language
            text="Discover the most requested by our customers around the world."
            texto="Descubre lo más pedido por nuestros clientes de todo el mundo."
          />
        </p>
      </div>

      <div className="best__container__products">
        <div
          className={
            touchScreen
              ? "best__products__arow__container best__products__arow__container--unseen"
              : "best__products__arow__container"
          }
        >
          <button
            style={{ left: 0 }}
            className={
              moveSliderLeft
                ? "best__products__arow"
                : "best__products__arow best__products__arow--unseen"
            }
            onClick={(e) => {
              move(e);
            }}
          >
            &#60;
          </button>
          <button
            style={{ right: 0 }}
            className={
              moveSliderRight
                ? "best__products__arow"
                : "best__products__arow best__products__arow--unseen"
            }
            onClick={(e) => {
              move(e);
            }}
          >
            &#62;
          </button>
        </div>

        <div
          className={
            touchScreen
              ? "best__products__container"
              : "best__products__container best__products__container__pc"
          }
        >
          {bestProducts.map((product, index) => {
            return (
              <Product
                key={index}
                nombre={product.NOMBRE}
                name={product.NAME}
                price={product.PRICE}
                img={product.PHOTO}
              />
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .best__container {
          padding-bottom: 1.5rem;
        }

        .best__container__describe {
          text-align: center;
        }

        .best__container__describe__text {
          margin-bottom: 2rem;
        }

        .best__products__container {
          display: grid;
          gap: 1rem;
          grid-auto-columns: 175px;
          grid-auto-flow: column;
          overflow-x: auto;
          overflow-y: hidden;
        }

        .best__products__container__pc {
          overflow-x: hidden;
          margin: 0 3rem;
        }

        .best__products__arow__container {
          position: relative;
        }

        .best__products__arow__container--unseen {
          display: none;
        }

        .best__products__arow {
          background: none;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-size: 1.5rem;
          padding: 0.3em 0.6em;
          position: absolute;
          transition: 0.3s;
          top: 125px;
          outline: none;
        }

        .best__products__arow--unseen {
          display: none;
        }

        @media screen and (min-width: 700px) {
          .best__container {
            display: grid;
            grid-template-columns: 1fr auto;
          }

          .best__container__describe {
            text-align: left;
          }

          .best__container__products {
            max-width: 800px;
            width: 60vw;
          }
        }
      `}</style>
    </div>
  );
}
