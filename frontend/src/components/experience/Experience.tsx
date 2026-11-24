import * as React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { WorkOutlined, CheckCircleOutlined } from '@mui/icons-material';
import { EXPERIENCES } from '@/data/portfolio-data';
import styles from './experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <Box className={styles.container}>
        <Box className={styles.sectionHeader}>
          <span className={styles.badge}>
            <span className={styles.dot}></span>
            <span>Career Progression</span>
          </span>
          <Typography variant="h2" className={styles.title}>
            Professional experience
          </Typography>
          <Typography className={styles.desc}>
            Production engineering deployments, distributed microservices, payment gateway integrations, and real-time backend infrastructure.
          </Typography>
        </Box>

        <div className={styles.timelineTrack}>
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineSpine}>
                <span
                  className={`${styles.timelineNode} ${
                    exp.active ? styles.activeNode : ''
                  }`}
                ></span>
                {idx < EXPERIENCES.length - 1 && (
                  <span className={styles.timelineLine}></span>
                )}
              </div>

              <article
                className={`${styles.careerCard} ${
                  exp.active ? styles.cardActive : styles.cardPast
                }`}
              >
                <div className={styles.cardHeaderBar}>
                  <div className={styles.statusIndicatorGroup}>
                    <span
                      className={
                        exp.active ? styles.activeRadarPulse : styles.completedIndicator
                      }
                    ></span>
                    <span className={styles.statusText}>
                      {exp.active ? 'Current Production Role' : 'Completed Internship'}
                    </span>
                  </div>

                  <div
                    className={`${styles.tenureBadge} ${
                      exp.active ? styles.activeTenureBadge : ''
                    }`}
                  >
                    <span>{exp.tenure}</span>
                  </div>
                </div>

                <div className={styles.companyHeroRow}>
                  <div className={styles.monogramAvatar}>
                    <span>{exp.avatarText}</span>
                  </div>

                  <div className={styles.companyMeta}>
                    <Typography variant="h5" component="h3" className={styles.roleTitle}>
                      {exp.role}
                    </Typography>
                    <div className={styles.subMetaRow}>
                      <span className={styles.companyNameText}>{exp.company}</span>
                      <span className={styles.metaDivider}>•</span>
                      <span className={styles.locationText}>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.impactSection}>
                  <div className={styles.impactSectionHeader}>
                    <WorkOutlined fontSize="inherit" className={styles.impactIcon} />
                    <span>Key Engineering Responsibilities &amp; Impact</span>
                  </div>

                  <ul className={styles.impactList}>
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className={styles.impactItem}>
                        <CheckCircleOutlined
                          fontSize="inherit"
                          className={styles.bulletCheck}
                        />
                        <div>
                          <strong className={styles.respTitle}>{resp.title}:</strong>{' '}
                          <span className={styles.respDesc}>{resp.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.techStackFooter}>
                  <span className={styles.techFooterLabel}>Core Technologies:</span>
                  <div className={styles.techChipsTrack}>
                    {exp.technologies.map((tech, tIdx) => (
                      <Chip
                        key={tIdx}
                        label={tech}
                        size="small"
                        className={styles.techChip}
                      />
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </Box>
    </section>
  );
}
