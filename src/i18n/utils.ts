import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'fr' || lang === 'en') return lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return (ui[lang] as any)[key] ?? ui[defaultLang][key] ?? String(key);
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // path should start with / (e.g. "/", "/legal/mentions-legales")
  const clean = path.startsWith('/') ? path : '/' + path;
  if (lang === defaultLang) return clean === '' ? '/' : clean;
  // strip leading / for join
  const trimmed = clean === '/' ? '' : clean;
  return `/${lang}${trimmed}`;
}

export function getPathWithoutLang(url: URL): string {
  const parts = url.pathname.split('/').filter(Boolean);
  if (parts[0] === 'fr' || parts[0] === 'en') {
    const rest = parts.slice(1).join('/');
    return rest ? '/' + rest : '/';
  }
  const rest = parts.join('/');
  return rest ? '/' + rest : '/';
}
