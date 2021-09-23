import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '../shared/styles';
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
    /* width: ${(props) => props.width}px;
    height: ${(props) => props.height}px; */
    margin-left: ${(props) => props.marginLeft}px;
    margin-right: ${(props) => props.marginRight}px;
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
    padding: 16px 67px;
    border-radius: 12px;
`;

export const Small = css`
    padding: 14px 16px;
    border-radius: 4px;
`;

export const Default = css`
    color: ${Colors.defaultColor};
    &:hover {
        background: ${Colors.defaultActive};
    }

    &:active {
        background: ${Colors.defaultActive};
    }
`;

export const Purple = css`
    &:hover {

    }

    &:active {

    }
`;

export const PurpleLight = css`
    &:hover {

    }

    &:active {

    }
`;

export const Border = css`
    &:hover {

    }

    &:active {

    }
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
        default:
            return Default;
    }
}