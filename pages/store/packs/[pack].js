import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import useSWR from "swr";

import Header from "../../../components/general/header";
import Language from "../../../components/general/language";
import { PackagesContext } from "../../_app";
import Pack from "../../../components/general/packs/pack";

export default function Packs() {
  const [packInfo, setPackInfo] = useState(undefined);

  const { packages } = useContext(PackagesContext);

  const router = useRouter();
  const { pack } = router.query;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const fetchPakInfo = useSWR(`/api/pack-info?id=${pack}`, fetcher);

  useEffect(() => {
    if (!fetchPakInfo.error && fetchPakInfo.data) {
      if (fetchPakInfo.data[0] && fetchPakInfo.data[0].nombre == "error") {
        setPackInfo(null);
      } else {
        setPackInfo(fetchPakInfo.data[0]);
      }
    }
  }, [fetchPakInfo]);

  return (
    <div className="packs__container">
      {!packInfo ? (
        <p>Cargando...</p>
      ) : (
        <>
          <Header img="/bread_monograma_photoshop.png">
            <h1>
              <Language text={packInfo.NAME} texto={packInfo.NOMBRE} />
            </h1>
            <p className="p">
              <Language
                text={packInfo.DESCRIPTION}
                texto={packInfo.DESCRIPCION}
              />
            </p>
          </Header>

          <div className=" packs__packs">
            {packages &&
              packages.map((packag) => {
                if (packag.FK_PACKAGE_CATEGORY == pack) {
                  return (
                    <Pack
                      key={packag.ID}
                      id={packag.ID}
                      title={packag.NAME}
                      titulo={packag.NOMBRE}
                      description={packag.DESCRIPTION}
                      descripcion={packag.DESCRIPCION}
                      textInclude="Include"
                      textoIncluir="Incluye"
                      includes={["includes"]}
                      incluye={["incluye"]}
                      link={false}
                      price={packag.PRICE}
                    />
                  );
                }
              })}
          </div>
        </>
      )}

      <style jsx>{`
        h1,
        .p {
          text-align: left;
          width: 100%;
        }

        .packs__container {
          background: url("/wave-background-5.png");
          background-position: left;
          background-size: 80% 90%;
          background-repeat: no-repeat;
        }

        .packs__packs {
          margin: auto;
          width: 95%;
          max-width: 1200px;
        }

        @media screen and (min-width: 650px) {
          .packs__packs {
            display: grid;
            gap: 2rem;
            grid-template-columns: 1fr 1fr;
          }
        }

        @media screen and (min-width: 800px) {
          .packs__packs {
            display: grid;
            gap: 2rem;
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}
