/* ============================================
   Nelly Elfvelin — Portfolio JS
   Warm & Biophilic — Expressive Interactions
   ============================================ */

// --- Translations ---
const translations = {
  sv: {
    'nav.projects': 'Projekt',
    'nav.about': 'Om mig',
    'nav.contact': 'Kontakt',
    'hero.subtitle': 'Arkitektur',
    'hero.tagline': 'Omsorgsfullt gestaltad arkitektur i mänsklig skala',
    'hero.scroll': 'Scrolla',
    'projects.title': 'Projekt',
    'project.01.desc': 'Cancerrehabiliteringscenter — Examensarbete',
    'project.02.desc': 'Vindskydd — Bohusleden, Svartedalen',
    'project.03.desc': 'Vårdcentral — Staffanstorp',
    'project.04.desc': 'Visualisering av publik byggnad — Klippan, Göteborg',
    'project.05.desc': 'Altanprojekt — Riv- och bygglov',
    'philosophy.quote': 'Genom att förstå både platsen och människorna som använder den strävar jag efter att forma arkitektur som inte bara fungerar idag, utan som kan anpassas över tid.',
    'about.title': 'Om mig',
    'about.intro': 'Jag är arkitekt med ett starkt intresse för vårdarkitektur och projekt i mänsklig skala. I mitt arbete utgår jag från människors rörelsemönster, vardag och framtida behov, med ambitionen att skapa rum som är funktionella, omsorgsfullt organiserade och långsiktigt hållbara.',
    'about.body': 'Jag drivs av det kreativa i arkitekturen och har ett särskilt intresse för träbyggande, materialitet och rumslig sammansättning. Genom att förstå både platsen och människorna som använder den strävar jag efter att forma arkitektur som inte bara fungerar idag, utan som kan anpassas över tid.',
    'about.education': 'Utbildning',
    'about.experience': 'Erfarenhet',
    'about.awards': 'Utmärkelser',
    'about.norconsult': 'Arkitektur, praktik',
    'about.award1': 'Västkuststiftelsens pris för utmärkt friluftsdesign',
    'about.award2': 'Cancerrehabilitering och arkitektur',
    'contact.title': 'Kontakt',
    'project.back': 'Tillbaka till alla projekt',
    'meta.date': 'Datum',
    'meta.supervisor': 'Handledare',
    'meta.examiner': 'Examinator',
    'meta.collaboration': 'Samarbete',
    'meta.client': 'Beställare',
    'meta.award': 'Utmärkelse',
    'meta.status': 'Status',
    'meta.group': 'Grupp',
    'nav.prev': 'Föregående',
    'nav.next': 'Nästa',
  },
  en: {
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.subtitle': 'Architecture',
    'hero.tagline': 'Carefully designed architecture at a human scale',
    'hero.scroll': 'Scroll',
    'projects.title': 'Projects',
    'project.01.desc': 'Cancer Rehabilitation Center — Master Thesis',
    'project.02.desc': 'Wind Shelter — Bohusleden Trail, Svartedalen',
    'project.03.desc': 'Healthcare Center — Staffanstorp',
    'project.04.desc': 'Public Building Visualization — Klippan, Gothenburg',
    'project.05.desc': 'Deck Project — Building Permit',
    'philosophy.quote': 'By understanding both the place and the people who use it, I strive to shape architecture that not only works today, but can adapt over time.',
    'about.title': 'About',
    'about.intro': 'I am an architect with a strong interest in healthcare architecture and projects at a human scale. My work is rooted in people\'s movement patterns, everyday life, and future needs — with the ambition to create spaces that are functional, carefully organized, and sustainable in the long term.',
    'about.body': 'I am driven by the creative aspects of architecture and have a particular interest in timber construction, materiality, and spatial composition. By understanding both the place and the people who use it, I strive to shape architecture that not only works today, but can adapt over time.',
    'about.education': 'Education',
    'about.experience': 'Experience',
    'about.awards': 'Awards',
    'about.norconsult': 'Architecture, internship',
    'about.award1': 'West Coast Foundation Award for Outstanding Outdoor Design',
    'about.award2': 'Cancer rehabilitation and architecture',
    'contact.title': 'Contact',
    'project.back': 'Back to all projects',
    'meta.date': 'Date',
    'meta.supervisor': 'Supervisor',
    'meta.examiner': 'Examiner',
    'meta.collaboration': 'Collaboration',
    'meta.client': 'Client',
    'meta.award': 'Award',
    'meta.status': 'Status',
    'meta.group': 'Group',
    'nav.prev': 'Previous',
    'nav.next': 'Next',
  }
};

let currentLang = localStorage.getItem('lang') || 'sv';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const toggleLabel = lang === 'sv' ? 'EN' : 'SV';
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = toggleLabel;
  });

  document.documentElement.lang = lang;
}

// --- Custom Cursor ---
function initCursor() {
  // Skip on touch devices
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  document.body.appendChild(cursor);

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let dotX = 0, dotY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.classList.add('visible');
    dot.classList.add('visible');
  });

  // Smooth follow
  function animate() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    dotX += (mouseX - dotX) * 0.35;
    dotY += (mouseY - dotY) * 0.35;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    dot.style.left = dotX + 'px';
    dot.style.top = dotY + 'px';

    requestAnimationFrame(animate);
  }
  animate();

  // Hover effects
  const hoverTargets = document.querySelectorAll('a, button, .project-card');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  document.addEventListener('mouseleave', () => {
    cursor.classList.remove('visible');
    dot.classList.remove('visible');
  });
  document.addEventListener('mouseenter', () => {
    cursor.classList.add('visible');
    dot.classList.add('visible');
  });
}

// --- Scroll Reveal ---
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add slight delay for staggering multiple reveals
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 60);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -80px 0px'
  });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));
}

// --- Parallax ---
function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax');
  if (parallaxElements.length === 0) return;

  function updateParallax() {
    const scrollY = window.scrollY;
    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.speed) || 0.1;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        const yPos = (rect.top - window.innerHeight / 2) * speed;
        el.style.transform = `translateY(${yPos}px)`;
      }
    });
    requestAnimationFrame(updateParallax);
  }
  updateParallax();
}

// --- Magnetic hover on project cards ---
function initMagneticCards() {
  const cards = document.querySelectorAll('.project-card');
  if (window.matchMedia('(hover: none)').matches) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const moveX = (x - centerX) / centerX * 4;
      const moveY = (y - centerY) / centerY * 4;

      card.style.transform = `perspective(800px) rotateX(${-moveY}deg) rotateY(${moveX}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

// --- Nav scroll behavior ---
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  // Only add scroll-based styling if nav doesn't already have 'scrolled' class (project pages)
  if (nav.classList.contains('scrolled')) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
}

// --- Mobile menu ---
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// --- Language toggle ---
function initLangToggle() {
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const newLang = currentLang === 'sv' ? 'en' : 'sv';
      setLanguage(newLang);
    });
  });

  setLanguage(currentLang);
}

// --- Lazy loading images with fade ---
function initLazyImages() {
  const images = document.querySelectorAll('img[data-src]');
  if (images.length === 0) return;

  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => img.classList.add('loaded');
        imgObserver.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  images.forEach(img => imgObserver.observe(img));
}

// --- Page transition ---
function initPageTransitions() {
  document.body.classList.add('page-loaded');

  document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('http') || href.startsWith('#')) return;

      e.preventDefault();
      document.body.classList.add('page-leaving');

      setTimeout(() => {
        window.location.href = href;
      }, 350);
    });
  });
}

// --- Hero parallax on scroll ---
function initHeroParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const heroContent = hero.querySelector('.hero__content');
  const scrollIndicator = hero.querySelector('.hero__scroll-indicator');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;
    if (scrollY > heroHeight) return;

    const progress = scrollY / heroHeight;
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
      heroContent.style.opacity = 1 - progress * 1.5;
    }
    if (scrollIndicator) {
      scrollIndicator.style.opacity = 1 - progress * 3;
    }
  }, { passive: true });
}

// --- Smooth scroll progress indicator ---
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--color-sage), var(--color-terracotta));
    z-index: 101;
    transition: width 0.1s linear;
    border-radius: 0 1px 1px 0;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + '%';
  }, { passive: true });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initMobileMenu();
  initLangToggle();
  initScrollReveal();
  initLazyImages();
  initPageTransitions();
  initCursor();
  initParallax();
  initMagneticCards();
  initHeroParallax();
  initScrollProgress();
});
