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
        featured: [true, 3],
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
        featured: [true, 4],
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
        featured: [false, 0],
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
        featured: [false, 0],
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
        featured: [false, 0],
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
        featured: [false, 0],
    },
    {
        name: 'ng-password-validator',
        description: [
            'The ng-password-validator is an npm package designed to enhance the password security and validation functionality in Angular applications.',
            'It provides a user-friendly and interactive pop-up window that appears when users start typing in an input box designated for password entry. This pop-up window serves as a real-time password strength indicator and validation tool.',
        ],
        image: 'ng-password-validator.png',
        id: '7',
        links: [
            {
                id: '1',
                name: 'live',
                url: 'https://jaganb.dev/ngx-password-validator/',
            },
            {
                id: '2',
                name: 'npm',
                url: 'https://www.npmjs.com/package/ng-password-validator',
            },
            {
                id: '3',
                name: 'github',
                url: 'https://github.com/jaganbishoyi/ngx-password-validator',
            },
        ],
        overview: [
            'The ng-password-validator is an npm package designed to enhance the password security and validation functionality in Angular applications.',
            'It provides a user-friendly and interactive pop-up window that appears when users start typing in an input box designated for password entry. This pop-up window serves as a real-time password strength indicator and validation tool.',
            "The primary purpose of the Password Validator is to assist users in creating strong and secure passwords by guiding them through the password acceptance criteria. As users type their password, the pop-up window evaluates the password strength against preconfigured criteria. These criteria typically include requirements such as a minimum length, the presence of uppercase and lowercase letters, numbers, and special characters.",
            "As users continue to type their password and meet these criteria, they receive instant feedback in the form of a success message. This immediate feedback helps users understand whether their chosen password meets the necessary security standards, which encourages the creation of strong and resilient passwords.",
            "The Password Validator is a valuable addition to Angular applications, as it promotes better security practices by guiding users in real-time, ultimately leading to improved protection against unauthorized access and data breaches. This package can be easily integrated into Angular projects, making it a convenient and effective tool for enhancing password security and user experience."
        ],
        techs: ['Angular', 'GitHub', 'npm'],
        featured: [true, 2],
    },
    {
        name: 'ngx-mode-switcher',
        description: [
            'ngx-mode-switcher is a versatile Angular library that allows developers to effortlessly integrate dark mode, light mode, and auto (system default) mode switching into their applications.',
            'With a simple configuration, you can provide users with a seamless experience, adapting to their preferred display settings.',
            'This library offers full customization.'
        ],
        image: 'ngx-mode-switcher.png',
        id: '8',
        links: [
            {
                id: '1',
                name: 'live',
                url: 'https://jaganb.dev/angular-mode-switcher-demo/',
            },
            {
                id: '2',
                name: 'npm',
                url: 'https://www.npmjs.com/package/ngx-mode-switcher',
            },
            {
                id: '3',
                name: 'github',
                url: 'https://github.com/jaganbishoyi/angular-mode-switcher',
            },
        ],
        overview: [
            "Enhancing User Experience with `ngx-mode-switcher` in an Angular Application.",
            "In today's digital landscape, providing users with the ability to switch between dark, light, and system modes is not just a luxury—it’s an expectation. When working on a feature-rich Angular application, the development team wanted to integrate this functionality without over-complicating the codebase or spending excessive time building a custom solution. That’s where ngx-mode-switcher came in, offering a straightforward yet powerful solution for mode switching in Angular applications.",
            "Upon integrating ngx-mode-switcher, the team immediately appreciated the simplicity it brought to the table. With minimal setup, the application gained the ability to toggle between light, dark, and auto modes. The core functionality of the library allowed users to switch modes seamlessly, and the auto mode smartly adjusted to the user’s system preference—whether they were using dark mode at night or light mode during the day. This automation removed the need for manual adjustments, enhancing the user experience by aligning the application with the user’s environment effortlessly.",
            "Beyond its core functionality, ngx-mode-switcher provided significant flexibility in its implementation. The library offered configuration options that enabled the team to customize how the mode switching appeared in the user interface. For instance, the ability to show or hide the legend meant the developers could decide whether to display mode options to users or keep the interface minimalistic, adapting it to the design needs of the project. Additionally, the developers were able to rename the modes, tailoring the experience to match the specific terminology and branding of the application.",
            "The adaptability and ease of use made ngx-mode-switcher a valuable asset to the development process. Rather than building custom mode-switching logic from scratch, the team leveraged the library’s well-documented features to implement a fully functional solution that fit seamlessly into their Angular project. The ability to quickly switch between modes, along with the customization options, gave the developers control over both the technical and visual aspects of the application.",
            "In summary, ngx-mode-switcher delivered both functionality and flexibility, allowing the development team to offer a polished mode-switching feature that enhanced the user experience. By integrating this library, the team saved development time while gaining the ability to customize the mode-switching interface to align perfectly with their application’s design and user expectations."
        ],
        techs: ['Angular', 'GitHub', 'npm'],
        featured: [true, 1],
    }
];
