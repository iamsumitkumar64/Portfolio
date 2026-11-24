'use client';

import * as React from 'react';
import Link from 'next/link';
import { Box, Button, IconButton, Typography } from '@mui/material';
import {
  LightModeOutlined,
  DarkModeOutlined,
  KeyboardArrowDown,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useColorMode } from '@/theme/ThemeRegistry';
import styles from './navbar.module.css';

export default function Navbar() {
  const { mode, toggleColorMode } = useColorMode();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLLIElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <Box className={styles.container}>
        
        <Link href="#hero" className={styles.brandLink}>
          <Box className={styles.logoSymbol}>&gt;_</Box>
          <Box className={styles.brandTextGroup}>
            <Typography variant="h6" component="span" className={styles.brandTitle}>
              Sumit Kumar
            </Typography>
            <span className={styles.roleTag}>Software Engineer</span>
          </Box>
        </Link>

        
        <nav className={styles.desktopNav} aria-label="Primary Navigation">
          <ul className={styles.navMenu}>
            <li>
              <Link href="#hero" className={styles.navLink}>
                Overview
              </Link>
            </li>
            <li>
              <Link href="#projects" className={styles.navLink}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#experience" className={styles.navLink}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="#skills" className={styles.navLink}>
                Skills
              </Link>
            </li>

            
            <li className={styles.dropdownWrapper} ref={dropdownRef}>
              <button
                type="button"
                className={styles.dropdownBtn}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
              >
                <span>More</span>
                <KeyboardArrowDown
                  className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ''}`}
                  fontSize="small"
                />
              </button>

              {dropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <Link
                    href="#education"
                    className={styles.dropdownItem}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className={styles.dropdownIcon}>🎓</span>
                    <div>
                      <strong className={styles.dropdownHeading}>Education</strong>
                      <span className={styles.dropdownSub}>MCA (Chandigarh Univ) &amp; BCA</span>
                    </div>
                  </Link>

                  <Link
                    href="#achievements"
                    className={styles.dropdownItem}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className={styles.dropdownIcon}>🏆</span>
                    <div>
                      <strong className={styles.dropdownHeading}>Achievements</strong>
                      <span className={styles.dropdownSub}>Zerone24 Coding Contest &amp; LeetCode</span>
                    </div>
                  </Link>

                  <Link
                    href="#terminal"
                    className={styles.dropdownItem}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className={styles.dropdownIcon}>💻</span>
                    <div>
                      <strong className={styles.dropdownHeading}>Terminal Console</strong>
                      <span className={styles.dropdownSub}>Interactive in-browser shell</span>
                    </div>
                  </Link>

                  <Link
                    href="#contact"
                    className={styles.dropdownItem}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className={styles.dropdownIcon}>✉️</span>
                    <div>
                      <strong className={styles.dropdownHeading}>Direct Contact</strong>
                      <span className={styles.dropdownSub}>Coordinates &amp; Transmission form</span>
                    </div>
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>

        
        <Box className={styles.actionsGroup}>
          <IconButton
            onClick={toggleColorMode}
            className={styles.themeToggleBtn}
            size="small"
            title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {mode === 'dark' ? (
              <LightModeOutlined fontSize="small" />
            ) : (
              <DarkModeOutlined fontSize="small" />
            )}
          </IconButton>

          <Button
            component="a"
            href="/assets/Sumit Kumar Resume.pdf"
            download
            variant="outlined"
            size="small"
            className={styles.resumeBtn}
          >
            Resume PDF
          </Button>

          <Button
            component="a"
            href="#contact"
            variant="contained"
            size="small"
            color="primary"
            className={styles.talkBtn}
          >
            Let&apos;s Talk
          </Button>

          
          <IconButton
            className={styles.mobileHamburger}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Box>

      
      {mobileMenuOpen && (
        <Box className={styles.mobileDrawer}>
          
          <div className={styles.mobileThemeRow}>
            <span className={styles.mobileThemeLabel}>Appearance</span>
            <button
              type="button"
              className={styles.mobileThemePill}
              onClick={toggleColorMode}
            >
              {mode === 'dark' ? (
                <>
                  <LightModeOutlined fontSize="small" />
                  <span>Switch to Light Mode</span>
                </>
              ) : (
                <>
                  <DarkModeOutlined fontSize="small" />
                  <span>Switch to Dark Mode</span>
                </>
              )}
            </button>
          </div>

          <ul className={styles.mobileList}>
            <li>
              <Link href="#hero" onClick={() => setMobileMenuOpen(false)}>
                Overview
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#experience" onClick={() => setMobileMenuOpen(false)}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="#skills" onClick={() => setMobileMenuOpen(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="#education" onClick={() => setMobileMenuOpen(false)}>
                Education &amp; Degrees
              </Link>
            </li>
            <li>
              <Link href="#achievements" onClick={() => setMobileMenuOpen(false)}>
                Achievements &amp; Honors
              </Link>
            </li>
            <li>
              <Link href="#terminal" onClick={() => setMobileMenuOpen(false)}>
                Interactive Terminal
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact Coordinates
              </Link>
            </li>
          </ul>

          <Box className={styles.mobileActions}>
            <Button
              component="a"
              href="/assets/Sumit Kumar Resume.pdf"
              download
              variant="outlined"
              fullWidth
            >
              Download Resume (.PDF)
            </Button>
            <Button
              component="a"
              href="#contact"
              variant="contained"
              fullWidth
              onClick={() => setMobileMenuOpen(false)}
            >
              Let&apos;s Talk
            </Button>
          </Box>
        </Box>
      )}
    </header>
  );
}
