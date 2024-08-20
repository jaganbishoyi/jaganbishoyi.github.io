import { IBlogContent } from '@interfaces/general.interface';

export const blogs: IBlogContent[] = [
    {
        title: 'What is async await in JavaScript?',
        description: 'async and await are modern JavaScript features introduced in ES2017 (ES8) that make it easier to work with asynchronous code. They allow you to write asynchronous code in a more readable, synchronous-like manner.',
        publishDate: '2024-08-12',
        tags: ['javascript'],
        id: '1',
        slug: 'async-await-in-javaScript',
        featured: true,
        author: {
            name: 'Jagan Mohan Bishoyi',
            image: 'assets/images/me.png',
            publishedDate: '2024-08-12'
        },
        URL: 'javascript/async-await.md'
    },
    {
        title: 'What is Angular and how is it different from AngularJS?',
        description: 'Angular is a `TypeScript-based` open-source front-end platform that makes it easy to build web, mobile and desktop applications. The major features of this framework include declarative templates, `dependency injection`, end to end tooling which ease application development.',
        publishDate: '2024-08-13',
        tags: ['angular'],
        id: '2',
        slug: 'difference-between-angular-and-angularjs',
        featured: false,
        author: {
            name: 'Jagan Mohan Bishoyi',
            image: 'assets/images/me.png',
            publishedDate: '2024-08-13'
        },
        URL: 'angular/difference-between-angular-and-angularjs.md'
    },
    {
        title: 'What are the new features introduced in HTML5?',
        description: 'HTML5 introduced several new features to improve web development, including: Semantic elements, Multimedia support, Canvas API, Local storage and Geolocation API.',
        publishDate: '2024-08-14',
        tags: ['html'],
        id: '3',
        slug: 'new-features-introduced-in-HTML5',
        featured: true,
        author: {
            name: 'Jagan Mohan Bishoyi',
            image: 'assets/images/me.png',
            publishedDate: '2024-08-14'
        },
        URL: 'html/new-features-introduced-in-HTML5.md'
    },
    {
        title: 'What is the CSS Box Model? Explain its components?',
        description: 'The CSS Box Model describes the rectangular boxes that are generated for elements in the document tree and consists of Content, padding, border, margin.',
        publishDate: '2024-08-14',
        tags: ['css'],
        id: '4',
        slug: 'css-box-model',
        featured: true,
        author: {
            name: 'Jagan Mohan Bishoyi',
            image: 'assets/images/me.png',
            publishedDate: '2024-08-14'
        },
        URL: 'css/css-box-model.md'
    },
    {
        title: 'What are semantic HTML elements, and why are they important?',
        description: 'Semantic HTML elements have meaningful names that describe their purpose and content. They help with accessibility, SEO, and code readability.',
        publishDate: '2024-08-14',
        tags: ['html'],
        id: '5',
        slug: 'semantic-html-elements',
        featured: true,
        author: {
            name: 'Jagan Mohan Bishoyi',
            image: 'assets/images/me.png',
            publishedDate: '2024-08-14'
        },
        URL: 'html/semantic-html-elements.md'
    },
    {
        title: 'Must Used Git Commands / Git cheat sheet',
        description: 'The basic Git commands to help you learn Git, and more advanced concepts around Git branches, remote repositories, undoing changes, and more.',
        publishDate: '2024-08-15',
        tags: ['version-control'],
        id: '6',
        slug: 'must-used-git-commands',
        featured: true,
        author: {
            name: 'Jagan Mohan Bishoyi',
            image: 'assets/images/me.png',
            publishedDate: '2024-08-15'
        },
        URL: 'version-control/must-used-git-commands.md',
        related: ['must-asked-question-and-answer-related-to-version-controlling'],
    },
    {
        title: 'What are the different types of data binding in Angular?',
        description: 'Data binding is a core concept in Angular and allows to define communication between a component and the DOM. There are four forms of data binding(divided as 3 categories) which differ in the way the data is flowing.',
        publishDate: '2024-08-15',
        tags: ['angular'],
        id: '6',
        slug: 'angular-data-binding',
        featured: false,
        author: {
            name: 'Jagan Mohan Bishoyi',
            image: 'assets/images/me.png',
            publishedDate: '2024-08-15'
        },
        URL: 'angular/angular-data-binding.md'
    },
    {
        title: 'What are isPlatformBrowser and isPlatformServer in Angular?',
        description: '`isPlatformBrowser` and `isPlatformServer` are utility functions provided by Angular to help determine whether your code is running in a browser environment or a server environment. These functions are useful when developing applications that use Angular Universal for server-side rendering (SSR) or when dealing with platform-specific logic.',
        publishDate: '2024-08-16',
        tags: ['angular'],
        id: '7',
        slug: 'what-is-is-platform-browser-and-is-platform-server-in-angular',
        featured: false,
        author: {
            name: 'Jagan Mohan Bishoyi',
            image: 'assets/images/me.png',
            publishedDate: '2024-08-16'
        },
        URL: 'angular/is-platform-browser-and-is-platform-server.md'
    },
    {
        title: 'Must asked question and answer related to version controlling.',
        description: 'Version control is an essential tool in modern software development, allowing teams to track changes, collaborate efficiently, and maintain code history. During technical interviews, version control concepts and practices are often tested.',
        publishDate: '2024-08-17',
        tags: ['version-control'],
        id: '8',
        slug: 'must-asked-question-and-answer-related-to-version-controlling',
        featured: false,
        author: {
            name: 'Jagan Mohan Bishoyi',
            image: 'assets/images/me.png',
            publishedDate: '2024-08-17'
        },
        URL: 'version-control/must-asked-question-and-answer-related-to-version-controlling.md',
        related: ['must-used-git-commands'],
    },
    {
        title: 'What are Angular Directives? Name some built-in directives?',
        description: 'Directives are a way to extend HTML by attaching custom behaviors to DOM elements or creating new HTML elements. They are a crucial part of Angular’s declarative approach to building user interfaces. With directives, you can manipulate the DOM, apply CSS styles, handle user input, and much more.',
        publishDate: '2024-08-18',
        tags: ['angular'],
        id: '9',
        slug: 'angular-directives',
        featured: false,
        author: {
            name: 'Jagan Mohan Bishoyi',
            image: 'assets/images/me.png',
            publishedDate: '2024-08-18'
        },
        URL: 'angular/angular-directives.md',
        related: ['angular-custom-directives']
    },
    {
        title: 'How do you create a custom directive in Angular?',
        description: 'Creating a custom directive in Angular involves defining a directive class and applying it to elements in your template. Directives in Angular can be used to add behavior to existing DOM elements, create custom reusable components, or manipulate the DOM.',
        publishDate: '2024-08-18',
        tags: ['angular'],
        id: '10',
        slug: 'angular-custom-directives',
        featured: false,
        author: {
            name: 'Jagan Mohan Bishoyi',
            image: 'assets/images/me.png',
            publishedDate: '2024-08-18'
        },
        URL: 'angular/angular-custom-directives.md',
        related: ['angular-directives']
    },
    {
        title: 'What is the difference between pure pipes and impure pipes?',
        description: 'In Angular, pipes are used to transform data in templates. There are two types of pipes: `pure` pipes and `impure` pipes. Understanding the difference between them is crucial for optimizing performance and ensuring that your application behaves as expected.',
        publishDate: '2024-08-19',
        tags: ['angular'],
        id: '11',
        slug: 'pure-pipes-and-impure-pipes',
        featured: false,
        author: {
            name: 'Jagan Mohan Bishoyi',
            image: 'assets/images/me.png',
            publishedDate: '2024-08-19'
        },
        URL: 'angular/pure-pipes-and-impure-pipes.md'
    },
    {
        title: 'Implementing Light, Dark, System/Auto Mode in Angular.',
        description: "Light / Dark mode toggle is a very common feature in today's web applications. This feature may look very simple to the end users, but it takes some additional effort to correctly implement in a web application.",
        publishDate: '2024-08-21',
        tags: ['angular'],
        id: '11',
        slug: 'implement-light-dark-mode-in-angular',
        featured: true,
        author: {
            name: 'Jagan Mohan Bishoyi',
            image: 'assets/images/me.png',
            publishedDate: '2024-08-21'
        },
        URL: 'angular/implement-light-dark-mode-in-angular.md'
    }
]
