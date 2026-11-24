import * as React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { CONTACT_INFO } from '@/data/portfolio-data';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Box className={styles.container}>
        <Box className={styles.footerTop}>
          <Box className={styles.brandCol}>
            <Link href="#hero" className={styles.brandLogo}>
              <Box className={styles.logoSymbol}>&gt;_</Box>
              <Typography variant="h6" className={styles.brandTitle}>
                {CONTACT_INFO.name}
              </Typography>
            </Link>
            <Typography className={styles.brandDesc}>
              Scalable decoupled backends, RAG vector retrieval, Model Context Protocol (MCP) servers, and distributed systems. Built with Next.js &amp; Material UI.
            </Typography>
          </Box>

          <Box className={styles.linksGrid}>
            <div className={styles.linkCol}>
              <h4 className={styles.colHeading}>Navigation</h4>
              <ul className={styles.linksList}>
                <li><Link href="#hero">Overview</Link></li>
                <li><Link href="#projects">Featured Projects</Link></li>
                <li><Link href="#experience">Experience</Link></li>
                <li><Link href="#skills">Skills &amp; Tech</Link></li>
                <li><Link href="#education">Education</Link></li>
              </ul>
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.colHeading}>Networks</h4>
              <ul className={styles.linksList}>
                <li><a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
                <li><a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
                <li><a href={CONTACT_INFO.leetcode} target="_blank" rel="noopener noreferrer">LeetCode ↗</a></li>
                <li><a href={`mailto:${CONTACT_INFO.email}`}>Email Direct ↗</a></li>
              </ul>
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.colHeading}>Repositories</h4>
              <ul className={styles.linksList}>
                <li><a href="https://github.com/iamsumitkumar64/RAG-POC" target="_blank" rel="noopener noreferrer">RAG-POC ↗</a></li>
                <li><a href="https://github.com/iamsumitkumar64/Birwal-MCP" target="_blank" rel="noopener noreferrer">Birwal-MCP ↗</a></li>
                <li><a href="https://github.com/iamsumitkumar64/dot-react-comment-lib" target="_blank" rel="noopener noreferrer">dot-react-comment-lib ↗</a></li>
                <li><a href="https://github.com/iamsumitkumar64/kafka-POC" target="_blank" rel="noopener noreferrer">kafka-POC ↗</a></li>
                <li><a href="https://github.com/iamsumitkumar64/Eternal-Frames" target="_blank" rel="noopener noreferrer">Eternal-Frames ↗</a></li>
              </ul>
            </div>
          </Box>
        </Box>

        <Box className={styles.footerBottom}>
          <Typography className={styles.copyright}>
            © {new Date().getFullYear()} {CONTACT_INFO.name}. Minimal Next.js Portfolio.
          </Typography>
          <Box className={styles.statusIndicator}>
            <span className={styles.greenDot}></span>
            <span>All Systems Operational • 99.9% Uptime</span>
          </Box>
        </Box>
      </Box>
    </footer>
  );
}
