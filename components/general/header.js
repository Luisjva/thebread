import Image from "next/image";

import { useEffect, useState } from "react";

export default function Header({ children, img }) {
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
      <div className="header__content">{children}</div>
      <div className="header__img">
        <Image
          width={width * 0.5 + "px"}
          height={width * 0.5 + "px"}
          src={img}
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
