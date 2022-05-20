import { createContext, useState, useEffect } from "react";
import useSWR from "swr";

import Nav from "../components/general/nav";
import "../styles/globals.css";

export const ProductsContext = createContext();

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState(undefined);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const fetchProductos = useSWR("/api/products", fetcher);

  useEffect(() => {
    if (!fetchProductos.error && fetchProductos.data) {
      if (fetchProductos.data[0] && fetchProductos.data[0].nombre == "error") {
        setProducts(null);
      } else {
        setProducts(fetchProductos.data);

        console.log(fetchProductos.data);
      }
    }
  }, [fetchProductos]);

  return (
    <>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </ProductsContext.Provider>
    </>
  );
}

export default MyApp;
