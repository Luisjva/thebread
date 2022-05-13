import Packs from "../../components/general/packs/index";
import Product from "../../components/general/product";

const products = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

export default function Store() {
  return (
    <div className="responsive">
      <Packs />

      <h1>Productos</h1>
      <div className="products">
        {products.map((product, index) => {
          return <Product key={index} />;
        })}
      </div>

      <style jsx>{`
        .products {
          align-items: center;
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr 1fr;
          justify-content: center;
        }

        h1 {
          text-align: center;
        }

        @media screen and (min-width: 550px) {
          .products {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        @media screen and (min-width: 730px) {
          .products {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media screen and (min-width: 1100px) {
          .products {
            grid-template-columns: repeat(5, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
