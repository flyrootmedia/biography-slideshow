import { ImageCategories, ImageCategoriesKeys, IHeaderCategory } from '../Gallery/gallery.types';

import './siteHeader.scss';

const headerCategories: IHeaderCategory[] = [
    { category: ImageCategories.childhood, text: 'Childhood' },
    { category: ImageCategories.bass, text: 'Bass & Music' },
    { category: ImageCategories.marineCorps, text: 'Marine Corps' },
    { category: ImageCategories.college, text: 'College' },
    { category: ImageCategories.photography, text: 'Photography' },
    { category: ImageCategories.career, text: 'Career' },
    { category: ImageCategories.motorcycles, text: 'Motorcycles' },
    { category: ImageCategories.family, text: 'Family' },
];

interface IProps {
    activeCategory: ImageCategoriesKeys;
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