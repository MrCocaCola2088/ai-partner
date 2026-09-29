export type Localized = {
  es: string;
  en: string;
};

export type FaqItem = {
  question: Localized;
  answer: Localized;
};

export type ContentSection = {
  heading?: Localized;
  paragraphs: Localized[];
};
