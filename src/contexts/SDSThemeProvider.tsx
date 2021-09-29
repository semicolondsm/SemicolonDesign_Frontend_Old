import React, { FC } from "react"
import { ThemeProvider} from '@emotion/react';
import { colors } from '../design-token'
import { getThemeName, isDarkMode } from "./utils";
import { ColorScheme } from 'design-token/colors/types';



export type SDSTheme = {
    colors: ColorScheme
}

declare module '@emotion/react' {
    export interface Theme extends SDSTheme {}
}

interface Props {
    children: React.ReactNode,
    mode?: 'auto' | 'dark-only' | 'light-only'
}

export const SDSThemeProvider: FC<Props> = ({children, mode = 'auto'}) => {
    const theme = React.useMemo(() => {
        const colorTheme = colors[getThemeName(mode, isDarkMode())];
        return {
            colors: {
                ...colorTheme.scheme
            }
        };
    },[mode])
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>   
    )
}

