import { IBlogContent } from '@interfaces/general.interface';

export const blogs: IBlogContent[] = [
    {
        title: 'What is async await in JavaScript?',
        description: 'async and await are modern JavaScript features introduced in ES2017 (ES8) that make it easier to work with asynchronous code. They allow you to write asynchronous code in a more readable, synchronous-like manner.',
        publishDate: '2024-08-13',
        tags: ['javascript'],
        id: '1',
        slug: 'async-await-in-javaScript',
        featured: true,
        author: {
            name: 'Jagan Mohan Bishoyi',
            image: 'assets/images/me.png',
            publishedDate: '2024-08-13'
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
        featured: true,
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
        publishDate: '2024-08-13',
        tags: ['html'],
        id: '3',
        slug: 'new-features-introduced-in-HTML5',
        featured: true,
        author: {
            name: 'Jagan Mohan Bishoyi',
            image: 'assets/images/me.png',
            publishedDate: '2024-08-13'
        },
        URL: 'html/new-features-introduced-in-HTML5.md'
    },
]
