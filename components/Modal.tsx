import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      style={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        style={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} style={styles.closeButton} aria-label="Close modal">&times;</button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

const styles: {[key: string]: React.CSSProperties} = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    modal: {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        maxWidth: '600px',
        width: '90%',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '15px',
        background: 'none',
        border: 'none',
        fontSize: '2rem',
        cursor: 'pointer',
        color: '#aaa',
    }
}

export default Modal;
