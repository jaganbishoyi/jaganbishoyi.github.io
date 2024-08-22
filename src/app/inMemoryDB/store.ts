import { INav } from '@interfaces/general.interface';

export const navs: INav[] = [
    {
        name: 'home',
        route: 'home',
    },
    {
        name: 'about',
        route: 'about',
    },
    {
        name: 'projects',
        route: 'projects',
    },
    {
        name: 'blog',
        route: 'blogs',
    },
    {
        name: 'contact',
        route: 'contact',
    }
];

export const blogSideNavs: INav[] = [
    {
        name: 'All',
        route: ''
    },
    {
        name: 'Angular',
        route: 'angular'
    },
    {
        name: 'Javascript',
        route: 'javascript'
    },
    {
        name: 'HTML',
        route: 'html'
    },
    {
        name: 'CSS',
        route: 'css'
    },
    {
        name: 'Version Control',
        route: 'version-control'
    },
    {
        name: 'Coding Challenges',
        route: 'coding-challenges'
    },
];
