import { ImageCategoryEnum, IHeaderCategory } from '../Gallery/gallery.types';

import './siteHeader.scss';

const headerCategories: IHeaderCategory[] = [
    { category: ImageCategoryEnum.CHILDHOOD, text: 'Childhood' },
    { category: ImageCategoryEnum.BASS, text: 'Bass & Music' },
    { category: ImageCategoryEnum.MARINE, text: 'Marine Corps' },
    { category: ImageCategoryEnum.COLLEGE, text: 'College' },
    { category: ImageCategoryEnum.PHOTOGRAPHY, text: 'Photography' },
    { category: ImageCategoryEnum.CAREER, text: 'Career' },
    { category: ImageCategoryEnum.MOTORCYCLES, text: 'Motorcycles' },
    { category: ImageCategoryEnum.FAMILY, text: 'Family' },
];

interface IProps {
    activeCategory: ImageCategoryEnum;
}

const SiteHeader = ({ activeCategory }: IProps) => {
    const renderHeaderCategories = () => (
        headerCategories.map((headerCategory: IHeaderCategory, i: number) => (
            <span key={headerCategory.text} className={activeCategory === headerCategory.category ? 'active' : ''}>
                {`${headerCategory.text}${i !== headerCategories.length - 1 ? ', ' : ''}`}
            </span>
        ))
    );

    return (
        <div className="site-header">
            <h1><span>Meet</span> Erik R.</h1>
            <h2>{renderHeaderCategories()}</h2>
        </div>
    );
};

export default SiteHeader;