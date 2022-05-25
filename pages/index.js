import Header from "../components/general/header";
import Link from "next/link";

import { colors } from "../utils";
import Language from "../components/general/language";
import Statistics from "../components/general/statistics";
import Our from "../components/home/our";
import BestProducts from "../components/general/best-products";
import Packs from "../components/general/packs/index";

export default function Home() {
  return (
    <>
      <div className="background__wave">
        <Header img="/bread_monograma_photoshop.png">
          <h1>
            <Language
              texto="Mejora tu Identidad Visual con el mejor Diseño Gráfico"
              text="Improve your Visual Identity with the best Graphic Design"
            />
          </h1>
          <p>
            <Language
              texto="Nuestros servicios de Diseño Gráfico Profesional cuentan con precios adaptados a ti, entregándote la mejor calidad al mejor precio."
              text="Our Professional Graphic Design services have prices adapted to you, giving you the best quality at the best price."
            />
          </p>
          <Link href="/store">
            <a>
              <Language texto="COMPRA AHORA" text="BUY NOW" />
            </a>
          </Link>
        </Header>
        <Statistics />
        <BestProducts />
      </div>
      <div className="background__colors">
        <div className="background__divider__up"></div>
        <Our />
        <div className="background__divider__down"></div>
      </div>
      <div>
        <Packs />
      </div>
      <style jsx>{`
        .background__colors {
          background: linear-gradient(90deg, ${colors.vino}, ${colors.naranja});
          color: #fff;
          margin: 3rem 0;
          padding: 100px 1rem;
          position: relative;
        }

        .background__divider__up {
          background: url("/ola.svg");
          height: 100px;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }

        .background__divider__down {
          background: url("/ola2.svg");
          height: 100px;
          left: 0;
          position: absolute;
          bottom: 0;
          width: 100%;
          transform: rotate(180deg);
        }

        a {
          background: linear-gradient(90deg, ${colors.vino}, ${colors.naranja});
          border-radius: 10px;
          color: #fff;
          padding: 0.5rem 0.6rem;
          font-weight: 600;
          margin: 1rem;
        }

        .background__wave {
          background: url("/wave-background-1.png");
          background-size: 70% 90%;
          background-position: right;
          background-repeat: no-repeat;
        }
      `}</style>
    </>
  );
}
