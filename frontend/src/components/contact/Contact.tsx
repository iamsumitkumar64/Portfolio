'use client';

import * as React from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import {
  OpenInNew,
  Send,
  CheckCircleOutlined,
  ErrorOutlined,
} from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { CONTACT_INFO } from '@/data/portfolio-data';
import styles from './contact.module.css';

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name must not exceed 50 characters' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address' }),
  mobile: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || /^[+0-9\s\-()]{7,20}$/.test(val), {
      message: 'Please enter a valid phone number (or leave empty)',
    }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .max(1500, { message: 'Message must not exceed 1500 characters' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [copiedKey, setCopiedKey] = React.useState<string | null>(null);
  const [status, setStatus] = React.useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      message: '',
    },
  });

  const handleCopy = (key: string, text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_nvpczn8';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_fjbjz6e';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'Gj3Jhn-9vvMOvH8oa';

    const params = {
      from_name: data.name.trim(),
      email_id: data.email.trim(),
      mobile: data.mobile ? data.mobile.trim() : '',
      message: data.message.trim(),
    };

    try {
      await emailjs.send(serviceId, templateId, params, publicKey);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! Sumit will get back to you soon.',
      });
      reset();
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 6000);
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email directly.',
      });
    }
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

            {status.type === 'success' && (
              <div className={`${styles.statusAlert} ${styles.successAlert}`}>
                <CheckCircleOutlined fontSize="small" className={styles.alertIcon} />
                <span>{status.message}</span>
              </div>
            )}

            {status.type === 'error' && (
              <div className={`${styles.statusAlert} ${styles.errorAlert}`}>
                <ErrorOutlined fontSize="small" className={styles.alertIcon} />
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
              <div className={styles.fieldGroup}>
                <label htmlFor="user-name" className={styles.fieldLabel}>
                  Your Name <span className={styles.requiredAsterisk}>*</span>
                </label>
                <input
                  id="user-name"
                  type="text"
                  placeholder="Jane Doe / Hiring Lead"
                  {...register('name')}
                  className={`${styles.formInput} ${errors.name ? styles.inputError : ''}`}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && (
                  <span className={styles.errorText}>{errors.name.message}</span>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="user-email" className={styles.fieldLabel}>
                  Your Email <span className={styles.requiredAsterisk}>*</span>
                </label>
                <input
                  id="user-email"
                  type="email"
                  placeholder="jane@company.com"
                  {...register('email')}
                  className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <span className={styles.errorText}>{errors.email.message}</span>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="user-mobile" className={styles.fieldLabel}>
                  Phone / Mobile (Optional)
                </label>
                <input
                  id="user-mobile"
                  type="tel"
                  placeholder="+91 99925 28037"
                  {...register('mobile')}
                  className={`${styles.formInput} ${errors.mobile ? styles.inputError : ''}`}
                  aria-invalid={Boolean(errors.mobile)}
                />
                {errors.mobile && (
                  <span className={styles.errorText}>{errors.mobile.message}</span>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="user-message" className={styles.fieldLabel}>
                  Message &amp; Scope <span className={styles.requiredAsterisk}>*</span>
                </label>
                <textarea
                  id="user-message"
                  rows={4}
                  placeholder="Tell me about the engineering role, team, or distributed systems problem..."
                  {...register('message')}
                  className={`${styles.formTextarea} ${errors.message ? styles.inputError : ''}`}
                  aria-invalid={Boolean(errors.message)}
                ></textarea>
                {errors.message && (
                  <span className={styles.errorText}>{errors.message.message}</span>
                )}
              </div>

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={isSubmitting}
                endIcon={
                  isSubmitting ? (
                    <CircularProgress size={18} color="inherit" />
                  ) : (
                    <Send />
                  )
                }
                className={styles.submitBtn}
              >
                {isSubmitting ? 'SENDING...' : 'SUBMIT FORM'}
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
