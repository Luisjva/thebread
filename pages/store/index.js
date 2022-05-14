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
];

export default function Store() {
  return (
    <div className="responsive">
      <Packs />

      <h2>Productos</h2>
      <div className="products">
        {products.map((product, index) => {
          return <Product key={index} />;
        })}
      </div>

      <style jsx>{`
        .products {
          align-items: center;
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr 1fr;
          justify-content: center;
        }

        h2 {
          text-align: center;
        }

        @media screen and (min-width: 600px) {
          .products {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        @media screen and (min-width: 800px) {
          .products {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media screen and (min-width: 1200px) {
          .products {
            grid-template-columns: repeat(5, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
