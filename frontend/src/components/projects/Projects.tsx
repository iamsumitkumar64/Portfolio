'use client';

import * as React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { OpenInNew, ArrowDownward } from '@mui/icons-material';
import { PROJECTS } from '@/data/portfolio-data';
import { Project } from '@/types/portfolio';
import styles from './projects.module.css';

const CATEGORY_MAP: Record<string, string> = {
  ai: 'AI & VECTOR RAG',
  distributed: 'DISTRIBUTED SYSTEMS',
  systems: 'C++ & LOW-LEVEL',
  frontend: 'FRONTEND & NPM',
};

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI & RAG' },
  { id: 'distributed', label: 'Distributed Systems' },
  { id: 'systems', label: 'C++ & Low-Level' },
  { id: 'frontend', label: 'Frontend & NPM' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const counts = React.useMemo(() => {
    return {
      all: PROJECTS.length,
      ai: PROJECTS.filter((p) => p.category === 'ai').length,
      distributed: PROJECTS.filter((p) => p.category === 'distributed').length,
      systems: PROJECTS.filter((p) => p.category === 'systems').length,
      frontend: PROJECTS.filter((p) => p.category === 'frontend').length,
    };
  }, []);

  const getMetricBadge = (repo: Project) => {
    if (repo.id === 'rag-poc') return 'Cosine Similarity: 0.941 • HNSW';
    if (repo.id === 'birwal-mcp') return 'MCP Tool Discovery & Protocol';
    if (repo.id === 'dot-react-comment-lib') return 'NPM: dot-react-comment-lib';
    if (repo.id === 'kafka-poc') return 'KafkaJS Multi-Partition Broker';
    if (repo.id === 'eternal-frames') return 'Transactional Outbox • Razorpay';
    if (repo.id === 'deca-chat') return 'WebSockets • Redis Pub/Sub 4ms';
    if (repo.id === 'microservice-rabbitmq') return 'Async AMQP Event Decoupling';
    if (repo.id === 'cpp-crawler') return 'Raw Linux POSIX Network Sockets';
    if (repo.id === 'cpp-library') return 'Generic Hash Map & Doubly Linked List';
    if (repo.id === 'problem-analyzer') return 'Gemini Vision Scanned PDF OCR';
    if (repo.id === 'resume-builder') return 'Career Milestone Timeline Compiler';
    return 'Production Architecture';
  };

  const getFilename = (repo: Project) => {
    if (repo.id === 'rag-poc') return 'vector_pipeline.ts';
    if (repo.id === 'birwal-mcp') return 'mcp_server.ts';
    if (repo.id === 'dot-react-comment-lib') return 'CommentTree.tsx';
    if (repo.id === 'kafka-poc') return 'kafka_consumer.js';
    if (repo.id === 'eternal-frames') return 'outbox_publisher.ts';
    if (repo.id === 'deca-chat') return 'chat.gateway.ts';
    if (repo.id === 'microservice-rabbitmq') return 'amqp_topology.ts';
    if (repo.id === 'cpp-crawler') return 'crawler_socket.cpp';
    if (repo.id === 'cpp-library') return 'HashMap.hpp';
    if (repo.id === 'problem-analyzer') return 'gemini_classifier.ts';
    if (repo.id === 'resume-builder') return 'resume_builder.ts';
    return 'main.ts';
  };

  return (
    <section id="projects" className={styles.selectedWorkSection}>
      <Box className={styles.container}>
        <div className={styles.workHeader}>
          <div className={styles.titleRow}>
            <Typography variant="h2" component="h2" className={styles.workTitle}>
              <span>Selected work</span>
              <span className={styles.workTitleCount}>
                ({filteredProjects.length.toString().padStart(2, '0')})
              </span>
            </Typography>

            <a href="#index" className={styles.seeIndexLink}>
              <span>See the full index ({PROJECTS.length})</span>
              <span className={styles.arrowGlyph}>↓</span>
            </a>
          </div>

          <div className={styles.workToolbar}>
            <div className={styles.workFilters} role="tablist" aria-label="Filter selected engineering work">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`${styles.workFilterBtn} ${
                    activeCategory === cat.id ? styles.activeFilterBtn : ''
                  }`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  <sup className={styles.filterSupCount}>
                    {counts[cat.id as keyof typeof counts]}
                  </sup>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.workGrid}>
          {filteredProjects.map((repo: Project, idx: number) => {
            const isOffset = idx % 2 === 1;
            const categoryLabel = CATEGORY_MAP[repo.category] || repo.category.toUpperCase();
            const indexNumber = (idx + 1).toString().padStart(2, '0');

            return (
              <article
                key={repo.id}
                className={`${styles.workCard} ${isOffset ? styles.isOffset : ''}`}
              >
                <a
                  href={repo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.workImageFrame}
                >
                  <div className={styles.visualCanvas}>
                    <div className={styles.windowTitleBar}>
                      <div className={styles.windowDots}>
                        <span className={styles.dotRed}></span>
                        <span className={styles.dotYellow}></span>
                        <span className={styles.dotGreen}></span>
                      </div>
                      <span className={styles.windowFilename}>{getFilename(repo)}</span>
                      <span className={styles.windowTypeTag}>{categoryLabel}</span>
                    </div>

                    <div className={styles.graphicCenterpiece}>
                      <div className={styles.centerIconBox}>{repo.icon}</div>
                      <span className={styles.architectureBadge}>{repo.name}</span>
                      <div className={styles.metricBadgeRow}>
                        <span>{getMetricBadge(repo)}</span>
                      </div>
                    </div>

                    <div className={styles.windowTitleBar}>
                      <span className={styles.windowFilename}>@iamsumitkumar64/{repo.id}</span>
                      <span className={styles.windowFilename}>TypeScript / NestJS</span>
                    </div>
                  </div>

                  <span className={styles.workCursorBadge} aria-hidden="true">
                    <span>View project</span>
                    <OpenInNew fontSize="inherit" />
                  </span>
                </a>

                <div className={styles.workCaption}>
                  <div className={styles.captionTitleGroup}>
                    <h3 className={styles.projectIndexTitle}>
                      {indexNumber} — {repo.name}
                    </h3>
                    <p className={styles.projectTagline}>{repo.tagline}</p>
                  </div>
                  <span className={styles.categoryTag}>({categoryLabel})</span>
                </div>

                <div className={styles.cardFooterMeta}>
                  <div className={styles.techChipsWrap}>
                    {repo.techStack.slice(0, 4).map((tech, tIdx) => (
                      <Chip key={tIdx} label={tech} size="small" className={styles.techMiniChip} />
                    ))}
                  </div>

                  <div className={styles.actionLinksGroup}>
                    {repo.npmUrl && (
                      <a
                        href={repo.npmUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.npmPill}
                      >
                        npm package
                      </a>
                    )}
                    <a
                      href={repo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubDirectBtn}
                    >
                      <span>GitHub</span>
                      <OpenInNew fontSize="inherit" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <section id="index" className={styles.fullIndexSection}>
          <div className={styles.indexHeader}>
            <Typography variant="h3" component="h3" className={styles.indexTitle}>
              Full index ({PROJECTS.length})
            </Typography>
            <p className={styles.indexDesc}>
              Every repository and engineering system on the roster. Hover a row to preview details, click to inspect repository source.
            </p>
          </div>

          <div className={styles.indexTable}>
            {PROJECTS.map((proj, pIdx) => {
              const num = (pIdx + 1).toString().padStart(2, '0');
              const cat = CATEGORY_MAP[proj.category] || proj.category.toUpperCase();
              const urlClean = proj.githubUrl.replace('https://github.com/', 'github.com/');

              return (
                <a
                  key={proj.id}
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.indexRow}
                >
                  <span className={styles.indexColNumber}>{num}</span>
                  <span className={styles.indexColName}>{proj.name}</span>
                  <span className={styles.indexColCategory}>({cat})</span>
                  <span className={styles.indexColTech}>{proj.techStack.slice(0, 3).join(', ')}</span>
                  <span className={styles.indexColLink}>
                    <span>{urlClean}</span>
                    <OpenInNew fontSize="inherit" />
                  </span>
                </a>
              );
            })}
          </div>
        </section>
      </Box>
    </section>
  );
}
