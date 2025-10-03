import React from 'react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, onLanguageChange }) => {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center',
    },
    button: {
      background: 'none',
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '0.4rem 0.8rem',
      cursor: 'pointer',
      fontWeight: 500,
      transition: 'background-color 0.3s, color 0.3s',
    },
    activeButton: {
      backgroundColor: '#176B87',
      color: 'white',
      borderColor: '#176B87',
    }
  };

  return (
    <div style={styles.container}>
      <button
        style={currentLanguage === 'en' ? {...styles.button, ...styles.activeButton} : styles.button}
        onClick={() => onLanguageChange('en')}
        aria-pressed={currentLanguage === 'en'}
      >
        EN
      </button>
      <button
        style={currentLanguage === 'es' ? {...styles.button, ...styles.activeButton} : styles.button}
        onClick={() => onLanguageChange('es')}
        aria-pressed={currentLanguage === 'es'}
      >
        ES
      </button>
    </div>
  );
};
