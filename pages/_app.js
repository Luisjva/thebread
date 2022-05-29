import { createContext, useState, useEffect } from "react";
import useSWR from "swr";

import Nav from "../components/general/nav/index";
import "../styles/globals.css";

export const ProductsContext = createContext();
export const PackagesContext = createContext();
export const CartContext = createContext();

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState(undefined);
  const [packages, setPackages] = useState(undefined);
  const [cartProducts, setCartProducts] = useState(null);
  const [cartPacks, setCartPacks] = useState(null);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const fetchProducts = useSWR("/api/products", fetcher);
  const fetchPackages = useSWR("/api/packages", fetcher);

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  useEffect(() => {
    if (getCookie("cartProducts")) {
      setCartProducts(JSON.parse(getCookie("cartProducts")));

      console.log(JSON.parse(getCookie("cartProducts")));
    } else {
      setCartProducts([]);
    }

    if (getCookie("cartPacks")) {
      setCartPacks(JSON.parse(getCookie("cartPacks")));

      console.log(JSON.parse(getCookie("cartPacks")));
    } else {
      setCartPacks([]);
    }
  }, []);

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

  useEffect(() => {
    if (cartProducts != null) {
      if (cartProducts[0] !== null) {
        document.cookie = `cartProducts=${JSON.stringify(cartProducts)};path=/`;
      }
    }
  }, [cartProducts]);

  useEffect(() => {
    if (cartPacks != null) {
      if (cartPacks[0] !== null) {
        document.cookie = `cartPacks=${JSON.stringify(cartPacks)};path=/`;
      }
    }
  }, [cartPacks]);

  return (
    <>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <PackagesContext.Provider value={{ packages, setPackages }}>
          <CartContext.Provider
            value={{ cartProducts, setCartProducts, cartPacks, setCartPacks }}
          >
            <Nav />
            <main>
              <Component {...pageProps} />
            </main>
          </CartContext.Provider>
        </PackagesContext.Provider>
      </ProductsContext.Provider>
    </>
  );
}

export default MyApp;
