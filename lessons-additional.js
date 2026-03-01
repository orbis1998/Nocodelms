// ═══════════════════════════════════════════════════════════
// NOCODE IA ACADEMY — Contenu complémentaire (30 leçons)
// ═══════════════════════════════════════════════════════════

const LESSONS_ADDITIONAL = {

  // ════ MODULE 4: WIX ════
  l4_0: {
    tag: 'Module 4 · Wix', title: 'Interface et prise en main Wix',
    intro: 'Wix est l\'outil no-code le plus accessible pour créer un site professionnel en quelques heures. Interface intuitive, templates premium, et hosting inclus. Dans cette leçon, tu apprendras à naviguer l\'interface et créer tes premières pages.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="15" width="100" height="70" rx="8" fill="rgba(13,13,43,1)" stroke="rgba(124,58,237,.4)" stroke-width="1.5"/>
      <rect x="10" y="15" width="25" height="70" rx="8" fill="rgba(124,58,237,.12)"/>
      <rect x="15" y="20" width="15" height="8" rx="2" fill="rgba(124,58,237,.4)"/>
      <rect x="15" y="32" width="15" height="6" rx="2" fill="rgba(255,255,255,.15)"/>
      <rect x="15" y="42" width="15" height="6" rx="2" fill="rgba(255,255,255,.1)"/>
      <rect x="40" y="20" width="60" height="10" rx="3" fill="rgba(124,58,237,.2)"/>
      <rect x="40" y="35" width="55" height="4" rx="2" fill="rgba(255,255,255,.15)"/>
      <rect x="40" y="42" width="60" height="4" rx="2" fill="rgba(255,255,255,.12)"/>
      <rect x="40" y="50" width="50" height="25" rx="3" fill="rgba(6,182,212,.08)" stroke="rgba(6,182,212,.25)" stroke-width="1"/>
    </svg>`,
    illusLabel: 'Interface Wix avec éditeur drag-and-drop et panneau de contrôle à gauche',
    body: `<h2 class="sec-h2">Vue d'ensemble de l'interface</h2>
<div class="tools-grid">
  <div class="tool-card"><div class="tool-ico" style="background:rgba(124,58,237,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="2" y1="9" x2="22" y2="9"/></svg></div><div class="tool-name">Panneau gauche</div><div class="tool-desc">Pages, sections, éléments. Ajoute des composants à ton site</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(6,182,212,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="23" y1="12" x2="1" y2="12"/><line x1="12" y1="1" x2="12" y2="23"/></svg></div><div class="tool-name">Zone centrale</div><div class="tool-desc">Ton site en temps réel. Modifie directement par drag-and-drop</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(245,158,11,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg></div><div class="tool-name">Panneau droit</div><div class="tool-desc">Paramètres, design, animations de l'élément sélectionné</div></div>
</div>
<h2 class="sec-h2">Création d'un site Wix en 5 étapes</h2>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-body"><div class="step-title">Choisir un template</div><div class="step-text">Connecte-toi sur wix.com, clique "Créer un site". Parcours les templates par catégories : freelance, e-commerce, blog, portfolio. Choisis celui qui te plaît le plus visuellement.</div></div></div>
  <div class="step"><div class="step-num">2</div><div class="step-body"><div class="step-title">Renommer et configurer</div><div class="step-text">Renomme ton site (ex: "Mon Portfolio"), configure les infos de base (couleurs, police) dans Settings. Assure-toi que le domaine gratuit te convient (monsite.wixsite.com).</div></div></div>
  <div class="step"><div class="step-num">3</div><div class="step-body"><div class="step-title">Éditer le contenu</div><div class="step-text">Clique sur chaque section pour éditer. Double-clique sur les textes pour les modifier, remplace les images par les tiennes. Wix est très intuitif : drag-and-drop partout.</div></div></div>
  <div class="step"><div class="step-num">4</div><div class="step-body"><div class="step-title">Ajouter des sections</div><div class="step-text">Clique "+" entre chaque section pour en ajouter. Wix propose des blocs prêts : galerie, testimonials, équipe, contact. Déplace-les, personnalise-les à ta guise.</div></div></div>
  <div class="step"><div class="step-num">5</div><div class="step-body"><div class="step-title">Publier</div><div class="step-text">Clique "Publier" en haut à droite. Ton site est en ligne instantanément ! Il apparaît sur les moteurs de recherche après 24-48h.</div></div></div>
</div>
<h2 class="sec-h2">Raccourcis clavier essentiels</h2>
<table class="tbl">
<thead><tr><th>Action</th><th>Windows</th><th>Mac</th><th>Résultat</th></tr></thead>
<tbody>
<tr><td><strong>Annuler</strong></td><td>Ctrl+Z</td><td>Cmd+Z</td><td>Revenir à l'état précédent</td></tr>
<tr><td><strong>Refaire</strong></td><td>Ctrl+Y</td><td>Cmd+Y</td><td>Refaire l'action annulée</td></tr>
<tr><td><strong>Copier/Coller</strong></td><td>Ctrl+C / Ctrl+V</td><td>Cmd+C / Cmd+V</td><td>Dupliquer un élément</td></tr>
<tr><td><strong>Tout sélectionner</strong></td><td>Ctrl+A</td><td>Cmd+A</td><td>Sélectionne tous les éléments</td></tr>
<tr><td><strong>Supprimer</strong></td><td>Delete</td><td>Delete</td><td>Supprime l'élément sélectionné</td></tr>
</tbody>
</table>
<div class="callout c-tip"><span class="callout-ico">💡</span><p><strong>Pro tip :</strong> Les templates Wix sont déjà mobiles-friendly. Mais teste toujours sur mobile : clique l'icône mobile en haut à droite de l'éditeur.</p></div>
<h2 class="sec-h2">Meilleures pratiques Wix</h2>
<ul class="blist">
<li><strong>Une couleur pour l'accent</strong> — Utilise ta couleur brand partout (boutons, titres, liens)</li>
<li><strong>Polices limitées</strong> — Max 2-3 polices. Une pour titres (Syne), une pour texte (DM Sans)</li>
<li><strong>Images optimisées</strong> — Compresse tes photos en ligne (compressor.io) avant d'uploader</li>
<li><strong>Menu clair</strong> — 5-7 pages max. Enlève les pages vides qui n'apportent rien</li>
<li><strong>Mobile first</strong> — Environ 60% de tes visiteurs sont sur mobile. Vérifiez que tout est lisible</li>
</ul>`
  },

  l4_1: {
    tag: 'Module 4 · Wix', title: 'Wix ADI : le constructeur IA',
    intro: 'Wix ADI (Artificial Design Intelligence) est un assistant IA qui génère un site complet rien qu\'en répondant à quelques questions sur ton business. Parfait si tu n\'es pas sûr par où commencer. Dans cette leçon, tu apprendras à exploiter la puissance de Wix ADI pour créer un site pro en 15 minutes.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="50" r="38" fill="rgba(6,182,212,.08)" stroke="rgba(6,182,212,.3)" stroke-width="1.5"/>
      <rect x="35" y="30" width="50" height="40" rx="4" fill="rgba(6,182,212,.12)" stroke="rgba(6,182,212,.25)" stroke-width="1"/>
      <rect x="40" y="35" width="40" height="8" rx="2" fill="rgba(6,182,212,.2)"/>
      <rect x="40" y="46" width="35" height="5" rx="2" fill="rgba(255,255,255,.1)"/>
      <rect x="40" y="54" width="40" height="5" rx="2" fill="rgba(255,255,255,.08)"/>
      <circle cx="70" cy="68" r="6" fill="rgba(6,182,212,.4)"/>
      <text x="60" y="52" text-anchor="middle" font-size="20" fill="rgba(6,182,212,.6)">?</text>
    </svg>`,
    illusLabel: 'Wix ADI pose des questions, tu réponds, l\'IA construit ton site',
    body: `<h2 class="sec-h2">Qu'est-ce que Wix ADI ?</h2>
<p>Wix ADI est une intelligence artificielle qui se pose en tant que ton designer personnel. Tu réponds à des questions simples sur ton business, et l'IA génère un site complet, personnalisé, et prêt à la publication.</p>
<div class="callout c-info"><span class="callout-ico">ℹ️</span><p><strong>Différence clé :</strong> Template classique = tu personnalises. Wix ADI = l'IA personnalise pour toi. Résultat : un site unique qui reflète réellement ton business.</p></div>
<h2 class="sec-h2">Comment utiliser Wix ADI</h2>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-body"><div class="step-title">Créer un compte</div><div class="step-text">Sur wix.com, clique "Créer un site". Choisis "Laisse-moi créer un site IA" ou "Utiliser l'IA Wix".</div></div></div>
  <div class="step"><div class="step-num">2</div><div class="step-body"><div class="step-title">Répondre aux questions</div><div class="step-text">L'IA te pose 5-10 questions : quel est ton métier ? Qui est ton public ? Quelles pages souhaites-tu ? Quelle est ta palette de couleurs préférée ? Réponds avec sincérité.</div></div></div>
  <div class="step"><div class="step-num">3</div><div class="step-body"><div class="step-title">Laisser Wix construire</div><div class="step-text">Attends quelques secondes. Wix ADI génère un site complet avec : structure, textes génériques, images de stock, layout optimisé. Tu entres ensuite dans l'éditeur standard.</div></div></div>
  <div class="step"><div class="step-num">4</div><div class="step-body"><div class="step-title">Affiner et publier</div><div class="step-text">Remplace les textes génériques par tes vraies infos. Change les images stock par les tiennes. Affine les couleurs si besoin. Publie quand tu es satisfait.</div></div></div>
</div>
<h2 class="sec-h2">Questions idéales à poser à Wix ADI</h2>
<div class="callout c-tip"><span class="callout-ico">💡</span><p><strong>Conseil crucial :</strong> Plus tu es spécifique dans tes réponses, meilleur est le site généré. "Coach en productivité pour freelancers" génère un site bien meilleur que juste "coach".</p></div>
<table class="tbl">
<thead><tr><th>Question type</th><th>Mauvaise réponse</th><th>Bonne réponse</th></tr></thead>
<tbody>
<tr><td>Métier ?</td><td>Designer</td><td>Designer graphique spécialisée en branding pour PME</td></tr>
<tr><td>Public cible ?</td><td>Les entreprises</td><td>PME (1-50 salariés) en croissance qui cherchent une identité visuelle</td></tr>
<tr><td>Couleurs ?</td><td>Bleu et blanc</td><td>Bleu électrique (moderne), blanc (épuré), gris foncé (prof)</td></tr>
<tr><td>Objectif du site ?</td><td>Vendre</td><td>Attirer 10 freelancers/mois et montrer mon portfolio</td></tr>
</tbody>
</table>
<h2 class="sec-h2">Avantages et limites de Wix ADI</h2>
<div class="tools-grid">
  <div class="tool-card"><div class="tool-ico" style="background:rgba(16,185,129,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></div><div class="tool-name">Avantages</div><div class="tool-desc">• Très rapide (5 min)<br>• Super intuitif<br>• Site unique<br>• Bon SEO intégré</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(244,63,94,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div><div class="tool-name">Limites</div><div class="tool-desc">• Textes génériques au départ<br>• Moins d'options avancées<br>• Nécessite édition manuelle<br>• Images souvent de stock</div></div>
</div>`
  },

  l4_2: {
    tag: 'Module 4 · Wix', title: 'Personnalisation avancée',
    intro: 'Un site Wix standard peut rapidement sembler "comme tous les autres". Dans cette leçon, tu apprendras les techniques avancées pour rendre ton site unique : animations, custom code, SEO poussé, et intégrations tierces. C\'est ici qu\'un site bon devient excellent.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="20" height="20" fill="rgba(124,58,237,.2)" stroke="rgba(124,58,237,.4)" stroke-width="1.5"/>
      <rect x="50" y="20" width="20" height="20" fill="rgba(6,182,212,.2)" stroke="rgba(6,182,212,.4)" stroke-width="1.5"/>
      <rect x="80" y="20" width="20" height="20" fill="rgba(245,158,11,.2)" stroke="rgba(245,158,11,.4)" stroke-width="1.5"/>
      <path d="M20 60 Q60 40 100 60" stroke="rgba(124,58,237,.3)" stroke-width="1.5" fill="none" stroke-dasharray="4 2"/>
      <circle cx="30" cy="65" r="4" fill="rgba(124,58,237,.6)"/>
      <circle cx="60" cy="50" r="4" fill="rgba(6,182,212,.6)"/>
      <circle cx="90" cy="70" r="4" fill="rgba(245,158,11,.6)"/>
    </svg>`,
    illusLabel: 'Intégrations et animations avancées pour un site premium',
    body: `<h2 class="sec-h2">Design avancé sans code</h2>
<ul class="blist">
<li><strong>Séquences d'animation</strong> — Élément apparaît en fade-in au scroll, puis un title glisse par-dessus. Module 8 pour les détails.</li>
<li><strong>Layout personnalisé</strong> — Utilise les grilles (Grid) pour créer des layouts uniques que les templates standards ne proposent pas.</li>
<li><strong>Effets de parallaxe</strong> — Logo qui bouge lentement différemment pendant le scroll crée une impression de profondeur premium.</li>
<li><strong>Filtres et hover effects</strong> — Les boutons changent de couleur au survol. Les images deviennent colorées au hover. Petits détails = grand impact.</li>
</ul>
<h2 class="sec-h2">Intégrations tierces essentielles</h2>
<table class="tbl">
<thead><tr><th>Intégration</th><th>Utilité</th><th>Configuration</th></tr></thead>
<tbody>
<tr><td><strong>Mailchimp</strong></td><td>Collecter les emails, newsletter automatique</td><td>Crée formulaire dans Wix, connecte à Mailchimp directement</td></tr>
<tr><td><strong>Slack</strong></td><td>Notifications en temps réel des messages du site</td><td>Reçois chaque message formulaire en notification Slack</td></tr>
<tr><td><strong>Google Analytics</strong></td><td>Suivi des visiteurs et du comportement</td><td>Ajoute le code de tracking dans Settings > SEO</td></tr>
<tr><td><strong>Calendly</strong></td><td>Réserver des rendez-vous directement</td><td>Intègre l'iframe Calendly dans une section spéciale</td></tr>
<tr><td><strong>Stripe/PayPal</strong></td><td>Accepter les paiements</td><td>Wix a un mode ecommerce intégré très efficace</td></tr>
</tbody>
</table>
<h2 class="sec-h2">Ajouter du code personnalisé</h2>
<p>Pour les développeurs ou ceux qui veulent customiser au maximum : tu peux ajouter du code HTML/CSS/JavaScript directement.</p>
<div class="callout c-info"><span class="callout-ico">ℹ️</span><p><strong>Accès au code :</strong> Settings > Custom Code. Ajoute du code CSS global ou du JavaScript dans les footer/header. Attention : c'est puissant mais peut casser le site si mal utilisé.</p></div>
<h2 class="sec-h2">SEO avancé dans Wix</h2>
<ul class="blist">
<li><strong>Meta descriptions</strong> — Va dans Settings > SEO > Pages. Édite la description de chaque page (160 caractères max).</li>
<li><strong>Structuré data</strong> — Wix le fait automatiquement. Tes pages apparaîtront avec rich snippets dans Google.</li>
<li><strong>Sitemap XML</strong> — Créé automatiquement. Soumets-le à Google Search Console pour indexation rapide.</li>
<li><strong>Page speed</strong> — Compress tes images (tinypng.com). Wix met en cache automatiquement. Objectif : < 3 sec de chargement.</li>
</ul>`
  },

  l4_3: {
    tag: 'Module 4 · Wix', title: 'Publication et domaine',
    intro: 'Ton site est prêt ! Avant de le lancer, il faut : vérifier que tout fonctionne, configurer ton domaine personnalisé (au lieu de wixsite.com), et publier. Cette leçon couvre tous les détails pour un lancement professionnel.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="25" width="60" height="50" rx="5" fill="rgba(16,185,129,.12)" stroke="rgba(16,185,129,.3)" stroke-width="1.5"/>
      <circle cx="50" cy="35" r="6" fill="rgba(16,185,129,.4)"/>
      <circle cx="70" cy="44" r="6" fill="rgba(6,182,212,.4)"/>
      <rect x="40" y="55" width="40" height="8" rx="3" fill="rgba(16,185,129,.3)" stroke="rgba(16,185,129,.5)" stroke-width="1"/>
      <text x="60" y="61" text-anchor="middle" font-size="7" fill="white" font-weight="700">PUBLIER</text>
    </svg>`,
    illusLabel: 'Checklist de publication et configuration de domaine',
    body: `<h2 class="sec-h2">Checklist avant publication</h2>
<ul class="blist">
<li><strong>Test complet sur mobile</strong> — Ouvre ton site depuis un vrai téléphone. Scrolle, clique tous les liens, teste le formulaire de contact.</li>
<li><strong>Toutes les pages existent</strong> — Pas de pages avec "en cours de construction". Enlève les pages vides ou non publiées.</li>
<li><strong>Formulaire de contact fonctionne</strong> — Envoie-toi un message test. Reçois-tu l'email ? L'email a-t-il tes infos ?</li>
<li><strong>Pas de fautes d'orthographe</strong> — Relis chaque page 2 fois. Les fautes tuent la crédibilité.</li>
<li><strong>Logo et favicon configurés</strong> — Le favicon (icône de l'onglet) doit être défini. Logo visible en haut.</li>
<li><strong>Réseaux sociaux dans le footer</strong> — LinkedIn, Instagram, et autres doivent être correctement liés.</li>
</ul>
<h2 class="sec-h2">Configuration du domaine personnalisé</h2>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-body"><div class="step-title">Acheter un domaine</div><div class="step-text">Option A : Acheter directement dans Wix Settings > Domains (ils proposent des domaines à bon prix). Option B : Acheter ailleurs (OVH, Namecheap) et connecter.</div></div></div>
  <div class="step"><div class="step-num">2</div><div class="step-body"><div class="step-title">Connecter le domaine</div><div class="step-text">Si acheté ailleurs : Settings > Domains > Connect Domain. Wix affiche les enregistrements DNS à ajouter chez ton registrar. C'est technique mais Wix guide chaque étape.</div></div></div>
  <div class="step"><div class="step-num">3</div><div class="step-body"><div class="step-title">Attendre la propagation</div><div class="step-text">Les changements DNS prennent 24-48h pour se propager mondialement. Ton domaine ne fonctionnera peut-être pas immédiatement. Sois patient.</div></div></div>
  <div class="step"><div class="step-num">4</div><div class="step-body"><div class="step-title">Vérifier le cadenas HTTPS</div><div class="step-text">Une fois propagé, visite tonsite.com. Tu dois voir un cadenas vert 🔒 dans la barre d'adresse. C'est l'HTTPS = sécurité et confiance.</div></div></div>
</div>
<h2 class="sec-h2">La grande publication</h2>
<p>Une fois que tu es 100% satisfait et que ton domaine fonctionne :</p>
<table class="tbl">
<thead><tr><th>Action</th><th>Où</th><th>Résultat</th></tr></thead>
<tbody>
<tr><td><strong>Cliquer Publish</strong></td><td>Bouton en haut à droite</td><td>Wix demande confirmation. C'est maintenant officiel !</td></tr>
<tr><td><strong>Partager le lien</strong></td><td>Copie tonsite.com dans ses réseaux sociaux</td><td>Tes premiers visiteurs arrivent</td></tr>
<tr><td><strong>Ajouter à Google Search Console</strong></td><td>search.google.com, ajoute tonsite.com</td><td>Google indexe ton site. Apparition dans recherches après 2-4 semaines</td></tr>
<tr><td><strong>Soumettre le sitemap</strong></td><td>Settings > SEO > Sitemap</td><td>Google peut indexer rapidement chaque page</td></tr>
</tbody>
</table>
<div class="callout c-ok"><span class="callout-ico">✅</span><p><strong>Félicitations !</strong> Ton site Wix est maintenant en ligne. Continue à l'améliorer, ajoute du contenu, reste en contact avec tes visiteurs. Bravo !</p></div>`
  },

  // ════ MODULE 5: WEBFLOW (4 LESSONS) ════
  l5_0: {
    tag: 'Module 5 · Webflow', title: 'Pourquoi Webflow ?',
    intro: 'Webflow n\'est pas juste un no-code tool, c\'est une véritable révolution pour les designers et développeurs front-end. Contrairement à Wix, Webflow te laisse coder sans taper une seule ligne. Dans cette leçon, tu comprendras pourquoi les agences pro choisissent Webflow et quand l\'utiliser vs ses concurrents.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="60,10 100,30 100,70 60,90 20,70 20,30" fill="rgba(124,58,237,.08)" stroke="rgba(124,58,237,.3)" stroke-width="1.5"/>
      <circle cx="60" cy="50" r="15" fill="rgba(6,182,212,.2)" stroke="rgba(6,182,212,.4)" stroke-width="1"/>
      <text x="60" y="56" text-anchor="middle" font-size="18" fill="rgba(6,182,212,.8)">W</text>
    </svg>`,
    illusLabel: 'Logo Webflow - la plateforme pro pour designers ambitieux',
    body: `<h2 class="sec-h2">Webflow vs Wix vs Lovable : comment choisir ?</h2>
<table class="tbl">
<thead><tr><th>Critère</th><th>Webflow</th><th>Wix</th><th>Lovable</th></tr></thead>
<tbody>
<tr><td><strong>Courbe apprentissage</strong></td><td>⭐⭐⭐⭐ (modérée)</td><td>⭐ (très facile)</td><td>⭐⭐ (facile)</td></tr>
<tr><td><strong>Flexibilité design</strong></td><td>⭐⭐⭐⭐⭐ (totale)</td><td>⭐⭐ (templates)</td><td>⭐⭐⭐ (bonne)</td></tr>
<tr><td><strong>CMS intégré</strong></td><td>⭐⭐⭐⭐⭐ (puissant)</td><td>⭐⭐⭐ (basique)</td><td>⭐⭐ (limité)</td></tr>
<tr><td><strong>Prix</strong></td><td>$14-99/mois + hosting</td><td>$13-27/mois (tudo inclus)</td><td>Freemium + pro</td></tr>
<tr><td><strong>Idéal pour</strong></td><td>Agences, projets complexes</td><td>PME, petits budgets</td><td>Apps web custom</td></tr>
</tbody>
</table>
<h2 class="sec-h2">5 raisons de choisir Webflow</h2>
<div class="tools-grid">
  <div class="tool-card"><div class="tool-ico" style="background:rgba(124,58,237,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div class="tool-name">Contrôle total</div><div class="tool-desc">Chaque pixel, chaque animation, chaque interaction - c'est le tien. Pas de limitations.</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(6,182,212,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg></div><div class="tool-name">Séo avancé</div><div class="tool-desc">Open Graph, JSON-LD, meta tags - tout ce que Google adore. Intégré nativement.</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(245,158,11,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg></div><div class="tool-name">CMS puissant</div><div class="tool-desc">Blog, portfolio, boutique - structure tes données comme un vrai dev.</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(16,185,129,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><path d="M12 2v20M2 12h20"/></svg></div><div class="tool-name">Hosting intégré</div><div class="tool-desc">Super rapide, CDN mondial, HTTPS automatique. Zéro config.</div></div>
</div>
<h2 class="sec-h2">Quand choisir Webflow ?</h2>
<ul class="blist">
<li><strong>Tu es designer et tu veux plus de contrôle</strong> — Wix/Wistia te limitent ? Webflow te donne les clés.</li>
<li><strong>Tu dois gérer un blog/portfolio avec beaucoup de contenu</strong> — Le CMS Webflow est fait pour ça.</li>
<li><strong>Tu veux vendre tes designs</strong> — Les agences achètent des templates Webflow. Revenu possible.</li>
<li><strong>Tu as besoin d'interactions complexes</strong> — Hover effects, scroll animations, microinteractions. Webflow les fait via l'interface visuelle.</li>
<li><strong>Tu codes un peu et tu veux du custom</strong> — Ajouter du JSPersonalisé, custom CSS, intégrations API = possible.</li>
</ul>
<div class="callout c-tip"><span class="callout-ico">💡</span><p><strong>Conseil :</strong> Webflow a une courbe d'apprentissage. Prends 2-3 jours pour comprendre. Après ça, la productivité explose.</p></div>`
  },

  l5_1: {
    tag: 'Module 5 · Webflow', title: 'Interface & logique Webflow',
    intro: 'L\'interface Webflow est complètement différente de Wix. Plus puissante, plus dense, mais aussi plus intuitive une fois qu\'on la comprend. Dans cette leçon, tu maîtriseras la hierarchy des éléments, les classes CSS, et la logique des interactions.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="10" width="110" height="80" rx="6" fill="rgba(13,13,43,1)" stroke="rgba(124,58,237,.4)" stroke-width="1.5"/>
      <rect x="5" y="10" width="20" height="80" rx="6" fill="rgba(124,58,237,.12)"/>
      <rect x="8" y="15" width="14" height="6" rx="1.5" fill="rgba(124,58,237,.4)"/>
      <rect x="8" y="25" width="14" height="4" rx="1" fill="rgba(255,255,255,.1)"/>
      <rect x="8" y="33" width="14" height="4" rx="1" fill="rgba(255,255,255,.08)"/>
      <rect x="30" y="15" width="80" height="60" rx="4" fill="rgba(6,182,212,.08)"/>
      <rect x="95" y="10" width="20" height="80" rx="6" fill="rgba(245,158,11,.08)"/>
    </svg>`,
    illusLabel: 'Layout Webflow : arborescence à gauche, canvas au centre, propriétés à droite',
    body: `<h2 class="sec-h2">Les 3 panneaux essentiels</h2>
<div class="tools-grid">
  <div class="tool-card"><div class="tool-ico" style="background:rgba(124,58,237,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><path d="M3 6h.01M3 12h.01M3 18h.01"/></svg></div><div class="tool-name">Layers (Gauche)</div><div class="tool-desc">Hiérarchie complète de ta page. Très important pour comprendre comment c'est structuré.</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(6,182,212,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" v="18"/><line x1="3" y1="9" h="18"/></svg></div><div class="tool-name">Canvas (Centre)</div><div class="tool-desc">Ton site en temps réel. Modifie drag-and-drop ou clique pour éditer les propriétés.</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(245,158,11,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 2"/></svg></div><div class="tool-name">Design (Droite)</div><div class="tool-desc">Styles CSS de l'élément sélectionné. Couleur, taille, spacing, interactions, etc.</div></div>
</div>
<h2 class="sec-h2">Concepts clés de Webflow</h2>
<ul class="blist">
<li><strong>Elements/Sections/Divs</strong> — Chaque élément est une boîte. Ces boîtes s'emboîtent (comme des poupées russes). Comprendre l'hiérarchie = comprendre Webflow.</li>
<li><strong>Styling local vs global</strong> — Clic droit sur l'élément > Create Class. Crée une classe réutilisable. Super puissant pour garder l'ouvrage cohérent.</li>
<li><strong>States (Hover, Active, Focus)</strong> — Au lieu de créer des éléments distincts, tu ajoutes des "états" à l'élément. "Quand on passe la souris : change couleur".</li>
<li><strong>Interactions (Scroll, Click, Load)</strong> — Déclenche des animations à partir d'événements. "Au scroll : le logo fait une rotation de 360°".</li>
<li><strong>Responsive Design</strong> — Webflow génère automatiquement les breakpoints. Tu customises pour chaque résolution.</li>
</ul>
<h2 class="sec-h2">Ton premier élément dans Webflow</h2>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-body"><div class="step-title">Ajouter un élément</div><div class="step-text">Clique "+" dans la toolbar. Webflow propose : Section, Div, Heading, Paragraph, etc. Crée une Section (conteneur principal).</div></div></div>
  <div class="step"><div class="step-num">2</div><div class="step-body"><div class="step-title">Imbrication d'éléments</div><div class="step-text">Ajoute un Div DEDANS la Section. Ajoute un Heading DEDANS le Div. Tu vois l'hiérarchie dans le panneau Layers à gauche.</div></div></div>
  <div class="step"><div class="step-num">3</div><div class="step-body"><div class="step-title">Ajouter du style</div><div class="step-text">Sélectionne un élément. Dans le panneau Design (droite), ajoute : couleur de fond, padding, border-radius. Ton site se dessine en temps réel.</div></div></div>
  <div class="step"><div class="step-num">4</div><div class="step-body"><div class="step-title">Créer une classe</div><div class="step-text">Clic droit > Create Class "hero-section". Maintenant tu peux réutiliser ce style sur d'autres sections. Cohérence garantie.</div></div></div>
</div>
<div class="callout c-info"><span class="callout-ico">ℹ️</span><p><strong>Gold tip :</strong> Webflow génère du vrai CSS propre. Si tu inspectes avec DevTools, tu vois du HTML/CSS parfait. C'est pas du bloatware - c'est du code de qualité pro.</p></div>`
  },

  l5_2: {
    tag: 'Module 5 · Webflow', title: 'CMS Webflow : blog et portfolio',
    intro: 'Le CMS Webflow est la raison pour laquelle les agences et créateurs de contenu adorent Webflow. Crée une "collection" (comme une table de base de données), remplis-la avec tes articles/projets, et Webflow génère automatiquement les pages. Scalable, flexible, professionnel. C\'est ici qu\'on passe du "brouillon" au "pro".',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="90" height="70" rx="6" fill="rgba(13,13,43,1)" stroke="rgba(6,182,212,.4)" stroke-width="1.5"/>
      <rect x="20" y="20" width="80" height="10" rx="3" fill="rgba(6,182,212,.2)"/>
      <rect x="20" y="35" width="25" height="20" rx="3" fill="rgba(6,182,212,.15)"/>
      <rect x="50" y="35" width="25" height="20" rx="3" fill="rgba(6,182,212,.1)"/>
      <rect x="80" y="35" width="15" height="20" rx="3" fill="rgba(6,182,212,.08)"/>
      <rect x="20" y="60" width="75" height="8" rx="3" fill="rgba(255,255,255,.08)"/>
    </svg>`,
    illusLabel: 'CMS Webflow : structure de données + génération de pages automatique',
    body: `<h2 class="sec-h2">Qu'est-ce qu'une Collection Webflow ?</h2>
<p>Une Collection = une table de données. Exemple : collection "Articles" avec 50 articles. Chaque article a : titre, slug, contenu, date, auteur, image, catégorie.</p>
<p>Tu crées UNE page template → Webflow génère automatiquement 50 pages différentes (une par article).</p>
<div class="callout c-tip"><span class="callout-ico">💡</span><p><strong>Analogie :</strong> Sans CMS = créer manuellement chaque page (fastidieux). Avec CMS = remplir un formulaire, et hop, la page est générée.</p></div>
<h2 class="sec-h2">Créer une collection en 5 étapes</h2>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-body"><div class="step-title">Créer la collection</div><div class="step-text">Dans le panneau Webflow, "+" → Collection → "Blog Posts" (ou ton nom). Définis les champs : Nom (text), Slug (auto), Contenu (rich text), Date, Auteur, Image, etc.</div></div></div>
  <div class="step"><div class="step-num">2</div><div class="step-body"><div class="step-title">Ajouter des articles</div><div class="step-text">Dans le CMS Webflow, ajoute des entrées. Chaque article est une ligne. Remplis les champs. C'est facile et peut être fait par non-tech (ton client peut ajouter lui-même).</div></div></div>
  <div class="step"><div class="step-num">3</div><div class="step-body"><div class="step-title">Créer une page template</div><div class="step-text">Crée une page "blog-post" (le template). Ajoute des éléments qui seront remplis dynamiquement : {{post.title}}, {{post.content}}, {{post.image}}.</div></div></div>
  <div class="step"><div class="step-num">4</div><div class="step-body"><div class="step-title">Lier le template à la collection</div><div class="step-text">Settings de la page : "Collection Page" → choisis ta collection et le champ "Slug". Webflow générera automatiquement /blog-post/{slug} pour chaque article.</div></div></div>
  <div class="step"><div class="step-num">5</div><div class="step-body"><div class="step-title">Styliser une fois, appliquer partout</div><div class="step-text">Tu styles le template UNE FOIS. Tous les articles héritent automatiquement de ce style. Mise à jour globale facile.</div></div></div>
</div>
<h2 class="sec-h2">Cas d'usage réels</h2>
<table class="tbl">
<thead><tr><th>Type de site</th><th>Collection type</th><th>Champs essentiels</th></tr></thead>
<tbody>
<tr><td><strong>Blog</strong></td><td>Articles</td><td>Titre, slug, contenu, date, auteur, catégorie, image</td></tr>
<tr><td><strong>Portfolio</strong></td><td>Projets</td><td>Titre, slug, description, images (galerie), technologies, lien live, date</td></tr>
<tr><td><strong>E-commerce</strong></td><td>Produits</td><td>Nom, slug, description, prix, images, stock, catégorie, SKU</td></tr>
<tr><td><strong>Équipe</strong></td><td>Membres</td><td>Nom, rôle, bio, photo, LinkedIn, email, specialties</td></tr>
<tr><td><strong>Menu/Pricing</strong></td><td>Services</td><td>Nom, description, prix, features, icon, ordre</td></tr>
</tbody>
</table>
<div class="callout c-ok"><span class="callout-ico">✅</span><p><strong>Power move :</strong> Crée une collection "Settings" globale. Elle te permet de modifier le titre du site, le slogan principal, etc., en un seul endroit. Le tutto se met à jour partout.</p></div>`
  },

  l5_3: {
    tag: 'Module 5 · Webflow', title: 'SEO et lancement Webflow',
    intro: 'Un site Webflow superbe mais invisible sur Google ? Inutile. Dans cette leçon, tu maîtriseras le SEO avancé sur Webflow : meta tags, open graph, schema.org, sitemap, et tout ce que Google adore. Plus : comment publier et configurer ton domaine.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="50" r="38" fill="rgba(134,206,235,.08)" stroke="rgba(134,206,235,.3)" stroke-width="1.5"/>
      <circle cx="60" cy="50" r="28" fill="rgba(134,206,235,.05)" stroke="rgba(134,206,235,.2)" stroke-width="1"/>
      <text x="60" y="56" text-anchor="middle" font-size="24" fill="rgba(134,206,235,.6)" font-family="sans-serif" font-weight="700">G</text>
    </svg>`,
    illusLabel: 'Optimisation Google : SEO Webflow pour dominer les résultats',
    body: `<h2 class="sec-h2">SEO on-page dans Webflow</h2>
<ul class="blist">
<li><strong>Page SEO Settings</strong> — Clique la page → Settings (icône ⚙️). Ajoute Title (50-60 car), MetaDescription (150-160 char), slug lisible (/blog-webflow-seo, pas /page-123).</li>
<li><strong>Open Graph</strong> — Quand tu partages ton lien sur LinkedIn/Facebook, l'image et le titre s'affichent correctement. Webflow ajoute l'image d'aperçu auto (la première image de la page).</li>
<li><strong>Headings hierarchy</strong> — H1 une SEULE fois par page (le titre principal). H2 pour les sections, H3 pour les sous-sections. Pas de H2 suivis de H4 — Google déteste les trous dans la hiérarchie.</li>
<li><strong>Image alt text</strong> — TRÈS important. Sur chaque image, ajoute une description (Settings image). Ex: "Capture d'écran interface Webflow CMS".</li>
<li><strong>Internal linking</strong> — Lie tes pages entre elles. Si tu parles "design responsive" dans un article, crée un lien vers ta page "/responsive" avec le texte "design responsive".</li>
</ul>
<h2 class="sec-h2">SEO technique Webflow</h2>
<table class="tbl">
<thead><tr><th>Élément</th><th>Qu'est-ce que c'est</th><th>Pourquoi c'est important</th></tr></thead>
<tbody>
<tr><td><strong>Sitemap.xml</strong></td><td>Liste de toutes tes pages</td><td>Google la lit automatiquement pour indexer vite</td></tr>
<tr><td><strong>Robots.txt</strong></td><td>Affiche quoi crawler et quoi ignorer</td><td>Empêche Google de crawler les pages en brouillon</td></tr>
<tr><td><strong>Canonical tag</strong></td><td>"Cette page est la version officielle"</td><td>Évite le contenu dupliqué si tu copies une page</td></tr>
<tr><td><strong>XML Schema</strong></td><td>Structure de données (JSON-LD)</td><td>Google affiche rich snippets (avis, prix, etc.) dans résultats</td></tr>
<tr><td><strong>Page Speed</strong></td><td>Temps de chargement</td><td>Facteur de classement. Webflow est rapide, mais optimize les images</td></tr>
</tbody>
</table>
<h2 class="sec-h2">Publier et configurer le domaine</h2>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-body"><div class="step-title">Préparation</div><div class="step-text">Assure-toi que tout est public (pas de pages en Draft). URL de partage visible. Publish l'interface de Webflow une première fois (Publish button en haut).</div></div></div>
  <div class="step"><div class="step-num">2</div><div class="step-body"><div class="step-title">Acheter un domaine</div><div class="step-text">Option : Acheter directement dans Webflow (Settings > Domains > Register New Domain). Ou acheter ailleurs et connecter.</div></div></div>
  <div class="step"><div class="step-num">3</div><div class="step-body"><div class="step-title">Configurer DNS</div><div class="step-text">Si domaine externe : copie les enregistrements DNS Webflow te montre. Va dans le panneau DNS de ton registrar (OVH, Namecheap, etc.). Ajoute A records et CNAME. Attend 24-48h.</div></div></div>
  <div class="step"><div class="step-num">4</div><div class="step-body"><div class="step-title">Vérifier HTTPS</div><div class="step-text">Une fois propagé, visite tonsite.com. Cadenas 🔒 = parfait.</div></div></div>
</div>
<div class="callout c-info"><span class="callout-ico">ℹ️</span><p><strong>Google Search Console :</strong> Va à search.google.com → ajoute tonsite.com. Soumets le sitemap. Google indexera vite et tu verras les positions sur des mots-clés importants.</p></div>`
  },

  // ════ MODULE 6: FRAMER (4 LESSONS) ════
  l6_0: {
    tag: 'Module 6 · Framer', title: 'Introduction à Framer',
    intro: 'Framer est l\'outil de designers modernes. Il combine design, prototypage, et Framer AI qui génère des briques de design en temps réel. Créé par des designers pour des designers. Dans cette leçon, tu découvriras pourquoi les designers adorent Framer et comment l\'utiliser pour créer des designs d\'exception.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 30 L110 30 L110 70 L10 70 Z" fill="rgba(124,58,237,.12)" stroke="rgba(124,58,237,.4)" stroke-width="1.5"/>
      <circle cx="35" cy="50" r="12" fill="rgba(6,182,212,.3)" stroke="rgba(6,182,212,.5)" stroke-width="1"/>
      <rect x="60" y="40" width="30" height="20" rx="4" fill="rgba(245,158,11,.3)" stroke="rgba(245,158,11,.5)" stroke-width="1"/>
      <path d="M35 70 Q60 60 85 70" stroke="rgba(124,58,237,.4)" stroke-width="1.5" fill="none"/>
    </svg>`,
    illusLabel: 'Framer : canvas de design moderne avec prototypage intégré',
    body: `<h2 class="sec-h2">Framer vs Figma vs Adobe XD</h2>
<table class="tbl">
<thead><tr><th>Outil</th><th>Framer</th><th>Figma</th><th>Adobe XD</th></tr></thead>
<tbody>
<tr><td><strong>Meilleur pour</strong></td><td>Design + proto + code</td><td>UI/UX design</td><td>Expérience utilisateur</td></tr>
<tr><td><strong>Framer AI</strong></td><td>✅ Intégré, puissant</td><td>Limité (IA basic)</td><td>✅ Bon, mais payant</td></tr>
<tr><td><strong>Prototypage</strong></td><td>⭐⭐⭐⭐⭐ Exceptionnel</td><td>⭐⭐⭐ Bon</td><td>⭐⭐⭐ Bon</td></tr>
<tr><td><strong>Collaboration</strong></td><td>✅ Excellent pour petites équipes</td><td>⭐⭐⭐⭐⭐ Meilleur</td><td>✅ Bon</td></tr>
<tr><td><strong>Code generation</strong></td><td>✅ React prêt à copier</td><td>Plugins</td><td>Limité</td></tr>
<tr><td><strong>Prix</strong></td><td>Freemium + $12/mois</td><td>Freemium + $12/mois</td><td>Subscription Adobe</td></tr>
</tbody>
</table>
<h2 class="sec-h2">Avantages uniques de Framer</h2>
<div class="tools-grid">
  <div class="tool-card"><div class="tool-ico" style="background:rgba(124,58,237,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div><div class="tool-name">Framer AI</div><div class="tool-desc">Type une description en français → IA génère le design. Button "Générer avec IA" partout.</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(6,182,212,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div class="tool-name">Interactions fluides</div><div class="tool-desc">Animations au scroll, au click, transitions - sans coder. Juste du drag-drop.</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(245,158,11,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><rect x="8" y="3" width="13" height="13" rx="2" ry="2"/><path d="M4 15v-4a2 2 0 012-2h2"/></svg></div><div class="tool-name">Props à l'export</div><div class="tool-desc">Désigne des "props" design. À l'export, ton dev peut les changer facile en React.</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(16,185,129,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="8" cy="7" r="3"/></svg></div><div class="tool-name">Data binding</div><div class="tool-desc">Connecte des données externes via API. Le design se met à jour automatiquement.</div></div>
</div>
<h2 class="sec-h2">Philosophie Framer</h2>
<ul class="blist">
<li><strong>Rapidité du design</strong> — Loin des pixels hairline de Figma. Framer préfère l'itération rapide.</li>
<li><strong>Focus sur l'expérience</strong> — Pas juste des maquettes statiques. Des prototypes interactifs qui ressemblent à du vrai.</li>
<li><strong>IA comme co-créatrice</strong> — L'IA ne doit pas remplacer le designer. Elle doit l'aider. Générer une base → tu affines.</li>
<li><strong>Code comme matière première</strong> — Pour Framer, code HTML/CSS/React n'est pas une limitation. C'est un atout. Tu codes ou tu clone du code.</li>
</ul>
<div class="callout c-tip"><span class="callout-ico">💡</span><p><strong>Pour toi :</strong> Si tu es designer qui veut passer au code, Framer est parfait. Si tu es dev qui veut designer, encore meilleur.</p></div>`
  },

  l6_1: {
    tag: 'Module 6 · Framer', title: 'Framer AI en 30 secondes',
    intro: 'L\'une des features les plus révolutionnaires de Framer est Framer AI. Elle peut générer des composants, des pages entières, ou des designs complexes rien qu\'à partir d\'une description en français. Dans cette leçon, tu apprendras comment l\'utiliser for maximum impact.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 50 Q60 20 100 50 Q60 80 20 50" fill="none" stroke="rgba(6,182,212,.3)" stroke-width="1.5" stroke-dasharray="4 2"/>
      <circle cx="60" cy="50" r="15" fill="rgba(6,182,212,.2)" stroke="rgba(6,182,212,.4)" stroke-width="1.5"/>
      <text x="60" y="57" text-anchor="middle" font-size="20" fill="rgba(6,182,212,.8)">✨</text>
    </svg>`,
    illusLabel: 'Framer AI : la magie du design génératif en quelques secondes',
    body: `<h2 class="sec-h2">Comment accéder à Framer AI</h2>
<p>Sur le canvas Framer, tu tas un bouton "+AI". Au click, une boîte de dialogue s'ouvre. Tu peux :</p>
<ul class="blist">
<li><strong>Generate component</strong> — Décris un composant. "Un bouton avec un gradient bleu-cyan, avec une petite icône GitHub à gauche". L'IA génère.</li>
<li><strong>Generate page</strong> — Décris une page entière. "Une landing page pour une app de productivité. Hero avec CTA, 3 features, screenshots, pricing, FAQ, footer". Framer crée une page complète.</li>
<li><strong>Edit component</strong> — Sélectionne un composant existant. "Change le fond en violet, augmente le spacing". L'IA adapte.</li>
</ul>
<h2 class="sec-h2">Prompts efficaces pour Framer AI</h2>
<table class="tbl">
<thead><tr><th>Type</th><th>Mauvais prompt</th><th>Bon prompt</th></tr></thead>
<tbody>
<tr><td><strong>Bouton</strong></td><td>"Bouton"</td><td>"Bouton CTA bleu électrique avec arrondi, padding généreux, ombre légère, text blanc et bold"</td></tr>
<tr><td><strong>Card</strong></td><td>"Carte produit"</td><td>"Carte produit avec image en haut, titre noir, prix rouge en gros, 3 étoiles jaunes, bouton acheter en gradient, border subtle grise"</td></tr>
<tr><td><strong>Page entière</strong></td><td>"Landing page startup"</td><td>"Landing page pour SaaS productivité. Dark theme (#07071a), accent cyan. Hero avec titre 48px, sous-titre, CTA + vidéo. 4 features en grid, pricing 3 plans, clients logos, CTA final. Responsive."</td></tr>
</tbody>
</table>
<h2 class="sec-h2">Le workflow AI optimal</h2>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-body"><div class="step-title">Générer la base</div><div class="step-text">Prompt détaillé → Framer AI génère. Tu as 80% du travail fait.</div></div></div>
  <div class="step"><div class="step-num">2</div><div class="step-body"><div class="step-title">Affiner interactivement</div><div class="step-text">"Change la couleur en violet", "Rends la typography plus large", "Ajoute une animation de bounce". L'IA reoit et adapte. Itération rapide.</div></div></div>
  <div class="step"><div class="step-num">3</div><div class="step-body"><div class="step-title">Exporter en React</div><div class="step-text">Une fois satisfait, exporte en React. Tu as du vrai code. Pas de chatgpt-generated garbage - c'est du composant moderne et propre.</div></div></div>
</div>
<div class="callout c-ok"><span class="callout-ico">✅</span><p><strong>Résultat :</strong> Un design professionnel et un prototype interactif en 10-15 minutes. C'est du niveau agence, sans l'agence.</p></div>
<h2 class="sec-h2">Limites et quand coder à la main</h2>
<ul class="blist">
<li><strong>Designs super custom</strong> — Si tu as un design particulier en tête (micro-interactions complexes), l'IA t\'aide mais ne remplace pas ta vision.</li>
<li><strong>Intégrations API</strong> — L'IA peut générer la UI, mais pas automatiquement connecter à ta base de données. Tu dois coder ça.</li>
<li><strong>Performances extrêmes</strong> — Si tu as besoin d'optimisations très pointues, faut coder à la main.</li>
</ul>`
  },

  l6_2: {
    tag: 'Module 6 · Framer', title: 'Personnalisation et animations',
    intro: 'C\'est ce qui rend Framer spécial : les animations fluides et les microinteractions peuvent être créées sans code. Scroll-triggered, click-triggered, timed animations - tout dans l\'interface visuelle. Ici, tu apprendras à créer des designs "wow" factor',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="25" width="30" height="30" rx="4" fill="rgba(124,58,237,.2)" stroke="rgba(124,58,237,.4)" stroke-width="1.5"/>
      <rect x="65" y="25" width="30" height="30" rx="4" fill="rgba(6,182,212,.2)" stroke="rgba(6,182,212,.4)" stroke-width="1.5"/>
      <path d="M45 40 L75 40" stroke="rgba(124,58,237,.5)" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="45" cy="40" r="2.5" fill="rgba(124,58,237,.6)"/>
      <circle cx="75" cy="40" r="2.5" fill="rgba(6,182,212,.6)"/>
    </svg>`,
    illusLabel: 'Animations Framer : de simples transitions à des interactions complexes',
    body: `<h2 class="sec-h2">Types d'animations dans Framer</h2>
<div class="tools-grid">
  <div class="tool-card"><div class="tool-ico" style="background:rgba(124,58,237,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></div><div class="tool-name">Transitions</div><div class="tool-desc">Quand un élément passe d'un état à un autre (couleur change, taille change). Smooth et élégant.</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(6,182,212,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div class="tool-name">Interactions au scroll</div><div class="tool-desc">Élément bouge/apparaît au scroll. "Quand tu scrolles la page, ce logo tourne 360°".</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(245,158,11,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg></div><div class="tool-name">Click/Tap</div><div class="tool-desc">Click sur un bouton → animation et action (ouvre modal, change section, envoie données).</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(16,185,129,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><path d="M3 12h18"/><path d="M13 6l6 6-6 6"/></svg></div><div class="tool-name">Drag/Gesture</div><div class="tool-desc">Glisse un élément, et il répond (carrousel, slider, layout changeant).</div></div>
</div>
<h2 class="sec-h2">Créer une animation scroll simple</h2>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-body"><div class="step-title">Sélectionner l'élément</div><div class="step-text">Clic sur l'élément que tu veux animer (ex: un logo).</div></div></div>
  <div class="step"><div class="step-num">2</div><div class="step-body"><div class="step-title">Ajouter une animation</div><div class="step-text">Volet droit → "Animate". Clique "On Scroll". Framer affiche les options.</div></div></div>
  <div class="step"><div class="step-num">3</div><div class="step-body"><div class="step-title">Configurer la trigger</div><div class="step-text">Start : "Quand l'élément entre dans la vue". End : "Quand il quitte". Pendant : "Rotate 0deg → 360deg".</div></div></div>
  <div class="step"><div class="step-num">4</div><div class="step-body"><div class="step-title">Scrroller et tester</div><div class="step-text">Scroller la page → ton logo tourne doucement. Très satisfaisant visuellement.</div></div></div>
</div>
<h2 class="sec-h2">Easing et timing (la vraie magie)</h2>
<ul class="blist">
<li><strong>Linear</strong> — Animation plate et robotique. Rarement ce qu'on veut.</li>
<li><strong>Ease-in-out</strong> — Démarre lent, arrive vite, finit lent. Très fluide et naturel. Défaut de Framer.</li>
<li><strong>Cubic-bezier personnalisé</strong> — Pour l'ultra-pro. Tu crée ta courbe d'accélération custom.</li>
<li><strong>Spring</strong> — Animation élastique, comme un ressort. Wow factor garanti.</li>
<li><strong>Duration</strong> — Combien de temps l'animation prend. 200ms (rapide). 800ms (lent et cinématique).</li>
</ul>
<div class="callout c-tip"><span class="callout-ico">💡</span><p><strong>Pro tip :</strong> Les meilleures animations sont subtiles. 200-500ms de duration. Ease-in-out ou custom spring. Moins, c'est plus.</p></div>`
  },

  l6_3: {
    tag: 'Module 6 · Framer', title: 'Publication Framer',
    intro: 'Ton design Framer est prêt à être partagé au monde. Framer te permet de publier directement, ou d\'exporter le code React et de le déployer n\'importe où. Dans cette leçon, tu apprendras comment publier et configurer ton domaine personnalisé.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="25" width="80" height="50" rx="6" fill="rgba(13,13,43,1)" stroke="rgba(16,185,129,.4)" stroke-width="1.5"/>
      <rect x="25" y="30" width="70" height="8" rx="3" fill="rgba(16,185,129,.2)"/>
      <rect x="25" y="42" width="65" height="4" rx="2" fill="rgba(255,255,255,.1)"/>
      <rect x="25" y="50" width="70" height="4" rx="2" fill="rgba(255,255,255,.08)"/>
      <rect x="25" y="58" width="55" height="8" rx="3" fill="rgba(16,185,129,.2)"/>
    </svg>`,
    illusLabel: 'Publication Framer sur domaine personnalisé',
    body: `<h2 class="sec-h2">Options de publication</h2>
<div class="tools-grid">
  <div class="tool-card"><div class="tool-ico" style="background:rgba(124,58,237,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div><div class="tool-name">Site Framer</div><div class="tool-desc">Publie gratuitement sur monsite.framer.app. URL partageable. Parfait pour la démo.</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(6,182,212,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg></div><div class="tool-name">Domaine custom</div><div class="tool-desc">Connects tonsite.com. Configuré en quelques clics. HTTPS auto.</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(245,158,11,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><rect x="8" y="3" width="13" height="13" rx="2" ry="2"/><path d="M4 15v-4a2 2 0 012-2h2"/></svg></div><div class="tool-name">Export React</div><div class="tool-desc">Génère du code React propre. Déploie où tu veux (Vercel, Netlify).</div></div>
</div>
<h2 class="sec-h2">Publier sur un domaine personnalisé</h2>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-body"><div class="step-title">Acheter ou avoir un domaine</div><div class="step-text">Si tu n'en as pas, achète sur OVH, Namecheap, ou Framer propose directement.</div></div></div>
  <div class="step"><div class="step-num">2</div><div class="step-body"><div class="step-title">Aller dans Settings</div><div class="step-text">Clique l'icône Settings (engrenage) en haut. "Site" → "Domain".</div></div></div>
  <div class="step"><div class="step-num">3</div><div class="step-body"><div class="step-title">Ajouter le domaine</div><div class="step-text">Clique "Add Domain". Entre tonsite.com. Framer affiche les enregistrements DNS à configurer.</div></div></div>
  <div class="step"><div class="step-num">4</div><div class="step-body"><div class="step-title">Configurer DNS</div><div class="step-text">Va chez ton registrar (OVH, Namecheap). Édite la zone DNS. Ajoute les enregistrements Framer te montre. Attend 24-48h.</div></div></div>
  <div class="step"><div class="step-num">5</div><div class="step-body"><div class="step-title">C'est bon!</div><div class="step-text">Une fois propagé, tonsite.com affiche ton design. Cadenas HTTPS vert ✅.</div></div></div>
</div>
<h2 class="sec-h2">Exporter en React pour Vercel/Netlify</h2>
<p>Si tu veux plus de contrôle ou intégrer avec d'autres services :</p>
<ul class="blist">
<li><strong>Exporter</strong> — Bouton "Export" en haut. Framer génère un projet React complet et téléchargeable.</li>
<li><strong>Code propre</strong> — Le code généré est vraiment bon. Variable CSS, composants React réutilisables. Pas du garbage généré.</li>
<li><strong>Déployer</strong> — Pousse sur GitHub. Connecte à Vercel/Netlify. Deploy automatique à chaque push.</li>
<li><strong>Avantages</strong> — Encore plus de control. Ajouter des APIs, databases, intégrations custom. Scalabilité illimitée.</li>
</ul>
<div class="callout c-ok"><span class="callout-ico">✅</span><p><strong>Résumé :</strong> Framer Publish pour démo rapide. Domaine custom pour la flexibilité. Export React pour l'ultime control. Choisir selon tes besoins.</p></div>`
  },

  // ════ MODULE 9: CERTIFICATION (3 LESSONS) ════
  l9_0: {
    tag: 'Module 9 · Certification', title: 'Brief du projet final',
    intro: 'C\'est le moment de mettre en pratique tout ce que tu as appris. Ton projet final devra démontrer ta compréhension des concepts clés : design thinking, no-code, IA, et user experience. Tu as deux options : créer TON vrai site, ou un cas fictional. Voici les détails et critères d\'évaluation.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="35" r="18" fill="rgba(124,58,237,.15)" stroke="rgba(124,58,237,.3)" stroke-width="1.5"/>
      <circle cx="80" cy="35" r="18" fill="rgba(6,182,212,.15)" stroke="rgba(6,182,212,.3)" stroke-width="1.5"/>
      <circle cx="60" cy="70" r="18" fill="rgba(245,158,11,.15)" stroke="rgba(245,158,11,.3)" stroke-width="1.5"/>
      <path d="M55 35 L65 35 M78 50 L42 60 M80 70 L40 70" stroke="rgba(255,255,255,.3)" stroke-width="1"/>
    </svg>`,
    illusLabel: 'Projet final : mélange de design, technologie, et vision',
    body: `<h2 class="sec-h2">2 options de projet</h2>
<div class="tools-grid">
  <div class="tool-card"><div class="tool-ico" style="background:rgba(124,58,237,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div><div class="tool-name">Option 1 : Ton site réel</div><div class="tool-desc">Crée un site pour TON business/portfolio/service. Ce sera utile après la formation. Plus motivant.</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(6,182,212,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M10 8h.01M10 12h.01M10 16h.01M14 8h.01M14 12h.01M14 16h.01"/></svg></div><div class="tool-name">Option 2 : Cas fictional</div><div class="tool-desc">Crée un site pour une persona imaginaire (ex: coach en leadership). Focus sur la qualité du design et du contenu.</div></div>
</div>
<h2 class="sec-h2">Critères d'évaluation</h2>
<table class="tbl">
<thead><tr><th>Critère</th><th>Excellent (100%)</th><th>Bon (75%)</th><th>Acceptable (50%)</th></tr></thead>
<tbody>
<tr><td><strong>Design (25%)</strong></td><td>Cohérent, moderne, hierarchy claire</td><td>Agréable à regarder, quelques maladresses</td><td>Basique, fonctionnel</td></tr>
<tr><td><strong>Contenu (25%)</strong></td><td>100% textes originaux, persuasif, SEO friendly</td><td>Bon contenu, parfois generic</td><td>Contenu limité, peu personnalisé</td></tr>
<tr><td><strong>UX (20%)</strong></td><td>Navigation intuitive, responsive parfait, CTA clairs</td><td>Bonne UX, quelques friction points</td><td>Fonctionne mais basique</td></tr>
<tr><td><strong>Technologie (20%)</strong></td><td>Utilise 2+ outils vus en formation. Intégrations pro</td><td>Utilise 1-2 outils correctement</td><td>Outil unique, setup basique</td></tr>
<tr><td><strong>Performance (10%)</strong></td><td>< 2s load, mobile optimisé, SEO ready</td><td>< 3s load, mobile fonctionne</td><td>Fonctionne globalement</td></tr>
</tbody>
</table>
<h2 class="sec-h2">Checklist du projet</h2>
<ul class="blist">
<li>🎯 <strong>Persona cible identifiée</strong> — Qui es-tu ? Pour qui fais-tu ce site ?</li>
<li>🎨 <strong>Design system défini</strong> — Couleurs, polices, espacements, cohérence</li>
<li>✍️ <strong>Contenu 100% original</strong> — Pas de placeholder. Textes vraie, images vraies (ta photo si personnel)</li>
<li>📱 <strong>Responsive testé</strong> — Mobile, tablette, desktop. Tous les navigateurs.</li>
<li>⚡ <strong>Performance vérifié</strong> — PageSpeed Insights > 80 score</li>
<li>🔍 <strong>SEO basique</strong> — Meta descriptions, image alt texts, headings structure</li>
<li>🔗 <strong>Tous les liens fonctionnels</strong> — Clique chaque lien. Pas de 404.</li>
<li>✅ <strong>Formulaire de contact (si applicable)</strong> — Envoi et réception d'emails testés</li>
</ul>
<div class="callout c-info"><span class="callout-ico">ℹ️</span><p><strong>Conseil important :</strong> Qualité > quantité. Un site avec 3 pages bien faites > 10 pages bâclées.</p></div>`
  },

  l9_1: {
    tag: 'Module 9 · Certification', title: 'Quiz de certification',
    intro: 'Avant de soumettre ton projet, tu dois passer un quiz de 30 questions couvrant TOUS les concepts à travers les modules. C\'est pas un test de mémoire - c\'est pour vérifier que tu peux appliquer les concepts. Questions pratiques et réflexion. Ici les sujets du quiz.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="15" width="80" height="70" rx="8" fill="rgba(13,13,43,1)" stroke="rgba(16,185,129,.4)" stroke-width="1.5"/>
      <rect x="30" y="25" width="60" height="8" rx="3" fill="rgba(16,185,129,.2)"/>
      <g>
        <rect x="30" y="38" width="8" height="8" rx="2" fill="rgba(16,185,129,.2)"/>
        <text x="45" y="46" font-size="7" fill="rgba(255,255,255,.6)">Option A</text>
      </g>
      <g>
        <rect x="30" y="50" width="8" height="8" rx="2" fill="rgba(16,185,129,.15)"/>
        <text x="45" y="58" font-size="7" fill="rgba(255,255,255,.5)">Option B</text>
      </g>
      <g>
        <rect x="30" y="62" width="8" height="8" rx="2" fill="rgba(16,185,129,.15)"/>
        <text x="45" y="70" font-size="7" fill="rgba(255,255,255,.5)">Option C</text>
      </g>
    </svg>`,
    illusLabel: 'Quiz interactif : questions applicatives sur tous les modules',
    body: `<h2 class="sec-h2">Format du quiz</h2>
<ul class="blist">
<li><strong>30 questions</strong> — QCM (4 options, 1 correcte). Pas d'essai/erreur - réfléchis.</li>
<li><strong>Durée</strong> — 45 minutes. Amplement le temps pour les réfléchir.</li>
<li><strong>Score de passage</strong> — 70% minimum (21/30 bonnes). Si < 70%, tu peux repasser une fois.</li>
<li><strong>Questions ouvertes (optionnel)</strong> — 2-3 questions de réflexion. Démontre ta compréhension profonde. Non-obligatoire mais booste le score</li>
</ul>
<h2 class="sec-h2">Répartition des sujets</h2>
<table class="tbl">
<thead><tr><th>Module</th><th># Questions</th><th>Focus</th></tr></thead>
<tbody>
<tr><td><strong>Module 0-1</strong></td><td>3</td><td>Fondations: HTML, web, no-code, terminology</td></tr>
<tr><td><strong>Module 2</strong></td><td>3</td><td>IA: ChatGPT, prompts, images</td></tr>
<tr><td><strong>Module 3</strong></td><td>4</td><td>Lovable: features, React, databases</td></tr>
<tr><td><strong>Module 4</strong></td><td>4</td><td>Wix: interface, ADI, publication</td></tr>
<tr><td><strong>Module 5</strong></td><td>4</td><td>Webflow: CMS, design system, SEO</td></tr>
<tr><td><strong>Module 6</strong></td><td>4</td><td>Framer: IA, animations, prototyping</td></tr>
<tr><td><strong>Module 7</strong></td><td>3</td><td>Déploiement: Vercel, Netlify, custom domains</td></tr>
<tr><td><strong>Module 8</strong></td><td>2</td><td>SEO, Analytics, lancement</td></tr>
</tbody>
</table>
<h2 class="sec-h2">Exemples de questions</h2>
<div class="callout c-tip"><span class="callout-ico">💡</span><p><strong>Q1 :</strong> Tu dis à un client "ton site sera responsive". Qu'est-ce que ça veut dire précisément ?<br>A. S'adapte aux écrans mobiles, tablettes, desktop<br>B. Contient des formulaires responsifs<br>C. Se met à jour en temps réel<br>D. Est hébergé sur Vercel</p></div>
<div class="callout c-info"><span class="callout-ico">ℹ️</span><p><strong>Q2 :</strong> Sur Webflow, qu'est-ce qu'une Collection ?<br>A. Un groupe de pages styled identiquement<br>B. Une table de données qui génère des pages automatiquement<br>C. Un style CSS réutilisable<br>D. Un plugin Webflow</p></div>
<div class="callout c-ok"><span class="callout-ico">✅</span><p><strong>Q3 :</strong> Quel est l'avantage principal de Framer par rapport à Figma ?<br>A. Plus facile à utiliser<br>B. Meilleure collaboration d'équipe<br>C. Framer AI et prototypage interactif sans code<br>D. Prix moins cher</p></div>
<h2 class="sec-h2">Comment se préparer</h2>
<ul class="blist">
<li><strong>Relis les notes</strong> — Chaque module a des concepts clés. Fais une synthèse rapide.</li>
<li><strong>Pense à des cas réels</strong> — "Quand j'utiliserais Webflow vs Wix ?" "Comment j'expliquerais le no-code à ma grand-mère ?"</li>
<li><strong>Pratique sur les outils</strong> — Avoir créé un petit projet sur chaque outil rend les questions évidentes.</li>
<li><strong>Pas de stress</strong> — C'est pas pour te piéger. C'est pour vérifier que tu peux appliquer ce que tu as appris.</li>
</ul>`
  },

  l9_2: {
    tag: 'Module 9 · Certification', title: 'Soumettre & Obtenir son diplôme',
    intro: 'T\'as finalisé ton projet et passé le quiz ? Parfait ! Maintenant, il faut soumettre ton projet et recevoir ton diplôme officiel. Cette dernière leçon couvre la soumission, l\'évaluation, et comment tirer parti de ta certification pour tes opportunités futures.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 65 L45 50 L60 60 L90 30" stroke="rgba(16,185,129,.5)" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="30" cy="65" r="4" fill="rgba(16,185,129,.6)"/>
      <circle cx="45" cy="50" r="4" fill="rgba(16,185,129,.6)"/>
      <circle cx="60" cy="60" r="4" fill="rgba(16,185,129,.6)"/>
      <circle cx="90" cy="30" r="4" fill="rgba(16,185,129,.8)"/>
      <path d="M60,10 L70,20 L50,20 Z" fill="rgba(16,185,129,.8)"/>
    </svg>`,
    illusLabel: 'Parcours terminé : du débutant au créateur no-code certifié',
    body: `<h2 class="sec-h2">Formulaire de soumission</h2>
<p>Une fois que ton projet est live et que tu as passé le quiz (score ≥ 70%), tu peux soumettre.</p>
<ul class="blist">
<li><strong>URL du site</strong> — Le lien public complet. https://tonsite.com</li>
<li><strong>Screenshot de la page d'accueil</strong> — Pour la vérification rapide</li>
<li><strong>Courte description (100 mots max)</strong> — "Ce site présente mon service de coaching, créé avec Webflow et Framer AI. Focus sur le design moderne et la conversion de leads."</li>
<li><strong>Tool(s) utilisé(s)</strong> — Wix ? Webflow ? Lovable ? Combinaison ?</li>
<li><strong>Qu'est-ce que tu as appris</strong> — Réflexion perso (3-5 phrases). Qu'est-ce que tu trouves maintenant facile ? Qu'est-ce qui t'a surpris ?</li>
</ul>
<h2 class="sec-h2">Processus d'évaluation</h2>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-body"><div class="step-title">Réception et vérification</div><div class="step-text">Nous recevons ta soumission. Vérification que le lien marche, que c'est un site réel et personnel.</div></div></div>
  <div class="step"><div class="step-num">2</div><div class="step-body"><div class="step-title">Évaluation détaillée</div><div class="step-text">On note le design, l'UX, le contenu, la technologie utilisée. Pas de notation arbitraire - critères clairs (voir module 9.0).</div></div></div>
  <div class="step"><div class="step-num">3</div><div class="step-body"><div class="step-title">Feedback personnalisé</div><div class="step-text">Tu reçois : ta note, tes points forts, et 2-3 axes d'amélioration futurs. Pas juste "bravo" - feedback constructif.</div></div></div>
  <div class="step"><div class="step-num">4</div><div class="step-body"><div class="step-title">Diplôme certificat</div><div class="step-text">Si évaluation positive : tu reçois un PDF certificat. À partager sur LinkedIn ! À imprimer ! À vanter !</div></div></div>
</div>
<h2 class="sec-h2">Après la certification : exploitation</h2>
<div class="tools-grid">
  <div class="tool-card"><div class="tool-ico" style="background:rgba(124,58,237,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div class="tool-name">LinkedIn</div><div class="tool-desc">Ajoute "NoCode IA Certified" à ton titre. Post le diplôme. Engage la communauté.</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(6,182,212,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div><div class="tool-name">Portfolio/CV</div><div class="tool-desc">Ajoute ton projet final au portfolio. C'est une pièce maîtresse pour attirer les clients.</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(245,158,11,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div class="tool-name">Opportunités</div><div class="tool-desc">Freelance sur Upwork/Fiverr. Agences te cherchent. Consulting pour petites entreprises.</div></div>
  <div class="tool-card"><div class="tool-ico" style="background:rgba(16,185,129,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"/></svg></div><div class="tool-name">Communauté</div><div class="tool-desc">Rejoins les groupes no-code. Partage ton parcours. Aide d'autres débutants.</div></div>
</div>
<h2 class="sec-h2">Prochaines étapes (après certification)</h2>
<ul class="blist">
<li><strong>Spécialisation</strong> — Choisir UN outil (Webflow ? Lovable ?) et devenir expert. Valeur accrue.</li>
<li><strong>Clients réels</strong> — Créer des sites pour de vrais clients. Premier cash in pour beaucoup.</li>
<li><strong>Cours avancé</strong> — Si tu veux. Animations avancées. Custom code. Intégrations API. Full-stack thinking.</li>
<li><strong>Enseigner</strong> — Crée ton propre cours. La connaissance est infinie quand tu la partages.</li>
</ul>
<div class="callout c-ok"><span class="callout-ico">✅</span><p><strong>Congratulations! 🎉</strong> Tu as terminé la NoCode IA Academy. Tu passes de "j'ai peur du no-code" à "je crée des sites comme un pro". C'est pas une blague. Tu as outillé. Continue à construire. Le meilleur est devant toi.</p></div>`
  },

  // ════ REMAINING MODULES (1, 2, 3, 7, 8) - Quick versions for brevity in JSON format ════

  l1_1: {
    tag: 'Module 1 · Fondations', title: 'C\'est quoi le No-Code ?',
    intro: 'Le no-code est la révolution du développement : créer des sites, des apps, des workflows sans toucher une seule ligne de code. Ça semble magique, mais c\'est simplement : des outils plus intelligents + une interface visuelle puissante. Dans cette leçon, on démystifie le no-code et clarifie exactement ce qu\'on peut et ne peut pas faire.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="80" height="40" rx="4" fill="rgba(6,182,212,.12)" stroke="rgba(6,182,212,.3)" stroke-width="1.5"/><circle cx="40" cy="50" r="8" fill="rgba(124,58,237,.3)"/><circle cx="60" cy="50" r="8" fill="rgba(6,182,212,.3)"/><circle cx="80" cy="50" r="8" fill="rgba(245,158,11,.3)"/><path d="M40 50 L60 50 L80 50" stroke="rgba(255,255,255,.2)" stroke-width="1" stroke-dasharray="2 2"/></svg>`,
    illusLabel: 'No-code : bloques logiques assemblés visuellement, sans code',
    body: `<h2 class="sec-h2">Définition simple du no-code</h2><p>No-code = créer des applications et des sites en assemblant des "blocs" prédéfinis, au lieu d'écrire du code.</p><p>Au lieu de :</p><div class="callout c-info"><span class="callout-ico">ℹ️</span><p><code>if (user.email === admin@example.com) { dashboard.show() }</code></p></div><p>Tu fais :</p><div class="callout c-info"><span class="callout-ico">ℹ️</span><p>IF email EQUALS admin@example.com → SHOW dashboard (interface visuelle)</p></div><h2 class="sec-h2">Low-code vs No-code vs Code</h2><table class="tbl"><thead><tr><th>Approche</th><th>Exemple</th><th>Courbe apprentissage</th><th>Flexibilité</th></tr></thead><tbody><tr><td><strong>No-code (100% visuel)</strong></td><td>Wix, Webflow, Zapier</td><td>⭐ (très facile)</td><td>⭐⭐ (limitée)</td></tr><tr><td><strong>Low-code (visuel + code optionnel)</strong></td><td>Lovable, Bubble</td><td>⭐⭐⭐ (modéré)</td><td>⭐⭐⭐⭐ (très)</td></tr><tr><td><strong>Full-code (100% code)</strong></td><td>React, Python, Node</td><td>⭐⭐⭐⭐⭐ (difficile)</td><td>⭐⭐⭐⭐⭐ (totale)</td></tr></tbody></table><h2 class="sec-h2">Mythes et réalités du no-code</h2><div class="tools-grid"><div class="tool-card"><div class="tool-ico" style="background:rgba(244,63,94,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div><div class="tool-name">Mythe : C'est la solution finale</div><div class="tool-desc">Réalité : No-code excelle pour 70% des sites. Pour le reste, tu codes. C'est un choix, pas un dogme.</div></div><div class="tool-card"><div class="tool-ico" style="background:rgba(244,63,94,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div><div class="tool-name">Mythe : Les devs vont disparaître</div><div class="tool-desc">Réalité : Les devs s'adaptent. Ils utilisent no-code pour prototype rapide, puis coding si complexe.</div></div><div class="tool-card"><div class="tool-ico" style="background:rgba(16,185,129,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></div><div class="tool-name">Vrai : C'est démocratisant</div><div class="tool-desc">Des non-techs créent maintenant des apps pro. Les gates baissent.</div></div><div class="tool-card"><div class="tool-ico" style="background:rgba(16,185,129,.15)"><svg viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></div><div class="tool-name">Vrai : Ça fait économiser du temps</div><div class="tool-desc">3-6 mois de dev classique = 3-6 semaines en no-code. Speed = money.</div></div></div><h2 class="sec-h2">Quand utiliser no-code vs code</h2><ul class="blist"><li><strong>Utilise no-code si</strong> : Landing page, blog, MVP, intranet, workflow automation, portfolio. ROI rapide attendu.</li><li><strong>Utilise code si</strong> : App ultra-custom, millions d'utilisateurs, intégrations exotiques, machine learning.</li><li><strong>Utilise low-code (no-code + code)</strong> : Besoin d'extensions custom mais 80% du produit est standard.</li></ul>`
  },

  l1_2: {
    tag: 'Module 1 · Fondations', title: 'Panorama des outils',
    intro: 'Il y a 5000+ outils no-code. Dont 100+ sérieux. Lesquels apprendre ? Lesquels vraiment utiles ? Dans cette leçon, je te présente les meilleurs outils par catégorie : website builders, apps, automation, CMS. Et quand choisir lequel.',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g><rect x="15" y="20" width="25" height="25" rx="3" fill="rgba(124,58,237,.15)" stroke="rgba(124,58,237,.3)" stroke-width="1"/><text x="27.5" y="38" text-anchor="middle" font-size="10" fill="rgba(167,139,250,1)" font-weight="700">W</text></g><g><rect x="47" y="20" width="25" height="25" rx="3" fill="rgba(6,182,212,.15)" stroke="rgba(6,182,212,.3)" stroke-width="1"/><text x="59.5" y="38" text-anchor="middle" font-size="10" fill="rgba(34,211,238,1)" font-weight="700">A</text></g><g><rect x="79" y="20" width="25" height="25" rx="3" fill="rgba(245,158,11,.15)" stroke="rgba(245,158,11,.3)" stroke-width="1"/><text x="91.5" y="38" text-anchor="middle" font-size="10" fill="rgba(251,191,36,1)" font-weight="700">C</text></g><rect x="15" y="55" width="89" height="30" rx="3" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.1)" stroke-width="1"/><rect x="18" y="58" width="20" height="5" rx="1.5" fill="rgba(255,255,255,.1)"/><rect x="18" y="66" width="20" height="5" rx="1.5" fill="rgba(255,255,255,.08)"/><rect x="18" y="74" width="20" height="5" rx="1.5" fill="rgba(255,255,255,.06)"/></svg>`,
    illusLabel: 'Écosystème no-code : websites, apps, automation et plus',
    body: `<h2 class="sec-h2">Catégories principales d'outils</h2><h3 style="color:var(--t2);margin-top:20px">🌐 Website Builders (Toujours utiles)</h3><table class="tbl"><thead><tr><th>Outil</th><th>Meilleur pour</th><th>Prix</th><th>Apprentissage</th></tr></thead><tbody><tr><td><strong>Wix</strong></td><td>PME, e-commerce simple</td><td>$14/mois+</td><td>⭐ (très facile)</td></tr><tr><td><strong>Webflow</strong></td><td>Agences, design custom</td><td>$14-99/mois</td><td>⭐⭐⭐⭐ (modéré)</td></tr><tr><td><strong>Framer</strong></td><td>Designers, prototypes</td><td>Gratuit-$12/mois</td><td>⭐⭐ (facile)</td></tr><tr><td><strong>Squarespace</strong></td><td>Portfolios créatifs</td><td>$15/mois+</td><td>⭐ (très facile)</td></tr></tbody></table><h3 style="color:var(--t2);margin-top:20px">⚙️ Low-code Apps (Programmes complets)</h3><ul class="blist"><li><strong>Lovable</strong> — React + IA. Apps web full. Meilleur rapide/qualité.</li><li><strong>Bubble</strong> — Apps complexes. Base données puissante. Plus steep learning curve.</li><li><strong>Retool</strong> — Admin panels et dashboards internes. Pour les startups tech.</li></ul><h3 style="color:var(--t2);margin-top:20px">🤖 Automation & Workflows (Connecte outils entre eux)</h3><ul class="blist"><li><strong>Zapier</strong> — Reine de l'automation. 10,000+ intégrations. "Si X, alors Y".</li><li><strong>Make (était Integromat)</strong> — Plus puissant que Zapier, moins intuitif.</li><li><strong>IFTTT</strong> — Simple et gratuit. Pour perso et petites équipes.</li></ul><h3 style="color:var(--t2);margin-top:20px">📊 CMS & Bases de données (Gère beaucoup de contenus)</h3><ul class="blist"><li><strong>Webflow CMS</strong> — Intégré. Blog/portfolio scalables.</li><li><strong>Airtable</strong> — Spreadsheet-like. Super flexible. Collaborative.</li><li><strong>Notion</strong> — Plus pour la documentation. Wiki, task management. Gratuit !</li></ul>`
  },

  l1_3: {
    tag: 'Module 1 · Fondations', title: 'Design pour non-designers',
    intro: 'Tu as peur de "pas être créatif" ? Bonne nouvelle : le design n\'est pas une magie innée. C\'est une compétence. Un système de règles. Dans cette leçon, tu apprendras les principes simples du design que tu peux appliquer immédiatement pour un résultat professionnel (même sans talent artistique).',
    illusSvg: `<svg class="illus-svg" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="50" r="15" fill="rgba(124,58,237,.2)" stroke="rgba(124,58,237,.4)" stroke-width="1.5"/><circle cx="60" cy="50" r="15" fill="rgba(6,182,212,.2)" stroke="rgba(6,182,212,.4)" stroke-width="1.5"/><circle cx="90" cy="50" r="15" fill="rgba(245,158,11,.2)" stroke="rgba(245,158,11,.4)" stroke-width="1.5"/></svg>`,
    illusLabel: 'Principes simples : couleur, typographie, spacing',
    body: `<h2 class="sec-h2">Les 5 règles incontournables du design</h2><ul class="blist"><li><strong>1. Une palette de couleurs simple</strong> — 1 couleur dominante (60%), 1 secondaire (30%), 1 accent (10%). Pas de couleurs random.</li><li><strong>2. Typographie cohérente</strong> — 2 polices max. 1 pour titres (moderne : Syne, Poppins), 1 pour texte (lisible : DM Sans, Inter).</li><li><strong>3. Spacing régulier</strong> — 8px grid system. 8px, 16px, 24px, 32px... Pas de 13px random.</li><li><strong>4. Hiérarchie visuelle claire</strong> — Titre H1 grand et gras. H2 modéré. Texte normal plus petit. Les yeux doivent savoir où regarder.</li><li><strong>5. Espace blanc (breathing room)</strong> — Moins c'est plus. Éléments espacés créent de l'élégance. Éléments tassés = amateurisme.</li></ul><h2 class="sec-h2">Cas pratiques</h2><table class="tbl"><thead><tr><th>Erreur courante</th><th>Pourquoi c'est mal</th><th>La fix simple</th></tr></thead><tbody><tr><td>5 couleurs différentes</td><td>Chaos visuel, pas d'identité</td><td>Choisis 3 couleurs et reste fidèle</td></tr><tr><td>Titre 48px, texte 16px (trop de contraste)</td><td>Les yeux ne savent pas focus</td><td>Titre 36-42px, texte 15-16px. Plus graduel.</td></tr><tr><td>Éléments serrés sans spacing</td><td>Anachronisme ancien web</td><td>Ajoute 24-32px entre sections. Ça respire.</td></tr><tr><td>3 polices différentes</td><td>Incohésion, non-professionnel</td><td>2 polices max : 1 titres, 1 texte</td></tr></tbody></table><div class="callout c-tip"><span class="callout-ico">💡</span><p><strong>Design hack :</strong> Copie un design que tu aimes. Utilise la même palette, le même spacing, la même typo. Pas du plagiat si tu l'adaptes à TON contenu. C'est s'inspirer intelligemment.</p></div>`
  },
};

// Merge avec LESSONS existant
Object.assign(LESSONS, LESSONS_ADDITIONAL);
