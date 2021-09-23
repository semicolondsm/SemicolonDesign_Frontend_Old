import React, { FC } from 'react';
import { ButtonElement } from './styles';
import { 
  Colors, 
  ButtonProps,
} from './types';
// import * as Styles from './styles';

enum Cursor {
  DISABLED = "not-allowed",
  LOADING = "progress",
  DEFAULT = "pointer"
};

enum Width {
  lg = 3,
  md = 2,
  sm = 1
};

enum Height {
  lg = 3,
  md = 2,
  sm = 1
};

const initialProps: ButtonProps = {
  fill: "default",
  size: "md",
  loading: false,
  disabled: false,
  background: true,
};

const Button: FC<ButtonProps> = (props = initialProps) => {
  const {
    children,
    onClick,
    disabled,
    className,
    fill,
    leftIcon,
    rightIcon,
    loading,
    size
  } = props;

  const cursorType = disabled ? "DISABLED" : loading ? "LOADING" : "DEFAULT";

  const styledProps = {
    cursor: Cursor[cursorType],
    background: Colors[fill || "default"],
    width: Width[size || "md"],
    height: Height[size || "md"],
    size: size || "md",
    fillStyle: fill || "default",
    marginLeft: leftIcon ? 6 : 0,
    marginRight: rightIcon ? 6 : 0
  };

  return (
    <ButtonElement
      disabled={disabled}
      className={[className].join(" ")}
      {...onClick}
      {...styledProps}
    >
      { leftIcon }
      { children }
      { rightIcon }
    </ButtonElement>
  )
};

export default Button;