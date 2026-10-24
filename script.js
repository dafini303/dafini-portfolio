(function () {
  'use strict';
  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return document.querySelectorAll(s); };

  // ===== EDIT YOUR DETAILS HERE =====
  // Leave email, github or linkedin as '' and that link is simply hidden on the site.
  var PROFILE = {
    email: 'britedafinibrite@gmail.com',
    phone: '+91 9123512217',          // set to '' to hide your phone number
    github: '',                       // e.g. 'https://github.com/your-real-username'
    linkedin: '',                     // paste your full profile address, e.g. 'https://www.linkedin.com/in/your-id'
    resume: 'assets/Dafini-Resume.pdf', // your resume PDF
    glance: [
      { label: 'Education', value: 'B.E. ECE, 2025' },
      { label: 'Experience', value: 'Internship training, 2025' },
      { label: 'Core stack', value: 'Python, JavaScript, React.js' },
      { label: 'Location', value: 'Chennai, India' }
    ],
    education: [
      { period: 'April 2025 – September 2025', tag: 'Internship training', title: 'CI Global Technology Pvt Limited',
        place: 'Web development training',
        points: ['Gained practical experience in web development through internship training and hands-on tasks.',
                 'Worked on responsive, user-friendly web pages using HTML, CSS, JavaScript and React.',
                 'Improved problem-solving skills and gained exposure to real-world development practices and project workflows.'] },
      { period: 'Ongoing', tag: 'Training', title: 'Python Full Stack Development', place: 'Gelbero',
        note: 'Training in Python full stack web development.', now: true },
      { period: '2025', tag: 'Degree', title: 'B.E. Electronics and Communication Engineering', place: 'Bethlehem Institute of Engineering, Kanniyakumari' },
      { period: '2021', tag: 'Higher secondary (12th)', title: 'St. Alosiyous Girls Higher Secondary School', place: 'Kanniyakumari' },
      { period: '2019', tag: 'High school (10th)', title: 'St. Antony’s Girls High School', place: 'Kanniyakumari' }
    ],
    // Add GitHub and demo links between the quotes. Empty means no link is shown for that project.
    projects: [
      { title: 'Carevix Healthcare', tags: ['React.js', 'TypeScript', 'Java', 'Spring Boot', 'MySQL'],
        desc: 'A full-stack healthcare management platform.',
        points: ['Covers patient registration, doctor consultations, prescriptions and pharmacy management.',
                 'Responsive frontend built with React.js and TypeScript, integrated with Spring Boot REST APIs, with MySQL storing healthcare data.'],
        github: '', demo: '' },
      { title: 'Joo Dessert – E-commerce Website', tags: ['React.js', 'TypeScript', 'Vite', 'Spring Boot', 'MySQL'],
        desc: 'A responsive online dessert ordering platform.',
        points: ['Product browsing, category selection, pricing, ratings and shopping cart functionality.',
                 'Frontend built with React.js and TypeScript, integrated with Spring Boot REST APIs, with MySQL managing dessert and order data.'],
        github: '', demo: '' }
    ],
    known: [
      { name: 'Python', group: 'Programming language' },
      { name: 'HTML5', group: 'Frontend' }, { name: 'CSS3', group: 'Frontend' }, { name: 'JavaScript', group: 'Frontend' },
      { name: 'React.js', group: 'Frontend' }, { name: 'Bootstrap', group: 'Frontend' }, { name: 'Next.js', group: 'Frontend' },
      { name: 'Node.js', group: 'Backend' },
      { name: 'Java', group: 'Used in projects' }, { name: 'TypeScript', group: 'Used in projects' },
      { name: 'Spring Boot', group: 'Used in projects' }, { name: 'Vite', group: 'Used in projects' },
      { name: 'MongoDB', group: 'Database' }, { name: 'MySQL', group: 'Database' },
      { name: 'Git', group: 'Tools' }, { name: 'GitHub', group: 'Tools' }, { name: 'VS Code', group: 'Tools' },
      { name: 'Postman', group: 'Tools' }, { name: 'NPM', group: 'Tools' }, { name: 'Chrome DevTools', group: 'Tools' },
      { name: 'DSA', group: 'Core subjects' }, { name: 'OOP', group: 'Core subjects' }, { name: 'Operating Systems', group: 'Core subjects' },
      { name: 'Computer Networks', group: 'Core subjects' }, { name: 'DBMS', group: 'Core subjects' }
    ],
    learning: [
      { name: 'Django', group: 'Currently learning' }
    ]
  };
  // ===== END OF EDITABLE DETAILS =====

  var ICON_GH = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>';
  var ICON_LI = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>';
  var ICON_MAIL = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>';
  var ICON_EXT = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>';

  function esc(t) { var d = document.createElement('div'); d.textContent = t; return d.innerHTML; }
  function attr(t) { return esc(t).replace(/"/g, '&quot;'); }
  function isUrl(u) { return /^https?:\/\/\S+$/i.test(u || ''); }
  function isEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e || ''); }

  var hasEmail = isEmail(PROFILE.email);
  var hasPhone = /^\+?[\d\s-]{7,}$/.test(PROFILE.phone || '');
  var hasGithub = isUrl(PROFILE.github);
  var hasLinkedin = isUrl(PROFILE.linkedin);

  $('#yr').textContent = new Date().getFullYear();

  // ----- Home: quick facts -----
  $('#glance').innerHTML = PROFILE.glance.map(function (g) {
    return '<div><dt>' + esc(g.label) + '</dt><dd>' + esc(g.value) + '</dd></div>';
  }).join('');

  // ----- Education -----
  $('#edu').innerHTML = PROFILE.education.map(function (e) {
    var body = e.points ? '<ul class="pts">' + e.points.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>'
      : (e.note ? '<p>' + esc(e.note) + '</p>' : '');
    return '<li' + (e.now ? ' class="now"' : '') + '><div class="tl-meta"><span>' + esc(e.period) +
      '</span><span class="tag">' + esc(e.tag) + '</span></div><h3>' + esc(e.title) +
      '</h3><p class="place">' + esc(e.place) + '</p>' + body + '</li>';
  }).join('');

  // ----- Skills (grouped) -----
  var groups = [], byGroup = {};
  PROFILE.known.forEach(function (s) {
    if (!byGroup[s.group]) { byGroup[s.group] = []; groups.push(s.group); }
    byGroup[s.group].push(s);
  });
  var html = groups.map(function (g) {
    return '<div class="sg"><h3>' + esc(g) + '</h3><ul>' + byGroup[g].map(function (s) {
      return '<li class="sk"><b>' + esc(s.name) + '</b></li>';
    }).join('') + '</ul></div>';
  }).join('');
  if (PROFILE.learning.length) {
    html += '<div class="sg"><h3>Currently learning</h3><ul>' + PROFILE.learning.map(function (s) {
      return '<li class="sk"><b>' + esc(s.name) + '</b><small>In progress</small></li>';
    }).join('') + '</ul></div>';
  }
  $('#skill-groups').innerHTML = html;

  // ----- Projects -----
  function projLink(url, label, icon) {
    return isUrl(url)
      ? '<a class="lnk" href="' + attr(url) + '" target="_blank" rel="noopener">' + icon + label + '<span class="sr"> (opens in a new tab)</span></a>'
      : '';
  }
  $('#pj').innerHTML = PROFILE.projects.map(function (p) {
    var links = projLink(p.github, 'GitHub', ICON_GH) + projLink(p.demo, 'Live demo', ICON_EXT);
    return '<article class="pc" data-tags="' + attr(p.tags.join('|')) + '"><h3>' + esc(p.title) + '</h3><p>' + esc(p.desc) + '</p>' +
      (p.points ? '<ul class="pts">' + p.points.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' : '') +
      '<div class="tags">' + p.tags.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div>' +
      (links ? '<div class="pl">' + links + '</div>' : '') + '</article>';
  }).join('');

  var tags = [], current = 'All';
  PROFILE.projects.forEach(function (p) { p.tags.forEach(function (t) { if (tags.indexOf(t) < 0) tags.push(t); }); });
  $('#flt').innerHTML = ['All'].concat(tags).map(function (t) {
    return '<button type="button" data-t="' + attr(t) + '" aria-pressed="' + (t === 'All') + '">' + esc(t) + '</button>';
  }).join('');

  function showProjects(animate) {
    var n = 0;
    $$('#pj .pc').forEach(function (c) {
      var ok = current === 'All' || c.dataset.tags.split('|').indexOf(current) > -1;
      c.hidden = !ok;
      if (ok) { n++; if (animate) { c.classList.remove('pop'); void c.offsetWidth; c.classList.add('pop'); } }
    });
    $('#pcount').textContent = 'Showing ' + n + ' of ' + PROFILE.projects.length + ' projects' + (current === 'All' ? '' : ' that use ' + current);
    $('#pnone').hidden = n > 0;
  }
  $('#flt').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    current = b.dataset.t;
    $$('#flt button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
    showProjects(true);
  });
  showProjects(false);

  // ----- Contact + social links (only real values are shown) -----
  function setContact(id, href, text) {
    var li = $(id); if (!li) return;
    var a = li.querySelector('a');
    a.href = href; a.querySelector('span').textContent = text; li.hidden = false;
  }
  var social = [];
  if (hasEmail) {
    setContact('#c-mail', 'mailto:' + PROFILE.email, PROFILE.email);
    social.push({ href: 'mailto:' + PROFILE.email, label: 'Send an email', icon: ICON_MAIL, ext: false });
  }
  if (hasPhone) setContact('#c-tel', 'tel:' + PROFILE.phone.replace(/[\s-]/g, ''), PROFILE.phone);
  if (hasGithub) {
    setContact('#c-gh', PROFILE.github, PROFILE.github.replace(/^https?:\/\/(www\.)?/, ''));
    social.push({ href: PROFILE.github, label: 'GitHub profile', icon: ICON_GH, ext: true });
  }
  if (hasLinkedin) {
    setContact('#c-li', PROFILE.linkedin, PROFILE.linkedin.replace(/^https?:\/\/(www\.)?/, ''));
    social.push({ href: PROFILE.linkedin, label: 'LinkedIn profile', icon: ICON_LI, ext: true });
  }
  if (social.length) {
    var hs = $('#hero-social');
    hs.innerHTML = social.map(function (s) {
      return '<li><a href="' + attr(s.href) + '" aria-label="' + attr(s.label + (s.ext ? ' (opens in a new tab)' : '')) + '"' +
        (s.ext ? ' target="_blank" rel="noopener"' : '') + '>' + s.icon + '</a></li>';
    }).join('');
    hs.hidden = false;
  }
  if (!hasEmail) {
    $('#form').hidden = true;
    if (!social.length) $('#cnote').hidden = false;
    $('#rq').hidden = true;
  } else {
    $('#rq').href = 'mailto:' + PROFILE.email + '?subject=' + encodeURIComponent('Resume request');
  }

  // ----- Resume download: show a clear state if the PDF is missing -----
  var resumeLinks = $$('.js-resume');
  resumeLinks.forEach(function (a) { a.href = PROFILE.resume; });
  function resumeMissing() {
    resumeLinks.forEach(function (a) {
      if (a.id === 'dl') {
        a.removeAttribute('href'); a.removeAttribute('download');
        a.setAttribute('aria-disabled', 'true'); a.classList.add('off');
        a.querySelector('span').textContent = 'Resume not available yet';
      } else { a.hidden = true; }
    });
    $('#rnote').hidden = false;
    if (!hasEmail) $('#rnote').textContent = 'The resume PDF is not available on this page yet.';
  }
  if (/^https?:$/.test(location.protocol)) {
    fetch(PROFILE.resume, { method: 'HEAD' }).then(function (r) { if (!r.ok) throw 0; }).catch(resumeMissing);
  }
  $('#dl').addEventListener('click', function (e) { if (this.getAttribute('aria-disabled') === 'true') e.preventDefault(); });

  // Owner hint in the browser console (F12)
  var todo = [];
  if (!hasEmail) todo.push('email');
  if (!hasGithub) todo.push('github');
  if (!hasLinkedin) todo.push('linkedin');
  if (todo.length && window.console) console.info('Portfolio: add your ' + todo.join(', ') + ' in PROFILE at the top of script.js.');

  // ----- Navigation -----
  var menu = $('#menu'), nav = $('#links'), header = $('.site-header');
  function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open menu'); }
  menu.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', open); menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  $$('#links a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
  document.addEventListener('click', function (e) { if (nav.classList.contains('open') && !nav.contains(e.target) && !menu.contains(e.target)) closeMenu(); });
  addEventListener('resize', function () { if (innerWidth > 860) closeMenu(); });
  function onScroll() { header.classList.toggle('scrolled', scrollY > 8); }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Active link while scrolling
  var links = $$('#links a');
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      links.forEach(function (a) {
        var on = a.getAttribute('href') === '#' + en.target.id;
        a.classList.toggle('on', on);
        if (on) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section').forEach(function (s) { spy.observe(s); });

  // Reveal on scroll
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    $$('.reveal').forEach(function (x) { io.observe(x); });
  } else { $$('.reveal').forEach(function (x) { x.classList.add('in'); }); }

  // ----- Contact form: validates, then opens the visitor's email app -----
  var RULES = {
    n: function (v) { return v.trim().length < 2 ? 'Please enter your name (at least 2 characters).' : ''; },
    e: function (v) { return isEmail(v.trim()) ? '' : 'Please enter a valid email, like name@example.com.'; },
    m: function (v) { return v.trim().length < 10 ? 'Please write a message of at least 10 characters.' : ''; }
  };
  var EID = { n: 'en', e: 'ee', m: 'em' }, form = $('#form'), status = $('#st');
  function check(k) {
    var input = form.elements[k], msg = RULES[k](input.value);
    $('#' + EID[k]).textContent = msg;
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  }
  ['n', 'e', 'm'].forEach(function (k) {
    var i = form.elements[k];
    i.addEventListener('blur', function () { if (i.value || i.getAttribute('aria-invalid')) check(k); });
    i.addEventListener('input', function () { if (i.getAttribute('aria-invalid') === 'true') check(k); });
  });
  form.addEventListener('submit', function (ev) {
    ev.preventDefault(); status.className = 'status';
    var bad = ['n', 'e', 'm'].filter(function (k) { return !check(k); });
    if (bad.length) {
      status.className = 'status bad'; status.textContent = 'Please fix the highlighted fields and try again.';
      form.elements[bad[0]].focus(); return;
    }
    var name = form.elements.n.value.trim(), mail = form.elements.e.value.trim(), msg = form.elements.m.value.trim();
    status.textContent = 'Opening your email app. If nothing opens, write to ' + PROFILE.email + '.';
    location.href = 'mailto:' + PROFILE.email + '?subject=' + encodeURIComponent('Portfolio message from ' + name) +
      '&body=' + encodeURIComponent(msg + '\n\n' + name + ' (' + mail + ')');
    form.reset();
    ['n', 'e', 'm'].forEach(function (k) { form.elements[k].removeAttribute('aria-invalid'); });
  });
})();
