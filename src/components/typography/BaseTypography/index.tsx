import React, { FC, PureComponent } from 'react';
import styled from '@emotion/styled';

interface Props extends PureComponent {
    children?: React.ReactNode,
    color?: string,
    md: string,
    textAlign?: string, 
    className? : string,
}

const defaultElement = {
    Title1: 'h1',
    Title2: 'h2',
    Title3: 'h3',
    SubTitle1: 'h4',
    SubTitle2: 'h5',
    SubTitle3: 'h6',
    Body1: 'p',
    Body2: 'p',
    Body3: 'p',
    Caption: 'div',
    Botton: 'div',


}

const TextElement = styled.div`

`


export const BaseTypography: FC<Props> = (props) => {
    const {children, ...restProps} = props;
    return(
        <TextElement as="div"  {...restProps}>
            {children}
        </TextElement>
    )
}