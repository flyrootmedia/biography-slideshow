import { useState } from 'react';

import "@fontsource/roboto-condensed";
import "@fontsource/roboto-condensed/700.css";
import "@fontsource/roboto-condensed/400-italic.css";

import SiteHeader from './components/SiteHeader';
import Gallery from './components/Gallery';
import SiteFooter from './components/SiteFooter';

import { ImageCategoriesKeys, ImageCategories } from './components/Gallery/gallery.types';

import './app.scss';

const App = () => {
    const [activeCategory, setActiveCategory] = useState<ImageCategoriesKeys>(ImageCategories.childhood);

    return (
        <>
            <div className="main-wrap">
                <SiteHeader activeCategory={activeCategory} />
                <Gallery setActiveCategory={setActiveCategory} />
            </div>
            <SiteFooter />
        </>
    );
};

export default App;