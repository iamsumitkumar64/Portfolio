'use client';

import * as React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { OpenInNew, Code, AutoAwesome, Storage, Layers } from '@mui/icons-material';
import { PROJECTS } from '@/data/portfolio-data';
import { Project } from '@/types/portfolio';
import styles from './projects.module.css';

const CATEGORIES = [
  { id: 'all', label: 'All Repositories', count: 12 },
  { id: 'ai', label: 'AI & RAG', count: 4 },
  { id: 'distributed', label: 'Backend & Distributed', count: 4 },
  { id: 'systems', label: 'C++ & Low-Level', count: 2 },
  { id: 'frontend', label: 'Frontend & NPM', count: 2 },
];

const getRepoIcon = (category: string) => {
  switch (category) {
    case 'ai':
      return <AutoAwesome fontSize="inherit" />;
    case 'distributed':
      return <Storage fontSize="inherit" />;
    case 'systems':
      return <Code fontSize="inherit" />;
    case 'frontend':
      return <Layers fontSize="inherit" />;
    default:
      return <Layers fontSize="inherit" />;
  }
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className={styles.projectsSection}>
      <Box className={styles.container}>
        <Box className={styles.sectionHeader}>
          <span className={styles.badge}>
            <span className={styles.dot}></span>
            <span>Open Source Engineering</span>
          </span>
          <Typography variant="h2" className={styles.title}>
            Featured repositories &amp; implementations
          </Typography>
          <Typography className={styles.desc}>
            Real production projects extracted directly from my GitHub profile (
            <strong>@iamsumitkumar64</strong>), covering AI retrieval pipelines, distributed
            messaging, custom C++ engines, and published libraries.
          </Typography>
        </Box>

        <div className={styles.filterWrapper}>
          <div className={styles.filterTrack}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`${styles.filterBtn} ${
                  activeCategory === cat.id ? styles.activeFilter : ''
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className={styles.catCount}>{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.repoGrid}>
          {filteredProjects.map((repo: Project) => {
            const isSpotlight =
              repo.id === 'rag-poc' ||
              repo.id === 'birwal-mcp' ||
              repo.id === 'dot-react-comment-lib';

            return (
              <article
                key={repo.id}
                className={`${styles.repoCard} ${
                  isSpotlight ? styles.spotlightCard : ''
                }`}
              >
                <div className={styles.cardMain}>
                  <div className={styles.cardHeader}>
                    <div className={styles.titleBlock}>
                      <div className={styles.iconSquircle}>
                        {getRepoIcon(repo.category)}
                      </div>
                      <div className={styles.nameBlock}>
                        <Typography variant="h5" component="h3" className={styles.repoName}>
                          {repo.name}
                        </Typography>
                        <span className={styles.repoTagline}>{repo.tagline}</span>
                      </div>
                    </div>

                    <div className={styles.actionBtns}>
                      {repo.npmUrl && (
                        <a
                          href={repo.npmUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.npmBadge}
                        >
                          npm package
                        </a>
                      )}
                      <a
                        href={repo.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubBtn}
                      >
                        <span>GitHub</span>
                        <OpenInNew fontSize="inherit" />
                      </a>
                    </div>
                  </div>

                  <Typography className={styles.description}>
                    {repo.description}
                  </Typography>

                  <ul className={styles.bulletList}>
                    {repo.highlights.map((bullet: string, bIdx: number) => (
                      <li key={bIdx}>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.techStack}>
                  {repo.techStack.map((tech: string, tIdx: number) => (
                    <Chip key={tIdx} label={tech} size="small" className={styles.techChip} />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Box>
    </section>
  );
}
