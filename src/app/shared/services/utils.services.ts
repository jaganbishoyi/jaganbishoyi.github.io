import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { IProject, ISeoEssentials } from '@interfaces/general.interface';

@Injectable({
    providedIn: 'root',
})
export class UtilsService {
    constructor(
        public meta: Meta,
        private titleService: Title,
        @Inject(DOCUMENT) private document: Document,
    ) { }

    scrollToView(id: string): void {
        const element: HTMLElement | null = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    }

    sortProjects(projects: IProject[]): IProject[] {
        return projects.sort((a: IProject, b: IProject) => a.featured[1] - b.featured[1]);
    }

    setSEOEssentials(data: ISeoEssentials): void {
        this.addCanonicalTag(data.canonicalLink);
        this.updateMetaTag(data);
    }

    private addCanonicalTag(link: string): void {
        // As per the standard specification only one canonical can be added
        // so we need to remove the canonical if exist before adding
        const head = this.document.getElementsByTagName('head')[0];
        const linkCanonical = this.document.querySelector("link[rel~='canonical']");

        if (linkCanonical) {
            head.removeChild(linkCanonical);
        }

        const canonical = this.document.createElement("link");
        canonical.rel = "canonical";
        canonical.href = link;
        head.appendChild(canonical);
    }

    private updateMetaTag(data: ISeoEssentials): void {
        this.titleService.setTitle(data.title);

        // Html MetaTag
        this.meta.addTag({ property: "og:title", content: data.title });
        this.meta.addTag({ property: "og:description", content: data.description, });
        this.meta.addTag({ property: "og:site_name", content: "https://jaganb.dev/", });
        this.meta.addTag({ property: "og:type", content: 'website' });
        this.meta.addTag({ property: "og:url", content: data.canonicalLink });
        this.meta.addTag({ property: "og:locale", content: 'en_US' });

        // Twitter
        this.meta.addTag({ name: "twitter:card", content: data.title });
        this.meta.addTag({ name: "twitter:title", content: data.title });
        this.meta.addTag({ name: "twitter:description", content: data.description, });
        this.meta.addTag({ name: "twitter:url", content: data.canonicalLink });
        this.meta.addTag({ name: "description", content: data.description });

        if (data.image) {
            this.meta.addTag({ property: "og:image", content: data.image });
            this.meta.addTag({ name: "twitter:image", content: data.image });
        }
    }

    generateSlug(title: string): string {
        return title
            .toLowerCase()                      // Convert to lowercase
            .trim()                             // Remove whitespace from both ends
            .replace(/[^a-z0-9\s-]/g, '')       // Remove all non-alphanumeric characters except spaces and hyphens
            .replace(/\s+/g, '-')               // Replace spaces with hyphens
            .replace(/-+/g, '-');               // Replace multiple hyphens with a single hyphen
    }
}
