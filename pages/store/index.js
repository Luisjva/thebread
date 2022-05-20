import Packs from "../../components/general/packs/index";
import Product from "../../components/general/product";

const products = [[], [], [], [], [], [], [], [], [], [], [], []];

export default function Store() {
  return (
    <>
      <div className="store__bg-1">
        <div>
          <Packs />
          <h2>Productos</h2>
        </div>
      </div>
      <div className="store__bg-2">
        <div className="products responsive">
          {products.map((product, index) => {
            return <Product key={index} />;
          })}
        </div>
      </div>
      <style jsx>{`
        .store__bg-1 {
          background: linear-gradient(#fff7, #fff7),
            url("/wave-background-4.png");
          background-position: right;
          background-size: 70% 90%;
          background-repeat: no-repeat;
        }

        .store__bg-2 {
          background: linear-gradient(#fff7, #fff7),
            url("/wave-background-5.png");
          background-position: left;
          background-size: 80% 90%;
          background-repeat: no-repeat;
        }

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
    </>
  );
}
