import { ImageCategoryEnum, ISlideData } from './gallery.types';

const slidesData: ISlideData[] = [
    {
        caption: 'Intro',
        category: ImageCategoryEnum.NONE,
        text: '<h3>Erik Ralston</h3><p>Web Developer, Musician, U.S. Marine Corps Veteran, Motorcycle Rider, Dog & Cat Lover, Sometimes Photographer</p>',
    },
    {
        caption: 'Chicago, IL',
        category: ImageCategoryEnum.CHILDHOOD,
        date: 'June 2nd, 1975 &ndash; July, 1983',
        image: '/gallery/childhood-01.jpg',
    },
    {
        caption: 'Andover, MA',
        category: ImageCategoryEnum.CHILDHOOD,
        date: 'July, 1983 &ndash; September, 1993',
        image: '/gallery/childhood-02.jpg',
    },
    {
        caption: 'The various stages of my bass playing',
        category: ImageCategoryEnum.BASS,
        date: '1989 &ndash; Present',
        image: '/gallery/bass-01.jpg',
    },
    {
        caption: 'Running the Risk, Auradrone, Honeypot, Glitter Rose',
        category: ImageCategoryEnum.BASS,
        date: '2012 &ndash; 2020',
        image: '/gallery/bass-02.jpg',
    },
    {
        caption: 'The Screen',
        category: ImageCategoryEnum.BASS,
        date: '1998 &ndash; 2011',
        image: '/gallery/bass-03.jpg',
    },
    {
        caption: 'Fun Fact #1',
        category: ImageCategoryEnum.BASS,
        text: '<h3>Fun Fact #1</h3><p>My senior year of high school I played in the first iteration of a metal band called Converge who are still around and are now pretty big in that scene.</p>',
    },
    {
        caption: 'Boot Camp & School of Infantry',
        category: ImageCategoryEnum.MARINE,
        date: 'September, 1993 &ndash; March, 1994',
        image: '/gallery/marines-01.jpg',
    },
    {
        caption: '3/7 Weapons Co., 81s Platoon, 1st Marine Division',
        category: ImageCategoryEnum.MARINE,
        date: 'March, 1994 &ndash; August, 1997',
        image: '/gallery/marines-02.jpg',
    },
    {
        caption: 'Japan & Thailand',
        category: ImageCategoryEnum.MARINE,
        date: '1994 & 1997',
        image: '/gallery/marines-03.jpg',
    },
    {
        caption: 'Fun Fact #2',
        category: ImageCategoryEnum.MARINE,
        text: '<h3>Fun Fact #2</h3><p>I was in Tokyo in March of &rsquo;95 when, if I&rsquo;m remembering correctly, a cult released sarin nerve gas into the subway system that killed about a dozen people and injured several thousand.</p>',
    },
    {
        caption: 'University of New Hampshire & University of Massachusetts',
        category: ImageCategoryEnum.COLLEGE,
        date: '1997 &ndash; 2003',
        image: '/gallery/college-01.jpg',
    },
    {
        caption: 'Fun Fact #3',
        category: ImageCategoryEnum.COLLEGE,
        text: '<h3>Fun Fact #3</h3><p>The Outdoor Education major I was enrolled in at UNH required that we take a basic EMT course, but I took it a step further and got certified and ended up riding on a volunteer ambulance corps at the school for a few of months.</p>',
    },
    {
        caption: 'The Boston Skyline',
        category: ImageCategoryEnum.PHOTOGRAPHY,
        date: '',
        image: '/gallery/photography-01.jpg',
    },
    {
        caption: 'The Willis (Sears) Tower &<br>Chicago Board of Trade, Chicago, IL',
        category: ImageCategoryEnum.PHOTOGRAPHY,
        date: '',
        image: '/gallery/photography-02.jpg',
    },
    {
        caption: 'IFC Tower and Random Billboard, Hong Kong',
        category: ImageCategoryEnum.PHOTOGRAPHY,
        date: '',
        image: '/gallery/photography-03.jpg',
    },
    {
        caption: 'The Peak, Hong Kong',
        category: ImageCategoryEnum.PHOTOGRAPHY,
        date: '',
        image: '/gallery/photography-04.jpg',
    },
    {
        caption: 'The Hollywood Skyline from the roof<br>of the Trailer Park Building',
        category: ImageCategoryEnum.PHOTOGRAPHY,
        date: '',
        image: '/gallery/photography-05.jpg',
    },
    {
        caption: 'A dam in Ballardvale, Andover, MA',
        category: ImageCategoryEnum.PHOTOGRAPHY,
        date: '',
        image: '/gallery/photography-06.jpg',
    },
    {
        caption: 'The Chapel at Philips Academy, Andover, MA',
        category: ImageCategoryEnum.PHOTOGRAPHY,
        date: '',
        image: '/gallery/photography-07.jpg',
    },
    {
        caption: 'Random Jobs',
        category: ImageCategoryEnum.NONE,
        date: '1997 &ndash; 2006',
        text: '<h3>' +
            '<span class="hide-mobile">All the random jobs I had before starting my career:</span>' +
            '<span class="hide-tablet">Jobs I had before starting my career:</span>' +
            '</h3>' +
            '<ul><li>Lawn sign installer for a Realtor</li>' +
            '<li>Waiter at a diner</li>' +
            '<li>Ball boy for the UNH football team</li>' +
            '<li>Maintenance guy at the apartment complex where I lived</li>' +
            '<li>House painter</li>' +
            '<li>Landscaper</li>' +
            '<li>Volunteer EMT</li>' +
            '<li>Sales guy at a Radio Shack</li>' +
            '<li>Intern in the Civil Engineering department of Andover, where I helped with surveying streets for a new mapping software</li>' +
            '<li>Front desk guy at a gym</li>' +
            '<li>Intern in the production department of a radio station, where I mic&rsquo;d live performances and helped produce commercial spots</li>' +
            '<li>Starbucks barista</li>' +
            '<li>Freelance Graphic Designer/Photographer</li>' +
            '<li>“Counselor” at a boarding school in New Hampshire for behaviorally challenged teenagers</li></ul>',
    },
    {
        caption: 'Silver Oven<br>Trailer Park<br>Guitar Center<br>Harbor Freight',
        category: ImageCategoryEnum.CAREER,
        date: '2006 &ndash; Present',
        image: '/gallery/career-01.jpg',
    },
    {
        caption: 'My Bikes in their Various Forms',
        category: ImageCategoryEnum.MOTORCYCLES,
        date: 'August 2013 &ndash; Present',
        image: '/gallery/moto-01.jpg',
    },
    {
        caption: 'DGR – 2013, 2018, 2024',
        category: ImageCategoryEnum.MOTORCYCLES,
        date: 'August 2013 &ndash; Present',
        image: '/gallery/moto-02.jpg',
    },
    {
        caption: 'Road Trippin’',
        category: ImageCategoryEnum.MOTORCYCLES,
        date: 'August 2013 &ndash; Present',
        image: '/gallery/moto-03.jpg',
    },
    {
        caption: 'Pandemic Activism, Classic Track Days, Poppy Fields',
        category: ImageCategoryEnum.MOTORCYCLES,
        date: 'August 2013 &ndash; Present',
        image: '/gallery/moto-04.jpg',
    },
    {
        caption: 'The Fam',
        category: ImageCategoryEnum.FAMILY,
        date: '',
        image: '/gallery/family-02.jpg',
    },
    {
        caption: 'Dedication to my Nana',
        category: ImageCategoryEnum.FAMILY,
        date: '',
        image: '/gallery/family-01.jpg',
    },
    {
        caption: 'Dedication to my Alley Kitty',
        category: ImageCategoryEnum.FAMILY,
        date: '',
        image: '/gallery/family-03.jpg',
    },
    {
        caption: 'The Doggos (and random cat pic)',
        category: ImageCategoryEnum.FAMILY,
        date: '',
        image: '/gallery/family-04.jpg',
    },
    {
        caption: 'My Super-Talented Wife',
        category: ImageCategoryEnum.FAMILY,
        date: '',
        image: '/gallery/family-05.jpg',
    },
    {
        caption: 'Some Different Sides of Me',
        category: ImageCategoryEnum.NONE,
        date: '',
        image: '/gallery/none-01.jpg',
    },
    {
        caption: 'The End',
        category: ImageCategoryEnum.NONE,
        text: '<h3>Questions, comments,<br>or concerns?</h3>',
    }
];

export default slidesData;