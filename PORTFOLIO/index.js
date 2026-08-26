document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initMinimalTerminal();
  initDynamicExperience();
  initSkillsFilter();
  initContactForm();
  initCopyButtons();
});

function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (themeIcon) themeIcon.textContent = '🌙';
  } else {
    document.body.classList.remove('light-theme');
    if (themeIcon) themeIcon.textContent = '☀️';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-theme');
      localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
      if (themeIcon) themeIcon.textContent = isLight ? '🌙' : '☀️';
      showToast(isLight ? 'Switched to Light Theme' : 'Switched to Dark Theme');
    });
  }
}

function initNavbar() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
  const sections = document.querySelectorAll('section[id]');
  const moreDropdown = document.getElementById('nav-more-dropdown');
  const moreToggleBtn = document.getElementById('nav-more-btn');
  const mobileToggleBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');
  const mobileCloseBtn = document.getElementById('mobile-drawer-close');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 140;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  if (moreToggleBtn && moreDropdown) {
    moreToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = moreDropdown.classList.toggle('open');
      moreToggleBtn.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!moreDropdown.contains(e.target) && e.target !== moreToggleBtn) {
        moreDropdown.classList.remove('open');
        moreToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    moreDropdown.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        moreDropdown.classList.remove('open');
        moreToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const openDrawer = () => {
    mobileDrawer?.classList.add('open');
    mobileDrawerOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer?.classList.remove('open');
    mobileDrawerOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', openDrawer);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeDrawer);
  if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener('click', closeDrawer);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

function initMinimalTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const quickCmdBtns = document.querySelectorAll('.quick-cmd-btn');

  quickCmdBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) executeTerminalCommand(cmd);
    });
  });

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = terminalInput.value.trim();
        if (cmd) {
          executeTerminalCommand(cmd);
          terminalInput.value = '';
        }
      }
    });
  }

  function executeTerminalCommand(rawCmd) {
    const cmd = rawCmd.toLowerCase().trim();
    if (!terminalOutput) return;

    const cmdRecord = document.createElement('div');
    cmdRecord.className = 'terminal-prompt-line';
    cmdRecord.innerHTML = `<span class="terminal-prompt">sumit@dev:~$</span> <span class="terminal-cmd-text">${escapeHtml(rawCmd)}</span>`;
    terminalOutput.appendChild(cmdRecord);

    const responseDiv = document.createElement('div');
    responseDiv.className = 'terminal-response-line';

    if (cmd === 'clear') {
      terminalOutput.innerHTML = '';
      return;
    } else if (cmd === 'help' || cmd === 'sumit --help' || cmd === '?') {
      responseDiv.innerHTML = `
        <div style="color: var(--text-primary); font-weight: 700;">Available commands:</div>
        <div style="color: var(--text-secondary); display: grid; grid-template-columns: 110px 1fr; gap: 4px; margin-top: 4px;">
          <span><b style="color:var(--text-primary)">skills</b></span> <span>List backend & architectural stack</span>
          <span><b style="color:var(--text-primary)">projects</b></span> <span>View key repositories & POCs</span>
          <span><b style="color:var(--text-primary)">arch</b></span> <span>View distributed system highlights</span>
          <span><b style="color:var(--text-primary)">experience</b></span> <span>View corporate work history</span>
          <span><b style="color:var(--text-primary)">contact</b></span> <span>Get email, phone & socials</span>
          <span><b style="color:var(--text-primary)">resume</b></span> <span>Open / download resume PDF</span>
          <span><b style="color:var(--text-primary)">git log</b></span> <span>Show recent architecture commits</span>
          <span><b style="color:var(--text-primary)">clear</b></span> <span>Clear terminal window</span>
        </div>
      `;
    } else if (cmd === 'skills') {
      responseDiv.innerHTML = `
        <div style="color: var(--text-primary); font-weight: 700;">⚡ Technical Stack Matrix:</div>
        <div style="color: var(--text-secondary); font-size: 0.8rem; margin-top: 4px; line-height: 1.5;">
          • <b style="color:var(--text-primary)">Architectures:</b> Domain-Driven Design (DDD), CQRS, Transactional Outbox, Event-Driven (EDA), Microservices.<br>
          • <b style="color:var(--text-primary)">Backend:</b> NestJS, Node.js, TypeScript, C++ (220+ DSA), Python, Django, REST, WebSockets.<br>
          • <b style="color:var(--text-primary)">Databases & Queues:</b> RabbitMQ, PostgreSQL, TypeORM, Redis, BullMQ, MongoDB.<br>
          • <b style="color:var(--text-primary)">Frontend & AI:</b> Next.js, React, Redux Toolkit, TailwindCSS, LangChain, LangGraph, Gemini API.
        </div>
      `;
    } else if (cmd === 'projects') {
      responseDiv.innerHTML = `
        <div style="color: var(--text-primary); font-weight: 700;">📁 Featured Repositories:</div>
        <div style="color: var(--text-secondary); font-size: 0.8rem; margin-top: 4px; line-height: 1.5;">
          1. <b>LangChain AI Agent POC</b> - Agentic workflows with LangGraph & Gemini Flash<br>
          2. <b>Eternal Frames</b> - Multi-tenant studio platform with Outbox + RabbitMQ & Razorpay<br>
          3. <b>Deca Chat</b> - Real-time messaging with WebSockets & Inbox-Outbox sync<br>
          4. <b>C++ Custom Web Crawler</b> - Zero-dependency crawler with custom memory management<br>
          5. <b>RabbitMQ Exchanges POC</b> - Multi-service asynchronous message orchestration
        </div>
      `;
    } else if (cmd === 'arch') {
      responseDiv.innerHTML = `
        <div style="color: var(--text-primary); font-weight: 700;">🏗️ Distributed Architecture Highlights:</div>
        <div style="color: var(--text-secondary); font-size: 0.8rem; margin-top: 4px; line-height: 1.5;">
          • <b>Transactional Outbox:</b> Eliminates dual-write anomalies across DB and Message Broker.<br>
          • <b>Idempotent Consumers:</b> Handles duplicate delivery gracefully with deduplication keys.<br>
          • <b>Dead Letter Queues (DLQ):</b> Quarantines poisoned messages for backoff & alert triage.
        </div>
      `;
    } else if (cmd === 'experience') {
      responseDiv.innerHTML = `
        <div style="color: var(--text-primary); font-size: 0.8rem; line-height: 1.5;">
          • <b style="color:var(--text-primary)">Full Stack Developer</b> @ Zenmonk Software & Services (Feb 2026 - Present)<br>
          • <b style="color:var(--text-primary)">Junior Node.js Developer Intern</b> @ Techbuilder (Nov 2025 - Feb 2026)<br>
          • <b style="color:var(--text-primary)">Software Developer Intern</b> @ CodeQuotient (Feb 2025 - Nov 2025)
        </div>
      `;
    } else if (cmd === 'contact') {
      responseDiv.innerHTML = `
        <div style="color: var(--text-primary); font-weight: 700;">📬 Contact Coordinates:</div>
        <div style="color: var(--text-secondary); font-size: 0.8rem; margin-top: 4px; line-height: 1.5;">
          • Email: <a href="mailto:iam.sumitkumar64@gmail.com" style="color:var(--text-primary); text-decoration:underline;">iam.sumitkumar64@gmail.com</a><br>
          • Phone: <a href="tel:+919992528037" style="color:var(--text-primary); text-decoration:underline;">+91 99925 28037</a><br>
          • LinkedIn: <a href="https://linkedin.com/in/iamsumitkumar64" target="_blank" style="color:var(--text-primary); text-decoration:underline;">linkedin.com/in/iamsumitkumar64</a><br>
          • GitHub: <a href="https://github.com/iamsumitkumar64" target="_blank" style="color:var(--text-primary); text-decoration:underline;">github.com/iamsumitkumar64</a>
        </div>
      `;
    } else if (cmd === 'resume' || cmd === 'cat resume.txt' || cmd === 'cat resume') {
      responseDiv.innerHTML = `<div style="color: var(--text-primary);">Opening Resume PDF in new tab...</div>`;
      window.open('PORTO CONTENT/Sumit%20Kumar%20Resume.pdf', '_blank');
    } else if (cmd === 'git log' || cmd === 'git log --graph') {
      responseDiv.innerHTML = `
        <div style="color: var(--text-secondary); font-size: 0.78rem; font-family: var(--font-mono); line-height: 1.5;">
          * <span style="color:var(--text-primary)">7f8a9e</span> (HEAD -> main) feat(resilience): implement DLQ with exponential retry<br>
          * <span style="color:var(--text-primary)">3c12a4</span> feat(outbox): atomize DB writes & RabbitMQ event dispatch<br>
          * <span style="color:var(--text-primary)">99bd70</span> refactor(domain): isolate bounded contexts with DDD aggregate roots<br>
          * <span style="color:var(--text-primary)">1104e2</span> feat(payments): integrate Stripe Connect & Paymongo webhooks
        </div>
      `;
    } else if (cmd === 'whoami') {
      responseDiv.innerHTML = `<span style="color:var(--text-primary)">guest@sumit-dev (Authorized Visitor)</span>`;
    } else {
      responseDiv.innerHTML = `<span style="color:var(--text-primary);">Command not found: "${escapeHtml(rawCmd)}". Type <b style="color:var(--text-primary);">help</b> to see all commands.</span>`;
    }

    terminalOutput.appendChild(responseDiv);
    const termBody = document.querySelector('.terminal-body');
    if (termBody) termBody.scrollTop = termBody.scrollHeight;
  }
}

function initDynamicExperience() {
  const startDate = new Date(2025, 1, 1); // July 1, 2025 (Month index 1 is Feb)
  const now = new Date();

  // Total full elapsed months from July 2025 to current date
  let totalMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
  if (now.getDate() < startDate.getDate()) {
    totalMonths--;
  }
  if (totalMonths < 0) totalMonths = 0;

  let displayExp = '2+';
  let labelExp = 'Years Exp';

  if (totalMonths < 12) {
    displayExp = `${totalMonths}+`;
    labelExp = totalMonths === 1 ? 'Month Exp' : 'Months Exp';
  } else {
    const decimalYears = (totalMonths / 12).toFixed(1);
    displayExp = decimalYears.endsWith('.0')
      ? `${parseInt(decimalYears, 10)}+`
      : `${decimalYears}+`;
    labelExp = 'Years Exp';
  }

  const statNumberEl = document.getElementById('experience-stat-number');
  const statLabelEl = document.getElementById('experience-stat-label');

  if (statNumberEl) statNumberEl.textContent = displayExp;
  if (statLabelEl) statLabelEl.textContent = labelExp;
}

function initSkillsFilter() {
  const tabBtns = document.querySelectorAll('.skill-tab-pill');
  const techCards = document.querySelectorAll('.tech-matrix-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      techCards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', SendMail);
  }
}

// Contact Form submission using EmailJS
function SendMail(event) {
  if (event) event.preventDefault();

  const nameInput = document.getElementById('user-name') || document.getElementById('contact-name');
  const emailInput = document.getElementById('user-email') || document.getElementById('contact-email');
  const mobileInput = document.getElementById('user-mobile');
  const messageInput = document.getElementById('user-message') || document.getElementById('contact-msg');
  const submitBtn = document.querySelector('#contact-form button[type="submit"]');

  if (!nameInput || !emailInput || !messageInput) {
    showToast('Form structure is invalid.', 'error');
    return false;
  }

  const params = {
    from_name: nameInput.value.trim(),
    email_id: emailInput.value.trim(),
    mobile: mobileInput ? mobileInput.value.trim() : '',
    message: messageInput.value.trim()
  };

  if (!params.from_name || !params.email_id || !params.message) {
    showToast('Please fill in all required fields.', 'error');
    return false;
  }

  const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Send Message 🚀';

  // Set loading state
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerText = 'SENDING...';
  }

  if (typeof emailjs === 'undefined') {
    showToast('Email service is loading. Please try again or email directly.', 'error');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
    return false;
  }

  emailjs.send("service_nvpczn8", "template_fjbjz6e", params)
    .then((res) => {
      showToast('Message sent successfully! Sumit will get back to you soon.', 'success');
      // Reset fields
      nameInput.value = '';
      emailInput.value = '';
      if (mobileInput) mobileInput.value = '';
      messageInput.value = '';
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      showToast('Failed to send message. Please try again or email directly.', 'error');
    })
    .finally(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });

  return false;
}

function initCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(`Copied to clipboard: "${text}"`, 'success');
        }).catch(() => {
          showToast('Failed to copy', 'error');
        });
      }
    });
  });
}

function showToast(message, type = 'info') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const dotColor = type === 'error' ? '#ef4444' : type === 'success' ? '#10b981' : 'var(--text-primary)';

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span style="color:${dotColor}; font-size: 0.85rem;">●</span> <span>${escapeHtml(message)}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
