
import classNames from "classnames/bind";

import styles from "./Product.module.scss";
import { images } from "../../assets/images";
import { ProductItem } from "./../../components/ProductItem";
import { useGlobalContext } from "../../hooks";
const cx = classNames.bind(styles);

export const Product = function () {
  const [state] = useGlobalContext();

  return (
    <div className={cx("wrapper")}>
      <div className={cx('shape')}></div>
      <div className={cx("header")}>
        <img
          className={cx("logo")}
          src={images.logo}
          alt="logo"
        />
        <h2 className={cx("heading")}>
          Our products
        </h2>
      </div>
      <div
        className={cx("product-list")}
      >
        {state.products.map((item) => {
          const isInCart = state.carts.find((cart) => cart.productId === item.id);

          return <ProductItem key={item.id} data={item} isInCart={!!isInCart} />
        })}
      </div>
    </div>
  );
};
