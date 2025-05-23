import en from './en';
import ro from './ro';

export const cvsByLanguage = {en, ro};

export interface CVText {
    statement: string,
    experience: {
        title: string,
        entries: JobEntryText[],
    },
    projects: {
        title: string,
        entries: JobEntryText[],
    },
    education: {
        title: string,
        entries: JobEntryText[],
    },
    skills: {
        title: string,
        entries: SkillEntryText[],
    },
    languages: {
        title: string,
        entries: LanguageEntryText[],
    },
    interests: {
        title: string,
        items: string[],
    },
}

export interface JobEntryText {
    title: string,
    company?: string,
    duration?: string,
    description?: string,
}

export interface LanguageEntryText {
    language: string,
    level: string,
    europeanLevel?: string,
    score?: string,
}

export interface SkillEntryText {
    title: string,
    items: string[],
}