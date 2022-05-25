import { useState, useEffect, useContext } from "react";
import useSWR from "swr";

import Language from "../language";
import Pack from "./pack";
import { PackagesContext } from "../../../pages/_app";

export default function Packs() {
  const [packs, setPacks] = useState(undefined);
  const { packages } = useContext(PackagesContext);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const fetchPaks = useSWR("/api/packs", fetcher);

  useEffect(() => {
    if (!fetchPaks.error && fetchPaks.data) {
      if (fetchPaks.data[0] && fetchPaks.data[0].nombre == "error") {
        setPacks(null);
      } else {
        setPacks(fetchPaks.data);
      }
    }
  }, [fetchPaks]);

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
        {packs &&
          packs.map((pack) => {
            let includes = [],
              incluye = [];

            packages &&
              packages.map((packag) => {
                if (packag.FK_PACKAGE_CATEGORY == pack.ID) {
                  includes.push(packag.NAME);
                  incluye.push(packag.NOMBRE);
                }
              });

            return (
              <Pack
                key={pack.ID}
                title={pack.NAME}
                titulo={pack.NOMBRE}
                description={pack.DESCRIPTION}
                descripcion={pack.DESCRIPCION}
                textInclude="Available"
                textoIncluir="Disponibles"
                includes={includes}
                incluye={incluye}
                link={`/store/packs/${pack.ID}`}
              />
            );
          })}
      </div>

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
