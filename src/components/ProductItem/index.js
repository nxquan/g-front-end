import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";
import { Button } from "../Button";
import { images } from "../../assets/images";
import { useGlobalContext } from "../../hooks";
import { addToCart } from "../../store/actions";
import * as cartService from '../../services/cartService';

const cx = classNames.bind(styles);
export const ProductItem = function ({data, isInCart}) {

  const [state, dispatch] = useGlobalContext();

  const handleAddToCart = async () => {
    const res = await cartService.createCartItem({
      productId: data?.id,
      quantity: 1,
      userId: state.userId,
    })

    dispatch(addToCart({
      _id: res.data._id,
      productId: data?.id,
      quantity: 1,
      userId: state.userId,
    }));
  }

  return (
    <div className={cx("wrapper")}>
      <div
        className={cx(
          "picture-container"
        )}
        style={{
          backgroundColor: data?.color
        }}
      >
        <img
          className={cx("picture")}
          src={data?.image}
          alt="logo"
        />
      </div>
      <div className={cx("info")}>
        <h3 className={cx("name")}>
          {data?.name}
        </h3>
        <p className={cx("des")}>
          {data?.description}
        </p>
        <div className={cx("actions")}>
          <p className={cx("price")}>
            ${data?.price}
          </p>
          {isInCart ? 
            <Button icon={images.check} className={cx('check-btn')} disabled />
          :   <Button title="Add to cart" onClick={() => {
            handleAddToCart();
          }}/>}
        </div>
      </div>
    </div>
  );
};
