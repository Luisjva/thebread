import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";
import Language from "../language";
import { colors } from "../../../utils";
import { CartContext } from "../../../pages/_app";
import NavCarrito from "./carrito";

export default function Nav() {
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState(false);

  const { cartProducts, cartPacks } = useContext(CartContext);

  const router = useRouter();

  const openMenu = () => {
    visible == "ul" ? setVisible(false) : setVisible("ul");
  };

  const openCart = () => {
    visible == "cart" ? setVisible(false) : setVisible("cart");
  };

  const openLanguage = () => {
    setLanguage(language ? false : true);
  };

  const user = () => {
    router.push("/user/singin");
  };

  useEffect(() => {
    if (cartProducts != null && cartPacks != null) {
      const animation = document.querySelector(".nav__cart__notification");

      if (
        cartProducts[0] !== null &&
        cartPacks[0] !== null &&
        cartProducts.length + cartPacks.length > 0
      ) {
        animation.classList.add("nav__cart__notification--animation");
      } else {
        animation.classList.remove("nav__cart__notification--animation");
      }
    }
  }, [cartProducts, cartPacks]);

  return (
    <div className="nav__container">
      <NavCarrito visible={visible} setVisible={setVisible} />
      <ul
        className={
          visible == "ul"
            ? "nav__right__ul__phone nav__right__ul__phone--visible"
            : "nav__right__ul__phone"
        }
      >
        <Link href="/store">
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

      <nav>
        <div>
          <div className="nav__left">
            <Link href="/">
              <a onClick={() => setVisible(false)}>
                <Image
                  src="/bread_logo_color.png"
                  height="25px"
                  width="110px"
                />
              </a>
            </Link>
          </div>
          <div className="nav__right">
            <span
              onClick={() => {
                openLanguage();
                setVisible(false);
              }}
              className="nav__btn nav__language"
            >
              <Image
                src={`/languaje-flag-${
                  router.locale == "es" ? "ES" : "EN"
                }.png`}
                height="20px"
                width="20px"
              />
              <div
                className={
                  language
                    ? "nav__language__div nav__language__div--visible"
                    : "nav__language__div"
                }
              >
                <Link href="/" locale={router.locale == "es" ? "en" : "es"}>
                  <a>
                    <Image
                      src={`/languaje-flag-${
                        router.locale == "es" ? "EN" : "ES"
                      }.png`}
                      height="20px"
                      width="20px"
                    />
                  </a>
                </Link>
              </div>
            </span>

            <span
              className="nav__btn nav__cart nav__btn--change"
              onClick={() => openCart()}
            >
              <div className="nav__cart__notification"></div>
              <Image src="/cart-icon-1.png" height="25px" width="25px" />
              <span className="nav__btn--change--top">
                <Image src="/cart-icon-2.png" height="25px" width="25px" />
              </span>
              <span className="nav__cart__btn__amount">
                {cartProducts &&
                  cartPacks &&
                  cartProducts.length + cartPacks.length}
              </span>
            </span>

            <span
              className="nav__btn nav__user nav__btn--change"
              onClick={() => user()}
            >
              <Image src="/profile-icon-1.png" height="25px" width="25px" />
              <span className="nav__btn--change--top">
                <Image src="/profile-icon-2.png" height="25px" width="25px" />
              </span>
            </span>

            <div onClick={() => openMenu()} className="nav__right__btn">
              <div
                className={
                  visible == "ul"
                    ? "nav__right__btn__1 nav__right__btn__1--closed"
                    : "nav__right__btn__1"
                }
              ></div>
              <div
                className={
                  visible == "ul"
                    ? "nav__right__btn__2 nav__right__btn__2--closed"
                    : "nav__right__btn__2"
                }
              ></div>
              <div
                className={
                  visible == "ul"
                    ? "nav__right__btn__3 nav__right__btn__3--closed"
                    : "nav__right__btn__3"
                }
              ></div>
            </div>
            <ul className="nav__right__ul__pc">
              <Link href="/store">
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
      </nav>
      <style jsx>{`
        .nav__container {
          position: relative;
        }

        nav {
          background: #fffa;
          height: 3rem;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 200;
          box-shadow: 2px 2px 10px #0002;

          backdrop-filter: blur(5px);
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
          transition: 0.7s;
          width: auto;
          background: #0001;
          cursor: pointer;
          top: -5rem;
          width: 100%;
        }

        .nav__language__div--visible {
          top: 2.8rem;
        }

        .nav__btn--change {
          position: relative;
        }

        .nav__cart {
          grid-area: cart;
        }

        .nav__cart__notification {
          background: ${colors.naranja};
          border-radius: 100px;
          height: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          top: 50%;
          position: absolute;
          width: 0;
        }

        .nav__cart__notification--animation {
          animation-duration: 2s;
          animation-iteration-count: 3;
          animation-name: notification;
          animation-timing-function: cubic-bezier(0.1, 0.4, 0.05);
        }

        @keyframes notification {
          0% {
            background: ${colors.naranja};
            height: 0;
            width: 0;
          }

          100% {
            background: ${colors.naranja}00;
            height: 85px;
            width: 85px;
          }
        }

        .nav__btn--change--top {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          transition: 0.7s;
        }

        .nav__btn--change:hover .nav__btn--change--top {
          opacity: 0;
        }

        .nav__cart__btn__amount {
          background: ${colors.naranja};
          border-radius: 10px;
          font-size: 0.7rem;
          position: absolute;
          top: 0px;
          left: 24px;
          padding: 0.1rem 0.3rem;
          transition: 0.7s;
          font-weight: 700;
        }

        .nav__cart:hover .nav__cart__btn__amount {
          background: ${colors.vino};
          color: #fff;
        }

        .nav__user {
          grid-area: user;
        }

        .nav__right__ul__phone {
          align-items: center;
          background: #fffa;
          border-radius: 15px;
          box-shadow: 3px 3px 10px #0003;
          display: flex;
          flex-direction: column;
          grid-area: ul;
          justify-content: center;
          left: 5%;
          list-style-type: none;
          margin-block-end: 0;
          margin-block-start: 0;
          padding-inline-start: 0;
          position: fixed;
          top: -20rem;
          transition: 0.7s;
          width: 90%;
          z-index: 200;

          backdrop-filter: blur(5px);
        }

        .nav__right__ul__pc {
          display: none;
        }

        .nav__right__ul__phone--visible {
          top: 4.5rem;
        }

        .nav__right__ul__phone li {
          align-items: center;
          display: flex;
          justify-content: center;
          height: 3rem;
          transition: 0.7s;
          width: 100vw;
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
          transition: 0.7s;
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
          cursor: pointer;
          height: 2.5rem;
          padding: 0.5rem;
          transition: 0.7s;
          width: auto;
        }

        /*   Media querys   */
        @media screen and (min-width: 560px) {
          nav > div {
            position: relative;
          }

          .nav__right {
            gap: 0rem;
            display: grid;
            grid-template-columns: 1fr auto auto;
            grid-template-areas: "ul cart user language";
          }

          .nav__right__btn {
            display: none;
          }

          .nav__right__ul__phone {
            display: none;
          }

          .nav__right__ul__pc {
            align-items: center;
            background: none;
            display: flex;
            flex-direction: column;
            flex-direction: row;
            gap: 0.25rem;
            grid-area: ul;
            justify-content: center;
            left: 0;
            list-style-type: none;
            margin-block-end: 0;
            margin-block-start: 0;
            padding-inline-start: 0;
            position: relative;
            transition: 0.7s;
          }

          .nav__right__ul__pc li {
            align-items: center;
            background: none;
            border-radius: 5px;
            display: flex;
            height: 2.5rem;
            justify-content: center;
            padding: 0.5rem;
            transition: 0.7s;
          }
        }

        @media screen and (min-width: 1350px) {
          nav > div {
            max-width: 1300px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
