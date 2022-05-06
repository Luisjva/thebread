import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

import { colors } from "../../utils";

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
        <h1>Diseño grafico</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sollicitudin
          eros dui, nulla conubia laoreet fringilla ac mattis mi purus tempor
          iaculis nascetur.
        </p>
        <Link href="#">
          <a>Por si es necesario</a>
        </Link>
      </div>
      <div>
        <Image
          width={width * 0.5 + "px"}
          height={width * 0.5 + "px"}
          src="/bread_monograma_photoshop.png"
        />
      </div>

      <style jsx>{`
        header {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .header__content {
          text-align: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        a {
          background: linear-gradient(90deg, ${colors.vino}, ${colors.naranja});
          border-radius: 10px;
          color: #fff;
          padding: 0.5rem 0.6rem;
          font-weight: 600;
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
