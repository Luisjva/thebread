import Image from "next/image";
import { colors } from "../../utils";
import { useEffect, useState } from "react";
import Language from "../general/language";

const features = [[], [], [], [], [], []];

export default function Our() {
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
    <div className="responsive our">
      <div>
        <h2>
          <Language
            text="You should choose us because..."
            texto="Debes elegirnos porque..."
          />
        </h2>
        <p>
          <Language
            text="We are an innovative, creative, flexible and friendly brand; we care about customers and their comfort when working with us and stand out from the competition. Let's work together!"
            texto="Somos una marca innovadora, creativa, flexible y amigable; nos preocupamos por los clientes y su comodidad al trabajar con nosotros y resaltamos entre la competencia. ¡Trabajemos juntos!"
          />
        </p>

        <div className="features">
          {features.map((fea, index) => {
            return (
              <div key={index} className="feature">
                <Image
                  width="30px"
                  height="30px"
                  src="/bread_monograma_blanco.png"
                />
                <b>Algo</b>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Image
          width={width * 0.5 + "px"}
          height={width * 0.5 + "px"}
          src="/bread_monograma_blanco.png"
        />
      </div>

      <style jsx>{`
        .our {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
          text-align: center;
        }

        .features {
          display: grid;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .feature {
          align-items: center;
          border: 2px solid ${colors.blanco}aa;
          display: flex;
          justify-content: flex-start;
          gap: 0.5rem;
          padding: 0.45rem 0.6rem;
          transition: 0.3s;
          cursor: default;
          border-radius: 10px;
        }

        .feature:hover {
          background: #fff;
          color: #000;
          border: 2px solid #fff;
        }

        @media screen and (min-width: 550px) {
          .features {
            grid-template-columns: 1fr 1fr;
            margin-top: 2.5rem;
          }
        }

        @media screen and (min-width: 700px) {
          .our {
            display: grid;
            gap: 3rem;
            grid-template-columns: 2fr 1.25fr;
          }
        }
      `}</style>
    </div>
  );
}
