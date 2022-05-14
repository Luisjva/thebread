import Language from "../language";
import Date from "./date";

export default function Statistics() {
  return (
    <div className="responsive statistics">
      <h2>
        <Language texto="Estadísticas" text="Statistics" />
      </h2>
      <p>
        https://themes.envytheme.com/startp/
        <br />
        <Language
          texto="Hemos trabajado por años con clientes de todo el mundo brindándoles la mejor calidad."
          text="We have worked for years with clients from all over the world providing them with the best quality."
        />
      </p>
      <div className="dates">
        <Date number="153">
          <Language texto="Pedidos Realizados" text="Orders Made" />
        </Date>
        <Date number="84">
          <Language texto="Clientes Felices" text="Happy customers" />
        </Date>
        <Date number="12">
          <Language texto="Opiniones" text="Opinions" />
        </Date>
        <Date number="21">
          <Language texto="Algo mas" text="Anything else" />
        </Date>
      </div>

      <style jsx>{`
        h2,
        p {
          text-align: center;
        }

        .dates {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 1rem;
          margin: 2rem 0;
        }

        @media screen and (min-width: 1000px) {
          .dates {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
