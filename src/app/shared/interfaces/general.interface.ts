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

export interface ISEOEssentials {
    canonicalLink: string;
    title: string;
    description: string;
    image?: string;
}
