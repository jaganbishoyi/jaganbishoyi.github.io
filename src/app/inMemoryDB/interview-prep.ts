import { ICategory, IInterview } from "@interfaces/general.interface";
const category = ICategory;

export const interviews: IInterview[] = [
    {
        title: "Angular",
        description: "Some selected Angular question and answer for interview preparation.",
        lastUpdated: "2024-11-05",
        category: category.ANGULAR,
        id: "1",
        URL: "angular/angular.md",
    },
    {
        title: "JavaScript",
        description: "Some selected JavaScript question and answer for interview preparation.",
        lastUpdated: "2024-11-05",
        category: category.JAVASCRIPT,
        id: "2",
        URL: "javascript/javascript.md",
    },
    {
        title: "CSS",
        description: "Some selected CSS question and answer for interview preparation.",
        lastUpdated: "2024-11-05",
        category: category.CSS,
        id: "3",
        URL: "css/css.md",
    },
    {
        title: "Version Control",
        description: "Some selected Version Control question and answer for interview preparation.",
        lastUpdated: "2024-11-05",
        category: category.VERSION_CONTROL,
        id: "4",
        URL: "version-control/version-control.md",
    },
    {
        title: "HTML",
        description: "Some selected HTML question and answer for interview preparation.",
        lastUpdated: "2024-11-05",
        category: category.HTML,
        id: "5",
        URL: "html/html.md",
    },
    {
        title: "Coding Challenges",
        description:
            "Some selected Coding Challenge question and answer for interview preparation.",
        lastUpdated: "2025-08-12",
        category: category.CODING_CHALLENGES,
        id: "6",
        URL: "coding-challenge/coding-challenge.md",
    },
    {
        title: "Common Questions",
        description: "Some selected frequently asked question and answer for interview.",
        lastUpdated: "2025-08-12",
        category: category.COMMON_QUESTIONS,
        id: "7",
        URL: "common-questions/common-questions.md",
    },
];
