'use client';

import * as React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import {
  HubOutlined,
  CreditCardOutlined,
  ArchitectureOutlined,
  SpeedOutlined,
  PsychologyOutlined,
  TuneOutlined,
  LocationOnOutlined,
  CalendarTodayOutlined,
  CheckCircleOutlined,
} from '@mui/icons-material';
import { EXPERIENCES } from '@/data/portfolio-data';
import styles from './experience.module.css';

export default function Experience() {
  const getImpactIcon = (title: string) => {
    if (title.includes('Event-Driven') || title.includes('Messaging')) {
      return <HubOutlined fontSize="small" />;
    }
    if (title.includes('Payment') || title.includes('Payouts')) {
      return <CreditCardOutlined fontSize="small" />;
    }
    if (title.includes('Architecture') || title.includes('Domain')) {
      return <ArchitectureOutlined fontSize="small" />;
    }
    if (title.includes('Algorithmic') || title.includes('DSA')) {
      return <PsychologyOutlined fontSize="small" />;
    }
    if (title.includes('Full-Stack')) {
      return <TuneOutlined fontSize="small" />;
    }
    return <SpeedOutlined fontSize="small" />;
  };

  const getImpactTag = (title: string, companyId: string) => {
    if (title.includes('Messaging') || title.includes('Outbox')) return 'RabbitMQ • AMQP';
    if (title.includes('Payment')) return 'PayMongo • Stripe';
    if (title.includes('Domain')) return 'NestJS • DDD';
    if (title.includes('Order') || title.includes('Concurrency')) return 'Docker • Microservices';
    if (title.includes('Algorithmic') || title.includes('DSA')) return '220+ Solved • C++';
    if (title.includes('Full-Stack')) return 'React • Express • MongoDB';
    if (title.includes('Performance') || title.includes('Optimization')) return 'Profiling & Latency';
    return companyId === 'zenmonk' ? 'Backend Core' : 'Systems';
  };

  return (
    <section id="experience" className={styles.experienceSection}>
      <Box className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            <span>Career Progression &amp; Production Track</span>
          </div>

          <Typography variant="h2" component="h2" className={styles.title}>
            <span>Professional experience</span>
            <span className={styles.expCount}>
              ({EXPERIENCES.length.toString().padStart(2, '0')})
            </span>
          </Typography>

          <p className={styles.desc}>
            Production engineering deployments, distributed microservice outbox pipelines, multi-gateway FinTech infrastructure, and algorithmic foundations.
          </p>
        </div>

        <div className={styles.kpiStrip}>
          <div className={styles.kpiCard}>
            <div className={styles.kpiHeaderRow}>
              <span className={styles.kpiTag}>Active Role</span>
              <div className={styles.kpiIconBox}>
                <HubOutlined fontSize="small" />
              </div>
            </div>
            <h3 className={styles.kpiTitle}>Zenmonk Software</h3>
            <p className={styles.kpiSub}>Event-Driven Microservices, Transactional Outbox &amp; PayMongo Integration</p>
          </div>

          <div className={styles.kpiCard}>
            <div className={styles.kpiHeaderRow}>
              <span className={styles.kpiTag}>Foundational Systems</span>
              <div className={styles.kpiIconBox}>
                <PsychologyOutlined fontSize="small" />
              </div>
            </div>
            <h3 className={styles.kpiTitle}>CodeQuotient</h3>
            <p className={styles.kpiSub}>220+ LeetCode Solutions in C++, REST Backends &amp; State Profiling</p>
          </div>

          <div className={styles.kpiCard}>
            <div className={styles.kpiHeaderRow}>
              <span className={styles.kpiTag}>Production Stack</span>
              <div className={styles.kpiIconBox}>
                <SpeedOutlined fontSize="small" />
              </div>
            </div>
            <h3 className={styles.kpiTitle}>Reliable Infrastructure</h3>
            <p className={styles.kpiSub}>NestJS, RabbitMQ, PostgreSQL, Docker, Stripe Connect &amp; Next.js</p>
          </div>
        </div>

        <div className={styles.dossierList}>
          {EXPERIENCES.map((exp) => (
            <article key={exp.id} className={styles.dossierCard}>
              {exp.active && <div className={styles.activeDossierGlow} aria-hidden="true"></div>}

              <div className={styles.dossierHeader}>
                <div className={styles.companyIdentity}>
                  <div
                    className={`${styles.monogramSquircle} ${
                      exp.active ? styles.activeMonogram : ''
                    }`}
                  >
                    <span>{exp.avatarText}</span>
                  </div>

                  <div className={styles.companyTitles}>
                    <h3 className={styles.companyName}>{exp.company}</h3>
                    <span className={styles.roleName}>{exp.role}</span>
                    <div className={styles.metaRow}>
                      <span className={styles.metaItem}>
                        <LocationOnOutlined fontSize="inherit" />
                        <span>{exp.location}</span>
                      </span>
                      <span>•</span>
                      <span className={styles.metaItem}>
                        <CalendarTodayOutlined fontSize="inherit" />
                        <span>{exp.tenure}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.dossierRightBadges}>
                  {exp.active ? (
                    <div className={styles.activeStatusPill}>
                      <span className={styles.radarPulseDot}></span>
                      <span>Current Production Role</span>
                    </div>
                  ) : (
                    <div className={styles.completedStatusPill}>
                      <CheckCircleOutlined fontSize="small" />
                      <span>Completed Internship</span>
                    </div>
                  )}

                  <span className={styles.tenurePill}>{exp.tenure}</span>
                </div>
              </div>

              <div className={styles.impactSection}>
                <span className={styles.impactSectionTitle}>
                  <span>Key Architectural Responsibilities &amp; Measured Impact</span>
                </span>

                <div className={styles.impactBentoGrid}>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className={styles.impactTile}>
                      <div className={styles.tileTopBar}>
                        <div className={styles.tileIconSquare}>{getImpactIcon(resp.title)}</div>
                        <span className={styles.tileChipTag}>
                          {getImpactTag(resp.title, exp.id)}
                        </span>
                      </div>
                      <h4 className={styles.tileTitle}>{resp.title}</h4>
                      <p className={styles.tileDesc}>{resp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.techFooter}>
                <span className={styles.techFooterLabel}>Core Technologies:</span>
                <div className={styles.techPillsTrack}>
                  {exp.technologies.map((tech, tIdx) => (
                    <Chip key={tIdx} label={tech} size="small" className={styles.techPill} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Box>
    </section>
  );
}
