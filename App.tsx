import React, { useState, useCallback } from 'react';
import { Language, ExternalLink } from './types';
import { content, COMPANY_INFO, MEXICO_LOCATIONS } from './constants';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { ServiceCard } from './components/ServiceCard';
import { Modal } from './components/Modal';
import {
  PhoneIcon, MailIcon, WebIcon, AddressIcon, FaxIcon, WhatsAppIcon, CalendarIcon,
  BookIcon, StreamIcon, ArticleIcon, ReelIcon, ReelAdminIcon, VideoIcon, AudioIcon,
  PodcastIcon, YouTubeIcon, XIcon, FacebookIcon, InstagramIcon, TikTokIcon,
  GlobeIcon, UsersIcon
} from './components/icons';

const iconComponents: { [key:string]: React.FC } = {
  ArticleIcon,
  ReelIcon,
  ReelAdminIcon,
  VideoIcon,
  AudioIcon,
  PodcastIcon,
  YouTubeIcon,
  XIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLanguageChange = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);

  const currentContent = content[language];

  const styles: { [key: string]: React.CSSProperties } = {
    app: {
      fontFamily: "'Poppins', sans-serif",
      color: '#343a40',
      lineHeight: 1.6,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0',
      borderBottom: '1px solid #dee2e6',
    },
    logo: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: '#0D3D56',
      textDecoration: 'none',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    navLink: {
      textDecoration: 'none',
      color: '#176B87',
      fontWeight: 500,
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      transition: 'background-color 0.3s',
    },
    navLinkRegister: {
        backgroundColor: '#176B87',
        color: 'white',
    },
    hero: {
      textAlign: 'center',
      padding: '4rem 1rem',
      backgroundColor: '#f8f9fa',
    },
    heroTitle: {
      fontSize: '2.5rem',
      color: '#0D3D56',
      marginBottom: '1rem',
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: '#495057',
      maxWidth: '800px',
      margin: '0 auto',
    },
    section: {
      padding: '4rem 0',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2.25rem',
      color: '#0D3D56',
      marginBottom: '1rem',
    },
    sectionSubtitle: {
      textAlign: 'center',
      fontSize: '1.1rem',
      color: '#6c757d',
      maxWidth: '800px',
      margin: '0 auto 2.5rem auto',
    },
    grid: {
      display: 'grid',
      gap: '2rem',
    },
    grid3: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    },
    grid4: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    },
    card: {
      backgroundColor: 'white',
      border: '1px solid #dee2e6',
      borderRadius: '8px',
      padding: '1.5rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      boxSizing: 'border-box'
    },
    cardContent: {
        flexGrow: 1,
    },
    cardTitle: {
        fontSize: '1.2rem',
        color: '#0D3D56',
        marginBottom: '0.5rem',
    },
    cardText: {
        fontSize: '1rem',
        color: '#495057',
    },
    linkCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'transform 0.2s, box-shadow 0.2s',
      height: '100%',
    },
    linkCardHover: {
        transform: 'translateY(-5px)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    },
    contactSection: {
        backgroundColor: '#0D3D56',
        color: 'white',
        padding: '4rem 0',
    },
    contactTitle: {
        color: 'white',
    },
    contactGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        textAlign: 'center',
        marginTop: '3rem',
    },
    contactItem: {
        color: '#e9ecef',
    },
    bookingButton: {
        display: 'inline-block',
        backgroundColor: '#17A2B8',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: 'bold',
        marginTop: '1rem',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
     bookingButtonMain: {
        padding: '1rem 2rem',
        fontSize: '1.1rem',
        marginTop: '2rem',
    },
    footer: {
      backgroundColor: '#343a40',
      color: 'white',
      padding: '3rem 0',
      textAlign: 'center',
    },
    footerGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem',
        textAlign: 'left',
    },
    footerContactItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '0.5rem',
        color: '#adb5bd',
    },
    footerSocials: {
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        marginTop: '2rem',
        marginBottom: '1rem',
    },
    mexicoModalContent: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
    },
  };

  const renderExternalLink = (link: ExternalLink) => {
    const Icon = iconComponents[link.icon];
    return (
        <a href={link.url} target="_blank" rel="noopener noreferrer" style={styles.linkCard} 
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'none'}>
            {Icon && <Icon />}
            <h3 style={styles.cardTitle}>{link.title}</h3>
            <p style={styles.cardText}>{link.description}</p>
        </a>
    );
  };
  
  return (
    <div style={styles.app}>
      <header style={{...styles.header, ...styles.container}}>
        <a href="#" style={styles.logo}>AAHHOO</a>
        <nav style={styles.nav}>
          <a href={COMPANY_INFO.memberUrl} style={styles.navLink}>{currentContent.loginText}</a>
          <a href={COMPANY_INFO.registerUrl} style={{...styles.navLink, ...styles.navLinkRegister}}>{currentContent.registerText}</a>
          <LanguageSwitcher currentLanguage={language} onLanguageChange={handleLanguageChange} />
        </nav>
      </header>

      <main>
        <section style={styles.hero}>
          <div style={styles.container}>
            <h1 style={styles.heroTitle}>{currentContent.tagline}</h1>
            <p style={styles.heroSubtitle}>{currentContent.heroSubtitle}</p>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}><GlobeIcon/> {currentContent.aboutTitle}</h2>
            <p style={styles.sectionSubtitle}>{currentContent.aboutText}</p>
          </div>
        </section>

        <section style={{...styles.section, backgroundColor: '#f8f9fa'}}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>{currentContent.servicesTitle}</h2>
            <div style={{...styles.grid, ...styles.grid3}}>
              {currentContent.services.map((service, index) => (
                <ServiceCard key={index} title={service.title} description={service.description} />
              ))}
            </div>
          </div>
        </section>

        <section style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.sectionTitle}>{currentContent.locationsTitle}</h2>
                <p style={styles.sectionSubtitle}>{currentContent.locationsSubtitle}</p>
                <div style={{...styles.grid, ...styles.grid4}}>
                    {currentContent.locations.map(loc => (
                        <div key={loc.city} style={styles.card}>
                            <div style={styles.cardContent}>
                                <h3 style={styles.cardTitle}>{loc.city}</h3>
                                {loc.addresses.map(addr => <p key={addr} style={styles.cardText}>{addr}</p>)}
                            </div>
                            {loc.city === 'Mexico City' && (
                                <button onClick={() => setIsModalOpen(true)} style={styles.bookingButton}>
                                    {currentContent.locationsMexicoLink}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section style={{...styles.section, backgroundColor: '#f8f9fa'}}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}><UsersIcon/> {currentContent.associatesTitle}</h2>
            <p style={styles.sectionSubtitle}>{currentContent.associatesSubtitle}</p>
            <div style={{...styles.grid, ...styles.grid4}}>
                {currentContent.associates.map(associate => (
                    <div key={associate.name} style={styles.card}>
                        <h3 style={styles.cardTitle}>{associate.name}</h3>
                        <p style={styles.cardText}>{associate.location}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>
        
        <section style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.sectionTitle}>{currentContent.externalLinksTitle}</h2>
                <div style={{...styles.grid, gridTemplateColumns: '1fr 1fr'}}>
                    <a href={COMPANY_INFO.streamUrl} target="_blank" rel="noopener noreferrer" style={styles.linkCard}>
                        <StreamIcon />
                        <h3 style={styles.cardTitle}>{currentContent.streamTitle}</h3>
                        <p style={styles.cardText}>{currentContent.streamText}</p>
                    </a>
                    <a href={COMPANY_INFO.booksUrl} target="_blank" rel="noopener noreferrer" style={styles.linkCard}>
                        <BookIcon />
                        <h3 style={styles.cardTitle}>{currentContent.booksTitle}</h3>
                        <p style={styles.cardText}>{currentContent.booksText}</p>
                    </a>
                </div>
            </div>
        </section>

        <section style={{...styles.section, backgroundColor: '#f8f9fa'}}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>{currentContent.moreLinksTitle}</h2>
            <p style={styles.sectionSubtitle}>{currentContent.moreLinksSubtitle}</p>
            <div style={{...styles.grid, ...styles.grid3}}>
                {currentContent.exploreMoreLinks.map((link, index) => (
                    <div key={index}>
                        {renderExternalLink(link)}
                    </div>
                ))}
            </div>
          </div>
        </section>

        <section style={styles.contactSection}>
            <div style={styles.container}>
                <h2 style={{...styles.sectionTitle, ...styles.contactTitle}}>{currentContent.contactTitle}</h2>
                <p style={styles.sectionSubtitle}>{currentContent.investmentPrice}</p>
                <div style={{textAlign: 'center'}}>
                    <a href={COMPANY_INFO.calendly} target="_blank" rel="noopener noreferrer" style={{...styles.bookingButton, ...styles.bookingButtonMain}}>
                        <CalendarIcon /> {currentContent.bookingLink}
                    </a>
                </div>
            </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={styles.container}>
            <div style={styles.footerGrid}>
                <div>
                    <h4>AAHHOO Inc.</h4>
                    <div style={styles.footerContactItem}><AddressIcon /> {COMPANY_INFO.address}</div>
                </div>
                <div>
                    <h4>{currentContent.contactTitle}</h4>
                    <div style={styles.footerContactItem}><PhoneIcon /> {COMPANY_INFO.phone}</div>
                    <div style={styles.footerContactItem}><FaxIcon /> {COMPANY_INFO.fax}</div>
                    <div style={styles.footerContactItem}><WhatsAppIcon /> {COMPANY_INFO.whatsapp}</div>
                    <div style={styles.footerContactItem}><MailIcon /> {COMPANY_INFO.email}</div>
                    <div style={styles.footerContactItem}><WebIcon /> {COMPANY_INFO.website}</div>
                </div>
            </div>
            <div style={styles.footerSocials}>
                <a href={COMPANY_INFO.socials.yt} target="_blank" rel="noopener noreferrer"><YouTubeIcon/></a>
                <a href={COMPANY_INFO.socials.fb} target="_blank" rel="noopener noreferrer"><FacebookIcon/></a>
                <a href={COMPANY_INFO.socials.ig} target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
                <a href={COMPANY_INFO.socials.tt} target="_blank" rel="noopener noreferrer"><TikTokIcon/></a>
                <a href={COMPANY_INFO.socials.x} target="_blank" rel="noopener noreferrer"><XIcon/></a>
            </div>
            <p>&copy; {new Date().getFullYear()} AAHHOO. {currentContent.footerRights}.</p>
        </div>
      </footer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={currentContent.locationsMexicoModalTitle}>
        <div style={styles.mexicoModalContent}>
            {MEXICO_LOCATIONS.map((loc, index) => (
                <div key={index} style={styles.card}>
                    <h3 style={styles.cardTitle}>{loc.city}</h3>
                    <p style={styles.cardText}>{loc.address}</p>
                    <p style={{...styles.cardText, fontSize: '0.9rem', color: '#6c757d'}}>Provider: {loc.provider}</p>
                </div>
            ))}
        </div>
      </Modal>

    </div>
  );
};

export default App;
