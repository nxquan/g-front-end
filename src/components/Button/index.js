import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

export const Button = function ({
  onClick,
  title,
  icon,
  className,
  disabled,
}) {
  const classes = cx("wrapper", {
    [className]: className,
    disabled: disabled,
  });
  
  const _props = {
    onClick: onClick,
  };

  if(disabled) {
    _props.onClick = null;
  }

  return (
    <div
      {..._props}
      className={classes}
    >
      {title && (
        <span
          className={cx("title")}
        >
          {title}
        </span>
      )}
      {icon && (
        <img
          src={icon}
          className={cx("icon")}
          alt="icon"
        />
      )}
    </div>
  );
};
