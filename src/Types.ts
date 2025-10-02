// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ALL_LANGUAGES = [
  { id: 'detect', name: 'Detect Language', isDetect: true },
  { id: 'en', name: 'English' },
  { id: 'fr', name: 'French' },
  { id: 'es', name: 'Spanish' },
  { id: 'de', name: 'German' },
  { id: 'it', name: 'Italian' },
  {id: 'ar', name:'Arabic'}
] as const;

type LangType = typeof ALL_LANGUAGES[number]

export type LangId = LangType['id']
