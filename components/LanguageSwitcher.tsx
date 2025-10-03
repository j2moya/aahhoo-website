import React from 'react';
import type { Language } from '../types';

interface LanguageSwitcherProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, setLanguage }) => {
  const switchStyle = (lang: Language): React.CSSProperties => ({
    padding: '0.5rem 0.75rem',
    cursor: 'pointer',
    color: language === lang ? '#fff' : '#007A8D',
    backgroundColor: language === lang ? '#007A8D' : 'transparent',
    border: 'none',
    fontWeight: 'bold',
  });

  return (
    <div style={{ border: '1px solid #007A8D', borderRadius: '5px', overflow: 'hidden', display: 'flex' }}>
      <button onClick={() => setLanguage('es')} style={{...switchStyle('es'), borderRight: '1px solid #007A8D'}}>
        ES
      </button>
      <button onClick={() => setLanguage('en')} style={switchStyle('en')}>
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
