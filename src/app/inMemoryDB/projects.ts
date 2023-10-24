import { IProject } from '@interfaces/general.interface';

export const projects: IProject[] = [
    {
        name: 'Portfolio',
        description: [
            'Portfolio is a professionally crafted platform designed to showcase my work, skills, and accomplishments. It leverages the power of Angular and Bootstrap to create a dynamic, responsive, and visually appealing user interface.',
            'To maintain code quality and consistency, the website utilizes Husky and ESLint. Husky sets up Git hooks, enforcing code quality checks before allowing commits. ESLint, a widely-used JavaScript linting tool, helps ensure the code adheres to best practices and follows a standardized coding style.',
        ],
        image: 'portfolio.png',
        id: '1',
        links: [
            {
                id: '1',
                name: 'live',
                url: 'https://jaganb.dev/',
            },
            {
                id: '2',
                name: 'github',
                url: 'https://github.com/jaganbishoyi/jaganbishoyi.github.io',
            },
        ],
        overview: [
            'Portfolio is a professionally crafted platform designed to showcase my work, skills, and accomplishments. It leverages the power of Angular and Bootstrap to create a dynamic, responsive, and visually appealing user interface.',
            'To maintain code quality and consistency, the website utilizes Husky and ESLint. Husky sets up Git hooks, enforcing code quality checks before allowing commits. ESLint, a widely-used JavaScript linting tool, helps ensure the code adheres to best practices and follows a standardized coding style.',
            "Angular provides the framework for structuring and interactivity, while Bootstrap ensures the website's adaptability to various screen sizes, making it mobile-friendly.",
            'By hosting the website on GitHub, the individual makes their portfolio easily accessible to the public and benefits from version control features, which are invaluable for managing code and content updates.',
            "This portfolio website serves as a powerful tool for presenting the owner's achievements and attracting potential opportunities. It combines the strengths of modern web development technologies with effective hosting and quality control mechanisms to create an impressive and user-friendly display of the individual's professional journey and capabilities.",
        ],
        techs: ['Angular', 'Bootstrap', 'Husky', 'ESLint', 'GitHub'],
        featured: true,
    },
    {
        name: 'Password Generator',
        description: [
            "Password Generator is a user-friendly application designed to create robust and secure passwords tailored to the user's preferences.",
            "This application offers flexibility in selecting password attributes including length, uppercase and lowercase letters, numbers, and symbols. The application also assesses the password's strength, categorizing it as either 'Strong', 'Medium', or 'Weak'.",
        ],
        image: 'password-generator.png',
        id: '2',
        links: [
            {
                id: '1',
                name: 'live',
                url: 'https://jaganb.dev/password-generator/',
            },
            {
                id: '2',
                name: 'github',
                url: 'https://github.com/jaganbishoyi/password-generator',
            },
            {
                id: '3',
                name: 'Google Chrome Web Store',
                url: 'https://chrome.google.com/webstore/detail/password-generator/jdplacbmmaciodfoibinhcmbahnnibnl/',
            },
        ],
        overview: [
            "Password Generator is a user-friendly application designed to create robust and secure passwords tailored to the user's preferences.",
            'This application offers flexibility in selecting password attributes including length, uppercase and lowercase letters, numbers, and symbols.',
            "By customizing these combinations, users can create passwords that meet their specific security requirements. The application also assesses the password's strength, categorizing it as either 'Strong', 'Medium', or 'Weak', providing users with instant feedback on the password's security level.",
            'This feature empowers users to make informed decisions about their password choices, enhancing their online security.',
        ],
        techs: ['HTML', 'CSS', 'JavaScript'],
        featured: true,
    },
    {
        name: 'Javascript Calculator',
        description: [
            'JavaScript Calculator is a web-based application designed to perform various mathematical calculations.',
            'This interactive tool allows users to input numerical values and perform arithmetic operations such as addition, subtraction, multiplication, division, as well as more advanced functions like square roots, percentages, and more.',
        ],
        image: 'calculator.png',
        id: '3',
        links: [
            {
                id: '1',
                name: 'live',
                url: 'https://jaganb.dev/calculator/',
            },
            {
                id: '2',
                name: 'github',
                url: 'https://github.com/jaganbishoyi/calculator',
            },
        ],
        overview: [
            'JavaScript Calculator is a web-based application designed to perform various mathematical calculations.',
            'This interactive tool allows users to input numerical values and perform arithmetic operations such as addition, subtraction, multiplication, division, as well as more advanced functions like square roots, percentages, and more.',
            'JavaScript calculators provide a convenient and accessible way for users to quickly and accurately compute numerical results, making them a valuable utility for a wide range of tasks, from basic calculations to complex mathematical operations.',
        ],
        techs: ['HTML', 'CSS', 'JavaScript'],
        featured: false,
    },
    {
        name: 'Analog Clock',
        description: [
            'Analog Clock is a web-based application built using HTML, CSS, and JavaScript that showcases the classic design of a clock.',
            "This project delivers a visually appealing and interactive representation of time. The clock's animation offers smooth, accurate motion that mirrors a traditional analog clock, with distinct hour, minute, and second hands.",
        ],
        image: 'analog-clock.png',
        id: '4',
        links: [
            {
                id: '1',
                name: 'live',
                url: 'https://jaganb.dev/analog-clock/',
            },
            {
                id: '2',
                name: 'github',
                url: 'https://github.com/jaganbishoyi/analog-clock',
            },
        ],
        overview: [
            'Analog Clock is a web-based application built using HTML, CSS, and JavaScript that showcases the classic design of a clock.',
            "This project delivers a visually appealing and interactive representation of time. The clock's animation offers smooth, accurate motion that mirrors a traditional analog clock, with distinct hour, minute, and second hands.",
            "The HTML structure outlines the clock's visual components, while the CSS styles the clock's appearance, focusing on the clock face and the design of the clock hands. Meanwhile, the JavaScript code is responsible for providing real-time functionality, continuously updating the clock's hands to display the current time with precision.",
            'Creating this analog clock provides an opportunity to learn and apply essential web development skills, offering a hands-on experience in working with HTML for structure, CSS for styling, and JavaScript for dynamic functionality. This project underscores the fundamental concepts of front-end development and is a perfect starting point for further exploration into web development and interactive applications.',
        ],
        techs: ['HTML', 'CSS', 'JavaScript'],
        featured: false,
    },
    {
        name: 'Stack Exchange',
        description: [
            'The Angular Stack Exchange Integration project is a web application developed in Angular that seamlessly connects with Stack Exchange APIs.',
            'The primary goal is to create a user-friendly and interactive platform for accessing and interacting with Stack Exchange communities.',
            'This ambitious project aims to deliver an intuitive and interactive platform where users can access a wealth of information from the Stack Exchange network, including Stack Overflow, Super User, Ask Ubuntu, and other communities.',
        ],
        image: 'stack-overflow.png',
        id: '5',
        links: [
            {
                id: '1',
                name: 'live',
                url: 'https://stackexchange-97829.web.app/#/questions',
            },
            {
                id: '2',
                name: 'github',
                url: 'https://github.com/jaganbishoyi/stackexchange',
            },
        ],
        overview: [
            'The Angular Stack Exchange Integration project is a web application developed in Angular that seamlessly connects with Stack Exchange APIs.',
            'The primary goal is to create a user-friendly and interactive platform for accessing and interacting with Stack Exchange communities.',
            'This ambitious project aims to deliver an intuitive and interactive platform where users can access a wealth of information from the Stack Exchange network, including Stack Overflow, Super User, Ask Ubuntu, and other communities.',
            'Key features include real-time data updates, search functionality, interactive user profiles, tagging system, and an appealing interface.',
        ],
        techs: ['Angular', 'Bootstrap', 'Stack Exchange APIs'],
        featured: true,
    },
    {
        name: 'Story Books',
        description: [
            'The Storybooks is Node.js Application for Social Story Sharing.',
            'This Node.js application offers a seamless platform for users to log in using their Google accounts and create engaging stories. With the ability to set stories as private or public, users have full control over who can access their content.',
            'This application is powered by Node.js, Express, MongoDB, Moment.js, Passport.js, and Google OAuth, ensuring a secure and interactive storytelling experience.',
        ],
        image: 'story-books.png',
        id: '6',
        links: [
            {
                id: '1',
                name: 'live',
                url: 'https://storybooks-q6jv.onrender.com',
            },
            {
                id: '2',
                name: 'github',
                url: 'https://github.com/jaganbishoyi/storybooks',
            },
        ],
        overview: [
            'The Storybooks is Node.js Application for Social Story Sharing.',
            "Users can craft and share their stories, whether it's a personal journal entry, a fictional masterpiece, or a real-life adventure.  Each story can be designated as public or private. Public stories are visible to all users, while private stories remain accessible only to the author.",
            'This Node.js application offers a seamless platform for users to log in using their Google accounts and create engaging stories. With the ability to set stories as private or public, users have full control over who can access their content.',
            'This application is powered by Node.js, Express, MongoDB, Moment.js, Passport.js, and Google OAuth, ensuring a secure and interactive storytelling experience.',
            'This application is hosted on https://render.com/ ',
        ],
        techs: [
            'Node.js',
            'Express',
            'MongoDB',
            'Moment.js',
            'Passport.js',
            'Google OAuth',
        ],
        featured: true,
    },
];
