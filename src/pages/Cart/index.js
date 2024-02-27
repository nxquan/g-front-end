import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { images } from "../../assets/images";
import { CartItem } from "../../components/CartItem";
import {useGlobalContext} from '../../hooks';
import { useMemo } from "react";

const cx = classNames.bind(styles);
export const Cart = function () {
  const [state] = useGlobalContext();

  const totalPrice = useMemo(() => {
    const total =  state.carts.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);

    return Math.round(total*100)/100;
  }, [state.carts]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx('shape')}></div>
      <div className={cx("header")}>
        <img
          className={cx("logo")}
          src={images.logo}
          alt="logo"
        />
        <div
          className={cx("header-inner")}
        >
          <h2 className={cx("heading")}>
            Your cart
          </h2>
          <span className={cx("total")}>
            $ {totalPrice}
          </span>
        </div>
      </div>
      <div className={cx("cart")}>
        {state.carts.length === 0 ? <p>Your cart is empty</p> : <>
          {state.carts.map((item) => (
            <CartItem key={item._id} data={item} />
          ))}
        </>}
      </div>
    </div>
  );
};
