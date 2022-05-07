import { useEffect, useState } from "react";

export default function Price({ value, fontSize }) {
  const [unidades, setUnidades] = useState("0");
  const [centavos, setCentavos] = useState("00");

  useEffect(() => {
    let price = value.toString();
    price = price.split(".");
    let unidad = price[0];
    let centavo = price[1] == undefined ? "00" : price[1];

    if (centavo.length && centavo.length == 1) {
      centavo = centavo + "0";
    } else if (centavo.length && centavo.length == 0) {
      centavo = "00";
    } else if (centavo.length && centavo.length > 2) {
      centavo = centavo.substring(0, 2);
    }

    setUnidades(unidad);
    setCentavos(centavo);
  }, [value]);

  return (
    <span className="price">
      <span className="price__moneda">$</span>
      {unidades}
      <span className="price__centavos">.{centavos}</span>
      <style jsx>{`
        .price {
          font-size: ${fontSize}rem;
          font-weight: 500;
          margin-block-start: 0;
          margin-block-end: 0;
          margin-left: 0.6em;
          margin-right: 0.85em;
          width: auto;
          display: inline-block;
          position: relative;
        }
        .price > span {
          font-size: 0.55em;
          position: absolute;
        }
        .price__moneda {
          left: -0.75em;
          top: 50%;
          transform: translateY(-50%);
        }
        .price__centavos {
          right: -1.5em;
        }
      `}</style>
    </span>
  );
}
