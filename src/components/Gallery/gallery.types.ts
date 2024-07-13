export const ImageCategories = {
    bass: 'bass',
    career: 'career',
    childhood: 'childhood',
    college: 'college',
    family: 'family',
    marineCorps: 'marineCorps',
    motorcycles: 'motorcycles',
    none: 'none',
    photography: 'photography',
} as const;

export type ImageCategoriesKeys = typeof ImageCategories[keyof typeof ImageCategories];

export interface IHeaderCategory {
    category: ImageCategoriesKeys;
    text: string;
}

export interface ISlideData {
    caption?: string;
    category: ImageCategoriesKeys;
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