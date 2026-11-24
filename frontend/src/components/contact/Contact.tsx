'use client';

import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import {
  EmailOutlined,
  PhoneOutlined,
  OpenInNew,
  Send,
  ContentCopy,
} from '@mui/icons-material';
import { CONTACT_INFO } from '@/data/portfolio-data';
import styles from './contact.module.css';

export default function Contact() {
  const [copiedKey, setCopiedKey] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);

  const handleCopy = (key: string, text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <Box className={styles.container}>
        <Box className={styles.sectionHeader}>
          <span className={styles.badge}>
            <span className={styles.dot}></span>
            <span>Direct Coordinates</span>
          </span>
          <Typography variant="h2" className={styles.title}>
            Get in touch &amp; collaborate
          </Typography>
          <Typography className={styles.desc}>
            Have an open full-stack or backend engineering opportunity, system architecture question, or AI project to build? Let&apos;s connect!
          </Typography>
        </Box>

        <Box className={styles.contactGrid}>
          
          <Box className={styles.infoPanel}>
            <Typography variant="h5" className={styles.panelTitle}>
              Direct Network Coordinates
            </Typography>
            <Typography className={styles.panelDesc}>
              Reach out directly via email, phone, or LinkedIn. Click to copy coordinates with one tap.
            </Typography>

            <Box className={styles.cardsStack}>
              
              <div
                className={styles.coordCard}
                onClick={() => handleCopy('email', CONTACT_INFO.email)}
              >
                <div className={styles.cardIcon}>✉️</div>
                <div className={styles.cardText}>
                  <span className={styles.cardLabel}>Direct Email</span>
                  <strong className={styles.cardValue}>{CONTACT_INFO.email}</strong>
                </div>
                <span className={styles.copyBadge}>
                  {copiedKey === 'email' ? 'Copied ✓' : 'Copy ⎘'}
                </span>
              </div>

              
              <div
                className={styles.coordCard}
                onClick={() => handleCopy('phone', CONTACT_INFO.phone)}
              >
                <div className={styles.cardIcon}>📞</div>
                <div className={styles.cardText}>
                  <span className={styles.cardLabel}>Mobile / WhatsApp</span>
                  <strong className={styles.cardValue}>{CONTACT_INFO.phone}</strong>
                </div>
                <span className={styles.copyBadge}>
                  {copiedKey === 'phone' ? 'Copied ✓' : 'Copy ⎘'}
                </span>
              </div>

              
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.coordCard}
              >
                <div className={styles.cardIcon}>🔗</div>
                <div className={styles.cardText}>
                  <span className={styles.cardLabel}>LinkedIn Profile</span>
                  <strong className={styles.cardValue}>linkedin.com/in/iamsumitkumar64</strong>
                </div>
                <OpenInNew fontSize="small" className={styles.arrowIcon} />
              </a>

              
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.coordCard}
              >
                <div className={styles.cardIcon}>🐙</div>
                <div className={styles.cardText}>
                  <span className={styles.cardLabel}>GitHub Profile</span>
                  <strong className={styles.cardValue}>github.com/iamsumitkumar64</strong>
                </div>
                <OpenInNew fontSize="small" className={styles.arrowIcon} />
              </a>

              
              <a
                href={CONTACT_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.coordCard}
              >
                <div className={styles.cardIcon}>🧠</div>
                <div className={styles.cardText}>
                  <span className={styles.cardLabel}>LeetCode Profile</span>
                  <strong className={styles.cardValue}>leetcode.com/u/iamsumitkumar64</strong>
                </div>
                <OpenInNew fontSize="small" className={styles.arrowIcon} />
              </a>
            </Box>
          </Box>

          
          <Box className={styles.formPanel}>
            <Typography variant="h5" className={styles.panelTitle}>
              Transmit Direct Message
            </Typography>
            <Typography className={styles.panelDesc}>
              Send an inquiry or interview schedule invitation directly to my inbox.
            </Typography>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe / Hiring Lead"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Phone / Mobile (Optional)</label>
                <input
                  type="tel"
                  placeholder="+91 (000) 000-0000"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Message &amp; Scope</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about the engineering role, team, or distributed systems problem..."
                  className={styles.formTextarea}
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                endIcon={<Send />}
                className={styles.submitBtn}
              >
                {submitted ? 'Message Delivered ✓' : 'Send Message Transmit'}
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
