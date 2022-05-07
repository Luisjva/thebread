import { useEffect, useState } from "react";

import Language from "./language";
import Product from "./product";

let containerProducts;

export default function BestProducts() {
  const [touchScreen, setTouchScreen] = useState(undefined);
  const [moveSliderLeft, setMoveSliderLeft] = useState(false);
  const [moveSliderRight, setMoveSliderRight] = useState(true);
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    setTouchScreen(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
    );

    let listFoods = [[], [], [], [], [], [], [], [], [], [], []];
    setBestProducts(listFoods);
  }, []);

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
      <h2>
        <Language text="Best products" texto="Mejores productos" />
      </h2>

      <p>
        Manolo, cual de los dos te gusta mas, o si tienes una idea de uno
        diferente o union de caracteristicas de ambos dime flaco
      </p>

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
          return <Product />;
        })}
      </div>

      <style jsx>{`
        .best__container {
          padding: 0.5rem;
          padding-bottom: 1.5rem;
        }

        h2 {
          text-align: center;
        }

        .best__products__container {
          display: grid;
          grid-auto-flow: column;
          overflow-x: auto;
          overflow-y: hidden;
          gap: 1rem;
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
          border: none;
          border-radius: 10px;
          background: #fff;
          cursor: pointer;
          font-size: 1.5rem;
          padding: 0.3em 0.6em;
          position: absolute;
          transition: 0.3s;
          top: 110px;
          outline: none;
        }

        .best__products__arow--unseen {
          display: none;
        }
      `}</style>
    </div>
  );
}
