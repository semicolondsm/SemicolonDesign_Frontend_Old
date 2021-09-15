import styled from '@emotion/styled';
import { css } from '@emotion/react';

type CursorType = "not-allowed" | "progress" | "pointer";
type BackgroundType = "#F5F5F5" | "#9650FA" | "#F0E6FF";

interface ButtonElementProps {
    cursor: CursorType;
    background: BackgroundType;
    width: number;
    height: number;
};

export const ButtonElement = styled.button<ButtonElementProps>`
    cursor: ${(props) => props.cursor};
    background: ${(props) => props.background};
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
`;

export const Large = css`

`;

export const Medium = css`

`;

export const Small = css`

`;

export const Purple = css`

`;

export const PurpleLight = css`

`;

export const Border = css`

`;

export const Link = css`

`;

// export const 