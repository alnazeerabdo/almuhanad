
    // Mobile navigation
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const closeMenu = () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'فتح القائمة');
      document.body.classList.remove('menu-open');
    };
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
      document.body.classList.toggle('menu-open', isOpen);
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => { if (window.innerWidth > 780) closeMenu(); });

    // Header shadow and back-to-top button
    const header = document.getElementById('siteHeader');
    const backTop = document.getElementById('backTop');
    const updateScrollUI = () => {
      header.classList.toggle('scrolled', window.scrollY > 12);
      backTop.classList.toggle('show', window.scrollY > 500);
    };
    window.addEventListener('scroll', updateScrollUI, { passive: true });
    updateScrollUI();
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Project filter: filters the four featured listings by type, district and bedrooms.
    const searchForm = document.getElementById('propertySearch');
    const cards = [...document.querySelectorAll('.project-card')];
    const emptyState = document.getElementById('emptyState');
    searchForm.addEventListener('submit', event => {
      event.preventDefault();
      const type = document.getElementById('propertyType').value;
      const district = document.getElementById('district').value;
      const rooms = document.getElementById('rooms').value;
      let visibleCount = 0;
      cards.forEach(card => {
        const matches = (!type || card.dataset.type === type) &&
          (!district || card.dataset.district === district) &&
          (!rooms || card.dataset.rooms === rooms);
        card.hidden = !matches;
        if (matches) visibleCount++;
      });
      emptyState.classList.toggle('visible', visibleCount === 0);
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Reveal elements as they enter the viewport.
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealElements.forEach(element => observer.observe(element));
    } else {
      revealElements.forEach(element => element.classList.add('is-visible'));
    }
    document.getElementById('year').textContent = new Date().getFullYear();
  