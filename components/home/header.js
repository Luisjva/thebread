import Image from "next/image";
import { useEffect, useState } from "react";

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
      <h1>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sollicitudin eros
        dui, nulla conubia laoreet fringilla ac mattis mi purus tempor iaculis
      </h1>
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

        h1 {
          text-align: center;
          font-size: 1.5rem;
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
