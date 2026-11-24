import {
  ContactInfo,
  StatMetric,
  SkillCategory,
  Project,
  ExperienceItem,
  EducationItem,
  AchievementItem,
} from '@/types/portfolio';

export const CONTACT_INFO: ContactInfo = {
  name: 'Sumit Kumar',
  role: 'Full Stack & Distributed Systems Engineer',
  email: 'iam.sumitkumar64@gmail.com',
  phone: '+91 99925 28037',
  location: 'Chandigarh / Mohali / Gurgaon / Gurugram / Noida / Remote',
  github: 'https://github.com/iamsumitkumar64',
  linkedin: 'https://linkedin.com/in/iamsumitkumar64',
  leetcode: 'https://leetcode.com/u/iamsumitkumar64/',
};

export const STAT_METRICS: StatMetric[] = [
  {
    badgeDot: 'green',
    badgeText: 'Current Role',
    headline: 'Zenmonk',
    subtitle: 'Full Stack Developer Intern',
    caption: 'Nov 2025 – Present • Mohali',
  },
  {
    badgeDot: 'teal',
    badgeText: 'AI Architecture',
    headline: 'RAG & MCP',
    subtitle: 'Vector Search & Tool Calling',
    caption: 'Gemini Embeddings + pgvector',
  },
  {
    badgeDot: 'purple',
    badgeText: 'Open Source',
    headline: '50+ Repositories',
    subtitle: 'GitHub & Published NPM',
    caption: '@iamsumitkumar64',
  },
  {
    badgeDot: 'orange',
    badgeText: 'Algorithms',
    headline: '220+ DSA',
    subtitle: 'LeetCode & C++ Systems',
    caption: 'Zerone24 1st Place Coding',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Architectural Paradigms',
    countLabel: '10 Paradigms',
    skills: [
      { name: 'Domain-Driven Design (DDD)', highlight: true },
      { name: 'CQRS Architecture', highlight: true },
      { name: 'Event-Driven (EDA)' },
      { name: 'Event Sourcing' },
      { name: 'Transactional Outbox Pattern', highlight: true },
      { name: 'Microservices' },
      { name: 'Saga Pattern' },
      { name: 'Broker & Job Queues' },
      { name: 'Pub/Sub & Real-Time' },
      { name: 'Layered Clean Architecture' },
    ],
  },
  {
    title: 'AI & Vector RAG Systems',
    countLabel: '8 Technologies',
    skills: [
      { name: 'Model Context Protocol (MCP)', highlight: true },
      { name: 'RAG (Retrieval-Augmented Generation)', highlight: true },
      { name: 'pgvector & HNSW Indexing', highlight: true },
      { name: 'Google Gemini API' },
      { name: 'LangChain' },
      { name: 'LangGraph' },
      { name: '@langchain/mcp-adapters' },
      { name: 'Deepgram Nova-2 Voice STT' },
    ],
  },
  {
    title: 'Message Brokers & Event Streaming',
    countLabel: '6 Technologies',
    skills: [
      { name: 'RabbitMQ (AMQP)', highlight: true },
      { name: 'Apache Kafka', highlight: true },
      { name: 'KafkaJS' },
      { name: 'Redis Pub/Sub' },
      { name: 'BullMQ Worker Queues' },
      { name: 'Dead Letter Exchanges (DLX)' },
    ],
  },
  {
    title: 'Backend & Frameworks',
    countLabel: '8 Technologies',
    skills: [
      { name: 'NestJS', highlight: true },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Next.js (App Router)', highlight: true },
      { name: 'TypeORM' },
      { name: 'Mongoose' },
      { name: 'Socket.io & WebSockets' },
      { name: 'RESTful APIs' },
    ],
  },
  {
    title: 'Databases & Storage',
    countLabel: '6 Technologies',
    skills: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'pgvector' },
      { name: 'MongoDB' },
      { name: 'Redis' },
      { name: 'MySQL' },
      { name: 'ACID Transactions' },
    ],
  },
  {
    title: 'Languages & Core Systems',
    countLabel: '8 Technologies',
    skills: [
      { name: 'TypeScript', highlight: true },
      { name: 'JavaScript (ES6+)' },
      { name: 'C++ (STL & Sockets)', highlight: true },
      { name: 'C' },
      { name: 'Python' },
      { name: 'Data Structures & Algorithms' },
      { name: 'POSIX Sockets' },
      { name: 'HTML5 / Modern CSS' },
    ],
  },
  {
    title: 'DevOps, Tools & Payments',
    countLabel: '8 Technologies',
    skills: [
      { name: 'Docker & Docker Compose', highlight: true },
      { name: 'Git & GitHub' },
      { name: 'Linux (Ubuntu)' },
      { name: 'Stripe & Stripe Connect' },
      { name: 'Razorpay' },
      { name: 'PayMongo' },
      { name: 'tsup & NPM Publishing' },
      { name: 'Postman' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'rag-poc',
    name: 'RAG-POC',
    tagline: 'PDF Vector Search Pipeline',
    category: 'ai',
    icon: '📄',
    githubUrl: 'https://github.com/iamsumitkumar64/RAG-POC',
    description:
      'End-to-end Retrieval-Augmented Generation pipeline built with NestJS. Uploads PDF documents, extracts text into semantic chunks, generates vector embeddings with Gemini, stores them in PostgreSQL with pgvector, and performs semantic search using cosine similarity.',
    highlights: [
      'PDF document upload and chunking with document status tracking (PENDING, PROCESSING, COMPLETED).',
      'Google Gemini embedding generation (text-embedding-004).',
      'PostgreSQL storage using pgvector extension with HNSW index for fast similarity search.',
      'Clean layered DDD architecture isolating domain entities and database repository contracts.',
    ],
    techStack: ['NestJS', 'TypeScript', 'PostgreSQL', 'pgvector', 'Gemini AI', 'TypeORM', 'Docker'],
  },
  {
    id: 'birwal-mcp',
    name: 'Birwal-MCP',
    tagline: 'Model Context Protocol Server & Agent',
    category: 'ai',
    icon: '🔌',
    githubUrl: 'https://github.com/iamsumitkumar64/Birwal-MCP',
    description:
      'Custom Model Context Protocol (MCP) server built with NestJS implementing standard tool schemas, coupled with an AI agent CLI using @langchain/mcp-adapters and Gemini that discovers tools dynamically to manage tasks via natural language.',
    highlights: [
      'MCP server built with @modelcontextprotocol/server exposing discrete tools (create, read, update, delete).',
      'AI agent CLI in TypeScript using LangChain and ChatGoogleGenerativeAI (Gemini 2.5 Flash).',
      'Dynamic tool discovery and parameter validation via MCP adapter layer.',
      'Safe confirmation flow enforcing user permission before deleting or mutating state.',
    ],
    techStack: ['NestJS', 'TypeScript', 'Model Context Protocol', 'LangChain', 'Gemini 2.5 Flash', 'Docker'],
  },
  {
    id: 'dot-react-comment-lib',
    name: 'dot-react-comment-lib',
    tagline: 'Published NPM Comments Library',
    category: 'frontend',
    icon: '📦',
    githubUrl: 'https://github.com/iamsumitkumar64/dot-react-comment-lib',
    npmUrl: 'https://www.npmjs.com/package/dot-react-comment-lib',
    description:
      'Published, production-ready threaded comments component library for React and Next.js applications (~31KB minified). Features recursive multi-level replies, integrated emoji picker, and robust form validation.',
    highlights: [
      'Published on official NPM registry: npm i dot-react-comment-lib.',
      'Nested recursive comment threads with reply, edit, delete, and timestamp tracking.',
      'Integrated emoji reactions using emoji-picker-react.',
      'Type-safe form handling powered by react-hook-form and zod.',
      'Built and bundled for ESM/CJS distribution using tsup.',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'NPM Package', 'tsup', 'Zod', 'React Hook Form'],
  },
  {
    id: 'kafka-poc',
    name: 'kafka-POC',
    tagline: 'Event Streaming & Consumer Groups',
    category: 'distributed',
    icon: '⚡',
    githubUrl: 'https://github.com/iamsumitkumar64/kafka-POC',
    description:
      'Event streaming proof of concept built with Node.js, KafkaJS, and Docker Compose. Implements automated topic provisioning, partition-aware event producers, and balanced consumer group processing.',
    highlights: [
      'Docker Compose environment running Apache Kafka and Zookeeper services.',
      'Admin script (admin.js) programmatically configuring topics and multi-partition distributions.',
      'Producer script (producer.js) dispatching keyed messages to designated partitions.',
      'Consumer script (consumer.js) subscribed via consumer groups for parallel message processing.',
    ],
    techStack: ['Node.js', 'Apache Kafka', 'KafkaJS', 'Docker Compose', 'Zookeeper', 'Event Streaming'],
  },
  {
    id: 'eternal-frames',
    name: 'Eternal-Frames',
    tagline: 'Event-Driven Photo & E-Commerce Platform',
    category: 'distributed',
    icon: '🖼️',
    githubUrl: 'https://github.com/iamsumitkumar64/Eternal-Frames',
    description:
      'Full-stack e-commerce and framing application built with NestJS backend and Next.js frontend. Implemented transactional outbox pattern with RabbitMQ for reliable order events and integrated Razorpay payment processing.',
    highlights: [
      'Modular backend architecture divided into billing-module, event-module, and user-module.',
      'Transactional Outbox pattern with RabbitMQ to eliminate dual-write failures during order creation.',
      'Razorpay payment gateway integration with signature verification and webhook handlers.',
      'Dependency graph validation using Madge to enforce clean module boundaries with zero circular dependencies.',
    ],
    techStack: ['NestJS', 'Next.js', 'TypeScript', 'RabbitMQ', 'PostgreSQL', 'Razorpay', 'Docker'],
  },
  {
    id: 'deca-chat',
    name: 'Deca-Chat',
    tagline: 'Real-Time Chat & Room System',
    category: 'distributed',
    icon: '💬',
    githubUrl: 'https://github.com/iamsumitkumar64/Deca-Chat',
    description:
      'Scalable real-time messaging application built with NestJS, WebSockets, Redis, and MongoDB. Supports multi-user chat rooms, direct messaging, user presence tracking, and message history.',
    highlights: [
      'Real-time bidirectional messaging via WebSocket gateways.',
      'Redis Pub/Sub integration for broadcasting messages across horizontal server instances.',
      'Decoupled modular architecture with chat-module, room-module, and user-module.',
      'MongoDB document storage for chat history and room metadata.',
    ],
    techStack: ['NestJS', 'WebSockets', 'Redis', 'MongoDB', 'TypeScript', 'Docker'],
  },
  {
    id: 'microservice-rabbitmq',
    name: 'Microservice-RabbitMQ-POC',
    tagline: 'Decoupled Multi-Service Architecture',
    category: 'distributed',
    icon: '📬',
    githubUrl: 'https://github.com/iamsumitkumar64/Microservice-RabbitMQ-POC',
    description:
      'Distributed microservices proof of concept demonstrating asynchronous communication between independent services using RabbitMQ message broker and Docker Compose.',
    highlights: [
      'Multi-service topology: decoupled auth-server, main-server, and mail-server.',
      'AMQP message queues for asynchronous inter-service communication without tight coupling.',
      'Automated email delivery triggered by authentication events via RabbitMQ workers.',
      'Unified Docker Compose configuration for local multi-service testing.',
    ],
    techStack: ['NestJS', 'RabbitMQ', 'Docker Compose', 'TypeScript', 'Express', 'Microservices'],
  },
  {
    id: 'problem-analyzer',
    name: 'AI-Problem-Analyzer',
    tagline: 'CivicPulse AI: Citizen Complaint Analyzer',
    category: 'ai',
    icon: '🏛️',
    githubUrl: 'https://github.com/iamsumitkumar64/AI-Problem-Analyzer',
    description:
      'Public grievance analytics platform powered by Google Gemini Vision AI, Node.js, Express, MongoDB, and React. Transcribes and categorizes scanned citizen complaint PDFs into actionable administrative records.',
    highlights: [
      'Scanned complaint document processing using Google Gemini Vision AI.',
      'Automated transcription and classification into municipal department categories.',
      'React frontend dashboard for visualizing ward-wise problem severity and status.',
      'Docker Compose setup for rapid development and production deployment.',
    ],
    techStack: ['Node.js', 'Express', 'Google Gemini Vision', 'MongoDB', 'React', 'Docker'],
  },
  {
    id: 'resume-builder',
    name: 'AI-Resume-Builder',
    tagline: 'Milestone-Based AI Resume Generator',
    category: 'ai',
    icon: '📝',
    githubUrl: 'https://github.com/iamsumitkumar64/AI-Resume-Builder',
    description:
      'Interactive web application that helps users construct structured professional resumes from their life milestones and career clips using Gemini AI and interactive form inputs.',
    highlights: [
      'Captures life milestones across early education, professional career, and current projects.',
      'AI-assisted content refinement using Google Gemini to produce clean resume bullet points.',
      'Export capability to structured document formats (.docx / PDF).',
      'Full-stack architecture with separated backend API and React frontend.',
    ],
    techStack: ['NestJS', 'React', 'Google Gemini', 'TypeScript', 'Docker'],
  },
  {
    id: 'cpp-crawler',
    name: 'CPP-Crawler',
    tagline: 'Low-Level Web Crawler in C++',
    category: 'systems',
    icon: '🕸️',
    githubUrl: 'https://github.com/iamsumitkumar64/CPP-Crawler',
    description:
      'Custom web crawler written from scratch in C++ using raw POSIX network sockets (socket, connect, send, recv). Connects over TCP to fetch web pages without external HTTP or networking libraries.',
    highlights: [
      'Low-level socket programming using Linux POSIX socket APIs.',
      'Manual HTTP/1.1 request formatting and response status code parsing.',
      'HTML text stream parsing and URL link extraction.',
      'Zero third-party networking dependencies, maximizing runtime performance.',
    ],
    techStack: ['C++', 'POSIX Sockets', 'TCP/IP', 'HTTP/1.1', 'Linux', 'Systems Programming'],
  },
  {
    id: 'cpp-library',
    name: 'My-CPP-Library',
    tagline: 'Custom Generic Data Structures in C++',
    category: 'systems',
    icon: '📚',
    githubUrl: 'https://github.com/iamsumitkumar64/My-CPP-Library',
    description:
      'Comprehensive generic data structure library in C++ implemented from scratch to study memory allocation, pointer manipulation, and data structures without standard STL shortcuts.',
    highlights: [
      'Generic Hash Map implementation with custom collision handling and dynamic resizing.',
      'Generic Doubly Linked List with full insert, delete, and iteration capabilities.',
      'Custom String library with manual memory buffers and manipulation routines.',
      'File I/O utilities for structured binary and text data persistence.',
    ],
    techStack: ['C++', 'Templates', 'Data Structures', 'Memory Management', 'Pointers'],
  },
  {
    id: 'langchain-poc',
    name: 'langchan-poc',
    tagline: 'LangChain & LangGraph Experiments',
    category: 'ai',
    icon: '🤖',
    githubUrl: 'https://github.com/iamsumitkumar64/langchan-poc',
    description:
      'Experimental AI repository investigating LLM tool calling, multi-step agent reasoning, and state graphs using LangChain and LangGraph in TypeScript.',
    highlights: [
      'LangChain integration with Google Generative AI for structured outputs.',
      'Stateful multi-step agent graphs implemented with LangGraph.',
      'Prompt engineering patterns for automated tool selection and execution loops.',
    ],
    techStack: ['TypeScript', 'LangChain', 'LangGraph', 'Node.js', 'LLMs'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'zenmonk',
    role: 'Full Stack Developer Intern',
    company: 'Zenmonk Software & Services',
    location: 'Mohali, India • Hybrid',
    type: 'Internship',
    tenure: 'Nov 2025 – Present',
    active: true,
    avatarText: 'ZM',
    responsibilities: [
      {
        title: 'Backend Architecture & Domain Modeling',
        desc: 'Engineered scalable backend microservices using NestJS and TypeScript with strict DTO contract schemas and decoupled domain aggregates.',
      },
      {
        title: 'Event-Driven Messaging & Outbox',
        desc: 'Architected Transactional Outbox patterns with RabbitMQ to eliminate dual-write failure points across PostgreSQL and message consumers.',
      },
      {
        title: 'Payment Infrastructure & Payouts',
        desc: 'Integrated multi-gateway payment flows including PayMongo, Stripe Connected Accounts, and custom wallet payouts with resilient webhook listeners.',
      },
      {
        title: 'High-Concurrency Order APIs',
        desc: 'Maintained and optimized Node.js & Express.js backend services supporting real-time delivery transactions, idempotent order dispatch, and Docker containerization.',
      },
      {
        title: 'Team Collaboration & CI/CD',
        desc: 'Collaborated with senior engineers in Agile sprints, conducting Git pull request reviews, Postman API contract testing, and production deployment staging.',
      },
    ],
    technologies: ['NestJS', 'TypeScript', 'RabbitMQ', 'PostgreSQL', 'Docker', 'Stripe Connect', 'PayMongo', 'Next.js'],
  },
  {
    id: 'codequotient',
    role: 'Software Developer Intern',
    company: 'CodeQuotient',
    location: 'Panchkula, India',
    type: 'Internship',
    tenure: 'Feb 2025 – Oct 2025',
    active: false,
    avatarText: 'CQ',
    avatarBg: '#4338ca',
    responsibilities: [
      {
        title: 'Full-Stack Application Engineering',
        desc: 'Built responsive web applications with decoupled Express.js REST backends, React UI components, and MongoDB state management.',
      },
      {
        title: 'Algorithmic Problem Solving (220+ DSA)',
        desc: 'Solved 220+ competitive algorithmic puzzles in C++ covering binary trees, dynamic programming, graph traversal, and greedy algorithms under strict time and space complexity limits.',
      },
      {
        title: 'API Performance & State Optimization',
        desc: 'Profiled and optimized client-side state lifecycles and backend query latencies alongside engineering mentors.',
      },
    ],
    technologies: ['Node.js', 'Express.js', 'React', 'MongoDB', 'C++', 'Data Structures', 'Algorithms'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'mca',
    period: '2025 – 2027',
    grade: 'CGPA: 8.0',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Chandigarh University • Specialization in AI/ML',
    description:
      'Pursuing specialized postgraduate coursework in Artificial Intelligence, Machine Learning, Distributed System Architecture, and Cloud Systems.',
    tags: ['Specialization in AI/ML', 'System Architecture'],
  },
  {
    id: 'bca',
    period: '2022 – 2025',
    grade: 'CGPA: 7.5',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Arya P.G. College, Panipat (Kurukshetra University)',
    description:
      'Undergraduate computer science degree with core focus on Software Engineering, Object-Oriented Programming, Relational Databases, and Operating Systems.',
    tags: ['Computer Science', 'Software Engineering'],
  },
  {
    id: 'school',
    period: 'Higher Secondary',
    degree: 'Class 12 & Class 10',
    institution: 'Arya Sr. Sec. School, Panipat',
    description: 'Completed foundational secondary and higher secondary school board education with academic distinction.',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'zerone-coding',
    title: '1st Place – On-Spot Coding',
    event: 'Zerone24 IT Fest • National Level',
    description:
      'Competed in real-time solving complex algorithmic puzzles in C++ under tight time constraints with maximum execution efficiency.',
    badge: '🥇 1st Place Winner',
    badgeType: 'gold',
    icon: '🥇',
  },
  {
    id: 'zerone-debugging',
    title: '2nd Place – On-Spot Debugging',
    event: 'Zerone24 IT Fest • National Level',
    description:
      'Diagnosed and patched runtime logic defects, syntax faults, and concurrency anomalies across competitive codebase scenarios.',
    badge: '🥈 2nd Place Winner',
    badgeType: 'silver',
    icon: '🥈',
  },
  {
    id: 'npm-package',
    title: 'dot-react-comment-lib',
    event: 'NPM Registry • React & Next.js',
    description:
      'Designed and published a lightweight (~31KB minified) zero-dependency nested threaded comments library on the official NPM registry.',
    badge: '📦 NPM Package Author',
    badgeType: 'package',
    icon: '📦',
  },
  {
    id: 'service',
    title: 'NCC & NSS Service',
    event: 'National Cadet Corps & Social Operations',
    description:
      'Trained in disciplined team operations, disaster response drills, and community welfare initiatives, cultivating high-resilience habits.',
    badge: '🎖️ Certified Service',
    badgeType: 'bronze',
    icon: '🎖️',
  },
];
