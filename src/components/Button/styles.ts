import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
    ButtonElementProps, 
    Colors, 
    FontColors,
} from './types';
import {
    colorObjectToCssObject,
    colorObjectToColorString
} from './utils';
import { Botton } from '../typography';

export const ButtonElement = styled.button<ButtonElementProps>`
    display: flex;
    align-items: center;
    border: none;
    cursor: ${(props) => props.cursor};
    background: ${(props) => props.background};
    padding: ${(props) => `${props.paddingVertical}px ${props.paddingHorizontal}px`};
    border-radius: ${(props) => props.borderRadius}px;
    
    ${(props) => typeof props.fillStyle !== "string" && props.fillStyle.full && Full}

    &:hover, &:active {
        background: ${(props) => props.activeBackground};
    }

    & .semicolon-button-typography {
        margin-left: ${(props) => props.marginLeft}px;
        margin-right: ${(props) => props.marginRight}px;
    }
`;

export const Large = css`
    border-radius: 12px;
`;

export const Medium = css`
    border-radius: 12px;
`;

export const Small = css`
    border-radius: 4px;
`;

export const Default = css`
`;

export const Purple = css`
`;

export const PurpleLight = css`
`;

export const Border = css`
    border: 1px solid ${Colors.borderColor};
`;

export const BnDefault = css`
    background: none;
`;

export const BnPurple = css`
    background: none;
`;

export const Full = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
`;

export const Link = css`
    &:hover, &:active {
        text-decoration: underline 1px solid ${FontColors.link};
    }
`;