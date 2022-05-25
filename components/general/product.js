import { colors } from "../../utils";
import Price from "./price";
import Language from "./language";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

let content;

export default function Product({ value, fontSize, nombre, name, price, img }) {
  const [width, setWidth] = useState(100);

  const router = useRouter();

  useEffect(() => {
    content = document.querySelector(".product");
    setWidth(content.clientWidth);
    window.addEventListener("resize", () => {
      content = document.querySelector(".product");
      setWidth(content.clientWidth);
    });
  }, []);

  return (
    <div className="products">
      <div className="product">
        <div className="product__img"></div>
        <h3>
          <Language texto={nombre} text={name} />
        </h3>
        <Price fontSize={1.1} value={price} />
        <button className="product__btn">
          <span>Agregar al carrito</span>
        </button>
      </div>
      <style jsx>{`
        .product {
          align-items: center;
          background: ${colors.blanco}55;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          height: auto;
          justify-content: flex-start;
          margin: auto;
          min-width: 100px;
          max-width: 200px;
          width: 100%;

          backdrop-filter: blur(5px);
        }

        .product h3 {
          font-weight: 500;
          font-size: 1.25rem;
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
          height: ${width}px;
          width: ${width}px;
        }

        .product button {
          cursor: pointer;
          font-size: 1rem;
          border: none;
          border-radius: 10px;
          margin-top: 0.75rem;
          width: 100%;
          padding: 2px;
        }

        .product__btn {
          background: linear-gradient(90deg, ${colors.vino}, ${colors.naranja});
        }

        .product__btn > span {
          background: #f3f3f3;
          border-radius: 8px;
          display: inline-block;
          font-weight: 500;
          padding: 0.3rem 0;
          transition: 0.3s;
          width: 100%;
        }

        .product__btn:hover > span {
          background: #fff0;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
