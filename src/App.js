import React, { useEffect } from "react";

import classNames from "classnames/bind";
import styles from "./App.module.scss";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import * as productServices from './services/productService'
import * as cartService from './services/cartService';

import { useGlobalContext } from "./hooks";
import { setProducts, setCarts } from "./store/actions";

const cx = classNames.bind(styles);
const App = function () {
  const [state, dispatch] = useGlobalContext();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await productServices.getAllProducts();
      dispatch(setProducts(res.data));
    };

    const fetchCartByUserId = async () => {
      const res = await cartService.getCartByUserId({userId: state.userId})
      dispatch(setCarts(res.data));
    }

    fetchProducts();
    fetchCartByUserId();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={cx("wrapper")}>
      <Product />
      <div
        className={cx("divider")}
      ></div>
      <Cart  />
    </div>
  );
};


export default App;