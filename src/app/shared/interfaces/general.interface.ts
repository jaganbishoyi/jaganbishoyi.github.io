export interface INav {
    name: string;
    route: string;
}

export interface ILink {
    id: string;
    name: string;
    url: string;
}

export interface IProject {
    name: string;
    description: string[];
    image: string;
    id: string;
    overview: string[];
    techs: string[];
    links: ILink[];
    featured: [boolean, number];
}

export interface ISeoEssentials {
    canonicalLink: string;
    title: string;
    description: string;
    image?: string;
}

export interface IBlogContent {
    title: string;
    description: string;
    publishDate: string;
    tags: string[];
    id: string;
    slug: string;
    featured: boolean;
    author: IAuthor;
    URL: string;
    related?: string[] // slug
}

export interface IAuthor {
    name: string;
    image: string;
    publishedDate: string;
}
