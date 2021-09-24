import { ReactElement, Component, MouseEvent } from 'react';
import { colors } from '../shared/styles';

export type SizeType = "sm" | "md" | "lg";

export type BackgroundNoneSupportFillStyleType = "default" | "purple";

export type FillStyleType = "purpleLight" | "link" | "border" | "full" | BackgroundNoneSupportFillStyleType;

export type BackgroundNoneFillStyleType = "bnDefault" | "bnPurple";

export interface FillStyleObjectType {
  fillStyle?: FillStyleType,
  background?: boolean,
  full?: boolean
};

export type CursorType = "not-allowed" | "progress" | "pointer";

export interface ButtonProps {
  leftIcon?: ReactElement<any, string | ((props: any) => ReactElement<any, any> | null) | (new (props: any) => Component<any, any, any>)>;
  rightIcon?: ReactElement<any, string | ((props: any) => ReactElement<any, any> | null) | (new (props: any) => Component<any, any, any>)>;
  fill?: FillStyleType | FillStyleObjectType;
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
    paddingVertical: number;
    paddingHorizontal: number;
    size: SizeType;
    fillStyle: FillStyleType | FillStyleObjectType;
    marginLeft: number;
    marginRight: number;
};

export const Colors = {
  default: colors.grey100,
  defaultActive: colors.grey300,

  purple: colors.purple400,
  purpleActive: colors.purple500,

  purpleLight: colors.purple50,
  purpleLightActive: colors.purple100,

  border: colors.white,
  borderColor: colors.grey100,
  borderActive: colors.grey100,

  link: colors.white,
  linkActive: colors.white,

  bnDefault: colors.white,
  bnDefaultActive: colors.grey50,

  bnPurple: colors.white,
  bnPurpleActive: colors.purple50,

  full: colors.grey100
};

export const FontColors = {
  default: colors.grey700,
  purple: colors.white,
  purpleLight: colors.purple400,
  border: colors.grey700,
  link: colors.blue400,
  full: colors.grey700,
  bnDefault: colors.grey700,
  bnPurple: colors.purple400
};