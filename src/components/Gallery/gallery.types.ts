export enum ImageCategoryEnum {
    BASS = 'bass',
    CAREER = 'career',
    CHILDHOOD = 'childhoood',
    COLLEGE = 'college',
    FAMILY = 'family',
    MARINE = 'marineCorps',
    MOTORCYCLES = 'motorcycles',
    NONE = 'none',
    PHOTOGRAPHY = 'photography',
}

export interface IHeaderCategory {
    category: ImageCategoryEnum;
    text: string;
}

export interface ISlideData {
    caption?: string;
    category: ImageCategoryEnum;
    date?: string;
    image?: string;
    text?: string;
}

export interface ISlide {
    caption?: string;
    date?: string;
    image?: string;
    text?: string;
}