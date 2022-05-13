import { colors } from "../../../utils";
import Price from "../price";

import { useRouter } from "next/router";

export default function Pack({
  title,
  price,
  description,
  includes,
  textInclude,
  link,
}) {
  const router = useRouter();

  const linkOrCart = () => {
    if (link) {
      console.log("Carrito");
    } else {
      router.push(link);
    }
  };

  return (
    <div className="pack">
      <div>
        <h3>{title}</h3>
        {price && <Price fontSize={4} value={price} />}
        <p>{description}</p>
        <p>{textInclude}:</p>
        <ul>
          {includes.map((include, index) => {
            return <li key={index}>{include}</li>;
          })}
        </ul>

        <button onClick={() => linkOrCart()}>
          {link ? "Agregar al carrito" : "Ver los paquetes"}
        </button>
      </div>
      <style jsx>{`
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
          align-items: center;
          background: #fff;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
          padding-bottom: 3rem;
          padding: 1.5rem;
          width: 100%;
        }

        .pack ul {
          list-style-type: none;
          text-align: left;
          padding-inline-start: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2px;
          background: ${colors.blanco};
          margin-bottom: 2rem;
        }

        .pack li {
          background: #fff;
          text-align: center;
          width: 100%;
          padding: 0.5rem 0;
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
