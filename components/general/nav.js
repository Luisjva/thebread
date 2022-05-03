import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Language from "./language";

export default function Nav() {
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState(false);

  const router = useRouter();

  const openMenu = () => {
    setVisible(visible ? false : true);
  };

  const openLanguage = () => {
    setLanguage(language ? false : true);
  };

  return (
    <nav>
      <div>
        <div className="nav__left">
          <Image src="/bread_logo_color.png" height="25px" width="110px" />
        </div>
        <div className="nav__right">
          <span
            onClick={() => openLanguage()}
            className="nav__btn nav__language"
          >
            <Language text="EN" texto="ES" /> <span>&#709;</span>
            <div
              className={
                language
                  ? "nav__language__div nav__language__div--visible"
                  : "nav__language__div"
              }
            >
              <Link href="/" locale={router.locale == "es" ? "en" : "es"}>
                <a>
                  <Language text="ES" texto="EN" />
                </a>
              </Link>
            </div>
          </span>

          <span className="nav__btn nav__cart">
            <Image src="/Cart.svg" height="25px" width="25px" />
          </span>
          <div onClick={() => openMenu()} className="nav__right__btn">
            <div
              className={
                visible
                  ? "nav__right__btn__1 nav__right__btn__1--closed"
                  : "nav__right__btn__1"
              }
            ></div>
            <div
              className={
                visible
                  ? "nav__right__btn__2 nav__right__btn__2--closed"
                  : "nav__right__btn__2"
              }
            ></div>
            <div
              className={
                visible
                  ? "nav__right__btn__3 nav__right__btn__3--closed"
                  : "nav__right__btn__3"
              }
            ></div>
          </div>
          <ul
            className={
              visible
                ? "nav__right__ul nav__right__ul--visible"
                : "nav__right__ul"
            }
          >
            <Link href="#">
              <a>
                <li onClick={() => openMenu()}>
                  <Language text="Store" texto="Tienda" />
                </li>
              </a>
            </Link>
            <Link href="#">
              <a>
                <li onClick={() => openMenu()}>
                  <Language text="Portfolio" texto="Portafolio" />
                </li>
              </a>
            </Link>
            <Link href="#">
              <a>
                <li onClick={() => openMenu()}>
                  <Language text="Contact" texto="Contacto" />
                </li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
      <style jsx>{`
        nav {
          position: sticky;
          top: 0;
          height: 3rem;
          width: 100%;
          background: #fffd;
          z-index: 200;

          backdrop-filter: blur(20px);
        }

        nav > div {
          align-items: center;
          display: flex;
          justify-content: space-between;
          height: 100%;
          margin: 0 0.5rem;
        }

        /*   nav der   */
        .nav__right {
          align-items: center;
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
        }

        .nav__language {
          position: relative;
          grid-area: language;
        }

        .nav__language__div {
          display: flex;
          align-items: center;
          justify-content: center;
          left: 0;
          position: absolute;
          border-radius: 5px;
          height: auto;
          padding: 0.3rem 0.5rem;
          transition: 0.5s;
          width: auto;
          background: #0001;
          cursor: pointer;
          top: -5rem;
          width: 100%;
        }

        .nav__language__div--visible {
          top: 2.8rem;
        }

        .nav__cart {
          grid-area: cart;
        }

        .nav__right__ul {
          align-items: center;
          background: #fffd;
          display: flex;
          flex-direction: column;
          justify-content: center;
          left: 0;
          list-style-type: none;
          margin-block-end: 0;
          margin-block-start: 0;
          padding-inline-start: 0;
          position: absolute;
          top: -20rem;
          transition: 0.5s;
          width: 100%;
          grid-area: ul;

          backdrop-filter: blur(20px);
        }

        .nav__right__ul--visible {
          top: 3rem;
        }

        .nav__right__ul li {
          align-items: center;
          display: flex;
          justify-content: center;
          height: 3rem;
          transition: 0.5s;
          width: 100vw;
        }

        .nav__right__ul li:hover {
          transform: scale(1.1);
          background: #0001;
        }

        /* nav btn */
        .nav__right__btn {
          cursor: pointer;
          height: 30px;
          position: relative;
          width: 30px;
        }

        .nav__right__btn > div {
          border-radius: 10px;
          height: 3px;
          position: absolute;
          transition: 0.5s;
          width: 100%;
        }

        .nav__right__btn__1 {
          top: 3px;
          background: #af1350;
        }

        .nav__right__btn__1--closed {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        }

        .nav__right__btn__2 {
          top: 50%;
          transform: translateY(-50%);
          background: #e02d51;
        }

        .nav__right__btn__2--closed {
          opacity: 0;
        }

        .nav__right__btn__3 {
          bottom: 3px;
          background: #fd884f;
        }

        .nav__right__btn__3--closed {
          top: 50%;
          transform: translateY(-50%) rotate(-45deg);
        }

        .nav__btn {
          background: none;
          border-radius: 5px;
          height: 2.5rem;
          padding: 0.5rem;
          transition: 0.5s;
          width: auto;
        }

        .nav__btn:hover {
          background: #0001;
          cursor: pointer;
        }

        /*   Media querys   */
        @media screen and (min-width: 560px) {
          .nav__right {
            gap: 0rem;
            display: grid;
            grid-template-columns: 1fr auto auto;
            grid-template-areas: "ul cart language";
          }

          .nav__right__btn {
            display: none;
          }

          .nav__right__ul {
            background: none;
            top: auto;
            flex-direction: row;
            gap: 0.25rem;
            left: auto;
            position: relative;
            width: auto;

            backdrop-filter: none;
          }

          .nav__right__ul--visible {
            top: auto;
          }

          .nav__right__ul li {
            background: none;
            border-radius: 5px;
            height: 2.5rem;
            width: auto;
            padding: 0.5rem;
          }
        }

        @media screen and (min-width: 1350px) {
          nav > div {
            max-width: 1300px;
            margin: 0 auto;
          }
        }
      `}</style>
    </nav>
  );
}
