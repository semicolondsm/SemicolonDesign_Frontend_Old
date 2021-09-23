import React, { FC } from 'react';
import { ButtonElement } from './styles';
import { 
  Colors, 
  ButtonProps,
  FontColors
} from './types';
import { Botton } from '../typography';
// import * as Styles from './styles';

enum Cursor {
  DISABLED = "not-allowed",
  LOADING = "progress",
  DEFAULT = "pointer"
};

enum PaddingVertical {
  lg = 0,
  md = 16,
  sm = 14
};

enum PaddingHorizontal {
  lg = 0,
  md = 68,
  sm = 16
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
    paddingVertical: PaddingVertical[size || "md"],
    paddingHorizontal: PaddingHorizontal[size || "md"],
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
      <Botton color={FontColors[fill || "default"]}>
        { children }
      </Botton>
      { rightIcon }
    </ButtonElement>
  )
};

export default Button;