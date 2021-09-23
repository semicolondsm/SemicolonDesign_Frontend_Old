import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
    ButtonElementProps, 
    SizeType, 
    Colors, 
    FillStyleType 
} from './types';

export const ButtonElement = styled.button<ButtonElementProps>`
    border: none;
    cursor: ${(props) => props.cursor};
    background: ${(props) => props.background};
    margin-left: ${(props) => props.marginLeft}px;
    margin-right: ${(props) => props.marginRight}px;
    padding: ${(props) => `${props.paddingVertical}px ${props.paddingHorizontal}px`};
    ${(props) => sizeToCssObject(props.size)}
    ${(props) => colorToCssObject(props.fillStyle)}
`;

export const Large = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
`;

export const Medium = css`
    border-radius: 12px;
`;

export const Small = css`
    border-radius: 4px;
`;

export const Default = css`
    &:hover {
        background: ${Colors.defaultActive};
    }

    &:active {
        background: ${Colors.defaultActive};
    }
`;

export const Purple = css`
    &:hover {
        background: ${Colors.purpleActive};
    }

    &:active {
        background: ${Colors.purpleActive};
    }
`;

export const PurpleLight = css`
    &:hover {
        background: ${Colors.purpleLightActive};
    }

    &:active {
        background: ${Colors.purpleLightActive};
    }
`;

export const Border = css`
    border: 1px solid ${Colors.borderColor};
    &:hover {
        background: ${Colors.borderActive};
    }

    &:active {
        background: ${Colors.borderActive};
    }
`;

export const Full = css`

`;

export const Link = css`

`;

// export const 

function sizeToCssObject(size: SizeType) {
    switch(size) {
        case "sm":
            return Small;
        case "md":
            return Medium;
        case "lg":
            return Large;
        default:
            return Medium;
    }
}

function colorToCssObject(color: FillStyleType) {
    switch(color) {
        case "default":
            return Default;
        case "purple":
            return Purple;
        case "purpleLight":
            return PurpleLight;
        case "border":
            return Border;
        case "full":
            return Full;
        default:
            return Default;
    }
}