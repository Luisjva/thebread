import Language from "./language";

import { colors } from "../../utils";
import Price from "./price";

export default function BestProducts() {
  return (
    <div className="responsive">
      <h2>
        <Language text="Best products" texto="Mejores productos" />
      </h2>

      <p>
        Manolo, cual de los dos te gusta mas, o si tienes una idea de uno
        diferente o union de caracteristicas de ambos dime flaco
      </p>

      <div className="products">
        <div className="product__1">
          <div className="product__1__img"></div>
          <h3>Nombre</h3>
          <Price />
        </div>

        <div className="product__2">
          <div className="product__2__img"></div>
          <h3>Nombre</h3>
          <Price />
        </div>
      </div>

      <style jsx>{`
        h2 {
          text-align: center;
        }

        .products {
          align-items: center;
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-content: center;
        }

        .product__1 {
          align-items: center;
          border: 3px solid ${colors.blanco};
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 200px;
          padding: 1rem;
          height: 250px;
        }

        .product__1__img {
          background: url("/七転び八起き.png");
          background-size: cover;
          background-position: center;
          border-radius: 100px;
          height: 110px;
          width: 110px;
        }

        .product__2 {
          align-items: center;
          background: ${colors.blanco};
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          max-width: 200px;
          padding-bottom: 1rem;
          height: 250px;
        }

        .product__2__img {
          background: url("/七転び八起き.png");
          background-size: cover;
          background-position: center;
          border-radius: 15px 15px 0 0;
          height: 120px;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
