import { ICategory, INav } from '@interfaces/general.interface';
const category = ICategory;

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
        route: category.ANGULAR
    },
    {
        name: 'Javascript',
        route: category.JAVASCRIPT
    },
    {
        name: 'HTML',
        route: category.HTML
    },
    {
        name: 'CSS',
        route: category.CSS
    },
    {
        name: 'Version Control',
        route: category.VERSION_CONTROL
    },
    {
        name: 'Coding Challenges',
        route: category.CODING_CHALLENGES
    },
    {
        name: 'Coding Challenges',
        route: 'coding-challenges'
    },
];
