import { ISlideData } from '../Gallery/gallery.types';

import './timeline.scss';

interface IProps {
    activeSlideIndex: number;
    slidesData: ISlideData[];
    timelineText?: string;
    setActiveSlideIndex: (index: number) => void;
}

const Timeline = ({
    activeSlideIndex,
    slidesData,
    timelineText = '',
    setActiveSlideIndex,
}: IProps) => {
    const indicators = slidesData.map((slide: ISlideData, i: number) => {
        const label = slide.caption || `Slide ${i + 1}`;
        const title = label.replace(/<[^>]+>/g, ' ');

        return (
            <span
                key={`indicator${i}`}
                className={`timeline-indicators-indicator ${i === activeSlideIndex ? '-active' : ''}`}
                role="button"
                aria-label={label}
                title={title}
                onClick={() => setActiveSlideIndex(i)}
            />
        );
    });

    return (
        <div className="timeline">
            <div className="timeline-indicators">{indicators}</div>
            <div className="timeline-text" dangerouslySetInnerHTML={{ __html: timelineText }} />
        </div>
    );
};

export default Timeline;