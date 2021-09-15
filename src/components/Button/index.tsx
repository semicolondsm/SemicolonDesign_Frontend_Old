import React, { ReactElement, Component, MouseEvent, FC } from 'react';
import { ButtonElement } from './styles';

type size = "sm" | "md" | "lg";
type fillStyle = "default" | "purple" | "purpleLight" | "border" | "full";

interface ButtonProps {
  leftIcon?: ReactElement<any, string | ((props: any) => ReactElement<any, any> | null) | (new (props: any) => Component<any, any, any>)>;
  rightIcon?: ReactElement<any, string | ((props: any) => ReactElement<any, any> | null) | (new (props: any) => Component<any, any, any>)>;
  fill?: fillStyle;
  size?: size;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  background?: boolean;
  onClick?: (event?: MouseEvent<HTMLElement, MouseEvent>) => void;
};

enum Cursor {
  DISABLED = "not-allowed",
  LOADING = "progress",
  DEFAULT = "pointer"
};

enum BackgroundColor {
  default = "#F5F5F5",
  purple = "#9650FA",
  purpleLight = "#F0E6FF",
  border = "#F5F5F5",
  full = "#F5F5F5"
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
    background: BackgroundColor[fill || "default"],
    width: Width[size || "md"],
    height: Height[size || "md"]
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