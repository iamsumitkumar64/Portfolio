'use client';

import * as React from 'react';
import Link from 'next/link';
import { Box, Button, Typography } from '@mui/material';
import {
  ContentCopy,
  EmailOutlined,
  PhoneOutlined,
  LocationOnOutlined,
  ArrowDownward,
  Download,
} from '@mui/icons-material';
import { CONTACT_INFO, STAT_METRICS } from '@/data/portfolio-data';
import styles from './hero.module.css';

export default function Hero() {
  const [copiedText, setCopiedText] = React.useState<string | null>(null);

  const handleCopy = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    }
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <Box className={styles.container}>
        
        <Box className={styles.announcement}>
          <span className={styles.badge}>
            <span className={styles.statusDot}></span>
            <span>AVAILABLE FOR FULL STACK &amp; BACKEND ROLES</span>
          </span>
        </Box>

        
        <Typography variant="h1" className={styles.heroTitleName}>
          {CONTACT_INFO.name}
        </Typography>

        <Typography variant="h2" className={styles.heroTitleRole}>
          {CONTACT_INFO.role}
        </Typography>

        <Typography className={styles.heroSubtitle}>
          I engineer scalable, decoupled backends and modern web applications utilizing{' '}
          <strong>Event-Driven Microservices</strong>, <strong>Model Context Protocol (MCP)</strong>,{' '}
          <strong>RAG &amp; pgvector</strong>, <strong>RabbitMQ</strong>, <strong>NestJS</strong>,{' '}
          <strong>Docker</strong>, and <strong>Next.js</strong>.
        </Typography>

        
        <Box className={styles.ctaGroup}>
          <Button
            component={Link}
            href="#projects"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowDownward />}
            className={styles.primaryCta}
          >
            Explore Repositories &amp; Demos
          </Button>

          <Button
            component="a"
            href="/assets/Sumit Kumar Resume.pdf"
            download
            variant="outlined"
            size="large"
            startIcon={<Download />}
            className={styles.secondaryCta}
          >
            Download CV (.PDF)
          </Button>
        </Box>

        
        <Box className={styles.coordinatesRow}>
          <button
            type="button"
            className={styles.coordPill}
            onClick={() => handleCopy(CONTACT_INFO.email)}
            title="Click to copy email"
          >
            <EmailOutlined fontSize="inherit" />
            <span>{CONTACT_INFO.email}</span>
            <ContentCopy fontSize="inherit" className={styles.copyIcon} />
            {copiedText === CONTACT_INFO.email && <span className={styles.copiedFeedback}>Copied!</span>}
          </button>

          <button
            type="button"
            className={styles.coordPill}
            onClick={() => handleCopy(CONTACT_INFO.phone)}
            title="Click to copy phone"
          >
            <PhoneOutlined fontSize="inherit" />
            <span>{CONTACT_INFO.phone}</span>
            <ContentCopy fontSize="inherit" className={styles.copyIcon} />
            {copiedText === CONTACT_INFO.phone && <span className={styles.copiedFeedback}>Copied!</span>}
          </button>

          <Box className={`${styles.coordPill} ${styles.locationPill}`}>
            <LocationOnOutlined fontSize="inherit" />
            <span>{CONTACT_INFO.location}</span>
          </Box>
        </Box>

        
        <Box className={styles.statsGrid}>
          {STAT_METRICS.map((metric, idx) => (
            <Box key={idx} className={styles.statCard}>
              <Box className={styles.statBadgeRow}>
                <span className={`${styles.dot} ${styles[`${metric.badgeDot}Dot`]}`}></span>
                <span className={styles.statBadgeText}>{metric.badgeText}</span>
              </Box>
              <Typography variant="h5" className={styles.statHeadline}>
                {metric.headline}
              </Typography>
              <Typography className={styles.statSubtitle}>{metric.subtitle}</Typography>
              <Typography className={styles.statCaption}>{metric.caption}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
}
