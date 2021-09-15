import React, { ReactElement, Component, MouseEvent, FC } from 'react';
import {  } from './styles';

type size = "sm" | "md" | "lg";
type fillStyle = "default" | "light" | "border" | "none" | "full";


interface ButtonProps {
  leftIcon?: ReactElement<any, string | ((props: any) => ReactElement<any, any> | null) | (new (props: any) => Component<any, any, any>)>;
  rightIcon?: ReactElement<any, string | ((props: any) => ReactElement<any, any> | null) | (new (props: any) => Component<any, any, any>)>;
  fill?: fillStyle;
  loading?: boolean;
  size?: size;
  className?: string;
  active?: boolean;
  onClick?: (event?: MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Button: FC<ButtonProps> = (props) => {
  const { children } = props;

  return (
    <>
      { children }
    </>
  )
};