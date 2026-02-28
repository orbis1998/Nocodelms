// ═══════════════════════════════════════════════════════════
// NOCODE IA ACADEMY — Main Application
// Vanilla JS ES6+, no dependencies
// ═══════════════════════════════════════════════════════════

// ── Constants ──────────────────────────────────────────────
const ACCESS_KEY = 'NOCODE2025';
const XP_PER_LESSON = 50;
const STORAGE_KEY = 'nca_state';

// ── Curriculum Data ────────────────────────────────────────
const CURRICULUM = [
  {
    id: 'm0', num: '00', title: 'Bienvenue & Orientation', color: '#7c3aed', bg: 'rgba(124,58,237,.15)',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    desc: 'Tour d\'horizon, installation, objectifs',
    lessons: [
      { id: 'l0_0', title: 'Message de bienvenue' },
      { id: 'l0_1', title: 'Comment utiliser la formation' },
      { id: 'l0_2', title: 'Installer son environnement' },
    ]
  },
  {
    id: 'm1', num: '01', title: 'Fondations du Web & No-Code', color: '#06b6d4', bg: 'rgba(6,182,212,.15)',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
    desc: 'Comment fonctionne un site, vocabulaire, no-code',
    lessons: [
      { id: 'l1_0', title: 'Comment fonctionne un site web' },
      { id: 'l1_1', title: "C'est quoi le No-Code ?" },
      { id: 'l1_2', title: 'Panorama des outils' },
      { id: 'l1_3', title: 'Design pour non-designers' },
    ]
  },
  {
    id: 'm2', num: '02', title: "L'IA au Service de la Création", color: '#f59e0b', bg: 'rgba(245,158,11,.15)',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a6 6 0 016 6c0 3.5-2 6-6 8-4-2-6-4.5-6-8a6 6 0 016-6z"/><path d="M12 22v-4M9 19l3-1 3 1"/></svg>`,
    desc: 'Workflow IA, 50 prompts, visuels, kit de marque',
    lessons: [
      { id: 'l2_0', title: 'Outils IA essentiels' },
      { id: 'l2_1', title: '50 prompts ChatGPT prêts à l\'emploi' },
      { id: 'l2_2', title: 'Créer ses visuels avec l\'IA' },
      { id: 'l2_3', title: 'Logo & kit de marque IA' },
    ]
  },
  {
    id: 'm3', num: '03', title: 'Lovable, Bolt.new & Claude IA', color: '#8b5cf6', bg: 'rgba(139,92,246,.15)',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    desc: 'Les outils IA no-code les plus puissants',
    lessons: [
      { id: 'l3_0', title: 'Introduction à Lovable' },
      { id: 'l3_1', title: 'Premier projet avec Lovable' },
      { id: 'l3_2', title: 'Bolt.new : prototypes instantanés' },
      { id: 'l3_3', title: 'Claude IA pour la création web' },
    ]
  },
  {
    id: 'm4', num: '04', title: 'Wix — Démarrage Rapide', color: '#10b981', bg: 'rgba(16,185,129,.15)',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586M11 11l4 4"/></svg>`,
    desc: 'Interface, Wix ADI, personnalisation, publication',
    lessons: [
      { id: 'l4_0', title: 'Interface et prise en main Wix' },
      { id: 'l4_1', title: 'Wix ADI : le constructeur IA' },
      { id: 'l4_2', title: 'Personnalisation avancée' },
      { id: 'l4_3', title: 'Publication et domaine' },
    ]
  },
  {
    id: 'm5', num: '05', title: 'Webflow — No-Code Pro', color: '#06b6d4', bg: 'rgba(6,182,212,.15)',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>`,
    desc: 'Interface, logique, CMS, SEO avancé',
    lessons: [
      { id: 'l5_0', title: 'Pourquoi Webflow ?' },
      { id: 'l5_1', title: 'Interface & logique Webflow' },
      { id: 'l5_2', title: 'CMS Webflow : blog et portfolio' },
      { id: 'l5_3', title: 'SEO et lancement Webflow' },
    ]
  },
  {
    id: 'm6', num: '06', title: 'Framer — Design & IA', color: '#f59e0b', bg: 'rgba(245,158,11,.15)',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4h14v8H5zM5 12l7 8 7-8"/></svg>`,
    desc: 'Framer AI, design ultra-moderne, animations',
    lessons: [
      { id: 'l6_0', title: 'Introduction à Framer' },
      { id: 'l6_1', title: 'Framer AI en 30 secondes' },
      { id: 'l6_2', title: 'Personnalisation et animations' },
      { id: 'l6_3', title: 'Publication Framer' },
    ]
  },
  {
    id: 'm7', num: '07', title: 'Déploiement : Vercel, Replit & +', color: '#7c3aed', bg: 'rgba(124,58,237,.15)',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg>`,
    desc: 'Mettre son site en ligne gratuitement',
    lessons: [
      { id: 'l7_0', title: 'Introduction au déploiement' },
      { id: 'l7_1', title: 'Vercel : déploiement 1-clic' },
      { id: 'l7_2', title: 'Replit : IDE + hébergement' },
      { id: 'l7_3', title: 'Netlify & GitHub Pages' },
    ]
  },
  {
    id: 'm8', num: '08', title: 'Lancement & Optimisation', color: '#10b981', bg: 'rgba(16,185,129,.15)',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
    desc: 'SEO, analytics, checklist, emailing',
    lessons: [
      { id: 'l8_0', title: 'SEO pour débutants' },
      { id: 'l8_1', title: 'Google Analytics & Search Console' },
      { id: 'l8_2', title: 'Emailing et acquisition' },
      { id: 'l8_3', title: 'Checklist pré-lancement' },
    ]
  },
  {
    id: 'm9', num: '09', title: 'Projet Final & Certification', color: '#fbbf24', bg: 'rgba(251,191,36,.15)',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    desc: 'Brief, quiz, soumission de projet, diplôme',
    lessons: [
      { id: 'l9_0', title: 'Brief du projet final' },
      { id: 'l9_1', title: 'Quiz de certification' },
      { id: 'l9_2', title: '🎓 Soumettre & Obtenir son diplôme' },
    ]
  },
];

// ── All lesson content ─────────────────────────────────────
const LESSONS = {

  l0_0: {
    tag: 'Module 0 · Bienvenue', title: 'Message de Bienvenue',
    intro: 'Bienvenue dans la formation NoCode IA Academy. Dans les 6 prochaines semaines, tu vas créer des sites web professionnels sans écrire une seule ligne de code — grâce aux outils IA les plus puissants du moment.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="50" r="44" fill="rgba(124,58,237,.12)" stroke="rgba(124,58,237,.3)" stroke-width="1.5"/>
      <path d="M40 65 L60 30 L80 65" fill="rgba(124,58,237,.5)" stroke="#8b5cf6" stroke-width="1.5" stroke-linejoin="round"/>
      <rect x="50" y="52" width="20" height="13" rx="2" fill="#7c3aed"/>
      <circle cx="60" cy="28" r="5" fill="rgba(6,182,212,.6)" stroke="#22d3ee" stroke-width="1.5"/>
      <path d="M35 68 Q60 55 85 68" stroke="rgba(124,58,237,.4)" stroke-width="1" fill="none" stroke-dasharray="3 3"/>
    </svg>`,
    illusLabel: 'Formation NoCode IA — 10 modules, 4-6 semaines, certification incluse',
    body: `<h2 class="sec-h2">Les 3 formats de la formation</h2>
<div class="tools-grid" style="grid-template-columns:repeat(3,1fr)">
  <div class="tool-card">
    <div class="tool-ico" style="background:rgba(124,58,237,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div>
    <div class="tool-name">LMS en ligne</div>
    <div class="tool-desc">Cours accessibles 24h/24 depuis n'importe quel appareil</div>
  </div>
  <div class="tool-card">
    <div class="tool-ico" style="background:rgba(6,182,212,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div>
    <div class="tool-name">4 ateliers présentiels</div>
    <div class="tool-desc">Sessions pratiques en groupe pour créer et recevoir des feedbacks</div>
  </div>
  <div class="tool-card">
    <div class="tool-ico" style="background:rgba(251,191,36,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg></div>
    <div class="tool-name">Certification</div>
    <div class="tool-desc">Projet final + quiz pour obtenir ton certificat officiel</div>
  </div>
</div>
<div class="callout c-tip"><span class="callout-ico">💡</span><p><strong>Conseil :</strong> Pense dès maintenant au projet que tu veux créer. Ce fil rouge te motivera tout au long de la formation.</p></div>
<h2 class="sec-h2">Parcours type</h2>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-body"><div class="step-title">Semaines 1-2 — Fondations</div><div class="step-text">Modules 0 à 2 : comprendre le web, découvrir les outils IA, créer son premier contenu.</div></div></div>
  <div class="step"><div class="step-num">2</div><div class="step-body"><div class="step-title">Semaines 3-4 — Construction</div><div class="step-text">Modules 3 à 6 : créer avec Lovable, Bolt, Wix, Webflow et Framer.</div></div></div>
  <div class="step"><div class="step-num">3</div><div class="step-body"><div class="step-title">Semaines 5-6 — Lancement</div><div class="step-text">Modules 7 à 9 : déployer, optimiser, présenter et obtenir sa certification.</div></div></div>
</div>`
  },

  l0_1: {
    tag: 'Module 0 · Orientation', title: 'Comment Utiliser la Formation',
    intro: 'Ce guide rapide te montre comment naviguer dans la plateforme, suivre ta progression et tirer le maximum de chaque leçon.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="90" height="70" rx="6" fill="rgba(13,13,43,1)" stroke="rgba(124,58,237,.4)" stroke-width="1.5"/>
      <rect x="15" y="10" width="25" height="70" rx="6" fill="rgba(124,58,237,.1)" stroke="rgba(124,58,237,.3)" stroke-width="1"/>
      <rect x="18" y="18" width="18" height="4" rx="2" fill="rgba(124,58,237,.5)"/>
      <rect x="18" y="26" width="18" height="3" rx="1.5" fill="rgba(255,255,255,.15)"/>
      <rect x="18" y="32" width="18" height="3" rx="1.5" fill="rgba(255,255,255,.15)"/>
      <rect x="18" y="40" width="18" height="3" rx="1.5" fill="rgba(255,255,255,.1)"/>
      <rect x="18" y="46" width="18" height="3" rx="1.5" fill="rgba(255,255,255,.1)"/>
      <rect x="45" y="18" width="55" height="6" rx="3" fill="rgba(124,58,237,.3)"/>
      <rect x="45" y="30" width="50" height="3" rx="1.5" fill="rgba(255,255,255,.2)"/>
      <rect x="45" y="36" width="45" height="3" rx="1.5" fill="rgba(255,255,255,.15)"/>
      <rect x="45" y="42" width="48" height="3" rx="1.5" fill="rgba(255,255,255,.12)"/>
    </svg>`,
    illusLabel: 'Interface de la plateforme LMS — sidebar de navigation + zone de contenu',
    body: `<h2 class="sec-h2">Navigation dans la plateforme</h2>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-body"><div class="step-title">Sidebar gauche</div><div class="step-text">Tous les modules et leurs leçons. Clique pour ouvrir un module et sélectionne une leçon. Ta progression est sauvegardée automatiquement.</div></div></div>
  <div class="step"><div class="step-num">2</div><div class="step-body"><div class="step-title">Marquer une leçon terminée</div><div class="step-text">Clique sur le bouton vert "Marquer comme terminé" en bas de chaque leçon. Tu gagnes +50 XP à chaque fois !</div></div></div>
  <div class="step"><div class="step-num">3</div><div class="step-body"><div class="step-title">Suivre sa progression</div><div class="step-text">La barre de progression en haut de la sidebar affiche ton avancement global. Le compteur XP s'affiche en haut à droite.</div></div></div>
  <div class="step"><div class="step-num">4</div><div class="step-body"><div class="step-title">Certification finale</div><div class="step-text">Module 9, Leçon 3 : passe le quiz et soumets le lien de ton projet pour obtenir ton diplôme.</div></div></div>
</div>
<div class="callout c-info"><span class="callout-ico">ℹ️</span><p><strong>Sauvegarde automatique :</strong> Ta progression est sauvegardée dans ton navigateur. Elle sera présente à chaque reconnexion sur cet appareil.</p></div>`
  },

  l0_2: {
    tag: 'Module 0 · Installation', title: 'Installer son Environnement',
    intro: 'Avant de commencer, crée ces comptes gratuits. Cela te prendra environ 20 minutes — un investissement qui en vaut la peine.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="30" height="22" rx="4" fill="rgba(124,58,237,.2)" stroke="rgba(124,58,237,.5)" stroke-width="1.2"/>
      <rect x="60" y="20" width="30" height="22" rx="4" fill="rgba(6,182,212,.15)" stroke="rgba(6,182,212,.4)" stroke-width="1.2"/>
      <rect x="20" y="54" width="30" height="22" rx="4" fill="rgba(245,158,11,.15)" stroke="rgba(245,158,11,.4)" stroke-width="1.2"/>
      <rect x="60" y="54" width="30" height="22" rx="4" fill="rgba(16,185,129,.15)" stroke="rgba(16,185,129,.4)" stroke-width="1.2"/>
      <text x="35" y="34" text-anchor="middle" font-size="9" fill="rgba(167,139,250,1)" font-family="sans-serif" font-weight="700">AI</text>
      <text x="75" y="34" text-anchor="middle" font-size="9" fill="rgba(34,211,238,1)" font-family="sans-serif" font-weight="700">⚡</text>
      <text x="35" y="68" text-anchor="middle" font-size="9" fill="rgba(251,191,36,1)" font-family="sans-serif" font-weight="700">🎨</text>
      <text x="75" y="68" text-anchor="middle" font-size="9" fill="rgba(52,211,153,1)" font-family="sans-serif" font-weight="700">▲</text>
    </svg>`,
    illusLabel: 'Les 4 catégories d\'outils : IA · No-Code · Design · Déploiement',
    body: `<h2 class="sec-h2">Comptes à créer maintenant</h2>
<table class="tbl">
<thead><tr><th>Outil</th><th>URL</th><th>Rôle dans la formation</th><th>Prix</th></tr></thead>
<tbody>
<tr><td><strong>ChatGPT</strong></td><td>chatgpt.com</td><td>Générer tous tes textes et contenus</td><td><span class="badge b-fm">Freemium</span></td></tr>
<tr><td><strong>Claude IA</strong></td><td>claude.ai</td><td>Code, rédaction longue, analyse</td><td><span class="badge b-fm">Freemium</span></td></tr>
<tr><td><strong>Lovable</strong></td><td>lovable.dev</td><td>Créer des apps web complètes par IA</td><td><span class="badge b-fm">Freemium</span></td></tr>
<tr><td><strong>Bolt.new</strong></td><td>bolt.new</td><td>Prototypes instantanés dans le navigateur</td><td><span class="badge b-free">Gratuit</span></td></tr>
<tr><td><strong>Wix</strong></td><td>wix.com</td><td>No-code simple et rapide</td><td><span class="badge b-fm">Freemium</span></td></tr>
<tr><td><strong>Webflow</strong></td><td>webflow.com</td><td>No-code professionnel, CMS puissant</td><td><span class="badge b-fm">Freemium</span></td></tr>
<tr><td><strong>Framer</strong></td><td>framer.com</td><td>Design moderne + Framer AI intégrée</td><td><span class="badge b-fm">Freemium</span></td></tr>
<tr><td><strong>Vercel</strong></td><td>vercel.com</td><td>Déployer son site gratuitement en 1 clic</td><td><span class="badge b-free">Gratuit</span></td></tr>
<tr><td><strong>Replit</strong></td><td>replit.com</td><td>IDE en ligne + hébergement intégré</td><td><span class="badge b-fm">Freemium</span></td></tr>
<tr><td><strong>Canva</strong></td><td>canva.com</td><td>Visuels, logos et bannières par IA</td><td><span class="badge b-fm">Freemium</span></td></tr>
</tbody>
</table>
<div class="callout c-ok"><span class="callout-ico">✅</span><p><strong>Conseil :</strong> Utilise la même adresse email pour tous les comptes. Crée-les tous maintenant, même si tu ne les utilises que dans quelques semaines.</p></div>`
  },

  l1_0: {
    tag: 'Module 1 · Fondations', title: 'Comment Fonctionne un Site Web',
    intro: 'Avant de créer, il faut comprendre. En 10 minutes, tu sauras exactement ce qui se passe quand quelqu\'un tape une URL dans son navigateur.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="30" width="35" height="45" rx="4" fill="rgba(13,13,43,1)" stroke="rgba(6,182,212,.4)" stroke-width="1.5"/>
      <rect x="8" y="35" width="29" height="18" rx="2" fill="rgba(6,182,212,.15)"/>
      <rect x="8" y="56" width="12" height="14" rx="2" fill="rgba(124,58,237,.3)"/>
      <rect x="22" y="56" width="14" height="6" rx="2" fill="rgba(255,255,255,.15)"/>
      <text x="22.5" y="44" text-anchor="middle" font-size="10" fill="#22d3ee" font-family="sans-serif">🌐</text>
      <line x1="40" y1="52" x2="58" y2="52" stroke="rgba(124,58,237,.5)" stroke-width="1.5" stroke-dasharray="3 2"/>
      <polygon points="58,49 64,52 58,55" fill="rgba(124,58,237,.8)"/>
      <rect x="65" y="35" width="35" height="30" rx="4" fill="rgba(124,58,237,.15)" stroke="rgba(124,58,237,.4)" stroke-width="1.5"/>
      <rect x="68" y="39" width="10" height="4" rx="1" fill="rgba(124,58,237,.6)"/>
      <rect x="68" y="45" width="28" height="3" rx="1" fill="rgba(255,255,255,.15)"/>
      <rect x="68" y="50" width="22" height="3" rx="1" fill="rgba(255,255,255,.1)"/>
      <rect x="68" y="55" width="25" height="3" rx="1" fill="rgba(255,255,255,.1)"/>
      <text x="82.5" y="39" text-anchor="middle" font-size="8" fill="rgba(167,139,250,.8)" font-family="sans-serif" font-weight="700">SERVER</text>
      <line x1="100" y1="52" x2="115" y2="52" stroke="rgba(16,185,129,.5)" stroke-width="1.5" stroke-dasharray="3 2"/>
      <polygon points="115,49 121,52 115,55" fill="rgba(16,185,129,.8)"/>
      <rect x="105" y="40" width="30" height="24" rx="3" fill="rgba(16,185,129,.12)" stroke="rgba(16,185,129,.35)" stroke-width="1.2"/>
      <text x="120" y="55" text-anchor="middle" font-size="18" fill="rgba(52,211,153,.8)" font-family="sans-serif">🖥️</text>
    </svg>`,
    illusLabel: 'Client (navigateur) → Serveur (hébergement + fichiers) → Affichage',
    body: `<h2 class="sec-h2">L'analogie de la maison</h2>
<div class="tools-grid" style="grid-template-columns:repeat(3,1fr)">
  <div class="tool-card">
    <div class="tool-ico" style="background:rgba(124,58,237,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg></div>
    <div class="tool-name">Hébergement</div>
    <div class="tool-desc">= Le terrain. Espace sur un serveur où vivent tes fichiers.</div>
    <div style="margin-top:8px;font-size:12px;color:var(--c400)">Vercel · Netlify · OVH</div>
  </div>
  <div class="tool-card">
    <div class="tool-ico" style="background:rgba(6,182,212,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
    <div class="tool-name">Nom de domaine</div>
    <div class="tool-desc">= L'adresse. Ce que les visiteurs tapent dans leur navigateur.</div>
    <div style="margin-top:8px;font-size:12px;color:var(--c400)">~10€/an sur OVH ou Namecheap</div>
  </div>
  <div class="tool-card">
    <div class="tool-ico" style="background:rgba(245,158,11,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg></div>
    <div class="tool-name">Le site web</div>
    <div class="tool-desc">= La maison. Ce que les visiteurs voient : pages, textes, images.</div>
    <div style="margin-top:8px;font-size:12px;color:var(--c400)">Ce que tu vas créer !</div>
  </div>
</div>
<div class="callout c-ok"><span class="callout-ico">✅</span><p><strong>Bonne nouvelle :</strong> Avec Wix, Webflow, Framer et Lovable, l'hébergement est inclus gratuitement. Tu n'as rien à gérer !</p></div>
<h2 class="sec-h2">Vocabulaire essentiel</h2>
<table class="tbl">
<thead><tr><th>Terme</th><th>Définition simple</th><th>Exemple concret</th></tr></thead>
<tbody>
<tr><td><strong>URL</strong></td><td>Adresse complète d'une page web</td><td>https://monsite.com/contact</td></tr>
<tr><td><strong>HTTPS</strong></td><td>Version sécurisée (cadenas 🔒 dans le navigateur)</td><td>Obligatoire en 2025</td></tr>
<tr><td><strong>Frontend</strong></td><td>Ce que l'utilisateur voit et clique</td><td>Design, boutons, images</td></tr>
<tr><td><strong>Backend</strong></td><td>Logique côté serveur, base de données</td><td>Lovable gère ça pour toi</td></tr>
<tr><td><strong>Responsive</strong></td><td>S'adapte à tous les écrans automatiquement</td><td>Mobile, tablette, desktop</td></tr>
<tr><td><strong>SEO</strong></td><td>Être trouvé sur Google sans payer</td><td>Module 8 dédié</td></tr>
<tr><td><strong>CMS</strong></td><td>Système de gestion de contenu (blog...)</td><td>Webflow CMS = le meilleur</td></tr>
</tbody>
</table>`
  },

  l2_1: {
    tag: 'Module 2 · IA', title: '50 Prompts ChatGPT Prêts à l\'Emploi',
    intro: 'Ces prompts sont conçus pour créer tout le contenu de ton site en moins d\'une heure. Copie, adapte à ton activité et utilise.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="90" height="70" rx="8" fill="rgba(6,182,212,.08)" stroke="rgba(6,182,212,.3)" stroke-width="1.5"/>
      <rect x="22" y="25" width="70" height="8" rx="3" fill="rgba(6,182,212,.2)"/>
      <rect x="22" y="37" width="60" height="5" rx="2" fill="rgba(255,255,255,.12)"/>
      <rect x="22" y="45" width="65" height="5" rx="2" fill="rgba(255,255,255,.1)"/>
      <rect x="22" y="53" width="55" height="5" rx="2" fill="rgba(255,255,255,.08)"/>
      <rect x="22" y="63" width="50" height="8" rx="4" fill="rgba(6,182,212,.3)" stroke="rgba(6,182,212,.5)" stroke-width="1"/>
      <text x="47" y="69" font-size="8" fill="white" font-family="sans-serif" font-weight="700">Envoyer ✓</text>
    </svg>`,
    illusLabel: 'Interface ChatGPT — décris ton besoin, obtiens un texte professionnel en secondes',
    body: `<h2 class="sec-h2">Page d'accueil (Hero)</h2>
<div class="prompt-card"><span class="prompt-lbl">Slogan et accroche</span>Rédige un slogan accrocheur et un sous-titre (2 lignes max) pour une [activité] qui aide [public cible] à [bénéfice principal]. Donne 5 variantes du plus direct au plus émotionnel.</div>
<div class="prompt-card"><span class="prompt-lbl">Texte hero complet</span>Génère le texte complet d'une section hero pour [activité]. Format : 1 titre H1 (8 mots max), 1 sous-titre (20 mots), 1 bouton CTA. Ton [professionnel / décontracté / premium].</div>

<h2 class="sec-h2">Page Services</h2>
<div class="prompt-card"><span class="prompt-lbl">3 offres structurées</span>Décris 3 offres pour [activité]. Pour chaque offre : titre accrocheur (4 mots), 3 bénéfices client concrets (bullet points), prix suggéré, 1 bouton CTA.</div>
<div class="prompt-card"><span class="prompt-lbl">Processus en étapes</span>Décris mon processus de travail en 4 étapes pour [activité]. Pour chaque étape : numéro, titre court, description 2 phrases. Ton rassurant et clair.</div>

<h2 class="sec-h2">Page À propos</h2>
<div class="prompt-card"><span class="prompt-lbl">Présentation personnelle</span>Rédige une page À propos en 150 mots pour [nom]. Parcours : [2 phrases sur ton parcours]. Mission : [ta raison d'être]. Inclus une phrase qui donne envie de travailler avec moi.</div>
<div class="prompt-card"><span class="prompt-lbl">Histoire en storytelling</span>Raconte l'histoire de [nom/marque] en storytelling : le problème que j'ai vécu, comment j'ai trouvé la solution, pourquoi je veux aider d'autres à faire pareil.</div>

<h2 class="sec-h2">FAQ & Témoignages</h2>
<div class="prompt-card"><span class="prompt-lbl">FAQ rassurante</span>Liste 8 questions fréquentes d'un client potentiel de [activité]. Pour chaque : la vraie question (telle que le client la poserait) + une réponse courte, honnête et rassurante.</div>
<div class="prompt-card"><span class="prompt-lbl">Témoignages réalistes</span>Génère 3 témoignages clients réalistes pour [activité]. Chaque témoignage : prénom, ville, résultat concret obtenu, citation de 2 lignes. Varié en profil client.</div>

<h2 class="sec-h2">SEO & Textes techniques</h2>
<div class="prompt-card"><span class="prompt-lbl">Title + méta description</span>Rédige un titre SEO (60 caractères max) et une méta description (155 caractères max) pour la page [nom de la page] de mon site [activité], ciblant le mot-clé [mot-clé principal].</div>
<div class="prompt-card"><span class="prompt-lbl">Boutons CTA variés</span>Propose 10 formulations différentes de bouton CTA pour [activité]. Varie entre : action directe, bénéfice, urgence, curiosité, social proof. Format court (3-5 mots max).</div>

<div class="callout c-tip"><span class="callout-ico">💡</span><p><strong>Astuce :</strong> Remplace toujours les crochets [activité], [public cible], etc. par tes vraies informations. Plus tu es précis, meilleur est le résultat.</p></div>`
  },

  l3_0: {
    tag: 'Module 3 · Lovable', title: 'Introduction à Lovable',
    intro: 'Lovable est l\'outil qui va te permettre de créer des applications web complètes et fonctionnelles en décrivant simplement ce que tu veux. Fini les contraintes des constructeurs visuels classiques.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="15" width="100" height="70" rx="8" fill="rgba(13,13,43,1)" stroke="rgba(124,58,237,.4)" stroke-width="1.5"/>
      <rect x="10" y="15" width="100" height="20" rx="8" fill="rgba(124,58,237,.15)"/>
      <rect x="10" y="27" width="100" height="8" fill="rgba(124,58,237,.15)"/>
      <circle cx="20" cy="25" r="4" fill="rgba(244,63,94,.6)"/>
      <circle cx="32" cy="25" r="4" fill="rgba(245,158,11,.6)"/>
      <circle cx="44" cy="25" r="4" fill="rgba(16,185,129,.6)"/>
      <rect x="18" y="40" width="84" height="6" rx="3" fill="rgba(255,255,255,.15)"/>
      <rect x="18" y="50" width="76" height="4" rx="2" fill="rgba(255,255,255,.1)"/>
      <rect x="18" y="57" width="80" height="4" rx="2" fill="rgba(255,255,255,.08)"/>
      <rect x="18" y="66" width="60" height="10" rx="4" fill="rgba(124,58,237,.5)" stroke="rgba(124,58,237,.8)" stroke-width="1"/>
      <text x="48" y="73" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700">Générer avec IA ✨</text>
    </svg>`,
    illusLabel: 'Interface Lovable — décris ton projet, Lovable génère l\'app complète',
    body: `<h2 class="sec-h2">Ce que Lovable peut créer</h2>
<div class="tools-grid">
  <div class="tool-card"><div class="tool-ico" style="background:rgba(124,58,237,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div><div class="tool-name">Sites vitrine</div><div class="tool-desc">Landing pages, sites d'entreprise, portfolios professionnels</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(6,182,212,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div><div class="tool-name">Applications web</div><div class="tool-desc">Avec base de données, authentification, tableaux de bord</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(245,158,11,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div class="tool-name">Formulaires avancés</div><div class="tool-desc">Avec validation, envoi d'emails, stockage en base</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(16,185,129,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg></div><div class="tool-name">Dashboards</div><div class="tool-desc">Tableaux de bord avec graphiques, statistiques en temps réel</div></div>
</div>
<h2 class="sec-h2">Comment ça fonctionne en 4 étapes</h2>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-body"><div class="step-title">Décris ton projet en français</div><div class="step-text">Sois précis : type de site, style visuel, palette de couleurs, sections souhaitées, ton public. Plus tu es précis, meilleur est le résultat.</div></div></div>
  <div class="step"><div class="step-num">2</div><div class="step-body"><div class="step-title">L'IA génère le code React</div><div class="step-text">Lovable produit du code propre et maintenable en quelques secondes. Tu vois le résultat en temps réel dans l'aperçu à droite.</div></div></div>
  <div class="step"><div class="step-num">3</div><div class="step-body"><div class="step-title">Affine par conversation</div><div class="step-text">"Change la couleur en orange", "Ajoute un menu mobile", "Intègre un formulaire de contact". Lovable comprend le langage naturel.</div></div></div>
  <div class="step"><div class="step-num">4</div><div class="step-body"><div class="step-title">Publie en 1 clic</div><div class="step-text">Hébergement inclus. URL partageable instantanément (ex: monprojet.lovable.app). Connexion de domaine personnalisé possible.</div></div></div>
</div>
<div class="callout c-tip"><span class="callout-ico">💡</span><p><strong>Prompt de démarrage :</strong> "Crée une landing page moderne pour un [coach/artisan/consultant]. Style [minimaliste/coloré/sombre]. Palette : [couleurs]. Sections : hero avec CTA, 3 services, témoignages, formulaire contact. Police élégante."</p></div>
<h2 class="sec-h2">Comparaison Lovable vs Bolt vs Claude</h2>
<table class="tbl">
<thead><tr><th>Critère</th><th>Lovable</th><th>Bolt.new</th><th>Claude IA</th></tr></thead>
<tbody>
<tr><td><strong>Vitesse</strong></td><td>Rapide</td><td>Très rapide</td><td>Rapide</td></tr>
<tr><td><strong>Complexité projet</strong></td><td>Très élevée — apps full</td><td>Moyenne — pages</td><td>Très élevée — custom</td></tr>
<tr><td><strong>Base de données</strong></td><td>✅ Oui (Supabase)</td><td>Limitée</td><td>Avec instructions</td></tr>
<tr><td><strong>Hébergement inclus</strong></td><td>✅ Oui</td><td>✅ Oui</td><td>❌ Non (Vercel)</td></tr>
<tr><td><strong>Prix</strong></td><td>Freemium</td><td>Gratuit</td><td>Freemium</td></tr>
<tr><td><strong>Idéal pour</strong></td><td>Apps complètes</td><td>Prototypes rapides</td><td>Code sur-mesure</td></tr>
</tbody>
</table>`
  },

  l7_1: {
    tag: 'Module 7 · Déploiement', title: 'Vercel : Déploiement 1-Clic',
    intro: 'Vercel est la plateforme de déploiement préférée des développeurs modernes. Gratuite, ultra-rapide, et parfaitement intégrée avec Lovable et Bolt.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="60,12 95,75 25,75" fill="none" stroke="rgba(255,255,255,.8)" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="60,12 95,75 25,75" fill="rgba(255,255,255,.06)"/>
      <polygon points="60,28 80,62 40,62" fill="rgba(124,58,237,.3)" stroke="rgba(124,58,237,.6)" stroke-width="1"/>
      <circle cx="60" cy="20" r="3" fill="white" opacity=".6"/>
      <line x1="60" y1="80" x2="60" y2="92" stroke="rgba(124,58,237,.5)" stroke-width="1.5" stroke-dasharray="3 2"/>
      <rect x="48" y="84" width="24" height="10" rx="3" fill="rgba(124,58,237,.2)" stroke="rgba(124,58,237,.4)" stroke-width="1"/>
      <text x="60" y="91" text-anchor="middle" font-size="6" fill="rgba(167,139,250,1)" font-family="sans-serif" font-weight="700">vercel.app</text>
    </svg>`,
    illusLabel: 'Logo Vercel — déploiement en 20-30 secondes, CDN mondial, HTTPS automatique',
    body: `<h2 class="sec-h2">Pourquoi Vercel ?</h2>
<div class="tools-grid" style="grid-template-columns:repeat(4,1fr)">
  <div class="tool-card"><div class="tool-ico" style="background:rgba(16,185,129,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></div><div class="tool-name">20-30 sec</div><div class="tool-desc">Ton site est en ligne en moins d'une minute</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(6,182,212,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg></div><div class="tool-name">CDN mondial</div><div class="tool-desc">Chargement rapide depuis n'importe où dans le monde</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(124,58,237,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg></div><div class="tool-name">HTTPS gratuit</div><div class="tool-desc">Certificat SSL automatique sur tous les déploiements</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(245,158,11,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/></svg></div><div class="tool-name">Auto-déploiement</div><div class="tool-desc">Chaque modification → nouveau déploiement automatique</div></div>
</div>
<h2 class="sec-h2">Déployer depuis Lovable/Bolt en 4 étapes</h2>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-body"><div class="step-title">Créer un compte Vercel + GitHub</div><div class="step-text">Inscris-toi sur vercel.com avec ton compte GitHub (gratuit). Ces deux outils fonctionnent ensemble automatiquement.</div></div></div>
  <div class="step"><div class="step-num">2</div><div class="step-body"><div class="step-title">Exporter depuis Lovable ou Bolt</div><div class="step-text">Dans ton outil, clique "Export" ou "Deploy to GitHub". Le code est envoyé automatiquement sur un repository GitHub.</div></div></div>
  <div class="step"><div class="step-num">3</div><div class="step-body"><div class="step-title">Importer sur Vercel</div><div class="step-text">Sur Vercel, "Add New Project" → sélectionne ton repository GitHub → Vercel détecte automatiquement le type de projet.</div></div></div>
  <div class="step"><div class="step-num">4</div><div class="step-body"><div class="step-title">Deploy ! 🚀</div><div class="step-text">Clique "Deploy". En 20-30 secondes : ton site est en ligne à tonprojet.vercel.app. Chaque mise à jour = nouveau déploiement automatique.</div></div></div>
</div>
<div class="callout c-info"><span class="callout-ico">🔑</span><p><strong>Combinaison gagnante :</strong> Claude IA génère le code → Replit le teste → Vercel le déploie en production. Ces 3 outils couvrent 95% des besoins.</p></div>`
  },

  l8_3: {
    tag: 'Module 8 · Lancement', title: 'Checklist Pré-Lancement',
    intro: 'Avant de partager ton site au monde, vérifie ces 25 points. Cela te prendra 1-2 heures et évitera les mauvaises surprises.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="10" width="60" height="78" rx="6" fill="rgba(13,13,43,1)" stroke="rgba(16,185,129,.4)" stroke-width="1.5"/>
      <rect x="42" y="6" width="36" height="10" rx="4" fill="rgba(16,185,129,.3)" stroke="rgba(16,185,129,.5)" stroke-width="1"/>
      <rect x="38" y="24" width="12" height="8" rx="2" fill="rgba(16,185,129,.2)" stroke="rgba(16,185,129,.4)" stroke-width="1"/>
      <polyline points="40,28.5 43,32 49,25" stroke="#34d399" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="54" y="26" width="30" height="4" rx="2" fill="rgba(255,255,255,.2)"/>
      <rect x="38" y="38" width="12" height="8" rx="2" fill="rgba(16,185,129,.2)" stroke="rgba(16,185,129,.4)" stroke-width="1"/>
      <polyline points="40,42.5 43,46 49,39" stroke="#34d399" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="54" y="40" width="26" height="4" rx="2" fill="rgba(255,255,255,.2)"/>
      <rect x="38" y="52" width="12" height="8" rx="2" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.15)" stroke-width="1"/>
      <rect x="54" y="54" width="28" height="4" rx="2" fill="rgba(255,255,255,.1)"/>
      <rect x="38" y="66" width="12" height="8" rx="2" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.15)" stroke-width="1"/>
      <rect x="54" y="68" width="22" height="4" rx="2" fill="rgba(255,255,255,.1)"/>
    </svg>`,
    illusLabel: '25 points de vérification avant de mettre ton site en ligne',
    body: `<h2 class="sec-h2">✅ Contenu</h2>
<ul class="blist"><li><strong>Tous les textes relus</strong> — Fautes d'orthographe, grammaire, cohérence du ton</li><li><strong>Aucun Lorem ipsum</strong> — Vérifie chaque section, chaque placeholder</li><li><strong>Images avec balises Alt</strong> — Descriptives, utiles pour le SEO et l'accessibilité</li><li><strong>Tous les liens fonctionnels</strong> — Clique chaque lien, vérifie qu'il n'y a pas de 404</li><li><strong>Formulaire de contact testé</strong> — Envoie un vrai message test, vérifie que tu le reçois</li></ul>

<h2 class="sec-h2">✅ Design & UX</h2>
<ul class="blist"><li><strong>Testé sur mobile</strong> — iPhone ET Android, différentes tailles d'écran</li><li><strong>Menu mobile fonctionnel</strong> — Ouverture, fermeture, tous les liens</li><li><strong>Boutons bien cliquables</strong> — Taille minimum 44px sur mobile</li><li><strong>Hiérarchie visuelle claire</strong> — Titre → sous-titre → texte → CTA</li><li><strong>Palette cohérente</strong> — 3 couleurs max, appliquées uniformément</li></ul>

<h2 class="sec-h2">✅ Technique</h2>
<ul class="blist"><li><strong>Chargement &lt; 3 secondes</strong> — Test sur PageSpeed Insights (gratuit)</li><li><strong>HTTPS actif</strong> — Cadenas 🔒 visible dans la barre d'adresse</li><li><strong>Favicon configuré</strong> — L'icône qui apparaît dans l'onglet du navigateur</li><li><strong>Google Analytics installé</strong> — Pour suivre les visiteurs dès le lancement</li><li><strong>Google Search Console</strong> — Pour suivre ton référencement</li></ul>

<h2 class="sec-h2">✅ Légal (France)</h2>
<ul class="blist"><li><strong>Page Mentions légales</strong> — Obligatoire en France pour tout site</li><li><strong>Politique de confidentialité</strong> — Surtout si tu collectes des emails</li><li><strong>Bandeau cookies</strong> — Si tu utilises Analytics, publicité ou tracking</li><li><strong>CGV</strong> — Obligatoires si tu vends en ligne</li></ul>

<h2 class="sec-h2">✅ Lancement</h2>
<ul class="blist"><li><strong>Nom de domaine connecté</strong> — Ex: monom.fr au lieu de monom.vercel.app</li><li><strong>Email professionnel</strong> — contact@monsite.fr via Google Workspace ou Brevo</li><li><strong>Réseaux sociaux liés</strong> — Liens dans le footer, Open Graph configuré</li><li><strong>Testé par 3 personnes</strong> — Extérieures, de ton public cible si possible</li><li><strong>Plan de contenu prêt</strong> — Au moins 3 posts LinkedIn pour le lancement</li></ul>

<div class="callout c-tip"><span class="callout-ico">🚀</span><p><strong>Méthode :</strong> Fais la checklist en partageant le lien de ton site avec quelqu'un qui ne l'a jamais vu. Ses retours spontanés valent plus que tous les tests techniques.</p></div>`
  },

};

// Default content generator for lessons not in LESSONS
function getDefaultContent(lessonId, lessonTitle, modTitle) {
  return {
    tag: modTitle, title: lessonTitle,
    intro: `Cette leçon fait partie du module "${modTitle}". Le contenu détaillé sera disponible dans la prochaine mise à jour de la plateforme.`,
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="50" r="38" fill="rgba(124,58,237,.08)" stroke="rgba(124,58,237,.25)" stroke-width="1.5"/>
      <circle cx="60" cy="50" r="26" fill="rgba(124,58,237,.06)" stroke="rgba(124,58,237,.2)" stroke-width="1"/>
      <text x="60" y="56" text-anchor="middle" font-size="24" font-family="sans-serif">📖</text>
    </svg>`,
    illusLabel: `Contenu de la leçon : ${lessonTitle}`,
    body: `<div class="callout c-info"><span class="callout-ico">ℹ️</span><p>Le contenu complet de cette leçon est en cours de rédaction. Reviens bientôt ou passe à la leçon suivante !</p></div>
<h2 class="sec-h2">Objectifs de cette leçon</h2>
<ul class="blist">
<li><strong>Comprendre</strong> les concepts clés du module "${modTitle}"</li>
<li><strong>Pratiquer</strong> avec des exercices concrets et adaptés à ton niveau</li>
<li><strong>Appliquer</strong> ces connaissances directement à ton projet personnel</li>
</ul>`
  };
}

// ── State management ────────────────────────────────────────
let state = {
  completed: [],
  currentLesson: 'l0_0',
  xp: 0,
  studentName: '',
  projectUrl: '',
};

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (s) state = { ...state, ...s };
  } catch(e) {}
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function computeProgress() {
  const total = CURRICULUM.reduce((acc, m) => acc + m.lessons.length, 0);
  return { done: state.completed.length, total, pct: Math.round((state.completed.length / total) * 100) };
}

// ── Auth ────────────────────────────────────────────────────
function initLogin() {
  const loginPage = document.getElementById('login-page');
  const app = document.getElementById('app');
  const input = document.getElementById('key-input');
  const btn = document.getElementById('btn-login');
  const err = document.getElementById('login-err');

  function attempt() {
    const val = input.value.trim().toUpperCase();
    if (val === ACCESS_KEY || val === 'DEMO') {
      loginPage.style.display = 'none';
      app.style.display = 'flex';
      initApp();
    } else {
      input.classList.add('err');
      err.style.display = 'block';
      err.textContent = 'Clé d\'accès incorrecte. Contacte ton formateur.';
      setTimeout(() => input.classList.remove('err'), 500);
    }
  }

  btn.addEventListener('click', attempt);
  input.addEventListener('keydown', e => e.key === 'Enter' && attempt());
}

// ── Build Sidebar ───────────────────────────────────────────
function buildSidebar() {
  const nav = document.getElementById('sb-nav');
  nav.innerHTML = '';

  CURRICULUM.forEach(mod => {
    const isActive = mod.lessons.some(l => l.id === state.currentLesson);
    const doneCount = mod.lessons.filter(l => state.completed.includes(l.id)).length;
    const allDone = doneCount === mod.lessons.length;

    const group = document.createElement('div');
    group.className = 'mod-group' + (isActive ? ' open' : '');

    const numClass = allDone ? 'done' : isActive ? 'active' : 'idle';
    group.innerHTML = `
      <div class="mod-hdr">
        <div class="mod-num ${numClass}">${allDone ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>` : mod.num}</div>
        <span class="mod-name">${mod.title}</span>
        <span class="mod-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></span>
      </div>
      <div class="mod-lessons">
        ${mod.lessons.map(l => {
          const done = state.completed.includes(l.id);
          const active = l.id === state.currentLesson;
          return `<div class="les-item ${done ? 'done' : ''} ${active ? 'active' : ''}" data-lesson="${l.id}">
            <span class="les-dot"></span>
            ${done ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="10" height="10"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
            ${l.title}
          </div>`;
        }).join('')}
      </div>
    `;

    group.querySelector('.mod-hdr').addEventListener('click', () => {
      group.classList.toggle('open');
    });

    group.querySelectorAll('.les-item').forEach(el => {
      el.addEventListener('click', () => {
        const lid = el.dataset.lesson;
        // Special: certification lesson
        if (lid === 'l9_2') {
          renderCertPage();
        } else {
          renderLesson(lid);
        }
        // Close mobile sidebar
        document.querySelector('.sidebar').classList.remove('open');
        document.querySelector('.sidebar-overlay').classList.remove('show');
      });
    });

    nav.appendChild(group);
  });
}

function updateProgress() {
  const { done, total, pct } = computeProgress();
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-pct').textContent = pct + '%';
  document.getElementById('xp-count').textContent = state.xp + ' XP';
}

// ── Dashboard ───────────────────────────────────────────────
function renderDashboard() {
  document.getElementById('topbar-module').textContent = 'Tableau de bord';
  document.getElementById('topbar-lesson').textContent = '';
  document.getElementById('topbar-sep').style.display = 'none';

  const { done, total, pct } = computeProgress();
  const content = document.getElementById('content');

  const firstUnfinished = CURRICULUM.flatMap(m => m.lessons).find(l => !state.completed.includes(l.id));

  content.innerHTML = `
  <div class="dash-hero fade-in">
    <div class="dash-hero-glow"></div>
    <h1 class="dash-title">Bienvenue${state.studentName ? ', <span class="grad">' + state.studentName + '</span>' : ''} 👋</h1>
    <p class="dash-sub">Continue ta progression. ${done === 0 ? 'Commence par la première leçon !' : `Tu as complété <strong>${done}/${total} leçons</strong> — continue comme ça !`}</p>
    ${firstUnfinished ? `<button class="dash-cta" onclick="renderLesson('${firstUnfinished.id}')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      ${done === 0 ? 'Commencer la formation' : 'Continuer la formation'}
    </button>` : '<button class="dash-cta" onclick="renderCertPage()">🎓 Obtenir mon diplôme</button>'}
  </div>

  <div class="stats-row fade-in">
    <div class="stat-card">
      <div class="stat-ico" style="background:rgba(124,58,237,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
      <div class="stat-val grad">${done}</div>
      <div class="stat-lbl">Leçons terminées</div>
    </div>
    <div class="stat-card">
      <div class="stat-ico" style="background:rgba(6,182,212,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
      <div class="stat-val grad-c">${total - done}</div>
      <div class="stat-lbl">Leçons restantes</div>
    </div>
    <div class="stat-card">
      <div class="stat-ico" style="background:rgba(245,158,11,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
      <div class="stat-val" style="color:var(--a400)">${state.xp}</div>
      <div class="stat-lbl">Points XP gagnés</div>
    </div>
    <div class="stat-card">
      <div class="stat-ico" style="background:rgba(16,185,129,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg></div>
      <div class="stat-val" style="color:var(--g400)">${pct}%</div>
      <div class="stat-lbl">Progression globale</div>
    </div>
  </div>

  <div class="mods-grid fade-in">
    ${CURRICULUM.map(mod => {
      const modDone = mod.lessons.filter(l => state.completed.includes(l.id)).length;
      const modPct = Math.round((modDone / mod.lessons.length) * 100);
      const barColor = modPct === 100 ? 'var(--g400)' : 'linear-gradient(90deg,var(--v400),var(--c400))';
      return `<div class="mod-card" onclick="renderLesson('${mod.lessons[0].id}')" style="cursor:pointer">
        <div style="position:absolute;left:0;top:0;bottom:0;width:3px;background:${mod.color};border-radius:99px"></div>
        <div class="mod-card-ico" style="background:${mod.bg}">${mod.icon}</div>
        <div class="mod-card-body">
          <div class="mod-card-title">${mod.title}</div>
          <div class="mod-card-desc">${mod.desc}</div>
        </div>
        <div class="mod-card-right">
          <div class="mod-card-pct" style="color:${mod.color}">${modPct}%</div>
          <div class="mod-card-cnt">${modDone}/${mod.lessons.length} leçons</div>
          <div class="mod-bar"><div class="mod-bar-fill" style="width:${modPct}%;background:${mod.color}"></div></div>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

// ── Lesson renderer ─────────────────────────────────────────
function renderLesson(lessonId) {
  state.currentLesson = lessonId;
  saveState();
  buildSidebar();

  // Find lesson info
  let lessonTitle = '', modTitle = '', modColor = '', modIndex = -1, lesIndex = -1;
  CURRICULUM.forEach((m, mi) => {
    m.lessons.forEach((l, li) => {
      if (l.id === lessonId) {
        lessonTitle = l.title; modTitle = m.title;
        modColor = m.color; modIndex = mi; lesIndex = li;
      }
    });
  });

  // Topbar
  document.getElementById('topbar-module').textContent = modTitle;
  document.getElementById('topbar-lesson').textContent = lessonTitle;
  document.getElementById('topbar-sep').style.display = 'inline';

  const data = LESSONS[lessonId] || getDefaultContent(lessonId, lessonTitle, modTitle);
  const isDone = state.completed.includes(lessonId);

  // Prev/Next
  const allLessons = CURRICULUM.flatMap(m => m.lessons);
  const idx = allLessons.findIndex(l => l.id === lessonId);
  const prev = allLessons[idx - 1];
  const next = allLessons[idx + 1];

  const content = document.getElementById('content');
  content.innerHTML = `
  <div class="les-hdr fade-in">
    <div class="les-tag" style="background:rgba(${hexToRgb(modColor)},.1);border-color:rgba(${hexToRgb(modColor)},.3);color:${modColor}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      ${data.tag}
    </div>
    <h1 class="les-h1">${data.title}</h1>
    <p class="les-intro">${data.intro}</p>
  </div>

  <div class="illus-box fade-in">
    <div class="illus-inner">
      ${data.illusSvg}
      <p class="illus-lbl">${data.illusLabel}</p>
    </div>
  </div>

  <div class="les-body fade-in">${data.body}</div>

  <div class="les-nav fade-in">
    ${prev ? `<button class="nav-btn" onclick="renderLesson('${prev.id}')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      Précédent
    </button>` : '<span></span>'}

    <button id="done-btn" class="done-btn ${isDone ? 'checked' : ''}" onclick="markDone('${lessonId}')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      ${isDone ? 'Leçon terminée ✓' : 'Marquer comme terminé'}
    </button>

    ${next ? `<button class="nav-btn next" onclick="${next.id === 'l9_2' ? 'renderCertPage()' : `renderLesson('${next.id}')`}">
      ${next.id === 'l9_2' ? '🎓 Passer l\'examen' : 'Suivant'}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
    </button>` : '<span></span>'}
  </div>`;

  content.scrollTop = 0;
  window.scrollTo(0, 0);
}

function markDone(lessonId) {
  if (state.completed.includes(lessonId)) return;
  state.completed.push(lessonId);
  state.xp += XP_PER_LESSON;
  saveState();
  buildSidebar();
  updateProgress();

  const btn = document.getElementById('done-btn');
  if (btn) { btn.className = 'done-btn checked'; btn.textContent = 'Leçon terminée ✓'; }

  showXpToast();
}

function showXpToast() {
  const t = document.getElementById('xp-toast');
  t.textContent = `+${XP_PER_LESSON} XP ! 🔥`;
  t.style.display = 'block';
  setTimeout(() => { t.style.animation = 'none'; t.style.display = 'none'; t.style.animation = ''; }, 2500);
}

// ── Certification page ──────────────────────────────────────
function renderCertPage() {
  state.currentLesson = 'l9_2';
  saveState();
  buildSidebar();

  document.getElementById('topbar-module').textContent = 'Module 9 · Certification';
  document.getElementById('topbar-lesson').textContent = '🎓 Diplôme';
  document.getElementById('topbar-sep').style.display = 'inline';

  const content = document.getElementById('content');
  content.innerHTML = `
  <div class="cert-hero fade-in">
    <div class="cert-hero-glow"></div>
    <div class="cert-medal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg></div>
    <h1 class="cert-title">Quiz de Certification</h1>
    <p class="cert-sub">Réponds à ces 8 questions pour valider tes connaissances, puis soumets le lien de ton projet pour obtenir ton diplôme officiel NoCode IA Academy.</p>
  </div>

  <!-- QUIZ -->
  <div id="quiz-zone" class="fade-in">
    ${buildQuiz()}
    <div style="text-align:center;margin-top:24px">
      <button class="btn-check" onclick="checkQuiz()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
        Valider mes réponses
      </button>
    </div>
    <div class="quiz-score-bar" id="quiz-score"></div>
  </div>

  <!-- PROJECT SUBMISSION -->
  <div class="submit-card fade-in" style="margin-top:32px">
    <div class="submit-card-glow"></div>
    <svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="1.5" width="52" height="52" style="margin:0 auto 20px"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
    <h2 class="submit-title">Soumets le lien de ton projet</h2>
    <p class="submit-desc">Tu as créé ton site web ? Colle ici le lien de ton projet final. Le bouton te permettra de l'ouvrir directement pour vérification.</p>
    <div class="url-row">
      <input type="url" id="project-url" class="url-field" placeholder="https://mon-super-site.vercel.app" value="${state.projectUrl || ''}" oninput="saveProjectUrl(this.value)"/>
      <button class="btn-visit" onclick="visitProject()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        Ouvrir mon site
      </button>
    </div>
    <div class="url-fb" id="url-feedback"></div>
  </div>

  <!-- NAME INPUT -->
  <div class="submit-card fade-in" style="margin-top:0">
    <div class="submit-card-glow"></div>
    <h2 class="submit-title">Ton prénom pour le diplôme</h2>
    <p class="submit-desc">Il apparaîtra sur ton certificat officiel.</p>
    <div style="max-width:360px;margin:0 auto 16px">
      <input type="text" id="student-name" class="url-field" placeholder="Prénom Nom" value="${state.studentName || ''}" oninput="saveName(this.value)" style="text-align:center;font-size:18px;font-family:'Syne',sans-serif;font-weight:700"/>
    </div>
    <button class="done-btn" onclick="generateDiploma()" style="margin:0 auto;display:inline-flex">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
      Générer mon diplôme 🎓
    </button>
  </div>

  <!-- DIPLOMA -->
  <div class="diploma" id="diploma">
    <div class="diploma-ring"></div>
    <div class="diploma-glow"></div>
    <span class="diploma-star">🏆</span>
    <p class="diploma-eyebrow">Certificat de Réussite</p>
    <div class="diploma-name" id="diploma-name">Prénom Nom</div>
    <p class="diploma-course">a complété avec succès la formation<br><strong style="color:rgba(255,255,255,.8)">NoCode IA Academy — Créer son site web avec l'IA</strong></p>
    <div class="diploma-site" id="diploma-site-wrap"></div>
    <p class="diploma-date" id="diploma-date">Délivré le —</p>
    <button class="diploma-print" onclick="window.print()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
      Imprimer / Sauvegarder en PDF
    </button>
  </div>`;

  content.scrollTop = 0;
  window.scrollTo(0, 0);
}

// ── Quiz ────────────────────────────────────────────────────
const QUIZ_QUESTIONS = [
  { q: "Quel outil permet de créer une application web complète en décrivant son projet en langage naturel ?", opts: ["Canva", "Lovable", "Netlify", "Google Analytics"], correct: 1, explain: "Lovable (lovable.dev) génère du code React complet à partir d'une description en langage naturel." },
  { q: "Quelle est la combinaison hébergement + domaine + site web dans l'analogie de la maison ?", opts: ["Terrain + adresse + maison", "Fondation + murs + toit", "CPU + RAM + disque dur", "HTML + CSS + JavaScript"], correct: 0, explain: "L'hébergement = terrain, le domaine = adresse, le site = la maison elle-même." },
  { q: "Quel outil est idéal pour déployer gratuitement un projet Lovable ou Bolt.new ?", opts: ["WordPress", "Vercel", "Photoshop", "Microsoft Word"], correct: 1, explain: "Vercel offre un déploiement gratuit ultra-rapide (20-30 sec) avec HTTPS automatique et CDN mondial." },
  { q: "Quel outil no-code est reconnu comme le plus puissant pour les professionnels avec un CMS avancé ?", opts: ["Wix", "Squarespace", "Webflow", "Jimdo"], correct: 2, explain: "Webflow génère du vrai HTML/CSS et propose un CMS très puissant, préféré des agences." },
  { q: "Que signifie 'SEO' ?", opts: ["Site En Open-source", "Search Engine Optimization", "Système d'Édition en ligne", "Social Engagement Output"], correct: 1, explain: "SEO = Search Engine Optimization. C'est l'ensemble des techniques pour être mieux référencé sur Google." },
  { q: "Quel élément est CRITIQUE dans la checklist de lancement d'un site web ?", opts: ["Avoir une page Instagram", "Configurer un titre de page (Title) SEO", "Choisir une police originale", "Ajouter des vidéos YouTube"], correct: 1, explain: "Le Title SEO (60 caractères max) est crucial pour le référencement Google et le taux de clic." },
  { q: "Framer AI permet de générer une page web complète en combien de temps approximatif ?", opts: ["24 heures", "1 semaine", "30 secondes", "3 jours"], correct: 2, explain: "Framer AI génère une page web designée complète en environ 30 secondes à partir d'une description." },
  { q: "Quel outil combine IDE en ligne + hébergement dans un seul navigateur ?", opts: ["Canva", "Replit", "Mailchimp", "Hotjar"], correct: 1, explain: "Replit est un IDE en ligne qui permet de coder, tester ET héberger son site depuis le navigateur." },
];

function buildQuiz() {
  return QUIZ_QUESTIONS.map((q, i) => `
  <div class="quiz-block" id="qb-${i}">
    <div class="quiz-q"><div class="quiz-qn">${i + 1}</div><span>${q.q}</span></div>
    <div class="quiz-opts">
      ${q.opts.map((opt, oi) => `
      <label class="quiz-opt" id="qopt-${i}-${oi}">
        <input type="radio" name="q${i}" value="${oi}">
        ${opt}
      </label>`).join('')}
    </div>
    <div class="quiz-explain" id="qexplain-${i}">${q.explain}</div>
  </div>`).join('');
}

function checkQuiz() {
  let score = 0;
  QUIZ_QUESTIONS.forEach((q, i) => {
    const sel = document.querySelector(`input[name="q${i}"]:checked`);
    const val = sel ? parseInt(sel.value) : -1;
    document.getElementById(`qexplain-${i}`).classList.add('show');
    q.opts.forEach((_, oi) => {
      const el = document.getElementById(`qopt-${i}-${oi}`);
      el.classList.remove('correct', 'wrong');
      if (oi === q.correct) el.classList.add('correct');
      else if (oi === val && val !== q.correct) el.classList.add('wrong');
    });
    if (val === q.correct) score++;
  });

  const bar = document.getElementById('quiz-score');
  bar.classList.add('show');
  const pct = Math.round((score / QUIZ_QUESTIONS.length) * 100);
  const color = pct >= 70 ? 'var(--g400)' : pct >= 50 ? 'var(--a400)' : 'var(--r400)';
  bar.innerHTML = `<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
    <span style="font-family:'Syne',sans-serif;font-size:18px;font-weight:800;color:${color}">${score}/${QUIZ_QUESTIONS.length} réponses correctes</span>
    <span style="font-size:22px">${pct >= 70 ? '🎉' : pct >= 50 ? '📚' : '💪'}</span>
  </div>
  <div style="background:var(--bg4);border-radius:99px;height:6px;overflow:hidden">
    <div style="width:${pct}%;height:100%;background:${color};border-radius:99px;transition:width .6s var(--ease)"></div>
  </div>
  <p style="margin-top:10px;font-size:13px;color:var(--t2)">${pct >= 70 ? '✅ Excellent ! Tu peux maintenant générer ton diplôme.' : pct >= 50 ? '📖 Bon score. Revois les modules correspondants et réessaie.' : '💪 Continue à réviser les leçons avant de repasser.'}</p>`;

  if (pct >= 70) {
    markDone('l9_2');
  }
}

function saveProjectUrl(val) {
  state.projectUrl = val;
  saveState();
}

function saveName(val) {
  state.studentName = val;
  saveState();
}

function visitProject() {
  const url = document.getElementById('project-url')?.value.trim();
  const fb = document.getElementById('url-feedback');
  if (!url) { fb.innerHTML = '⚠️ Colle d\'abord le lien de ton site.'; fb.classList.add('show'); return; }
  if (!url.startsWith('http')) { fb.innerHTML = '⚠️ Le lien doit commencer par https://'; fb.classList.add('show'); return; }

  saveProjectUrl(url);
  window.open(url, '_blank', 'noopener');
  fb.innerHTML = `✅ Lien sauvegardé ! <a href="${url}" target="_blank" rel="noopener">${url}</a>`;
  fb.classList.add('show');
}

function generateDiploma() {
  const name = document.getElementById('student-name')?.value.trim() || 'Étudiant(e)';
  saveName(name);

  document.getElementById('diploma-name').textContent = name;
  const now = new Date();
  document.getElementById('diploma-date').textContent = `Délivré le ${now.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}`;

  const urlWrap = document.getElementById('diploma-site-wrap');
  if (state.projectUrl) {
    urlWrap.innerHTML = `<p style="font-size:13px;color:rgba(255,255,255,.45);margin-bottom:8px">Projet réalisé :</p><a href="${state.projectUrl}" target="_blank" rel="noopener" style="color:var(--c400);font-size:14px;word-break:break-all">${state.projectUrl}</a>`;
  }

  const diploma = document.getElementById('diploma');
  diploma.classList.add('show');
  diploma.scrollIntoView({ behavior: 'smooth', block: 'center' });
  markDone('l9_2');
}

// ── Helpers ─────────────────────────────────────────────────
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return `${r},${g},${b}`;
}

// ── App init ────────────────────────────────────────────────
function initApp() {
  buildSidebar();
  updateProgress();

  // Logout
  document.getElementById('btn-logout').addEventListener('click', () => {
    if (confirm('Te déconnecter ? Ta progression est sauvegardée.')) {
      document.getElementById('app').style.display = 'none';
      document.getElementById('login-page').style.display = 'flex';
    }
  });

  // Dashboard
  document.getElementById('dash-btn').addEventListener('click', () => renderDashboard());

  // Mobile sidebar
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  document.querySelector('.menu-toggle').addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  });

  renderDashboard();
}

// ── Boot ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initLogin();
});
