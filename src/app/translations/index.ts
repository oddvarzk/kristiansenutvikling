import { no } from './no';
import { en } from './en';

export const translations = {
  no,
  en,
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof no; 