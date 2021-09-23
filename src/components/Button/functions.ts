import { 
    SizeType, 
    FillStyleType,
    BackgroundNoneFillStyleType,
    FillStyleObjectType,
} from './types';
import {
    Small, 
    Medium,
    Large,
    Default, 
    Purple, 
    PurpleLight, 
    Link, 
    Full, 
    Border, 
    BnDefault, 
    BnPurple
} from './styles';

export function sizeToCssObject(size: SizeType) {
    switch(size) {
        case "sm":
            return Small;
        case "md":
            return Medium;
        case "lg":
            return Large;
        default:
            return Medium;
    }
}

export function colorToCssObject(color: FillStyleType | BackgroundNoneFillStyleType) {
    switch(color) {
        case "default":
            return Default;
        case "purple":
            return Purple;
        case "purpleLight":
            return PurpleLight;
        case "border":
            return Border;
        case "full":
            return Full;
        case "link":
            return Link;
        case "bnDefault":
            return BnDefault;
        case "bnPurple":
            return BnPurple;
        default:
            return Default;
    }
}

export function colorObjectToCssObject(color: FillStyleType | FillStyleObjectType) {
    if(typeof color === "string") {
        return colorToCssObject(color);
    } else {
        if(color.background === true) return colorToCssObject(color.fillStyle);
        else {
            switch(color.fillStyle) {
                case "default":
                    return colorToCssObject(firstCharToTypeMessage(color.fillStyle));
                case "purple":
                    return colorToCssObject(firstCharToTypeMessage(color.fillStyle));
                default:
                    return colorToCssObject(color.fillStyle);
            }
        }
    }
}

export function colorObjectToColorString(color?: FillStyleType | FillStyleObjectType, addedBn?: boolean) {
    if(typeof color === "string") return color;
    else if(typeof color === "undefined") return "default"
    else if(addedBn) {
        switch(color.fillStyle) {
            case "default":
                return firstCharToTypeMessage(color.fillStyle);
            case "purple":
                return firstCharToTypeMessage(color.fillStyle);
            default:
                return color.fillStyle;
        }
    } else return color.fillStyle;
}

export function firstCharToTypeMessage(message: string): BackgroundNoneFillStyleType {
    return "bn" + message.charAt(0).toUpperCase() + message.slice(1) as BackgroundNoneFillStyleType;
}