import { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

import Timeline from '../Timeline';

import { ImageCategoriesKeys, ISlide, ISlideData } from './gallery.types';
import slidesData from './slidesData';

import './gallery.scss';

interface IProps {
    categoryStart: ImageCategoriesKeys;
    setActiveCategory: (category: ImageCategoriesKeys) => void;
}

const Gallery = ({
    categoryStart,
    setActiveCategory,
}: IProps) => {
    const SLIDE_WIDTH_DEFAULT = 1280;
    const SLIDE_HEIGHT_DEFAULT = 850;
    const SLIDE_TRANSITION_TIME = 200;
    const NAV_TOP_DEFAULT = -27;
    const NAV_TRANSITION_TIME = 300;
    const styleVars: Record<string, string> = {};
    const initialSlideSetRef = useRef<boolean>(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const prevBtnRef = useRef<HTMLButtonElement | null>(null);
    const nextBtnRef = useRef<HTMLButtonElement | null>(null);
    const [slideWidth, setSlideWidth] = useState<number>(SLIDE_WIDTH_DEFAULT);
    const [slideHeight, setSlideHeight] = useState<number>(SLIDE_HEIGHT_DEFAULT);
    const [slideLeft, setSlideLeft] = useState<number>(0);
    const [navTop, setNavTop] = useState<number>(NAV_TOP_DEFAULT);
    const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
    const [timelineText, setTimelineText] = useState<string>();

    styleVars['--navTransitionTime'] = `${NAV_TRANSITION_TIME}ms`;
    styleVars['--slideTransitionTime'] = `${SLIDE_TRANSITION_TIME}ms`;
    styleVars['--navTop'] = `${navTop}px`;

    const slides = slidesData.map((slide: ISlide, index: number) => {
        return (
            <div
                key={`slide-${index + 1}`}
                className={`gallery-slides-slide ${slide.text ? 'text-slide' : ''}`}
                style={{
                    width: `${slideWidth}px`,
                    height: `${slideHeight}px`,
                    flexBasis: `${slideWidth}px`,
                }}
            >
                {slide.text && (
                    <div className="gallery-slides-slide-text" dangerouslySetInnerHTML={{ __html: slide.text }} />
                )}
                {slide.image && (
                    <img
                        src={slide.image}
                        alt={!slide.caption ? 'Gallery Image' : ''}
                        width="1280"
                        height="850"
                    />
                )}
                {(slide.caption && !slide.text) && (
                    <span className="gallery-slides-slide-caption" dangerouslySetInnerHTML={{ __html: slide.caption }} />
                )}
            </div>
        );
    });

    const updateSlideLeft = useCallback(() => {
        const newSlideLeft = activeSlideIndex * slideWidth * -1;
        setSlideLeft(newSlideLeft);
    }, [setSlideLeft, activeSlideIndex, slideWidth]);

    const setActiveGalleryData = useCallback((slideIndex: number) => {
        const newActiveSlide = slidesData[slideIndex];
        setActiveSlideIndex(slideIndex);
        setTimelineText(newActiveSlide.date);
        setActiveCategory(newActiveSlide.category);
        updateSlideLeft();
    }, [setActiveSlideIndex, setTimelineText, setActiveCategory, updateSlideLeft]);

    const setActiveNavStyle = (button: HTMLButtonElement | null) => {
        if (!button) {
            return;
        }

        button.classList.add('active');

        setTimeout(() => {
            button.classList.remove('active');
        }, NAV_TRANSITION_TIME)
    };

    const handlePrevBtnClick = useCallback(() => {
        if (activeSlideIndex === 0) return;
        setActiveNavStyle(prevBtnRef.current);
        setActiveGalleryData(activeSlideIndex - 1);
    }, [setActiveGalleryData, activeSlideIndex]);

    const handleNextBtnClick = useCallback(() => {
        if (activeSlideIndex === slidesData.length - 1) return;
        setActiveNavStyle(nextBtnRef.current);
        setActiveGalleryData(activeSlideIndex + 1);
    }, [setActiveGalleryData, activeSlideIndex]);

    const handleArrowKeys = useCallback((event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
            handlePrevBtnClick();
        } if (event.key === 'ArrowRight') {
            handleNextBtnClick();
        } else {
            return;
        }
    }, [handlePrevBtnClick, handleNextBtnClick]);

    const handleResize = useCallback(() => {
        if (!wrapperRef.current) {
            return;
        }

        const wrapperWidth = wrapperRef.current.offsetWidth;
        const wrapperHeight = Math.round(wrapperWidth * (SLIDE_HEIGHT_DEFAULT / SLIDE_WIDTH_DEFAULT));
        const navHeight = nextBtnRef.current?.clientHeight;

        setSlideWidth(wrapperWidth);
        setSlideHeight(wrapperHeight);
        setNavTop(navHeight ? (navHeight / 2) * -1 : NAV_TOP_DEFAULT);
        updateSlideLeft();
    }, [updateSlideLeft, NAV_TOP_DEFAULT]);

    useEffect(() => {
        const slideIndexForCategory = slidesData.findIndex((slide: ISlideData) => slide.category === categoryStart);

        console.log(categoryStart);

        if (slideIndexForCategory > -1) {
            setActiveGalleryData(slideIndexForCategory);
        }

        // TODO: adding setActiveGalleryData to dependency array appears to cause this useEffect to run
        // when other nav buttons are clicked even though it's memoized. Not sure which state is causing
        // a rerender
    }, [categoryStart]);

    useEffect(() => {
        handleResize();

        document.addEventListener('keydown', handleArrowKeys, false);
        window.addEventListener('resize', handleResize);

        if (!initialSlideSetRef.current) {
            setActiveCategory(slidesData[0].category);
            initialSlideSetRef.current = true;
        }

        return () => {
            document.removeEventListener('keydown', handleArrowKeys, false);
            window.removeEventListener('resize', handleResize);
        }
    },[setActiveCategory, handleArrowKeys, handleResize]);

    return (
        <>
            <div className="gallery" style={styleVars}>
                <div
                    ref={wrapperRef}
                    className="gallery-wrap"
                    style={{
                        height: `${slideHeight}px`,
                        maxHeight: `${SLIDE_HEIGHT_DEFAULT}px`,
                        maxWidth: `${SLIDE_WIDTH_DEFAULT}px`,
                    }}
                >
                    <button
                        ref={prevBtnRef}
                        type="button"
                        aria-label="previous slide"
                        className={`gallery-nav -prev ${activeSlideIndex === 0 ? '-disabled' : ''}`}
                        onClick={() => handlePrevBtnClick()}
                    >
                        <FontAwesomeIcon icon={faCircleChevronLeft} className="gallery-nav-icon" />
                    </button>
                    <div className="gallery-inner">
                        <div className="gallery-slides" style={{ left: slideLeft }}>
                            {slides}
                        </div>
                    </div>
                    <button
                        ref={nextBtnRef}
                        type="button"
                        aria-label="next slide"
                        className={`gallery-nav -next ${activeSlideIndex === slidesData.length - 1 ? '-disabled' : ''}`}
                        onClick={() => handleNextBtnClick()}
                    >
                        <FontAwesomeIcon icon={faCircleChevronRight} className="gallery-nav-icon" />
                    </button>
                </div>
                <Timeline
                    activeSlideIndex={activeSlideIndex}
                    slidesData={slidesData}
                    timelineText={timelineText}
                    setActiveSlideIndex={setActiveGalleryData}
                />
            </div>
        </>
    );
};

export default Gallery;