import * as React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { EDUCATION, ACHIEVEMENTS } from '@/data/portfolio-data';
import styles from './education.module.css';

export default function Education() {
  return (
    <section id="education" className={styles.educationSection}>
      <Box className={styles.container}>
        <Box className={styles.sectionHeader}>
          <span className={styles.badge}>
            <span className={styles.dot}></span>
            <span>Credentials &amp; Milestones</span>
          </span>
          <Typography variant="h2" className={styles.title}>
            Education &amp; achievements
          </Typography>
          <Typography className={styles.desc}>
            Formal academic training in computer applications, system architecture, and national-level competitive recognitions.
          </Typography>
        </Box>

        <Box className={styles.bentoTwoCol}>
          
          <Box className={styles.col}>
            <Box className={styles.colHeader}>
              <span className={styles.colIcon}>🎓</span>
              <div>
                <Typography variant="h5" component="h3" className={styles.colTitle}>
                  Academic Education
                </Typography>
                <span className={styles.colSubtitle}>Formal University Degrees</span>
              </div>
            </Box>

            <Box className={styles.cardsStack}>
              {EDUCATION.map((edu) => (
                <div key={edu.id} className={styles.credCard}>
                  <Box className={styles.credTopRow}>
                    <span className={styles.periodPill}>{edu.period}</span>
                    {edu.grade && <span className={styles.gradeScore}>{edu.grade}</span>}
                  </Box>
                  <Typography variant="h6" className={styles.credTitle}>
                    {edu.degree}
                  </Typography>
                  <Typography className={styles.institution}>{edu.institution}</Typography>
                  <Typography className={styles.summary}>{edu.description}</Typography>
                  {edu.tags && (
                    <Box className={styles.chipsRow}>
                      {edu.tags.map((tag, idx) => (
                        <Chip key={idx} label={tag} size="small" className={styles.miniChip} />
                      ))}
                    </Box>
                  )}
                </div>
              ))}
            </Box>
          </Box>

          
          <Box className={styles.col} id="achievements">
            <Box className={styles.colHeader}>
              <span className={styles.colIcon}>🏆</span>
              <div>
                <Typography variant="h5" component="h3" className={styles.colTitle}>
                  Achievements &amp; Honors
                </Typography>
                <span className={styles.colSubtitle}>Competitions, Packages &amp; Service</span>
              </div>
            </Box>

            <Box className={styles.cardsStack}>
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.id} className={styles.credCard}>
                  <Box className={styles.credTopRow}>
                    <span className={`${styles.honorBadge} ${styles[ach.badgeType]}`}>
                      {ach.badge}
                    </span>
                    <span className={styles.periodPill}>{ach.event.split('•')[0]}</span>
                  </Box>
                  <Typography variant="h6" className={styles.credTitle}>
                    {ach.title}
                  </Typography>
                  <Typography className={styles.institution}>{ach.event}</Typography>
                  <Typography className={styles.summary}>{ach.description}</Typography>
                </div>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
