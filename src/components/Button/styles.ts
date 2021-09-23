import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
    ButtonElementProps, 
    Colors, 
    FontColors,
} from './types';
import {
    sizeToCssObject,
    colorObjectToCssObject
} from './functions';

export const ButtonElement = styled.button<ButtonElementProps>`
    border: none;
    cursor: ${(props) => props.cursor};
    background: ${(props) => props.background};
    margin-left: ${(props) => props.marginLeft}px;
    margin-right: ${(props) => props.marginRight}px;
    padding: ${(props) => `${props.paddingVertical}px ${props.paddingHorizontal}px`};
    ${(props) => sizeToCssObject(props.size)}
    ${(props) => colorObjectToCssObject(props.fillStyle)}
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
    &:hover, &:active {
        background: ${Colors.defaultActive};
    }
`;

export const Purple = css`
    &:hover, &:active {
        background: ${Colors.purpleActive};
    }
`;

export const PurpleLight = css`
    &:hover, &:active {
        background: ${Colors.purpleLightActive};
    }
`;

export const Border = css`
    border: 1px solid ${Colors.borderColor};
    &:hover, &:active {
        background: ${Colors.borderActive};
    }
`;

export const BnDefault = css`
    background: none;
    &:hover, &:active {
        background: ${Colors.bnDefaultActive};
    }
`;

export const BnPurple = css`
    background: none;
    &:hover, &:active {
        background: ${Colors.bnPurpleActive};
    }
`;

export const Full = css`

`;

export const Link = css`
    &:hover, &:active {
        text-decoration: underline 1px solid ${FontColors.link};
    }
`;