'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  HomeOutlined,
  WorkOutlined,
  ScienceOutlined,
  PersonOutlined,
  LayersOutlined,
  KeyboardArrowDown,
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Close as CloseIcon,
  AlbumOutlined,
  ChatOutlined,
  ArticleOutlined,
  OpenInNew,
  ArrowForward,
} from '@mui/icons-material';
import { useColorMode } from '@/theme/ThemeRegistry';
import styles from './navbar.module.css';

interface MegaItem {
  id: string;
  title: string;
  urlLabel: string;
  href: string;
  description: string;
  tag: string;
  iconType: 'turntable' | 'comments' | 'assessment';
}

const EXPERIMENTS_DATA: MegaItem[] = [
  {
    id: 'turntable',
    title: '3D Turntable Component',
    urlLabel: 'turntable.poulo.site',
    href: 'https://github.com/iamsumitkumar64/Birwal-MCP',
    description:
      'Engineered an interactive, highly responsive 3D Turntable component using modern WebGL, three-point lighting, and vinyl physics.',
    tag: 'Live demo',
    iconType: 'turntable',
  },
  {
    id: 'component-lib',
    title: 'Component Library',
    urlLabel: 'components.poulo.site',
    href: 'https://www.npmjs.com/package/dot-react-comment-lib',
    description:
      'Production-ready nested comment threads component library with multi-level replies, emoji reactions, and tsup bundling.',
    tag: 'NPM package',
    iconType: 'comments',
  },
  {
    id: 'assessment',
    title: 'Assessment',
    urlLabel: 'assessment.poulo.site',
    href: 'https://github.com/iamsumitkumar64/RAG-POC',
    description:
      'End-to-end Retrieval-Augmented Generation pipeline built with NestJS, Gemini embeddings, and PostgreSQL pgvector.',
    tag: 'Live demo',
    iconType: 'assessment',
  },
];

export default function Navbar() {
  const { mode, toggleColorMode } = useColorMode();
  const [activeTab, setActiveTab] = React.useState('home');
  const [experimentsOpen, setExperimentsOpen] = React.useState(false);
  const [hoveredExp, setHoveredExp] = React.useState<MegaItem>(EXPERIMENTS_DATA[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setExperimentsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.navContainer} ref={navRef}>
        <nav className={styles.pillIsland} aria-label="Main Navigation">
          <Link
            href="#hero"
            className={`${styles.navItemBtn} ${activeTab === 'home' ? styles.activeItem : ''}`}
            onClick={() => {
              setActiveTab('home');
              setExperimentsOpen(false);
            }}
          >
            <HomeOutlined fontSize="small" />
            <span>Home</span>
          </Link>

          <Link
            href="#projects"
            className={`${styles.navItemBtn} ${activeTab === 'work' ? styles.activeItem : ''}`}
            onClick={() => {
              setActiveTab('work');
              setExperimentsOpen(false);
            }}
          >
            <WorkOutlined fontSize="small" />
            <span>Work</span>
          </Link>

          <button
            type="button"
            className={`${styles.navItemBtn} ${experimentsOpen ? styles.activeItem : ''}`}
            onClick={() => setExperimentsOpen(!experimentsOpen)}
            aria-expanded={experimentsOpen}
          >
            <ScienceOutlined fontSize="small" />
            <span>Experiments</span>
            <KeyboardArrowDown
              className={`${styles.chevron} ${experimentsOpen ? styles.chevronOpen : ''}`}
            />
          </button>

          <Link
            href="#experience"
            className={`${styles.navItemBtn} ${activeTab === 'about' ? styles.activeItem : ''}`}
            onClick={() => {
              setActiveTab('about');
              setExperimentsOpen(false);
            }}
          >
            <PersonOutlined fontSize="small" />
            <span>About</span>
          </Link>

          <Link
            href="#skills"
            className={`${styles.navItemBtn} ${activeTab === 'stack' ? styles.activeItem : ''}`}
            onClick={() => {
              setActiveTab('stack');
              setExperimentsOpen(false);
            }}
          >
            <LayersOutlined fontSize="small" />
            <span>Stack</span>
          </Link>
        </nav>

        <a href="#contact" className={styles.callButton}>
          <span className={styles.callIconCluster} aria-hidden="true">
            <span className={styles.dotCenter}></span>
            <span className={styles.dotTop}></span>
            <span className={styles.dotRight}></span>
            <span className={styles.dotBottom}></span>
            <span className={styles.dotLeft}></span>
          </span>
          <span>Book a Call</span>
        </a>

        <button
          type="button"
          onClick={toggleColorMode}
          className={styles.themeTogglePill}
          title={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {mode === 'dark' ? (
            <LightModeOutlined fontSize="small" />
          ) : (
            <DarkModeOutlined fontSize="small" />
          )}
        </button>

        <button
          type="button"
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
        </button>

        {experimentsOpen && (
          <div className={styles.megaMenuWrapper}>
            <div className={styles.megaGrid}>
              <a
                href={hoveredExp.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.previewCard}
              >
                <div className={styles.previewArtFrame}>
                  {hoveredExp.id === 'turntable' ? (
                    <div className={styles.turntableGraphic}>
                      <div className={styles.turntableTextSide}>
                        <span className={styles.turntableHeadline}>Your music, your cover.</span>
                        <span className={styles.turntableSub}>Next.js • Three.js</span>
                      </div>
                      <div className={styles.vinylDisc}>
                        <div className={styles.vinylCenter}>33</div>
                        <div className={styles.tonearm}></div>
                      </div>
                    </div>
                  ) : hoveredExp.id === 'component-lib' ? (
                    <div className={styles.turntableGraphic}>
                      <div className={styles.turntableTextSide}>
                        <span className={styles.turntableHeadline}>Nested threaded comments</span>
                        <span className={styles.turntableSub}>npm: dot-react-comment-lib</span>
                      </div>
                      <div className={styles.squircleIcon}>
                        <ChatOutlined fontSize="medium" />
                      </div>
                    </div>
                  ) : (
                    <div className={styles.turntableGraphic}>
                      <div className={styles.turntableTextSide}>
                        <span className={styles.turntableHeadline}>RAG Semantic Indexing</span>
                        <span className={styles.turntableSub}>pgvector • Gemini</span>
                      </div>
                      <div className={styles.squircleIcon}>
                        <ArticleOutlined fontSize="medium" />
                      </div>
                    </div>
                  )}
                </div>

                <div className={styles.previewTextGroup}>
                  <p className={styles.previewDesc}>{hoveredExp.description}</p>
                  <div className={styles.previewFooterRow}>
                    <span>{hoveredExp.urlLabel}</span>
                    <span className={styles.liveDemoBadge}>
                      <span>{hoveredExp.tag}</span>
                      <OpenInNew fontSize="inherit" />
                    </span>
                  </div>
                </div>
              </a>

              <div className={styles.rightListCol}>
                <div className={styles.colHeader}>AI EXPERIMENTS</div>
                <div className={styles.itemsStack}>
                  {EXPERIMENTS_DATA.map((item) => (
                    <div
                      key={item.id}
                      className={`${styles.megaItemRow} ${
                        hoveredExp.id === item.id ? styles.activeMegaRow : ''
                      }`}
                      onMouseEnter={() => setHoveredExp(item)}
                      onClick={() => {
                        window.open(item.href, '_blank');
                        setExperimentsOpen(false);
                      }}
                    >
                      <div className={styles.squircleIcon}>
                        {item.iconType === 'turntable' ? (
                          <AlbumOutlined fontSize="small" />
                        ) : item.iconType === 'comments' ? (
                          <ChatOutlined fontSize="small" />
                        ) : (
                          <ArticleOutlined fontSize="small" />
                        )}
                      </div>
                      <div className={styles.megaItemTexts}>
                        <span className={styles.megaItemTitle}>{item.title}</span>
                        <span className={styles.megaItemUrl}>{item.urlLabel}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.megaFooterBar}>
              <span>Live demos, each in a new tab</span>
              <Link
                href="#projects"
                className={styles.seeThemLink}
                onClick={() => setExperimentsOpen(false)}
              >
                <span>See them here</span>
                <ArrowForward fontSize="inherit" />
              </Link>
            </div>
          </div>
        )}

        {mobileMenuOpen && (
          <div className={styles.mobileDrawer}>
            <div className={styles.mobileThemeRow}>
              <span>Theme Appearance</span>
              <button
                type="button"
                className={styles.mobileThemePill}
                onClick={toggleColorMode}
              >
                {mode === 'dark' ? <LightModeOutlined fontSize="small" /> : <DarkModeOutlined fontSize="small" />}
                <span>{mode === 'dark' ? 'Light' : 'Dark'}</span>
              </button>
            </div>

            <ul className={styles.mobileList}>
              <li>
                <Link href="#hero" onClick={() => setMobileMenuOpen(false)}>
                  <span>Home</span>
                  <HomeOutlined fontSize="small" />
                </Link>
              </li>
              <li>
                <Link href="#projects" onClick={() => setMobileMenuOpen(false)}>
                  <span>Selected Work</span>
                  <WorkOutlined fontSize="small" />
                </Link>
              </li>
              <li>
                <Link href="#experience" onClick={() => setMobileMenuOpen(false)}>
                  <span>About &amp; Career</span>
                  <PersonOutlined fontSize="small" />
                </Link>
              </li>
              <li>
                <Link href="#skills" onClick={() => setMobileMenuOpen(false)}>
                  <span>Stack &amp; Skills</span>
                  <LayersOutlined fontSize="small" />
                </Link>
              </li>
              <li>
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  <span>Book a Call</span>
                  <ArrowForward fontSize="small" />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
