import { useLanguage } from '../i18n/LanguageContext';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'ar', name: 'العربية' },
  ];

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`language-btn ${language === lang.code ? 'active' : ''}`}
          onClick={() => setLanguage(lang.code)}
          title={lang.name}
        >
          {lang.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
