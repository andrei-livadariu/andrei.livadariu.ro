import en from './en';
import ro from './ro';

export const cvsByLanguage = {en, ro};

export interface CVText {
    statement: string,
    experience: {
        title: string,
        entries: readonly Readonly<JobEntryText>[],
    },
    volunteering: {
        title: string,
        entries: readonly Readonly<JobEntryText>[],
    },
    education: {
        title: string,
        entries: readonly Readonly<EducationEntryText>[],
    },
    skills: {
        title: string,
        entries: readonly Readonly<SkillEntryText>[],
    },
    languages: {
        title: string,
        entries: readonly Readonly<LanguageEntryText>[],
    },
    interests: {
        title: string,
        items: readonly string[],
    },
}

export interface JobEntryText {
    title: string,
    company: string,
    duration: string,
    description: string,
}

export interface EducationEntryText {
    title: string,
    institution: string,
    duration: string,
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
    items: readonly string[],
}