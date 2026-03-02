// ═══════════════════════════════════════════════════════════
// NOCODE IA ACADEMY — Admin Panel
// ═══════════════════════════════════════════════════════════

const ADMIN_KEY = 'ADMIN2025';
const STUDENTS_STORAGE_KEY = 'nca_students';

// Tracker student data
window.trackStudent = function(studentName, xp, completed, projectUrl = '') {
  let students = JSON.parse(localStorage.getItem(STUDENTS_STORAGE_KEY) || '[]');

  let student = students.find(s => s.name === studentName);
  if (!student) {
    student = {
      name: studentName,
      createdAt: new Date().toISOString(),
      sessions: 0
    };
    students.push(student);
  }

  student.lastActive = new Date().toISOString();
  student.sessions = (student.sessions || 0) + 1;
  student.xp = xp;
  student.completed = completed;
  if (projectUrl) student.projectUrl = projectUrl;

  localStorage.setItem(STUDENTS_STORAGE_KEY, JSON.stringify(students));
};

// Render Admin Panel
window.renderAdminPanel = function() {
  // Cache tous les éléments étudiants
  const sidebar = document.querySelector('.sidebar');
  const topbar = document.querySelector('.topbar');
  if (sidebar) sidebar.style.display = 'none';
  if (topbar) topbar.style.display = 'none';

  const loginPage = document.getElementById('login-page');
  loginPage.style.display = 'none';

  const app = document.getElementById('app');
  app.style.display = 'flex';

  const content = document.getElementById('content');
  content.innerHTML = `
    <div style="width:100%;padding:60px 40px;background:linear-gradient(135deg, rgba(13,13,43,.9) 0%, rgba(20,20,50,.9) 100%);min-height:100vh">
      <div style="max-width:1400px;margin:0 auto">
        <!-- Header Admin -->
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:50px;padding-bottom:30px;border-bottom:1px solid rgba(255,255,255,.1)">
          <div>
            <h1 style="font-size:42px;font-weight:700;color:#fff;margin:0;margin-bottom:8px">Tableau de Bord Admin</h1>
            <p style="color:rgba(255,255,255,.6);margin:0;font-size:14px">Gestion des élèves et suivi de progression</p>
          </div>
          <button onclick="location.reload()" style="padding:12px 28px;background:linear-gradient(135deg, #ef4444 0%, #dc2626 100%);color:#fff;border:none;border-radius:10px;cursor:pointer;font-weight:600;font-size:14px;transition:all .2s">
            ↪ Déconnexion
          </button>
        </div>

        <!-- Navigation Admin -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:50px">
          <div class="admin-nav-card" onclick="window.showAdminTab('stats')" style="cursor:pointer;background:rgba(6,182,212,.1);border:2px solid rgba(6,182,212,.3);padding:25px;text-align:center;border-radius:12px;transition:all .3s">
            <div style="font-size:36px;margin-bottom:12px">📊</div>
            <div style="font-weight:600;color:#fff;font-size:16px">Statistiques</div>
            <div style="font-size:13px;color:rgba(255,255,255,.5);margin-top:6px">Vue globale de l'activité</div>
          </div>
          <div class="admin-nav-card" onclick="window.showAdminTab('students')" style="cursor:pointer;background:rgba(124,58,237,.1);border:2px solid rgba(124,58,237,.3);padding:25px;text-align:center;border-radius:12px;transition:all .3s">
            <div style="font-size:36px;margin-bottom:12px">👥</div>
            <div style="font-weight:600;color:#fff;font-size:16px">Élèves</div>
            <div style="font-size:13px;color:rgba(255,255,255,.5);margin-top:6px">Tous les participants</div>
          </div>
          <div class="admin-nav-card" onclick="window.showAdminTab('projects')" style="cursor:pointer;background:rgba(16,185,129,.1);border:2px solid rgba(16,185,129,.3);padding:25px;text-align:center;border-radius:12px;transition:all .3s">
            <div style="font-size:36px;margin-bottom:12px">🚀</div>
            <div style="font-weight:600;color:#fff;font-size:16px">Projets</div>
            <div style="font-size:13px;color:rgba(255,255,255,.5);margin-top:6px">Projets soumis</div>
          </div>
        </div>

        <!-- Contenu Admin -->
        <div id="admin-content" style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:35px;min-height:400px">
          <!-- Sera rempli par showAdminTab -->
        </div>
      </div>
    </div>
  `;

  // Affiche les stats par défaut
  window.showAdminTab('stats');
};

// Show admin tabs
window.showAdminTab = function(tab) {
  const content = document.getElementById('admin-content');
  let students = JSON.parse(localStorage.getItem(STUDENTS_STORAGE_KEY) || '[]');

  if (tab === 'stats') {
    const totalXP = students.reduce((sum, s) => sum + (s.xp || 0), 0);
    const avgXP = students.length > 0 ? Math.round(totalXP / students.length) : 0;
    const withProjects = students.filter(s => s.projectUrl).length;
    const avgProgress = students.length > 0 ? Math.round(students.reduce((sum, s) => sum + ((s.completed || []).length / 38 * 100), 0) / students.length) : 0;

    content.innerHTML = `
      <h2 style="color:#fff;font-size:24px;margin-bottom:25px">Statistiques Globales</h2>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:30px">
        <div style="background:linear-gradient(135deg,rgba(124,58,237,.2),rgba(124,58,237,.05));border:1px solid rgba(124,58,237,.3);border-radius:12px;padding:25px;text-align:center">
          <div style="font-size:40px;font-weight:bold;color:#a78bfa;margin-bottom:10px">${students.length}</div>
          <div style="color:rgba(255,255,255,.7);font-size:14px">Élèves inscrits</div>
        </div>
        <div style="background:linear-gradient(135deg,rgba(6,182,212,.2),rgba(6,182,212,.05));border:1px solid rgba(6,182,212,.3);border-radius:12px;padding:25px;text-align:center">
          <div style="font-size:40px;font-weight:bold;color:#22d3ee;margin-bottom:10px">${totalXP}</div>
          <div style="color:rgba(255,255,255,.7);font-size:14px">XP totaux</div>
        </div>
        <div style="background:linear-gradient(135deg,rgba(16,185,129,.2),rgba(16,185,129,.05));border:1px solid rgba(16,185,129,.3);border-radius:12px;padding:25px;text-align:center">
          <div style="font-size:40px;font-weight:bold;color:#10b981;margin-bottom:10px">${withProjects}</div>
          <div style="color:rgba(255,255,255,.7);font-size:14px">Projets soumis</div>
        </div>
        <div style="background:linear-gradient(135deg,rgba(245,158,11,.2),rgba(245,158,11,.05));border:1px solid rgba(245,158,11,.3);border-radius:12px;padding:25px;text-align:center">
          <div style="font-size:40px;font-weight:bold;color:#f59e0b;margin-bottom:10px">${avgProgress}%</div>
          <div style="color:rgba(255,255,255,.7);font-size:14px">Progression moyenne</div>
        </div>
      </div>
      <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:20px;margin-top:20px">
        <h3 style="color:#fff;margin:0 0 15px 0;font-size:16px">🔑 Accès à la plateforme</h3>
        <p style="color:rgba(255,255,255,.7);margin:0;line-height:1.6;font-size:14px">
          <strong style="color:#fff">Clé étudiant:</strong> NOCODE2025<br>
          <strong style="color:#fff">Clé admin:</strong> ADMIN2025<br>
          <strong style="color:#fff">Élèves actifs aujourd'hui:</strong> <span style="color:#10b981">${students.filter(s => {
            if (!s.lastActive) return false;
            const lastActive = new Date(s.lastActive);
            const today = new Date();
            return lastActive.toDateString() === today.toDateString();
          }).length}</span>
        </p>
      </div>
    `;
  } else if (tab === 'students') {
    let html = `
      <h2 style="color:#fff;font-size:24px;margin-bottom:25px">Liste des Élèves</h2>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse">
          <thead>
            <tr style="border-bottom:2px solid rgba(255,255,255,.1)">
              <th style="text-align:left;padding:15px;color:#fff;font-weight:600">Nom</th>
              <th style="text-align:center;padding:15px;color:#fff;font-weight:600">Leçons</th>
              <th style="text-align:right;padding:15px;color:#fff;font-weight:600">XP</th>
              <th style="text-align:center;padding:15px;color:#fff;font-weight:600">Sessions</th>
              <th style="text-align:center;padding:15px;color:#fff;font-weight:600">Dernier accès</th>
              <th style="text-align:center;padding:15px;color:#fff;font-weight:600">Projet</th>
              <th style="text-align:center;padding:15px;color:#fff;font-weight:600">Action</th>
            </tr>
          </thead>
          <tbody>
    `;

    students.forEach((student, idx) => {
      const progress = (student.completed || []).length;
      const lastActive = student.lastActive ? new Date(student.lastActive).toLocaleDateString('fr-FR') : 'N/A';
      const hasProject = student.projectUrl ? '✅' : '—';
      html += `
        <tr style="border-bottom:1px solid rgba(255,255,255,.05);background:rgba(255,255,255,.01)">
          <td style="text-align:left;padding:15px;color:#fff"><strong>${student.name}</strong></td>
          <td style="text-align:center;padding:15px;color:rgba(255,255,255,.8)">${progress}/38</td>
          <td style="text-align:right;padding:15px"><strong style="color:#10b981;font-size:16px">${student.xp || 0}</strong></td>
          <td style="text-align:center;padding:15px;color:rgba(255,255,255,.8)">${student.sessions || 1}</td>
          <td style="text-align:center;padding:15px;font-size:12px;color:rgba(255,255,255,.6)">${lastActive}</td>
          <td style="text-align:center;padding:15px;font-size:18px">${hasProject}</td>
          <td style="text-align:center;padding:15px">
            <button onclick="window.editStudent(${idx})" style="padding:8px 16px;background:linear-gradient(135deg,#7c3aed,#6d28d9);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600">Lier projet</button>
          </td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;

    if (students.length === 0) {
      html = '<p style="text-align:center;color:rgba(255,255,255,.5);padding:60px 20px;font-size:16px;">Aucun élève enregistré pour le moment</p>';
    }

    content.innerHTML = html;
  } else if (tab === 'projects') {
    const withProjects = students.filter(s => s.projectUrl && s.projectUrl.trim() !== '');
    let html = `
      <h2 style="color:#fff;font-size:24px;margin-bottom:25px">Projets Soumis (${withProjects.length})</h2>
    `;

    if (withProjects.length === 0) {
      html += '<div style="text-align:center;padding:80px 20px;background:rgba(255,255,255,.02);border:2px dashed rgba(255,255,255,.1);border-radius:12px;"><p style="color:rgba(255,255,255,.5);font-size:16px;margin:0">Aucun projet soumis pour le moment</p><p style="color:rgba(255,255,255,.3);font-size:13px;margin:10px 0 0 0">Les élèves peuvent soumettre des projets via la page "Lier projet" dans l\'onglet Élèves</p></div>';
    } else {
      html += `
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:20px">
      `;
      withProjects.forEach(student => {
        html += `
          <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:22px;transition:all .3s">
            <h3 style="margin:0 0 12px 0;color:#fff;font-size:16px">${student.name}</h3>
            <p style="color:rgba(255,255,255,.6);font-size:12px;margin:0 0 16px 0;line-height:1.5">
              <span style="display:inline-block;background:rgba(124,58,237,.2);color:#a78bfa;padding:4px 10px;border-radius:6px;margin-right:8px">XP: ${student.xp || 0}</span>
              <span style="display:inline-block;background:rgba(6,182,212,.2);color:#22d3ee;padding:4px 10px;border-radius:6px">Leçons: ${(student.completed || []).length}/38</span>
            </p>
            <a href="${student.projectUrl}" target="_blank" style="display:inline-block;color:#10b981;text-decoration:none;font-weight:600;padding:10px 16px;background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.3);border-radius:8px;transition:all .2s;font-size:13px">🔗 Voir le projet</a>
          </div>
        `;
      });
      html += '</div>';
    }

    content.innerHTML = html;
  }
};

// Edit student function
window.editStudent = function(idx) {
  let students = JSON.parse(localStorage.getItem(STUDENTS_STORAGE_KEY) || '[]');
  const student = students[idx];

  const url = prompt(`Ajouter l'URL du projet pour ${student.name}:`, student.projectUrl || '');
  if (url) {
    students[idx].projectUrl = url;
    localStorage.setItem(STUDENTS_STORAGE_KEY, JSON.stringify(students));
    window.showAdminTab('students');
    alert('✅ Projet mis à jour !');
  }
};

// Check admin access
function checkAdminAccess(key) {
  return key === ADMIN_KEY;
}

