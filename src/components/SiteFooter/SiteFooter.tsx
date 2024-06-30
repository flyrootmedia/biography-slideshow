import './siteFooter.scss';

const SiteFooter = () => {
    return (
        <div className="site-footer">
            <p>&copy;{new Date().getFullYear()} Erik Ralston</p>
        </div>
    );
};

export default SiteFooter;