import { colors } from "../../utils";
import Price from "./price";

export default function Product({ value, fontSize }) {
  return (
    <div className="products">
      <div className="product">
        <div className="product__img"></div>
        <h3>Nombre</h3>
        <Price fontSize={1.4} value={10.5} />
      </div>
      <style jsx>{`
        .product {
          align-items: center;
          background: ${colors.blanco};
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 200px;
          padding-bottom: 1rem;
          height: 250px;
        }

        .product__img {
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
