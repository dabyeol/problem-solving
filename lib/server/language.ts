export type Language = {
  id: string;
  name: string;
  extension: string;
};

const languages: Language[] = [
  { id: 'c', name: 'C', extension: 'c' },
  { id: 'cpp', name: 'C++', extension: 'cpp' },
  { id: 'java', name: 'Java', extension: 'java' },
  { id: 'javascript', name: 'JavaScript', extension: 'js' },
  { id: 'mysql', name: 'MySQL', extension: 'sql' },
  { id: 'oracle', name: 'Oracle', extension: 'sql' },
  { id: 'python', name: 'Python', extension: 'py' },
];

export function getLanguageById(id: string) {
  return languages.find(language => language.id === id);
}

export function getLanguageByExtension(extension: string) {
  return languages.find(language => language.extension === extension);
}
