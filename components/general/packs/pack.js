import { colors } from "../../../utils";
import Price from "../price";
import Language from "../language";

import { useRouter } from "next/router";

export default function Pack({
  title,
  titulo,
  price,
  description,
  descripcion,
  includes,
  incluye,
  textInclude,
  textoIncluir,
  link,
}) {
  const router = useRouter();

  const linkOrCart = () => {
    if (link) {
      router.push(link);
    } else {
      console.log("Carrito");
    }
  };

  return (
    <div className="pack">
      <h3>
        <Language text={title} texto={titulo} />
      </h3>
      {price && <Price fontSize={4} value={price} />}
      <p>
        <Language text={description} texto={descripcion} />
      </p>
      <p>
        <Language text={textInclude} texto={textoIncluir} />:
      </p>
      <ul>
        {includes.map((include, index) => {
          return (
            <li className={index != 0 && "pack__li--border-top"} key={index}>
              <Language text={include} texto={incluye[index]} />
            </li>
          );
        })}
      </ul>

      <button onClick={() => linkOrCart()}>
        {!link ? "Agregar al carrito" : "Ver los paquetes"}
      </button>
      <style jsx>{`
        .pack {
          align-items: center;
          background: #fff0;
          border: 5px solid ${colors.vino};
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 1rem auto;
          max-width: 350px;
          padding-bottom: 3rem;
          padding: 1.5rem;

          backdrop-filter: blur(5px);
        }

        p {
          text-align: center;
        }

        .pack ul {
          display: grid;
          gap: 3px;
          grid-template-columns: 1fr;
          list-style-type: none;
          margin-bottom: 2rem;
          padding-inline-start: 0;
          padding: 0;
          text-align: left;
          width: 80%;
        }

        .pack li {
          text-align: center;
          width: 100%;
          padding: 0.5rem 0;
        }

        .pack__li--border-top {
          border-top: 3px solid ${colors.blanco};
        }

        .pack button {
          background: linear-gradient(90deg, ${colors.vino}, ${colors.naranja});
          border: none;
          border-radius: 10px;
          color: #fff;
          font-size: 1rem;
          font-weight: 300;
          padding: 0.5rem 0.6rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: auto;
        }

        @media screen and (min-width: 500px) {
          .pack ul {
            margin: 0 10px 2rem 10px;
          }
        }
      `}</style>
    </div>
  );
}
