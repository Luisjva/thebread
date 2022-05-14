import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

import { colors } from "../../utils";
import Language from "../general/language";

export default function Header() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (innerWidth < 500) {
      setWidth(innerWidth);
    } else if (innerWidth < 1000) {
      setWidth(innerWidth / 1.5);
    } else {
      setWidth(1200 / 1.5);
    }

    setWidth(innerWidth);
    window.addEventListener("resize", () => {
      if (innerWidth < 500) {
        setWidth(innerWidth);
      } else if (innerWidth < 1000) {
        setWidth(innerWidth / 1.5);
      } else {
        setWidth(1200 / 1.5);
      }
    });
  }, []);

  return (
    <header className="responsive">
      <div className="header__content">
        <h1>
          <Language
            texto="Mejora tu Identidad Visual con el mejor Diseño Gráfico"
            text="Improve your Visual Identity with the best Graphic Design"
          />
        </h1>
        <p>
          <Language
            texto="Nuestros servicios de Diseño Gráfico Profesional cuenta con precios adaptados a ti."
            text="Our Professional Graphic Design services have prices adapted to you."
          />
        </p>
        <Link href="/store">
          <a>
            <Language texto="COMPRA AHORA" text="BUY NOW" />
          </a>
        </Link>
      </div>
      <div className="header__img">
        <Image
          width={width * 0.5 + "px"}
          height={width * 0.5 + "px"}
          src="/bread_monograma_photoshop.png"
        />
      </div>

      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .header__content {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .header__img {
          align-items: center;
          display: flex;
          justify-content: center;
        }

        a {
          background: linear-gradient(90deg, ${colors.vino}, ${colors.naranja});
          border-radius: 10px;
          color: #fff;
          padding: 0.5rem 0.6rem;
          font-weight: 600;
          margin: 1rem;
        }

        @media screen and (min-width: 500px) {
          header {
            display: grid;
            gap: 3rem;
            grid-template-columns: 2fr 1.25fr;
          }
        }
      `}</style>
    </header>
  );
}
