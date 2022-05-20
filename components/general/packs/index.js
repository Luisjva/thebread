import Language from "../language";
import Pack from "./pack";
import { colors } from "../../../utils";

export default function Packs() {
  return (
    <div className="responsive packs">
      <h2>
        <Language texto="Paquetes Destacados" text="Featured Packages" />
      </h2>

      <p>
        <Language
          texto="Incluímos paquetes de distintas clases para que puedas obtener más cosas a un precio más bajo. ¡No te pierdas esto!"
          text="We include packages of different classes so you can get more things at a lower price. Don't miss this!"
        />
      </p>

      <div>
        <Pack
          title="Paquetes para Redes Sociales"
          description="Dale un toque único a tus RRSS con nuestro servicio."
          textInclude="Disponibles"
          includes={[["Facebook"], ["Instagram"], ["Youtube"]]}
          link={false}
        />

        <Pack
          title="Paquetes para Logos"
          description="Resalta sobre tu competencia con nuestros increíbles servicios de Identidad Visual."
          textInclude="Disponibles"
          includes={[["Basic"], ["Estándar"], ["Profesional"]]}
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
