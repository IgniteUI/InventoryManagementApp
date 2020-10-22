export interface Colors {
    primary?: string;
    secondary?: string;
    surface?: string;
    error?: string;
    success?: string;
    warn?: string;
    info?: string;
    grays?: string;
}

export interface IFontContainer {
    title: string;
    family: string;
    category?: string;
}

export interface IColorChangedEventArgs {
    colorChanged: string;
    newValue: string;
}

export interface IElevationSelectedEventArgs {
    newValue?: boolean;
}

export interface IRoundnessSelectedEventArgs {
    newValue: number;
}

export interface ITypefaceSelectedEventArgs {
    newValue: IFontContainer;
}

export interface IThemeStyleSelectedEventArgs {
    newValue: string;
}

export interface ITheme {
    globalTheme: string;
    colors: Colors;
    typeface: IFontContainer;
    roundness?: number;
    elevation?: boolean;
}

export interface IcardData {
    imageURL: string;
    title: string;
    totalEarned: number;
    soldPieces: number;
}
