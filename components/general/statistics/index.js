import Language from "../language";
import Date from "./date";

export default function Statistics() {
  return (
    <div className="responsive statistics">
      <h2>
        <Language
          texto="Siempre tratamos de entender las expectativas de los usuarios"
          text="We Always Try To Understand Users Expectation"
        />
      </h2>
      <p>
        https://themes.envytheme.com/startp/
        <br />
        Lorem ipsum dolor sit amet consectetur adipiscing elit sollicitudin eros
        dui, nulla conubia laoreet fringilla ac mattis mi purus tempor iaculis
        nascetur.
      </p>
      <div className="dates">
        <Date number="1000">Trabajos realizados</Date>
        <Date number="847">Clientes satisfechos</Date>
        <Date number="500">Recontrataciones</Date>
        <Date number="456">Algo mas</Date>
      </div>

      <style jsx>{`
        h2,
        p {
          text-align: center;
        }

        .dates {
          display: grid;
          grid-template-columns: 1fr 1fr;
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
