import { colors } from "../../utils";
import Language from "../../components/general/language";

import Image from "next/image";
import { useState } from "react";

export default function SingIn() {
  const [current, setCurrent] = useState("Register");

  return (
    <div className="register__container">
      <div className="responsive">
        <div>
          <p>
            esta puede ser una img del pan haciendo algo relacionado con el
            registro
          </p>
          <Image
            src="/Team building _Monochromatic.svg"
            width="250px"
            height="250px"
          />
        </div>

        <div className="register__form">
          <h2>
            <Language text="Sign in" texto="Registro" />
          </h2>
          <form>
            <label>
              <p>
                <Language text="Name" texto="Nombre" />
              </p>
              <input type="text" name="name" />
            </label>
            <label>
              <p>
                <Language text="Email" texto="Correo electronico" />
              </p>
              <input type="email" name="email" />
            </label>
            <label>
              <p>
                <Language text="Phone number" texto="Numero de telefono" />
              </p>
              <input type="text" name="phone" />
            </label>
            <label>
              <p>
                <Language text="Password" texto="Contraseña" />
              </p>
              <input type="password" name="password" />
            </label>
          </form>
        </div>
      </div>
      <style jsx>{`
        .register__container {
          background: linear-gradient(
            90deg,
            ${colors.vino} 65%,
            ${colors.naranja}
          );
          color: #fff;
          height: 100%;
          left: 0;
          min-height: 100%;
          text-align: center;
          top: 0;
          width: 100%;
        }

        .register__form {
          background: #fffa;
          border-radius: 15px;
          box-shadow: 3px 3px 10px #0002;
          color: #000;
          padding: 2rem 2rem 1rem 2rem;
          max-width: 500px;
          margin: auto;

          backdrop-filter: blur(5px);
        }

        .register__form > h2 {
          margin-block-start: 0;
          margin-block-end: 0;
        }

        .register__form > form {
          text-align: left;
        }

        .register__form > form > label {
          display: block;
          margin: 1rem 0;
        }

        .register__form > form > label > p {
          margin-block-start: 0;
          margin-block-end: 0.2rem;
        }

        .register__form > form input {
          background: none;
          border-radius: 7px;
          border: 1px solid ${colors.blanco}dd;
          padding: 0.5rem;
          outline: none;
          width: 100%;
        }

        @media screen and (min-width: 500px) {
          .register__container > div {
            align-items: center;
            display: flex;
            justify-content: space-between;
            height: 100%;
          }

          .register__form {
            min-width: 350px;
          }
        }
      `}</style>
    </div>
  );
}
