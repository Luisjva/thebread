import Header from "../components/home/header";

import { colors } from "../utils";
import Language from "../components/general/language";
import Statistics from "../components/general/statistics";
import Our from "../components/home/our";
import BestProducts from "../components/general/best-products";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Statistics />
        <BestProducts />
      </div>
      <div className="background__colors">
        <div className="background__divider__up"></div>
        <Our />
        <div className="background__divider__down"></div>
      </div>
      <style jsx>{`
        .background__colors {
          background: linear-gradient(90deg, ${colors.vino}, ${colors.naranja});
          color: #fff;
          position: relative;
          padding: 100px 1rem;
        }

        .background__divider__up {
          background: url("/ola.svg");
          height: 100px;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }

        .background__divider__down {
          background: url("/ola2.svg");
          height: 100px;
          left: 0;
          position: absolute;
          bottom: 0;
          width: 100%;
          transform: rotate(180deg);
        }
      `}</style>
    </>
  );
}
