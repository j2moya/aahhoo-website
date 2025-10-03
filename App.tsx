import React, { useState } from 'react';
import { COMPANY_INFO, content as APP_CONTENT, MEXICO_LOCATIONS } from './constants';
import type { Language, MexicoLocation } from './types';
import LanguageSwitcher from './components/LanguageSwitcher';
import ServiceCard from './components/ServiceCard';
import Modal from './components/Modal';
import { 
  LocationIcon, 
  PhoneIcon,
  FaxIcon,
  WhatsAppIcon,
  EmailIcon,
  WebsiteIcon,
  YouTubeIcon, 
  FacebookIcon, 
  InstagramIcon, 
  TikTokIcon,
  XIcon,
  ArrowRightIcon,
  BookIcon,
  UserIcon,
  ArticleIcon,
  ReelIcon,
  ReelAdminIcon,
  VideoIcon,
  AudioIcon,
  PodcastIcon
} from './components/icons';
import { useWindowSize } from './hooks/useWindowSize';

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    ArticleIcon, ReelIcon, ReelAdminIcon, VideoIcon, AudioIcon, PodcastIcon, YouTubeIcon, XIcon, FacebookIcon, InstagramIcon, TikTokIcon
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('es');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const content = APP_CONTENT[language];
  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : false;

  const styles: { [key: string]: React.CSSProperties } = {
    app: {
      fontFamily: "'Lato', sans-serif",
      color: '#333',
      backgroundColor: '#FFFFFF',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '1rem' : '1rem 2rem',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontWeight: 700,
      fontSize: '1.75rem',
      color: '#0d3d56',
      fontFamily: "'Poppins', sans-serif",
    },
    navControls: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    navButton: {
      padding: '0.5rem 1rem',
      border: '1px solid #0d3d56',
      borderRadius: '4px',
      background: 'transparent',
      color: '#0d3d56',
      cursor: 'pointer',
      fontWeight: 700,
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
    },
    navButtonPrimary: {
      backgroundColor: '#0d3d56',
      color: 'white',
    },
    main: {
      padding: isMobile ? '0 1rem' : '0 2rem',
    },
    section: {
      padding: isMobile ? '3rem 0' : '5rem 0',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
    },
    hero: {
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to right, #0d3d56, #1c6e8c)',
      color: 'white',
    },
    h1: {
      fontSize: isMobile ? '2.5rem' : '4rem',
      fontWeight: 700,
      fontFamily: "'Poppins', sans-serif",
      margin: '0 0 1rem 0',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: 700,
      fontFamily: "'Poppins', sans-serif",
      color: '#0d3d56',
      marginBottom: '1rem',
      position: 'relative',
      display: 'inline-block',
    },
    titleLine: {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '4px',
      backgroundColor: '#1c6e8c',
    },
    subtitle: {
      fontSize: isMobile ? '1rem' : '1.25rem',
      maxWidth: '700px',
      opacity: 0.9,
    },
    p: {
      fontSize: '1.1rem',
      color: '#555',
      maxWidth: '800px',
      margin: '0 auto 2rem auto',
      lineHeight: 1.7,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? '100%' : '300px'}, 1fr))`,
      gap: '2rem',
      marginTop: '3rem',
      textAlign: 'left',
    },
    card: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      border: '1px solid #eee',
    },
    contactSection: {
      backgroundColor: '#1c6e8c',
      color: 'white',
      padding: '4rem 2rem',
      borderRadius: '8px',
    },
    contactButton: {
      padding: '1rem 2rem',
      border: '2px solid white',
      borderRadius: '50px',
      background: '#1eb4c9',
      color: 'white',
      cursor: 'pointer',
      fontWeight: 700,
      fontSize: '1.1rem',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
      marginTop: '1rem',
    },
    footer: {
      display: isMobile ? 'block' : 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '3rem 2rem',
      backgroundColor: '#212529',
      color: '#adb5bd',
    },
    footerSection: {
      marginBottom: isMobile ? '2rem' : '0',
    },
    footerTitle: {
      color: 'white',
      fontFamily: "'Poppins', sans-serif",
      marginBottom: '1rem',
    },
    footerLink: {
      color: '#adb5bd',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.5rem',
    },
    footerSocials: {
      display: 'flex',
      gap: '1rem',
      marginTop: '2rem',
    },
    copyright: {
      textAlign: 'center',
      padding: '1.5rem',
      backgroundColor: '#1a1d20',
      color: '#6c757d',
    },
    modalListItem: {
      padding: '1rem',
      borderBottom: '1px solid #eee',
      color: '#333', // Fix for white text on white background
    },
    modalProvider: {
        fontWeight: 'bold',
        marginBottom: '0.5rem',
    },
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div style={styles.logo}>AAHHOO</div>
        <div style={styles.navControls}>
          <a href={COMPANY_INFO.registerUrl} target="_blank" rel="noopener noreferrer">
            <button style={{...styles.navButton, ...styles.navButtonPrimary}}>{content.registerText}</button>
          </a>
          <a href={COMPANY_INFO.memberUrl} target="_blank" rel="noopener noreferrer">
            <button style={styles.navButton}>{content.loginText}</button>
          </a>
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </header>

      <main>
        <section style={styles.hero}>
          <h1 style={styles.h1}>{content.tagline}</h1>
          <p style={styles.subtitle}>{content.heroSubtitle}</p>
        </section>

        <section id="about" style={styles.section}>
          <h2 style={styles.h2}>{content.aboutTitle}<div style={styles.titleLine}></div></h2>
          <p style={styles.p}>{content.aboutText}</p>
        </section>

        <section id="services" style={styles.section}>
          <h2 style={styles.h2}>{content.servicesTitle}<div style={styles.titleLine}></div></h2>
          <div style={styles.grid}>
            {content.services.map(service => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>
        
        <section id="locations" style={styles.section}>
          <h2 style={styles.h2}>{content.locationsTitle}<div style={styles.titleLine}></div></h2>
          <p style={styles.p}>{content.locationsSubtitle}</p>
          <div style={{...styles.grid, gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? '100%' : '350px'}, 1fr))`}}>
            {content.locations.map(loc => (
              <div key={loc.city} style={styles.card}>
                <h3 style={{ fontFamily: "'Poppins', sans-serif" }}>{loc.city}</h3>
                {loc.addresses.map(addr => <p key={addr}>{addr}</p>)}
                {loc.city === 'Mexico City' && (
                  <button onClick={() => setIsModalOpen(true)} style={styles.contactButton}>
                    {language === 'es' ? 'Ver otros' : 'See others'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="associates" style={styles.section}>
          <h2 style={styles.h2}>{content.associatesTitle}<div style={styles.titleLine}></div></h2>
          <p style={styles.p}>{content.associatesSubtitle}</p>
          <div style={{...styles.grid, gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? '100%' : '250px'}, 1fr))`}}>
            {content.associates.map(associate => (
              <div key={associate.name} style={styles.card}>
                <UserIcon style={{ marginBottom: '1rem', color: '#1c6e8c' }}/>
                <h3 style={{ fontFamily: "'Poppins', sans-serif" }}>{associate.name}</h3>
                <p>{associate.location}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="discover" style={styles.section}>
          <h2 style={styles.h2}>{content.externalLinksTitle}<div style={styles.titleLine}></div></h2>
           <div style={{...styles.grid, gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? '100%' : '400px'}, 1fr))`}}>
              <a href={COMPANY_INFO.streamUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                  <div style={styles.card}>
                      <ArrowRightIcon style={{color: '#1c6e8c'}} />
                      <h3 style={{ fontFamily: "'Poppins', sans-serif" }}>{content.streamTitle}</h3>
                      <p>{content.streamText}</p>
                  </div>
              </a>
              <a href={COMPANY_INFO.booksUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                  <div style={styles.card}>
                      <BookIcon style={{color: '#1c6e8c'}} />
                      <h3 style={{ fontFamily: "'Poppins', sans-serif" }}>{content.booksTitle}</h3>
                      <p>{content.booksText}</p>
                  </div>
              </a>
           </div>
        </section>

        <section id="channels" style={styles.section}>
          <h2 style={styles.h2}>{content.moreLinksTitle}<div style={styles.titleLine}></div></h2>
          <p style={styles.p}>{content.moreLinksSubtitle}</p>
          <div style={styles.grid}>
            {content.moreLinks.map(link => {
              const Icon = iconMap[link.icon];
              return (
                 <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.title} style={{...styles.card, textDecoration: 'none', color: 'inherit'}}>
                   {Icon && <Icon style={{ width: 24, height: 24, color: '#1c6e8c', marginBottom: '1rem' }} />}
                   <h3 style={{ fontFamily: "'Poppins', sans-serif" }}>{link.title}</h3>
                   <p>{link.description}</p>
                 </a>
              )
            })}
          </div>
        </section>

        <section id="explore" style={styles.section}>
          <h2 style={styles.h2}>{content.exploreMoreTitle}<div style={styles.titleLine}></div></h2>
          <div style={styles.grid}>
            {content.exploreMoreLinks.map(link => {
                const Icon = iconMap[link.icon];
                return (
                    <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.title} style={{...styles.card, textDecoration: 'none', color: 'inherit'}}>
                        {Icon && <Icon style={{ width: 24, height: 24, color: '#1c6e8c', marginBottom: '1rem' }} />}
                        <h3 style={{ fontFamily: "'Poppins', sans-serif" }}>{link.title}</h3>
                        <p>{link.description}</p>
                    </a>
                )
            })}
          </div>
        </section>
        
        <section style={{...styles.section, ...styles.contactSection}}>
          <h2 style={{...styles.h2, color: 'white'}}>{content.contactTitle}</h2>
          <p>{content.investmentPrice}</p>
          <a href={COMPANY_INFO.calendly} target="_blank" rel="noopener noreferrer" style={styles.contactButton}>
            {content.bookingLink}
          </a>
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>AAHHOO Inc.</h3>
          <p style={{ display: 'flex', alignItems: 'center' }}><LocationIcon style={{ marginRight: '10px', minWidth: '24px' }}/> {COMPANY_INFO.address}</p>
        </div>
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>{content.contactTitle}</h3>
          <p><a href={`tel:${COMPANY_INFO.phone}`} style={styles.footerLink}><PhoneIcon style={{ marginRight: '10px' }}/> {COMPANY_INFO.phone}</a></p>
          <p><a href={`tel:${COMPANY_INFO.mexicoPhone}`} style={styles.footerLink}><PhoneIcon style={{ marginRight: '10px' }}/> {COMPANY_INFO.mexicoPhone} (México)</a></p>
          <p><a href={`tel:${COMPANY_INFO.fax}`} style={styles.footerLink}><FaxIcon style={{ marginRight: '10px' }}/> {COMPANY_INFO.fax}</a></p>
          <p><a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" style={styles.footerLink}><WhatsAppIcon style={{ marginRight: '10px' }}/> {COMPANY_INFO.whatsapp}</a></p>
          <p><a href={`mailto:${COMPANY_INFO.email}`} style={styles.footerLink}><EmailIcon style={{ marginRight: '10px' }}/> {COMPANY_INFO.email}</a></p>
          <p><a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer" style={styles.footerLink}><WebsiteIcon style={{ marginRight: '10px' }}/> {COMPANY_INFO.website}</a></p>
        </div>
      </footer>
      <div style={styles.copyright}>
        © {new Date().getFullYear()} AAHHOO. {content.footerRights}
        <div style={styles.footerSocials}>
            <a href={COMPANY_INFO.socials.yt} target="_blank" rel="noopener noreferrer" style={{color: 'white'}}><YouTubeIcon /></a>
            <a href={COMPANY_INFO.socials.fb} target="_blank" rel="noopener noreferrer" style={{color: 'white'}}><FacebookIcon /></a>
            <a href={COMPANY_INFO.socials.ig} target="_blank" rel="noopener noreferrer" style={{color: 'white'}}><InstagramIcon /></a>
            <a href={COMPANY_INFO.socials.tt} target="_blank" rel="noopener noreferrer" style={{color: 'white'}}><TikTokIcon /></a>
            <a href={COMPANY_INFO.socials.x} target="_blank" rel="noopener noreferrer" style={{color: 'white'}}><XIcon /></a>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 style={{ fontFamily: "'Poppins', sans-serif", marginTop: 0 }}>{content.locationsMexicoModalTitle}</h2>
        <div style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '1rem' }}>
            {MEXICO_LOCATIONS.map((loc: MexicoLocation, index: number) => (
            <div key={index} style={styles.modalListItem}>
                <p style={styles.modalProvider}>{loc.address}</p>
                <p>{loc.provider}</p>
            </div>
            ))}
        </div>
      </Modal>
    </div>
  );
};

export default App;