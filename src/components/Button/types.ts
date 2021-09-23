import { ReactElement, Component, MouseEvent } from 'react';
import { colors } from '../shared/styles';

export type SizeType = "sm" | "md" | "lg";
export type FillStyleType = "default" | "purple" | "purpleLight" | "border" | "full";
export type CursorType = "not-allowed" | "progress" | "pointer";

export interface ButtonProps {
  leftIcon?: ReactElement<any, string | ((props: any) => ReactElement<any, any> | null) | (new (props: any) => Component<any, any, any>)>;
  rightIcon?: ReactElement<any, string | ((props: any) => ReactElement<any, any> | null) | (new (props: any) => Component<any, any, any>)>;
  fill?: FillStyleType;
  size?: SizeType;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  background?: boolean;
  onClick?: (event?: MouseEvent<HTMLElement, MouseEvent>) => void;
};

export interface ButtonElementProps {
    cursor: CursorType;
    background: string;
    width: number;
    height: number;
    size: SizeType;
    fillStyle: FillStyleType;
    marginLeft: number;
    marginRight: number;
};

export const Colors = {
  default: colors.grey100,
  defaultActive: colors.grey300,
  defaultColor: colors.grey700,
  purple: colors.purple400,
  purpleLight: colors.purple50,
  border: colors.grey100,
  full: colors.grey100
};
