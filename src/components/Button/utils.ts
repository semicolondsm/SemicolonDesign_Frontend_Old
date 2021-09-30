import { 
    SizeType, 
    FillStyleType,
    BackgroundNoneFillStyleType,
    FillStyleObjectType,
} from './types';

export function colorObjectToColorString(color?: FillStyleType | FillStyleObjectType, addedBn?: boolean) {
    if(typeof color === "string") return color || "default";
    else if(typeof color === "undefined") return "default"
    else if(addedBn && color.background === false) {
        switch(color.fillStyle) {
            case "default":
                return firstCharToTypeMessage(color.fillStyle);
            case "purple":
                return firstCharToTypeMessage(color.fillStyle);
            default:
                return color.fillStyle || "default";
        }
    } else return color.fillStyle || "default";
}

export function firstCharToTypeMessage(message: string): BackgroundNoneFillStyleType {
    return "bn" + message.charAt(0).toUpperCase() + message.slice(1) as BackgroundNoneFillStyleType;
}

export function isBackgroundNone(color: string): boolean {
    if(color.indexOf("bn") !== -1) return true;
    else return false;
}