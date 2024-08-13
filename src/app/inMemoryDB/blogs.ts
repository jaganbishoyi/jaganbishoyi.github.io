import { IBlogContent } from '@interfaces/general.interface';

export const blogs: IBlogContent[] = [
    {
        title: 'What is async await in JavaScript?',
        description: 'async and await are modern JavaScript features introduced in ES2017 (ES8) that make it easier to work with asynchronous code. They allow you to write asynchronous code in a more readable, synchronous-like manner.',
        publishDate: '2024-08-13',
        tags: ['javascript', 'interview'],
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
]
