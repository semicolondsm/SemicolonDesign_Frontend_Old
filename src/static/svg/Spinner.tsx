import React, { FC } from 'react';
import { colors } from '../../components/shared/styles';
import { FillStyleType, BackgroundNoneFillStyleType } from '../../components/Button/types';

interface SpinnerProps {
    fill: FillStyleType | BackgroundNoneFillStyleType;
}

const Colors = {
    default: {
        inColor: colors.grey500,
        outColor: colors.grey300
    },
    purple: {
        inColor: colors.white,
        outColor: colors.purple500
    },
    purpleLight: {
        inColor: colors.purple400,
        outColor: colors.purple100
    },
    border: {
        inColor: colors.grey500,
        outColor: colors.grey300
    },
    link: {
        inColor: colors.white,
        outColor: colors.white
    },
    bnDefault: {
        inColor: colors.white,
        outColor: colors.white
    },
    bnPurple: {
        inColor: colors.white,
        outColor: colors.white
    },
}

const Spinner: FC<SpinnerProps> = (props) => {
    const {outColor, inColor} = Colors[props.fill];

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur=".75s" from="0 0 0" to="360 0 0" repeatCount="indefinite"></animateTransform>
            <g id="그룹_738" data-name="그룹 738" transform="translate(-970 -879)">
                <g id="타원_144" data-name="타원 144" transform="translate(970 879)" fill="none" stroke={outColor} stroke-width="1">
                    <circle cx="7" cy="7" r="7" stroke="none"/>
                    <circle cx="7" cy="7" r="6.5" fill="none"/>
                </g>
                <g id="타원_145" data-name="타원 145" transform="translate(970 879)" fill="none" stroke={inColor} stroke-linecap="round" stroke-width="1" stroke-dasharray="10 100">
                    <circle cx="7" cy="7" r="7" stroke="none"/>
                    <circle cx="7" cy="7" r="6.5" fill="none"/>
                </g>
            </g>
        </svg>
    )
}

export default Spinner