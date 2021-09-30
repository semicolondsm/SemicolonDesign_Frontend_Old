import React, { FC } from 'react';
import { ButtonElement } from './styles';
import { 
  Colors, 
  ButtonProps,
  FontColors,
  ActiveColors,
  DisabledColors,
  DisabledFontColors
} from './types';
import { Botton } from '../typography';
import { 
  colorObjectToColorString, isBackgroundNone
} from './utils';
import Spinner from '../../static/svg/Spinner';
// import * as Styles from './styles';

enum Cursor {
  DISABLED = "not-allowed",
  LOADING = "progress",
  DEFAULT = "pointer"
};

enum PaddingVertical {
  lg = 16,
  md = 16,
  sm = 8
};

enum PaddingHorizontal {
  lg = 150,
  md = 68,
  sm = 16
};

enum BorderRadius {
  lg = 12,
  md = 12,
  sm = 4
}

const initialProps: ButtonProps = {
  fill: "default",
  size: "md",
  loading: false,
  disabled: false,
  background: true
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
    size,
  } = props;

  const cursorType = disabled ? "DISABLED" : loading ? "LOADING" : "DEFAULT";
  const colorString = colorObjectToColorString(fill, true);
  const BackgroundColor = disabled ? DisabledColors[colorString] : Colors[colorString];
  const BackgroundActiveColor =  disabled ? DisabledColors[colorString] : ActiveColors[colorString];
  const FontColor = disabled ? DisabledFontColors[colorString] : FontColors[colorString];

  const styledProps = {
    cursor: Cursor[cursorType],
    background: BackgroundColor,
    activeBackground: loading && isBackgroundNone(colorString) ? BackgroundColor : BackgroundActiveColor,
    paddingVertical: PaddingVertical[size || "md"],
    paddingHorizontal: PaddingHorizontal[size || "md"],
    borderRadius: BorderRadius[size || "md"],
    size: size || "md",
    fillStyle: fill || "default",
    marginLeft: leftIcon ? 6 : 0,
    marginRight: loading || rightIcon ? 6 : 0,
  };

  return (
    <ButtonElement
      {...disabled}
      {...className}
      {...onClick}
      {...styledProps}
    >
      { leftIcon }
      <Botton className="semicolon-button-typography" color={FontColor}>
        { children }
      </Botton>
      { loading && <Spinner fill={colorString} /> }
      { rightIcon }
    </ButtonElement>
  )
};

export default Button;