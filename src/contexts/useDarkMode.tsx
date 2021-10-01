import { useEffect, useState } from "react";

type UserAgentPrefix = 'auto' | 'light' | 'dark';

const query = ([mode] : TemplateStringsArray) => `(prefers-color-scheme: ${mode})`

const getUserAgentThemePrefix = (): UserAgentPrefix => {
    if(typeof window !== 'undefined'){
        const themes = ["dark", "light"];
        const theme = window.navigator.userAgent.split(" ").reverse()[0];
        return (themes.includes(theme) ? theme : 'auto') as UserAgentPrefix; 
    }
    return 'auto';
}


const useDarkMode = () => {
    const [isDarkMode, setDarkMode] = useState<boolean>(false);
    
    const prefix = getUserAgentThemePrefix();

    const isDark = typeof window !== "undefined" 
    ? window.matchMedia(query`dark`).matches 
    : false;

    useEffect(() => setDarkMode(isDark), [isDark])

    useEffect(() => {
        const changeEvent = ({matches} : {matches: boolean}) => setDarkMode(matches);

        window.matchMedia(query`dark`)
        .addEventListener('change', changeEvent)

        return () => window.matchMedia(query`dark`)
        .removeEventListener("change", changeEvent)
    },[])
    
    return prefix === "auto" ? isDarkMode
    : prefix === "dark" ? true 
    : false;
}

export default useDarkMode;