import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";
import { Button } from "../Button";
import { images } from "../../assets/images";
import * as cartService from './../../services/cartService';
import {useGlobalContext} from '../../hooks'
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../store/actions";

const cx = classNames.bind(styles);

export const CartItem = function ({data}) {
  // eslint-disable-next-line
  const [state, dispatch]  = useGlobalContext();

  const {product} = data;

  const handleDeleteCartItem = async (id) => {
    await cartService.deleteCartItem({id});
    dispatch(removeFromCart({id}))
  }

  const handleDecreaseQuantity = async () => {
    if(data.quantity === 1) {
      await cartService.deleteCartItem({id: data._id});
      dispatch(removeFromCart({id: data._id}))
    }else {
      const res = await cartService.updateCartItem({
        id: data._id,
        quantity: data.quantity - 1
      });
  
      if (res) {
        dispatch(decreaseQuantity({
          id: data._id,
        }));
      }
    }
  }

  const handleIncreaseQuantity = async () => {
    const res = await cartService.updateCartItem({
      id: data._id,
      quantity: data.quantity + 1
    });

    if (res) {
      dispatch(increaseQuantity({
        id: data._id,
      }));
    }
  }
  return (
    <div className={cx("wrapper")}>
      <div
        className={cx(
          "picture-container"
        )}
        style={{
          backgroundColor: product.color,
        }}
      >
        <img
          className={cx("picture")}
          src={product.image}
          alt="The illustration of the product"
        />
      </div>
      <div className={cx("inner")}>
        <h3 className={cx("name")}>
          {product.name}
        </h3>
        <span className={cx("price")}>
          ${product.price}
        </span>
        <div className={cx("actions")}>
          <div
            className={cx(
              "action-inner"
            )}
          >
            <Button
              icon={images.minus}
              onClick={() => handleDecreaseQuantity()}
              className={cx(
                "cus-button",
                "bg-gray"
              )}
            />
            <span
              className={cx("quantity")}
            >
              {data.quantity}
            </span>
            <Button
              onClick={() => {
                handleIncreaseQuantity();
              }}
              icon={images.plus}
              className={cx(
                "cus-button",
                "bg-gray"
              )}
            />
          </div>

          <Button
            icon={images.trash}
            className={cx("cus-button", "trash-btn")}
            onClick={() => {
              handleDeleteCartItem(data._id);
            }}
          />
        </div>
      </div>
    </div>
  );
};
