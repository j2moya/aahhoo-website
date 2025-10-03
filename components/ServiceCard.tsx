import React from 'react';
import { Service } from '../types';

export const ServiceCard: React.FC<Service> = ({ title, description }) => {
  const styles: { [key: string]: React.CSSProperties } = {
    card: {
      backgroundColor: 'white',
      border: '1px solid #dee2e6',
      borderRadius: '8px',
      padding: '1.5rem',
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontSize: '1.25rem',
      color: '#0D3D56',
      marginTop: 0,
      marginBottom: '0.75rem',
    },
    description: {
      fontSize: '1rem',
      color: '#343a40',
      lineHeight: '1.6',
      flexGrow: 1,
    },
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
};
