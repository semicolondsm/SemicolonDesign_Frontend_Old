export type ThemeName = (
    | 'light'
    | 'dark'
);

export type BehaviorMode = (
    | 'auto'
    | 'light-only'
    | 'dark-only'
);

export const getThemeName = (mode: BehaviorMode, isDarkMode: boolean): ThemeName => {
    return ({
      'auto'      : isDarkMode ? 'dark' : 'light',
      'light-only': 'light',
      'dark-only' : 'dark',
    } as const)[mode];
};
  
export const isDarkMode = () => {
    const regx = new RegExp(/dark/);
    return regx.test(window.navigator.userAgent);
}