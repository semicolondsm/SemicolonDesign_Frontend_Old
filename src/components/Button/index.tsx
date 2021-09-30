import React, { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { 
  Colors, 
  ButtonProps,
  FontColors,
  ActiveColors,
  DisabledColors,
  DisabledFontColors,
  ButtonElementProps,
} from './types';
import { Botton } from '../typography';
import { 
  colorObjectToColorString,
  isBackgroundNone
} from './utils';
import Spinner from '../../static/svg/Spinner';

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


export const ButtonElement = styled.button<ButtonElementProps>`
    display: flex;
    align-items: center;
    border: none;
    cursor: ${(props) => props.cursor};
    background: ${(props) => props.background};
    padding: ${(props) => `${props.paddingVertical}px ${props.paddingHorizontal}px`};
    border-radius: ${(props) => props.borderRadius}px;
    border: 1px solid ${(props) => props.borderColor};
    
    ${(props) => props.isFull && css`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0;
    `}

    ${(props) => props.fillStyle === "link" && css`
        &:hover, &:active {
            text-decoration: underline 1px solid ${FontColors.link};
        }
    `}

    &:hover, &:active {
        background: ${(props) => props.activeBackground};
    }

    & .semicolon-button-typography {
        margin-left: ${(props) => props.marginLeft}px;
        margin-right: ${(props) => props.marginRight}px;
    }
`;

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
    borderColor: colorString === "border" ? Colors["borderColor"] : BackgroundColor,
    size: size || "md",
    fillStyle: colorString || "default",
    isFull: typeof fill !== "string" && fill?.full === true,
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