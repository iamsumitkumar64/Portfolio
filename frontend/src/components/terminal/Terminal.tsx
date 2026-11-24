'use client';

import * as React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './terminal.module.css';

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
}

export default function Terminal() {
  const [inputVal, setInputVal] = React.useState('');
  const [history, setHistory] = React.useState<HistoryEntry[]>([]);
  const terminalEndRef = React.useRef<HTMLDivElement>(null);

  const executeCommand = (cmdRaw: string) => {
    const cmd = cmdRaw.toLowerCase().trim();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className={styles.cmdHelp}>
            <div>Available commands:</div>
            <ul>
              <li><b className={styles.greenText}>skills</b>: Inspect categorized skills &amp; architectures</li>
              <li><b className={styles.greenText}>projects</b>: List 12 featured open-source repositories</li>
              <li><b className={styles.greenText}>rag</b>: View RAG-POC architecture &amp; vector search specs</li>
              <li><b className={styles.greenText}>mcp</b>: View Birwal-MCP server &amp; dynamic tool agent</li>
              <li><b className={styles.greenText}>outbox</b>: Print Transactional Outbox pattern design</li>
              <li><b className={styles.greenText}>experience</b>: View verified engineering roles (Zenmonk &amp; CodeQuotient)</li>
              <li><b className={styles.greenText}>education</b>: View MCA, BCA, and Zerone24 competition awards</li>
              <li><b className={styles.greenText}>contact</b>: Display hiring coordinates &amp; phone/email</li>
              <li><b className={styles.greenText}>clear</b>: Clear terminal display buffer</li>
            </ul>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className={styles.cmdBlock}>
            <div className={styles.tealText}>&gt; CORE SKILLS &amp; ARCHITECTURAL SPECIALIZATION</div>
            <div>• <b>Paradigms</b>: Domain-Driven Design (DDD), CQRS, EDA, Transactional Outbox, Microservices, Sagas</div>
            <div>• <b>AI &amp; Search</b>: Model Context Protocol (MCP), RAG, pgvector, HNSW, Gemini API, LangChain</div>
            <div>• <b>Brokers</b>: RabbitMQ (AMQP), Apache Kafka (KafkaJS), Redis Pub/Sub, BullMQ</div>
            <div>• <b>Backend</b>: NestJS, Node.js, Express.js, Next.js, TypeORM, Mongoose, REST, WebSockets</div>
            <div>• <b>Databases</b>: PostgreSQL, MongoDB, Redis, MySQL</div>
            <div>• <b>Languages</b>: TypeScript, JavaScript, C++, C, Python</div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className={styles.cmdBlock}>
            <div className={styles.tealText}>&gt; 12 FEATURED REPOSITORIES (github.com/iamsumitkumar64)</div>
            <div>[1] <b>RAG-POC</b>: PDF Vector Search Pipeline (NestJS + pgvector + Gemini)</div>
            <div>[2] <b>Birwal-MCP</b>: Model Context Protocol Server &amp; LangChain Agent</div>
            <div>[3] <b>dot-react-comment-lib</b>: Published NPM Library for threaded comments (~31KB)</div>
            <div>[4] <b>kafka-POC</b>: Apache Kafka multi-partition event streaming with KafkaJS</div>
            <div>[5] <b>Eternal-Frames</b>: Event-driven e-commerce platform with Outbox &amp; RabbitMQ</div>
            <div>[6] <b>Deca-Chat</b>: Real-time chat &amp; rooms on NestJS, WebSockets &amp; Redis</div>
            <div>[7] <b>Microservice-RabbitMQ-POC</b>: Decoupled auth, main, and mail microservices</div>
            <div>[8] <b>AI-Problem-Analyzer</b>: CivicPulse citizen complaint PDF analyzer with Gemini Vision</div>
            <div>[9] <b>AI-Resume-Builder</b>: Milestone-based resume generator powered by Gemini</div>
            <div>[10] <b>CPP-Crawler</b>: Raw POSIX socket HTTP web crawler in C++ (zero external libraries)</div>
            <div>[11] <b>My-CPP-Library</b>: Custom generic hash map, linked list &amp; string allocators in C++</div>
            <div>[12] <b>langchan-poc</b>: LangChain &amp; LangGraph AI agent reasoning loops</div>
          </div>
        );
        break;

      case 'rag':
        outputNode = (
          <div className={styles.cmdBlock}>
            <div className={styles.tealText}>&gt; RAG-POC TECHNICAL TELEMETRY</div>
            <div>• <b>Repository</b>: github.com/iamsumitkumar64/RAG-POC</div>
            <div>• <b>Pipeline</b>: PDF Upload → Text Extraction → Semantic Chunking → Gemini Embedding → pgvector Storage → Cosine Similarity Search</div>
            <div>• <b>Embedding Model</b>: Google Gemini text-embedding-004</div>
            <div>• <b>Vector Database</b>: PostgreSQL with pgvector extension &amp; HNSW index</div>
            <div>• <b>Search Metric</b>: Cosine distance operator (&lt;=&gt;) with top-k ranking</div>
          </div>
        );
        break;

      case 'mcp':
        outputNode = (
          <div className={styles.cmdBlock}>
            <div className={styles.tealText}>&gt; BIRWAL-MCP SPECIFICATIONS</div>
            <div>• <b>Repository</b>: github.com/iamsumitkumar64/Birwal-MCP</div>
            <div>• <b>Server</b>: Built with NestJS using @modelcontextprotocol/server</div>
            <div>• <b>Agent CLI</b>: TypeScript CLI using @langchain/mcp-adapters &amp; Gemini 2.5 Flash</div>
            <div>• <b>Tools Exposed</b>: todo_create, todo_get, todo_update, todo_delete with human confirmation gates</div>
          </div>
        );
        break;

      case 'outbox':
        outputNode = (
          <div className={styles.cmdBlock}>
            <div className={styles.tealText}>&gt; TRANSACTIONAL OUTBOX PATTERN</div>
            <div>[STEP 1] Atomic Transaction: Entity state write + Outbox event committed simultaneously in PostgreSQL.</div>
            <div>[STEP 2] Dispatcher Worker: Asynchronously polls or streams outbox records to RabbitMQ.</div>
            <div>[STEP 3] Guaranteed Delivery: AMQP publisher confirms prevent message loss. Consumer idempotency deduplicates messages.</div>
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className={styles.cmdBlock}>
            <div className={styles.tealText}>&gt; PRODUCTION WORK EXPERIENCE</div>
            <div>• <b>Zenmonk Software &amp; Services</b> (Nov 2025 – Present): Full Stack Developer Intern — NestJS microservices, RabbitMQ outbox, Stripe Connect, PayMongo API, Docker.</div>
            <div>• <b>CodeQuotient</b> (Feb 2025 – Oct 2025): Software Developer Intern — Full-Stack MERN, 120+ algorithmic challenges solved in C++.</div>
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div className={styles.cmdBlock}>
            <div className={styles.tealText}>&gt; ACADEMIC DEGREES &amp; AWARDS</div>
            <div>• <b>MCA</b>: Master of Computer Applications (2025–2027, CGPA: 8.0) — Chandigarh University (Specialization in AI/ML)</div>
            <div>• <b>BCA</b>: Bachelor of Computer Applications (2022–2025, CGPA: 7.5) — Arya P.G. College, Panipat (Kurukshetra University)</div>
            <div>• <b>Zerone24 IT Fest</b>: 🥇 1st Place (On-Spot Coding) &amp; 🥈 2nd Place (On-Spot Debugging)</div>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className={styles.cmdBlock}>
            <div className={styles.tealText}>&gt; DIRECT HIRING COORDINATES</div>
            <div>• <b>Email</b>: iam.sumitkumar64@gmail.com</div>
            <div>• <b>Mobile / WhatsApp</b>: +91 99925 28037</div>
            <div>• <b>GitHub</b>: github.com/iamsumitkumar64</div>
            <div>• <b>LinkedIn</b>: linkedin.com/in/iamsumitkumar64</div>
          </div>
        );
        break;

      default:
        outputNode = (
          <div className={styles.cmdError}>
            Command not recognized: &apos;{cmdRaw}&apos;. Type <b className={styles.greenText}>help</b> for a list of valid commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmdRaw, output: outputNode }]);
    setInputVal('');
  };

  React.useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="terminal" className={styles.terminalSection}>
      <Box className={styles.container}>
        <Box className={styles.sectionHeader}>
          <span className={styles.badge}>
            <span className={styles.dot}></span>
            <span>Developer Console</span>
          </span>
          <Typography variant="h2" className={styles.title}>
            Interactive terminal emulator
          </Typography>
          <Typography className={styles.desc}>
            Inspect system architecture telemetry, repository pipelines, and technical credentials directly from the command line.
          </Typography>
        </Box>

        <Box className={styles.terminalWindow}>
          <Box className={styles.terminalHeader}>
            <Box className={styles.dotsGroup}>
              <span className={`${styles.windowDot} ${styles.redDot}`}></span>
              <span className={`${styles.windowDot} ${styles.yellowDot}`}></span>
              <span className={`${styles.windowDot} ${styles.greenDot}`}></span>
            </Box>
            <div className={styles.windowTitle}>sumit@engineer-desktop: ~/portfolio</div>
            <span className={styles.windowBadge}>bash 5.2</span>
          </Box>

          <Box className={styles.terminalBody}>
            <div className={styles.welcomeMsg}>
              Welcome to Sumit Kumar&apos;s interactive portfolio console v2.0.<br />
              Type <span className={styles.cmdTag}>help</span> for commands or click quick action chips below.
            </div>

            {history.map((entry, idx) => (
              <div key={idx} className={styles.historyItem}>
                <div className={styles.cmdEcho}>
                  <span className={styles.promptSign}>&gt;</span> {entry.command}
                </div>
                <div className={styles.cmdOutput}>{entry.output}</div>
              </div>
            ))}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                executeCommand(inputVal);
              }}
              className={styles.promptLine}
            >
              <span className={styles.promptSign}>&gt;</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type command here (e.g. projects, skills, rag, outbox)..."
                className={styles.termInput}
                autoComplete="off"
                spellCheck={false}
              />
            </form>
            <div ref={terminalEndRef} />
          </Box>

          <Box className={styles.chipsBar}>
            <span className={styles.chipsLabel}>Quick commands:</span>
            {['help', 'projects', 'skills', 'rag', 'mcp', 'outbox', 'experience', 'education', 'contact', 'clear'].map(
              (c) => (
                <button
                  key={c}
                  type="button"
                  className={styles.chipBtn}
                  onClick={() => executeCommand(c)}
                >
                  {c}
                </button>
              )
            )}
          </Box>
        </Box>
      </Box>
    </section>
  );
}
