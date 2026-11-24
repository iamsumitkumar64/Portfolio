import * as React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { SKILL_CATEGORIES } from '@/data/portfolio-data';
import styles from './skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <Box className={styles.container}>
        <Box className={styles.sectionHeader}>
          <span className={styles.badge}>
            <span className={styles.dot}></span>
            <span>Categorized Capabilities</span>
          </span>
          <Typography variant="h2" className={styles.title}>
            Core skills &amp; technologies
          </Typography>
          <Typography className={styles.desc}>
            Categorized layout of technologies, programming languages, and core software architecture designs I specialize in.
          </Typography>
        </Box>

        <Box className={styles.rowsStack}>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <Box key={idx} className={styles.categoryCard}>
              <Box className={styles.cardHeader}>
                <Typography variant="h6" className={styles.categoryTitle}>
                  {cat.title}
                </Typography>
                <span className={styles.countTag}>{cat.countLabel}</span>
              </Box>

              <Box className={styles.chipsContainer}>
                {cat.skills.map((skill, sIdx) => (
                  <Chip
                    key={sIdx}
                    label={skill.name}
                    className={`${styles.skillChip} ${skill.highlight ? styles.highlightChip : ''}`}
                    size="small"
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
}
