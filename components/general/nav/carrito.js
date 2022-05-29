export default function NavCarrito({ visible }) {
  return (
    <div
      className={
        visible == "cart"
          ? "nav__carrito__list nav__carrito__list--visible"
          : "nav__carrito__list"
      }
    >
      <p>algo</p>
      <style jsx>{`
        .nav__carrito__list {
          background: #fffa;
          right: 5%;
          position: fixed;
          top: -25rem;
          width: 90%;
          z-index: 200;
          border-radius: 15px;
          box-shadow: 3px 3px 10px #0003;
          max-width: 25rem;
          min-height: 25vh;
          padding: 1rem;
          transition: 0.7s;

          backdrop-filter: blur(5px);
        }

        .nav__carrito__list--visible {
          top: 4.25rem;
        }

        @media screen and (min-width: 1500px) {
          .nav__carrito__list {
            right: 15%;
          }
        }
      `}</style>
    </div>
  );
}
