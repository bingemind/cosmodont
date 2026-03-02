/* ═══════════════════════════════════════════════════════════════
   COSMODONT DENTAL CLINIC — app.js
   ═══════════════════════════════════════════════════════════════

   Depends on: config.js (must be loaded before this file)

   Functions:
     renderSite()              — populates DOM from CONFIG data
     initNavbar()              — scroll behaviour + active links
     initMobileMenu()          — hamburger open/close
     closeMobileMenu()         — exposed globally for HTML onclick
     initHeroAnimation()       — staggered hero text reveal
     initScrollReveal()        — IntersectionObserver fade-ins
     initTestimonialsCarousel()— mobile auto-scroll carousel
     initForm()                — booking form submit handler
     initSmoothScroll()        — smooth anchor scrolling
   ═══════════════════════════════════════════════════════════════ */


/* ─────────────────────────────────────────────────────────────────
   DOM BUILDER — renders CONFIG data into the HTML placeholders
   ───────────────────────────────────────────────────────────────── */
function renderSite() {

  /* ── Services grid ── */
  const servicesGrid = document.getElementById('servicesGrid');
  if (servicesGrid) {
    servicesGrid.innerHTML = CONFIG.services.map((s, i) => `
      <div class="service-card reveal reveal-d${Math.min(i + 1, 6)}">
        <span class="service-icon">${s.icon}</span>
        <h3 class="service-name">${s.name}</h3>
        <p class="service-desc">${s.desc}</p>
        <a href="#contact" class="service-link">Learn More →</a>
      </div>
    `).join('');
  }

  /* ── Doctors grid ── */
  const doctorsGrid = document.getElementById('doctorsGrid');
  if (doctorsGrid) {
    doctorsGrid.innerHTML = CONFIG.doctors.map((d, i) => {
      const firstName = d.name.split(' ')[1].toLowerCase();
      /* If doctor has a real image path set, use <img>; otherwise show initials */
      const avatarContent = d.image
        ? `<img src="${d.image}" alt="${d.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`
        : d.initials;

      return `
        <div class="doctor-card reveal reveal-d${i + 1}">
          <div class="doctor-avatar" data-image-id="doctor-${firstName}" aria-label="${d.name}">
            ${avatarContent}
          </div>
          <h3 class="doctor-name">${d.name}</h3>
          <p class="doctor-role">${d.role}</p>
          <div class="doctor-tags">
            ${d.tags.map(t => `<span class="doctor-tag">${t}</span>`).join('')}
          </div>
          <div class="doctor-quote-wrap">
            <p class="doctor-quote">${d.quote}</p>
          </div>
        </div>
      `;
    }).join('');
  }

  /* ── Testimonials ── */
  const testimonialsGrid = document.getElementById('testimonialsGrid');
  if (testimonialsGrid) {
    testimonialsGrid.innerHTML = CONFIG.testimonials.map((t, i) => `
      <div class="testimonial-card reveal reveal-d${Math.min(i + 1, 6)}">
        <div class="testimonial-stars">
          ${'<span class="star-icon">★</span>'.repeat(t.stars)}
        </div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-footer">
          <span class="testimonial-name">${t.name}</span>
          <span class="testimonial-source">via Google</span>
        </div>
      </div>
    `).join('');
  }

  /* ── Smile gallery ── */
  const galleryGrid = document.getElementById('galleryGrid');
  if (galleryGrid) {
    galleryGrid.innerHTML = CONFIG.gallery.map((g, i) => {
      const imgEl = g.image
        ? `<img src="${g.image}" alt="${g.treatment}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`
        : '';

      return `
        <div class="gallery-card reveal reveal-d${i + 1}">
          <div class="gallery-img" data-image-id="gallery-${i+1}" role="img" aria-label="${g.treatment}">
            ${imgEl}
          </div>
          <div class="gallery-card-info">
            <p class="gallery-treatment">${g.treatment}</p>
            <p class="gallery-type">${g.type}</p>
          </div>
        </div>
      `;
    }).join('');
  }

  /* ── Credentials row ── */
  const credentialsRow = document.getElementById('credentialsRow');
  if (credentialsRow) {
    credentialsRow.innerHTML = CONFIG.credentials.map(c => `
      <div class="credential-item reveal">
        <span class="credential-icon">${c.icon}</span>
        <span class="credential-stat">${c.stat}</span>
        <span class="credential-label">${c.label}</span>
      </div>
    `).join('');
  }

  /* ── Financing items ── */
  const financingList = document.getElementById('financingList');
  if (financingList) {
    financingList.innerHTML = CONFIG.financing.items.map((item, i) => `
      <div class="financing-item reveal reveal-d${i + 1}">
        <span class="financing-item-icon">${item.icon}</span>
        <span class="financing-item-text">${item.text}</span>
      </div>
    `).join('');
  }

  /* ── Financing partner logos ── */
  const partnerLogos = document.getElementById('partnerLogos');
  if (partnerLogos) {
    partnerLogos.innerHTML = CONFIG.financing.partners.map(p => `
      <div class="partner-logo-wrap">
        <img src="${p.logo}" alt="${p.name}" class="partner-logo" loading="lazy">
      </div>
    `).join('');
  }

  /* ── Insurance tags ── */
  const insuranceTags = document.getElementById('insuranceTags');
  if (insuranceTags) {
    insuranceTags.innerHTML = CONFIG.financing.insurance.map(ins => `
      <span class="insurance-tag">${ins}</span>
    `).join('');
  }

  /* ── Book section phone numbers ── */
  const bookPhones = document.getElementById('bookPhones');
  if (bookPhones) {
    bookPhones.innerHTML = CONFIG.clinic.phones.map(p => `
      <a href="tel:${p}" class="book-phone-link"><span>📞</span> ${p}</a>
    `).join('');
  }

  /* ── Footer: services list ── */
  const footerServices = document.getElementById('footerServices');
  if (footerServices) {
    footerServices.innerHTML = CONFIG.services.map(s => `
      <li><a href="#services">${s.name}</a></li>
    `).join('');
  }

  /* ── Footer: contact details ── */
  const footerContact = document.getElementById('footerContact');
  if (footerContact) {
    footerContact.innerHTML = `
      <div class="footer-contact-row">
        <span class="footer-contact-icon">📍</span>
        <span>${CONFIG.clinic.address}</span>
      </div>
      ${CONFIG.clinic.phones.map(p => `
        <div class="footer-contact-row">
          <span class="footer-contact-icon">📞</span>
          <a href="tel:${p}">${p}</a>
        </div>
      `).join('')}
      ${CONFIG.clinic.email ? `
        <div class="footer-contact-row">
          <span class="footer-contact-icon">✉️</span>
          <a href="mailto:${CONFIG.clinic.email}">${CONFIG.clinic.email}</a>
        </div>
      ` : ''}
    `;
  }
}


/* ─────────────────────────────────────────────────────────────────
   NAVBAR — scroll behaviour + active link highlighting
   ───────────────────────────────────────────────────────────────── */
function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.navbar-links a');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    /* Toggle sticky style once scrolled past hero */
    navbar.classList.toggle('scrolled', window.scrollY > 60);

    /* Highlight nav link for current section */
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
}


/* ─────────────────────────────────────────────────────────────────
   MOBILE MENU
   ───────────────────────────────────────────────────────────────── */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}

/* Exposed globally so HTML onclick attributes can call it */
function closeMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.remove('open');
  hamburger.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileNav.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}


/* ─────────────────────────────────────────────────────────────────
   HERO ANIMATION — staggered element reveal on page load
   ───────────────────────────────────────────────────────────────── */
function initHeroAnimation() {
  const heroElements = [
    'heroEyebrow',
    'heroLine1',
    'heroLine2',
    'heroSubtext',
    'heroCtas',
    'trustBar',
  ];
  /* Small delay so fonts have started loading before animating */
  setTimeout(() => {
    heroElements.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add('reveal-start');
    });
  }, 100);
}


/* ─────────────────────────────────────────────────────────────────
   SCROLL REVEAL — IntersectionObserver for section fade-ins
   ───────────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);  /* Only trigger once */
      }
    });
  }, {
    threshold:  0.12,
    rootMargin: '0px 0px -40px 0px',
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


/* ─────────────────────────────────────────────────────────────────
   TESTIMONIALS CAROUSEL — auto-scrolls on mobile
   ───────────────────────────────────────────────────────────────── */
function initTestimonialsCarousel() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;

  let isInteracting = false;

  const autoScroll = setInterval(() => {
    if (isInteracting || window.innerWidth > 768) return;
    const maxScroll = grid.scrollWidth - grid.clientWidth;
    if (grid.scrollLeft >= maxScroll - 10) {
      grid.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      grid.scrollBy({ left: grid.clientWidth * 0.85, behavior: 'smooth' });
    }
  }, 3500);

  /* Pause on user interaction */
  grid.addEventListener('touchstart', () => { isInteracting = true; }, { passive: true });
  grid.addEventListener('touchend',   () => { setTimeout(() => { isInteracting = false; }, 2000); }, { passive: true });
  grid.addEventListener('mouseenter', () => { isInteracting = true; });
  grid.addEventListener('mouseleave', () => { isInteracting = false; });
}


/* ─────────────────────────────────────────────────────────────────
   FORM SUBMIT
   ───────────────────────────────────────────────────────────────── */
function initForm() {
  const form = document.getElementById('bookForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name    = form.querySelector('#fname').value.trim();
    const phone   = form.querySelector('#fphone').value.trim();
    const service = form.querySelector('#fservice').value;

    if (!name || !phone || !service) {
      alert('Please fill in all fields to continue.');
      return;
    }

    /* Delegates to CONFIG.formSubmitHandler — change behaviour in config.js */
    CONFIG.formSubmitHandler({ name, phone, service });
  });
}


/* ─────────────────────────────────────────────────────────────────
   SMOOTH SCROLL — JS fallback for browsers without CSS scroll-behavior
   ───────────────────────────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navbarHeight = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}


/* ─────────────────────────────────────────────────────────────────
   INIT — wire everything up on DOMContentLoaded
   ───────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderSite();               /* Must run first — builds dynamic HTML */
  initNavbar();
  initMobileMenu();
  initHeroAnimation();
  initScrollReveal();         /* Runs after renderSite so .reveal elements exist */
  initTestimonialsCarousel();
  initForm();
  initSmoothScroll();

  /* Re-observe elements injected by renderSite() */
  setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }, 50);
});
