import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  callToAction: string;
  whatsappNumber: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, callToAction, whatsappNumber }) => {
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Estoy interesado en el servicio de: ${title}`);
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <button onClick={handleWhatsAppClick} style={styles.button}>
        {callToAction}
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '2rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTop: '4px solid #007A8D',
  },
  title: {
    margin: '0 0 1rem 0',
    color: '#003C46',
    fontSize: '1.25rem',
    fontFamily: "'Poppins', sans-serif",
  },
  description: {
    margin: '0 0 1.5rem 0',
    color: '#6c757d',
    flexGrow: 1,
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007A8D',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    transition: 'background-color 0.3s ease',
  },
};

export default ServiceCard;
