import { createContext, useState, useEffect } from "react";
import useSWR from "swr";

import Nav from "../components/general/nav";
import "../styles/globals.css";

export const ProductsContext = createContext();
export const PackagesContext = createContext();

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState(undefined);
  const [packages, setPackages] = useState(undefined);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const fetchProducts = useSWR("/api/products", fetcher);
  const fetchPackages = useSWR("/api/packages", fetcher);

  useEffect(() => {
    if (!fetchProducts.error && fetchProducts.data) {
      if (fetchProducts.data[0] && fetchProducts.data[0].nombre == "error") {
        setProducts(null);
      } else {
        setProducts(fetchProducts.data);
      }
    }
  }, [fetchProducts]);

  useEffect(() => {
    if (!fetchPackages.error && fetchPackages.data) {
      if (fetchPackages.data[0] && fetchPackages.data[0].nombre == "error") {
        setPackages(null);
      } else {
        setPackages(fetchPackages.data);
      }
    }
  }, [fetchPackages]);

  return (
    <>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <PackagesContext.Provider value={{ packages, setPackages }}>
          <Nav />
          <main>
            <Component {...pageProps} />
          </main>
        </PackagesContext.Provider>
      </ProductsContext.Provider>
    </>
  );
}

export default MyApp;
