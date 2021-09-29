import React, { FC } from 'react';
import styled from '@emotion/styled';
import { colors, typography } from '../../shared/styles';

import { 
    body1, 
    body2, 
    body3,
    title1,
    title2,
    title3,
    subtitle1,
    subtitle2,
    subtitle3,
    subtitle4,
    caption,
    botton,
} from './textStyles';

interface OwnProps {
    md: Typo;
}

export interface TypoProps {
    children?: React.ReactNode,
    color?: string,
    textAlign?: string, 
    className?: string,
    fontWeight?: FontWeight,
}

type FontWeight = keyof typeof typography.fontWeight;
type Props = OwnProps & TypoProps;
type Typo = keyof typeof typographyList;
type TypoElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h6' | 'p' | 'div';

const defaultElement = {
    Title1: 'h1',
    Title2: 'h2',
    Title3: 'h3',
    Subtitle1: 'h4',
    Subtitle2: 'h5',
    Subtitle3: 'h6',
    Subtitle4: 'h6',
    Body1: 'p',
    Body2: 'p',
    Body3: 'p',
    Caption: 'div',
    Botton: 'div',
}

const defaultWeight = {
    Title1: typography.fontWeight.bold,
    Title2: typography.fontWeight.bold,
    Title3: typography.fontWeight.bold,
    Subtitle1: typography.fontWeight.medium,
    Subtitle2: typography.fontWeight.medium,
    Subtitle3: typography.fontWeight.medium,
    Subtitle4: typography.fontWeight.medium,
    Body1: typography.fontWeight.regular,
    Body2: typography.fontWeight.regular,
    Body3: typography.fontWeight.regular,
    Caption: typography.fontWeight.regular,
    Botton: typography.fontWeight.regular,
}

const typographyList = {
    Title1: title1,
    Title2: title2,
    Title3: title3,
    Subtitle1: subtitle1,
    Subtitle2: subtitle2,
    Subtitle3: subtitle3,
    Subtitle4: subtitle4,
    Body1: body1,
    Body2: body2,
    Body3: body3,
    Caption: caption,
    Botton: botton,
}



const TextElement = styled.div<Props>`
    margin: 0;
    color : ${(props)=>props.color || props.theme.colors.black };
    font-weight: ${({fontWeight, md}) => fontWeight ? typography.fontWeight[fontWeight]: defaultWeight[md]};
    ${(props)=>props.textAlign && `text-align: ${props.textAlign}`};
    ${(props)=>typographyList[props.md]};
`


export const BaseTypography: FC<Props> = (props) => {
    const {children, md, ...restProps} = props;
    const element = defaultElement[md] as TypoElement;
    return(
        <TextElement md={md} as={element} {...restProps}>
            {children}
        </TextElement>
    )
}