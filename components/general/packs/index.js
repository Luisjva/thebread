import Language from "../language";
import Pack from "./pack";
import { colors } from "../../../utils";

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

      <div>
        <Pack
          title="Paquetes de Redes Sociales"
          description="Para sacar la maximo de tu Instagram, Facebook y Youtube"
          textInclude="Disponibles"
          includes={[["Facebook"], ["Instagram"], ["Youtube"]]}
          link={false}
        />

        <Pack
          title="Paquetes de Logos"
          description="Para que le des la mejor cara a tu marca"
          textInclude="Disponibles"
          includes={[["Logo Basic"], ["Logo Medio"], ["Logo Pro"]]}
          link={false}
        />
      </div>

      {/*<Pack
        title="Facebook"
        price={96.54}
        description="Planificación de contenido para tener a tu Facebook brutal"
        textInclude="Incluye"
        includes={[
          ["Planificación de contenido"],
          ["Publicaciones"],
          ["Mejora de imagen"],
        ]}
        link={"/#"}
      />*/}

      <style jsx>{`
        .packs {
          text-align: center;
        }

        .packs > p {
          width: 80%;
          margin: auto;
        }

        @media screen and (min-width: 650px) {
          .packs > div {
            display: grid;
            gap: 2rem;
            grid-template-columns: 1fr 1fr;
            margin: auto;
            max-width: 800px;
          }
        }
      `}</style>
    </div>
  );
}
