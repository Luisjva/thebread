import Image from "next/image";
import Link from "next/link";

import Language from "./language";
import Price from "./price";
import { colors } from "../../utils";
const products = [[], [], [], []];

export default function Packs() {
  return (
    <div className="responsive packs">
      <h2>
        <Language
          texto={"Gana con nuestros paquetes"}
          text={"Earn with our packages"}
        />
      </h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sollicitudin eros
        dui, nulla conubia laoreet fringilla ac mattis mi purus tempor iaculis
        nascetur.
      </p>

      <div className="pack">
        <div>
          <h3>Redes sociales Pro</h3>
          <Price fontSize={4} value={96.28} />
          <p>Para sacar la maximo de tu Instagram, Facebook y Youtube</p>
          <p>Incluye:</p>
          <ul>
            {products.map((product, index) => {
              return (
                <li key={index}>
                  <Image
                    src="/check.png"
                    alt="check"
                    width="30px"
                    height="30px"
                  />
                  <span>Aqui va el nombre del producto incluido</span>
                </li>
              );
            })}
          </ul>

          <Link href="#">
            <a>Agregar al carrito</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .packs {
          text-align: center;
        }

        .packs > p {
          width: 80%;
          margin: auto;
        }

        .pack {
          align-items: center;
          background: linear-gradient(90deg, ${colors.vino}, ${colors.naranja});
          border-radius: 20px;
          display: flex;
          justify-content: center;
          margin: 1rem auto;
          max-width: 350px;
          padding: 5px;
        }

        .pack > div {
          background: #fff;
          border-radius: 15px;
          padding: 1.5rem;
          padding-bottom: 3rem;
        }

        .pack ul {
          list-style-type: none;
          text-align: left;
          padding-inline-start: 0;
          padding: 0 40px 1rem 40px;
        }

        .pack li {
          align-items: start;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1rem;
        }

        .pack li > span {
          margin-top: 0.3rem;
        }

        .pack a {
          background: linear-gradient(90deg, ${colors.vino}, ${colors.naranja});
          border-radius: 10px;
          color: #fff;
          padding: 0.5rem 0.6rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
