/* ═══════════════════════════════════════════════════════════════ */
/* NEXA JEE — APPLICATION MODULE                                   */
/* Interactive JEE preparation desk for Nishu Kumari               */
/* ═══════════════════════════════════════════════════════════════ */

// ─── STATE ────────────────────────────────────────
let state = {
    currentSection: 'desk',
    completedChapters: new Set(),
    testHistory: [],
    badgesEarned: new Set(),
    xp: 0,
    streak: 0,
    lastVisit: null,
    doubtsAsked: 0,
    formulasViewed: 0,
    mockState: null, // active mock test state
    userMistakes: [],
    flashcardsMastery: {}, // card id -> 'hard' | 'medium' | 'mastered'
    focusTimerSessions: 0
};

// Load saved state
function loadState() {
    try {
        const saved = localStorage.getItem('nexaJEE_state');
        if (saved) {
            const parsed = JSON.parse(saved);
            state.completedChapters = new Set(parsed.completedChapters || []);
            state.testHistory = parsed.testHistory || [];
            state.badgesEarned = new Set(parsed.badgesEarned || []);
            state.xp = parsed.xp || 0;
            state.streak = parsed.streak || 0;
            state.lastVisit = parsed.lastVisit || null;
            state.doubtsAsked = parsed.doubtsAsked || 0;
            state.formulasViewed = parsed.formulasViewed || 0;
            state.userMistakes = parsed.userMistakes || [];
            state.flashcardsMastery = parsed.flashcardsMastery || {};
            state.focusTimerSessions = parsed.focusTimerSessions || 0;
        }
    } catch (e) { console.log('State load error:', e); }
}

function saveState() {
    try {
        localStorage.setItem('nexaJEE_state', JSON.stringify({
            completedChapters: [...state.completedChapters],
            testHistory: state.testHistory,
            badgesEarned: [...state.badgesEarned],
            xp: state.xp,
            streak: state.streak,
            lastVisit: state.lastVisit,
            doubtsAsked: state.doubtsAsked,
            formulasViewed: state.formulasViewed,
            userMistakes: state.userMistakes,
            flashcardsMastery: state.flashcardsMastery,
            focusTimerSessions: state.focusTimerSessions
        }));

        if (state.currentSection === 'tracker') {
            renderTrackerSection();
        }
        if (typeof debouncedGitHubSync === 'function') {
            debouncedGitHubSync();
        }
    } catch (e) { console.log('State save error:', e); }
}

// ─── NAVIGATION ──────────────────────────────────
function navigateTo(section) {
    state.currentSection = section;
    
    // Update nav pills
    document.querySelectorAll('.nav-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.section === section);
    });
    
    // Update sections
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.toggle('active', sec.id === `section-${section}`);
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Lazy render
    if (section === 'tracker') renderTrackerSection();
    if (section === 'chapters' && !document.querySelector('.chapter-card')) renderChapters('all');
    if (section === 'formulas' && !document.querySelector('.formula-chapter')) renderFormulas('all');
    if (section === 'flashcards') initFlashcards();
    if (section === 'mistakes') initMistakeDiary();
    if (section === 'pyq' && !document.querySelector('.pyq-chapter-row')) showPYQ('physics');
    if (section === 'cheats' && !document.querySelector('.cheat-card')) showCheatSheet('tricks');
    if (section === 'badges') renderBadges();
    if (section === 'roadmap' && !document.querySelector('.week-pill')) renderRoadmap();
}

// Bind nav events
document.querySelectorAll('.nav-pill').forEach(pill => {
    pill.addEventListener('click', () => navigateTo(pill.dataset.section));
});

// ─── GREETING ────────────────────────────────────
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;
    if (hour < 5) greeting = "Burning the midnight oil, Nishu 🌙";
    else if (hour < 12) greeting = "Good morning, Nishu ☀️";
    else if (hour < 17) greeting = "Good afternoon, Nishu 🌤️";
    else if (hour < 21) greeting = "Good evening, Nishu ✨";
    else greeting = "Late night study session, Nishu 🌙";
    document.getElementById('deskGreeting').textContent = greeting;
}

// ─── STREAK MANAGEMENT ──────────────────────────
function updateStreak() {
    const today = new Date().toDateString();
    if (state.lastVisit) {
        const lastDate = new Date(state.lastVisit);
        const diff = Math.floor((new Date(today) - lastDate) / (1000 * 60 * 60 * 24));
        if (diff === 1) {
            state.streak++;
        } else if (diff > 1) {
            state.streak = 1;
        }
    } else {
        state.streak = 1;
    }
    state.lastVisit = today;
    document.getElementById('streakCount').textContent = state.streak;
    saveState();
    
    // Check streak badges
    if (state.streak >= 3) earnBadge('streak_3');
    if (state.streak >= 7) earnBadge('streak_7');
    if (state.streak >= 30) earnBadge('streak_30');
}

// ─── PROGRESS TRACKING ──────────────────────────
function updateProgress() {
    const totalChapters = 75;
    const completed = state.completedChapters.size;
    const percent = Math.round((completed / totalChapters) * 100);
    
    document.getElementById('overallPercent').textContent = `${percent}%`;
    document.getElementById('overallProgressFill').style.width = `${percent}%`;
    document.getElementById('progressBarFill').style.width = `${percent}%`;
    document.getElementById('progressText').textContent = `${completed}/${totalChapters} chapters`;
    
    // Per-subject progress
    const physicsTotal = chaptersData.physics.length;
    const chemTotal = chaptersData.chemistry.length;
    const mathsTotal = chaptersData.maths.length;
    
    let physicsComplete = 0, chemComplete = 0, mathsComplete = 0;
    state.completedChapters.forEach(ch => {
        if (ch.startsWith('physics-')) physicsComplete++;
        else if (ch.startsWith('chemistry-')) chemComplete++;
        else if (ch.startsWith('maths-')) mathsComplete++;
    });
    
    const pPct = Math.round((physicsComplete / physicsTotal) * 100);
    const cPct = Math.round((chemComplete / chemTotal) * 100);
    const mPct = Math.round((mathsComplete / mathsTotal) * 100);
    
    document.getElementById('physicsProgress').style.width = `${pPct}%`;
    document.getElementById('physicsProgressText').textContent = `${pPct}%`;
    document.getElementById('chemistryProgress').style.width = `${cPct}%`;
    document.getElementById('chemistryProgressText').textContent = `${cPct}%`;
    document.getElementById('mathsProgress').style.width = `${mPct}%`;
    document.getElementById('mathsProgressText').textContent = `${mPct}%`;
    
    // Check chapter badges
    if (completed >= 10) earnBadge('chapter_10');
    if (completed >= 75) earnBadge('chapter_all');
}

// ─── CHAPTERS RENDERING ─────────────────────────
function renderChapters(filter) {
    const grid = document.getElementById('chaptersGrid');
    grid.innerHTML = '';
    
    // Update filter pills
    document.querySelectorAll('.chapter-filters .filter-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.filter === filter);
    });
    
    const allChapters = [];
    Object.entries(chaptersData).forEach(([subject, chapters]) => {
        chapters.forEach((ch, i) => {
            allChapters.push({ ...ch, subject, index: i });
        });
    });
    
    // Sort by weightage (highest first)
    allChapters.sort((a, b) => b.weightage - a.weightage);
    
    // Filter
    const filtered = allChapters.filter(ch => {
        if (filter === 'all') return true;
        if (filter === 'high') return ch.stars === 3;
        if (filter === 'medium') return ch.stars === 2;
        return ch.subject === filter;
    });
    
    filtered.forEach(ch => {
        const chId = `${ch.subject}-${ch.index}`;
        const isComplete = state.completedChapters.has(chId);
        const subjectColors = { physics: 'var(--physics-color)', chemistry: 'var(--chemistry-color)', maths: 'var(--maths-color)' };
        const subjectBgs = { physics: 'var(--physics-dim)', chemistry: 'var(--chemistry-dim)', maths: 'var(--maths-dim)' };
        
        // Find related formulas and chapter details
        const relatedFormulas = getRelatedFormulas(ch.name, ch.subject);
        const details = chapterDetailsData[ch.subject] && chapterDetailsData[ch.subject][ch.name];
        
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.onclick = (e) => {
            if (e.target.closest('.complete-check') || e.target.closest('.chapter-detail-actions') || e.target.closest('.chapter-topic-tag-link')) return;
            card.classList.toggle('expanded');
        };
        card.innerHTML = `
            <div class="complete-check ${isComplete ? 'done' : ''}" onclick="event.stopPropagation(); toggleChapter('${chId}')" title="${isComplete ? 'Completed!' : 'Mark as complete'}">
                ${isComplete ? '✓' : ''}
            </div>
            <span class="chapter-card-subject" style="background:${subjectBgs[ch.subject]}; color:${subjectColors[ch.subject]}">${ch.subject}</span>
            <div class="chapter-card-header">
                <span class="chapter-card-title">${ch.name}</span>
                <span class="chapter-card-stars">${'⭐'.repeat(ch.stars)}</span>
            </div>
            <p style="font-size:12px; color:var(--text-muted); margin-bottom:8px;">${ch.topics}</p>
            <div class="chapter-card-meta">
                <span>📝 ${ch.qCount} Qs (10yr)</span>
                <span>📅 ${ch.pyqYears}</span>
            </div>
            <div class="chapter-card-weightage">
                <div class="weightage-bar">
                    <div class="weightage-fill" style="width:${ch.weightage * 5}%"></div>
                </div>
                <span class="weightage-text">${ch.weightage}%</span>
            </div>
            <div class="chapter-detail-panel">
                <div class="chapter-detail-divider"></div>
                
                ${details ? `
                    <!-- SYLLABUS -->
                    <h4 class="chapter-detail-heading">📋 Complete Syllabus (${details.syllabus.length} topics) — <span style="font-weight:400; font-size:11px; color:var(--accent-teal);">👆 Click any topic for Faculty Masterclass</span></h4>
                    <div class="chapter-detail-topics">
                        ${details.syllabus.map(t => {
                            const safeT = t.replace(/'/g, "\\'");
                            const safeCh = ch.name.replace(/'/g, "\\'");
                            return `<span class="chapter-topic-tag chapter-topic-tag-link" onclick="event.stopPropagation(); openTopicMasterclass('${safeT}', '${safeCh}', '${ch.subject}')" title="Click for Top Faculty explanation"><span style="margin-right:4px;">💡</span>${t}</span>`;
                        }).join('')}
                    </div>
                    
                    <!-- MOST ASKED QUESTIONS -->
                    <h4 class="chapter-detail-heading" style="margin-top:16px;">🔥 Most Asked Question Types (10 Years PYQ)</h4>
                    <div class="chapter-most-asked">
                        ${details.mostAsked.map(q => `
                            <div class="most-asked-item">
                                <div class="most-asked-info">
                                    <span class="most-asked-type">${q.type}</span>
                                    <span class="most-asked-years">${q.years}</span>
                                </div>
                                <div class="most-asked-bar-container">
                                    <div class="most-asked-bar" style="width:${Math.min(100, q.count * 5)}%"></div>
                                    <span class="most-asked-count">${q.count} Qs</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : `
                    <!-- FALLBACK: Basic topics -->
                    <h4 class="chapter-detail-heading">📖 Key Topics — <span style="font-weight:400; font-size:11px; color:var(--accent-teal);">👆 Click any topic for Faculty Masterclass</span></h4>
                    <div class="chapter-detail-topics">
                        ${ch.topics.split(', ').map(t => {
                            const trimmed = t.trim();
                            const safeT = trimmed.replace(/'/g, "\\'");
                            const safeCh = ch.name.replace(/'/g, "\\'");
                            return `<span class="chapter-topic-tag chapter-topic-tag-link" onclick="event.stopPropagation(); openTopicMasterclass('${safeT}', '${safeCh}', '${ch.subject}')" title="Click for Top Faculty explanation"><span style="margin-right:4px;">💡</span>${trimmed}</span>`;
                        }).join('')}
                    </div>
                `}
                
                <!-- KEY FORMULAS -->
                ${relatedFormulas.length > 0 ? `
                    <h4 class="chapter-detail-heading" style="margin-top:16px;">📐 Key Formulas (${relatedFormulas.length})</h4>
                    <div class="chapter-detail-formulas">
                        ${relatedFormulas.slice(0, 4).map(f => `
                            <div class="chapter-formula-item">
                                <span class="chapter-formula-name">${f.name}</span>
                                <span class="chapter-formula-expr">${f.expr}</span>
                            </div>
                        `).join('')}
                        ${relatedFormulas.length > 4 ? `<div class="chapter-formula-more">+${relatedFormulas.length - 4} more formulas</div>` : ''}
                    </div>
                ` : ''}
                
                <!-- ACTION BUTTONS -->
                <div class="chapter-detail-actions">
                    <button class="btn-chapter-action" onclick="event.stopPropagation(); navigateTo('formulas'); filterFormulas('${ch.subject}');">📐 View All Formulas</button>
                    <button class="btn-chapter-action secondary" onclick="event.stopPropagation(); navigateTo('pyq'); showPYQ('${ch.subject}');">📝 PYQ Analysis</button>
                    <button class="btn-chapter-action tertiary" onclick="event.stopPropagation(); startMockTest('${ch.subject}');">⏱️ Practice Test</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Jump to formula section for a specific topic
function jumpToFormulaTopic(topic, subject) {
    navigateTo('formulas');
    filterFormulas(subject);
    // Wait for formulas to render, then try to find and highlight matching section
    setTimeout(() => {
        const headers = document.querySelectorAll('.formula-chapter-header');
        const topicLower = topic.toLowerCase();
        for (const header of headers) {
            const title = header.querySelector('.formula-chapter-title');
            if (title && title.textContent.toLowerCase().includes(topicLower.split('—')[0].trim().split('(')[0].trim())) {
                header.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Show the formula list if hidden
                const formulaList = header.nextElementSibling;
                if (formulaList) formulaList.style.display = 'block';
                // Flash highlight
                header.parentElement.style.boxShadow = '0 0 20px rgba(79,209,197,0.4)';
                header.parentElement.style.borderColor = 'rgba(79,209,197,0.5)';
                setTimeout(() => {
                    header.parentElement.style.boxShadow = '';
                    header.parentElement.style.borderColor = '';
                }, 2500);
                return;
            }
        }
        // If no exact match, just scroll to top of formulas
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
}

// Helper: find formulas related to a chapter
function getRelatedFormulas(chapterName, subject) {
    if (!formulasData[subject]) return [];
    const chLower = chapterName.toLowerCase();
    for (const fChapter of formulasData[subject]) {
        const fLower = fChapter.chapter.toLowerCase();
        // Match if chapter names share significant words
        if (chLower.includes(fLower) || fLower.includes(chLower.split('(')[0].trim()) ||
            chLower.split(/[\s,&]+/).some(w => w.length > 3 && fLower.includes(w))) {
            return fChapter.formulas;
        }
    }
    return [];
}

function filterChapters(filter) {
    navigateTo('chapters');
    setTimeout(() => renderChapters(filter), 100);
}

function toggleChapter(chId) {
    if (state.completedChapters.has(chId)) {
        state.completedChapters.delete(chId);
    } else {
        state.completedChapters.add(chId);
        addXP(5);
    }
    saveState();
    updateProgress();
    renderChapters(state.currentSection === 'chapters' ? 
        (document.querySelector('.chapter-filters .filter-pill.active')?.dataset.filter || 'all') : 'all');
}

// ─── TOPIC MASTERCLASS (LECTURER EXPLANATION ENGINE) ───
function openTopicMasterclass(topicName, chapterName, subject) {
    const modal = document.getElementById('topicMasterclassModal');
    if (!modal) return;
    
    // Set headers
    const titleEl = document.getElementById('masterclassTopicTitle');
    if (titleEl) titleEl.textContent = topicName;
    
    const subjEl = document.getElementById('masterclassSubject');
    if (subjEl) {
        subjEl.textContent = subject.toUpperCase();
        const colors = { physics: 'var(--physics-color)', chemistry: 'var(--chemistry-color)', maths: 'var(--maths-color)' };
        const bgs = { physics: 'var(--physics-dim)', chemistry: 'var(--chemistry-dim)', maths: 'var(--maths-dim)' };
        subjEl.style.color = colors[subject] || 'var(--accent-teal)';
        subjEl.style.background = bgs[subject] || 'var(--accent-teal-dim)';
    }
    
    const chEl = document.getElementById('masterclassChapter');
    if (chEl) chEl.textContent = `Chapter: ${chapterName}`;
    
    // Resolve Masterclass Content
    const data = getTopicMasterclassContent(topicName, chapterName, subject);
    
    const bodyEl = document.getElementById('masterclassBody');
    bodyEl.innerHTML = `
        <!-- Faculty Quote / Core Law -->
        <div class="masterclass-quote-card">
            <div class="masterclass-quote-icon">👨‍🏫</div>
            <div class="masterclass-quote-text">"${data.quote}"</div>
        </div>
        
        <!-- Real-World Intuition -->
        <div class="masterclass-section">
            <div class="masterclass-section-title">💡 Real-World Intuition (The Way Kota Top Lecturers Teach It)</div>
            <div class="masterclass-intuition-text">${data.intuition}</div>
        </div>
        
        <!-- Core Formulas & Concept Desk -->
        ${data.coreFormulas && data.coreFormulas.length > 0 ? `
            <div class="masterclass-section">
                <div class="masterclass-section-title">📐 Core Concept Desk & High-Yield Formulas</div>
                <div class="masterclass-formula-grid">
                    ${data.coreFormulas.map(f => `
                        <div class="masterclass-formula-item">
                            <span class="masterclass-formula-label">${f.label}</span>
                            <code class="masterclass-formula-code">${f.formula}</code>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
        
        <!-- Kota Faculty Shortcuts & Tricks -->
        ${data.kotaTricks && data.kotaTricks.length > 0 ? `
            <div class="masterclass-section tricks">
                <div class="masterclass-section-title">⚡ Kota Faculty Speed Secrets & Inspection Tricks</div>
                <div class="masterclass-trick-list">
                    ${data.kotaTricks.map(tr => `<div class="masterclass-trick-item">${tr}</div>`).join('')}
                </div>
            </div>
        ` : ''}
        
        <!-- NTA Traps & Mistakes -->
        ${data.commonTraps && data.commonTraps.length > 0 ? `
            <div class="masterclass-section traps">
                <div class="masterclass-section-title">🚨 JEE Main Traps & Common Blunders to Avoid</div>
                <div class="masterclass-trap-list">
                    ${data.commonTraps.map(tr => `<div class="masterclass-trap-item">${tr}</div>`).join('')}
                </div>
            </div>
        ` : ''}
        
        <!-- Solved Benchmark Problem -->
        ${data.benchmarkQuestion ? `
            <div class="masterclass-section">
                <div class="masterclass-section-title">📝 Standard JEE Benchmark Question & Step-by-Step Solution</div>
                <div class="masterclass-benchmark-card">
                    <div class="masterclass-q-title">Problem Statement</div>
                    <div class="masterclass-q-text">${data.benchmarkQuestion.question}</div>
                    <div class="masterclass-q-title" style="color:var(--accent-amber);">Faculty Approach & Step-by-Step Breakdown</div>
                    <div class="masterclass-approach">${data.benchmarkQuestion.approach}</div>
                    <div class="masterclass-ans-badge">
                        <span>🎯 Correct Result:</span>
                        <span>${data.benchmarkQuestion.answer}</span>
                    </div>
                </div>
            </div>
        ` : ''}
        
        <!-- Quick Action Bar -->
        <div class="masterclass-actions">
            <button class="btn-masterclass-action primary" onclick="askAiAboutTopic('${topicName.replace(/'/g, "\\'")}', '${subject}')">
                🤖 Ask AI Tutor about "${topicName}"
            </button>
            <button class="btn-masterclass-action secondary" onclick="closeMasterclass(); jumpToFormulaTopic('${topicName.replace(/'/g, "\\'")}', '${subject}');">
                📐 Open Related Formulas
            </button>
            <button class="btn-masterclass-action secondary" onclick="closeMasterclass(); startMockTest('${subject}')">
                ⏱️ Practice ${subject.toUpperCase()} Test
            </button>
        </div>
    `;
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeMasterclass(e) {
    if (e && e.target && !e.target.classList.contains('masterclass-modal-backdrop') && !e.target.classList.contains('masterclass-close')) {
        return;
    }
    const modal = document.getElementById('topicMasterclassModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// Global Escape Key Listener for Masterclass Modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMasterclass();
});

function askAiAboutTopic(topicName, subject) {
    closeMasterclass();
    navigateTo('doubts');
    setTimeout(() => {
        const input = document.getElementById('doubtInput');
        if (input) {
            input.value = `Explain ${topicName} in ${subject} with a simple shortcut for JEE Main`;
            sendDoubt();
        }
    }, 200);
}

function jumpToFormulaTopic(topicName, subject) {
    navigateTo('formulas');
    renderFormulas(subject || 'all');
    setTimeout(() => {
        const input = document.getElementById('formulaSearch');
        if (input) {
            const firstWord = topicName.split(/[\s,&/()—\-]+/)[0] || topicName;
            input.value = firstWord;
            searchFormulas();
        }
    }, 150);
}

// Masterclass Content Resolver with Smart Synthesis Fallback
function getTopicMasterclassContent(topicName, chapterName, subject) {
    if (typeof topicMasterclassData !== 'undefined') {
        // Direct match
        if (topicMasterclassData[topicName]) {
            return topicMasterclassData[topicName];
        }
        // Case-insensitive or substring match
        const lower = topicName.toLowerCase();
        for (const [key, val] of Object.entries(topicMasterclassData)) {
            const kLower = key.toLowerCase();
            if (lower.includes(kLower) || kLower.includes(lower)) {
                return val;
            }
            const words = lower.split(/[\s,&/()—\-]+/).filter(w => w.length > 3);
            if (words.some(w => kLower.includes(w))) {
                return val;
            }
        }
    }
    
    // Dynamic Synthesis: High-Yield Lecturer Explanation for any syllabus topic
    const related = getRelatedFormulas(topicName, subject);
    const formulaList = related.length > 0 ? related.map(f => ({ label: f.name, formula: f.formula })) : [
        { label: "Core Formulation", formula: `${topicName} — standard relationship in ${chapterName}` }
    ];
    
    return {
        quote: `In JEE Main, mastering ${topicName} is about grasping the underlying physical/mathematical mechanism before touching pencil to paper!`,
        intuition: `When approaching ${topicName} in ${chapterName} (${subject.toUpperCase()}), always ask: 'What fundamental conservation law or geometrical constraint controls this system?' Whether it is conservation of energy, electric flux, or algebraic monotonicity, visualizing the system first eliminates 70% of redundant calculations. Once the governing equations are set up from first principles, algebraic simplification becomes direct and confident.`,
        coreFormulas: formulaList,
        kotaTricks: [
            `⚡ Inspection & Extreme Case Analysis: Before solving complex equations for ${topicName}, test limiting boundary conditions (e.g., zero, infinity, or symmetric points). In JEE multiple-choice questions, this technique often eliminates two wrong options immediately!`,
            `⚡ Proportionality & Dimension Check: Always verify units and dimensions of your derived expression to catch sign or power errors before selecting your answer.`
        ],
        commonTraps: [
            `🚨 Watch out for strict domain limitations and boundary assumptions when applying standard formulas in ${topicName}.`,
            `🚨 Double-check sign conventions (+ / - signs, direction of vector components, and coordinate axis definitions).`
        ],
        benchmarkQuestion: {
            question: `A typical JEE Main problem on ${topicName} in ${chapterName} tests the direct application of standard formulas under non-ideal or composite conditions.`,
            approach: `1. Identify the given parameters and state variables.\n2. Write down the fundamental governing law for ${topicName}.\n3. Substitute given constraints and boundary conditions.\n4. Solve algebraically and confirm the units match.`,
            answer: `Solved through systematic balance of governing equations.`
        }
    };
}

// ─── FORMULAS RENDERING ─────────────────────────
function renderFormulas(filter) {
    const container = document.getElementById('formulasContainer');
    container.innerHTML = '';
    
    // Update filter pills
    document.querySelectorAll('.formula-filters .filter-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.filter === filter);
    });
    
    const subjects = filter === 'all' ? ['physics', 'chemistry', 'maths'] : [filter];
    
    subjects.forEach(subject => {
        if (!formulasData[subject]) return;
        
        formulasData[subject].forEach(chapter => {
            let formulas = chapter.formulas;
            if (filter === 'critical') {
                formulas = formulas.filter(f => f.priority === 'critical');
            }
            if (formulas.length === 0) return;
            
            const chapterDiv = document.createElement('div');
            chapterDiv.className = 'formula-chapter';
            
            const subjectLabel = subject.charAt(0).toUpperCase() + subject.slice(1);
            chapterDiv.innerHTML = `
                <div class="formula-chapter-header" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'">
                    <span class="formula-chapter-title">${chapter.chapter} <span style="font-size:12px; color:var(--text-muted)">(${subjectLabel})</span></span>
                    <span class="formula-chapter-count">${formulas.length} formulas</span>
                </div>
                <div class="formula-list">
                    ${formulas.map(f => `
                        <div class="formula-item ${f.priority === 'critical' ? 'highlight-critical' : ''}">
                            <div class="formula-priority ${f.priority}"></div>
                            <div class="formula-content">
                                <div class="formula-name">${f.name}</div>
                                <div class="formula-expr">${f.expr}</div>
                                <div class="formula-note">${f.note}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            container.appendChild(chapterDiv);
        });
    });
    
    state.formulasViewed += 10;
    if (state.formulasViewed >= 50) earnBadge('formula_50');
    saveState();
}

function filterFormulas(filter) {
    renderFormulas(filter);
}

// ─── PYQ ANALYSIS ───────────────────────────────
function showPYQ(subject) {
    // Update tabs
    document.querySelectorAll('.pyq-tab').forEach(tab => {
        tab.classList.toggle('active', tab.textContent.toLowerCase().includes(subject));
    });
    
    const content = document.getElementById('pyqContent');
    const data = pyqData[subject];
    const maxTotal = Math.max(...data.map(d => d.total));
    const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
    
    content.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <h3 style="font-family:var(--font-serif); font-size:18px;">${subject.charAt(0).toUpperCase() + subject.slice(1)} — Chapter-wise Question Frequency</h3>
            <span style="font-size:12px; color:var(--text-muted)">Years: ${years.join(', ')}</span>
        </div>
        <p style="font-size:12px; color:var(--accent-teal); margin-bottom:16px;">👆 Click any chapter to see what types of questions were asked</p>
        ${data.map((ch, idx) => {
            const questionTypes = getPYQQuestionTypes(ch.chapter, subject);
            return `
            <div class="pyq-chapter-row pyq-expandable" onclick="this.classList.toggle('pyq-expanded')">
                <div class="pyq-row-main">
                    <div class="pyq-chapter-name">${ch.chapter}</div>
                    <div class="pyq-chapter-count">${ch.total} Qs</div>
                    <div class="pyq-chapter-bar">
                        <div class="pyq-chapter-bar-fill" style="width:${(ch.total / maxTotal) * 100}%"></div>
                    </div>
                    <span class="pyq-expand-icon">▾</span>
                </div>
                ${questionTypes.length > 0 ? `
                    <div class="pyq-question-types">
                        <div class="pyq-qt-header">
                            <span>🔍 Types of Questions Asked</span>
                            <span style="font-size:11px; color:var(--text-muted)">${questionTypes.length} patterns identified</span>
                        </div>
                        ${questionTypes.map(q => `
                            <div class="pyq-qt-item">
                                <div class="pyq-qt-info">
                                    <span class="pyq-qt-type">${q.type}</span>
                                    <span class="pyq-qt-badge">${q.years}</span>
                                </div>
                                <div class="pyq-qt-bar-row">
                                    <div class="pyq-qt-bar-bg">
                                        <div class="pyq-qt-bar-fill" style="width:${Math.min(100, q.count * 6)}%"></div>
                                    </div>
                                    <span class="pyq-qt-count">${q.count} Qs</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : `
                    <div class="pyq-question-types">
                        <div class="pyq-qt-header">
                            <span>📝 Common question types from this chapter</span>
                        </div>
                        <p style="font-size:12px; color:var(--text-muted); padding:8px 0;">Question type data is based on general PYQ trends. Check the Chapters section for detailed syllabus breakdown.</p>
                    </div>
                `}
            </div>
        `}).join('')}
        <div style="margin-top:24px; padding:16px; border-radius:var(--radius-md); background:var(--accent-teal-dim); border:1px solid rgba(79,209,197,0.15);">
            <h4 style="font-size:14px; margin-bottom:8px;">📊 Year-wise breakdown</h4>
            <div style="overflow-x:auto;">
                <table style="width:100%; font-size:12px; border-collapse:collapse;">
                    <tr style="color:var(--text-muted);">
                        <th style="text-align:left; padding:6px;">Chapter</th>
                        ${years.map(y => `<th style="padding:6px; text-align:center;">${y.slice(2)}</th>`).join('')}
                        <th style="padding:6px; text-align:center; color:var(--accent-teal);">Total</th>
                    </tr>
                    ${data.map(ch => `
                        <tr style="border-top:1px solid var(--border-subtle);">
                            <td style="padding:6px; font-weight:500;">${ch.chapter}</td>
                            ${ch.counts.map(c => `<td style="padding:6px; text-align:center; color:${c >= 3 ? 'var(--accent-amber)' : c >= 2 ? 'var(--text-primary)' : 'var(--text-muted)'}; font-weight:${c >= 3 ? '700' : '400'}">${c}</td>`).join('')}
                            <td style="padding:6px; text-align:center; font-weight:700; color:var(--accent-teal);">${ch.total}</td>
                        </tr>
                    `).join('')}
                </table>
            </div>
        </div>
    `;
    
    // Render predictions
    renderPredictions();
}

// Helper: Get question types for a PYQ chapter by mapping to chapterDetailsData
function getPYQQuestionTypes(pyqChapterName, subject) {
    if (!chapterDetailsData || !chapterDetailsData[subject]) return [];
    
    // Explicit mappings for all PYQ chapter names
    const pyqMap = {
        physics: {
            "Mechanics": "Mechanics (NLM, WPE, Rotational)",
            "Electrostatics & Current": "Electrostatics & Current Electricity",
            "EMI & AC": "Electromagnetic Induction & AC",
            "Modern Physics": "Modern Physics",
            "Optics": "Optics (Ray + Wave)",
            "Thermodynamics & KTG": "Thermodynamics & KTG",
            "Magnetism": "Magnetism & Magnetic Effects",
            "Waves & SHM": "Waves & Oscillations",
            "Semiconductors": "Semiconductor Electronics",
            "Fluid Mechanics": "Fluid Mechanics"
        },
        chemistry: {
            "Chemical Bonding": "Chemical Bonding & Molecular Structure",
            "Organic: GOC & Mechanisms": "Organic Chemistry: GOC & Reaction Mechanisms",
            "Aldehydes/Ketones/Acids": "Aldehydes, Ketones & Carboxylic Acids",
            "Equilibrium (Chemical+Ionic)": "Chemical Equilibrium & Ionic Equilibrium",
            "Coordination Compounds": "Coordination Compounds",
            "Electrochemistry": "Electrochemistry",
            "p-Block Elements": "p-Block Elements",
            "Chemical Kinetics": "Chemical Kinetics",
            "Thermodynamics": "Thermodynamics & Thermochemistry",
            "Solutions": "Solutions & Colligative Properties"
        },
        maths: {
            "Calculus (Diff+Int)": "Calculus (Limits, Continuity, Differentiability)",
            "Coordinate Geometry": "Coordinate Geometry (Straight Lines, Circles, Conics)",
            "Probability & Stats": "Probability & Statistics",
            "Matrices & Determinants": "Matrices & Determinants",
            "3D & Vectors": "3D Geometry & Vectors",
            "Trigonometry": "Trigonometry",
            "Differential Equations": "Differential Equations",
            "Sequences & Series": "Sequences & Series",
            "P&C": "Permutations & Combinations",
            "Complex Numbers": "Complex Numbers & Quadratic Equations"
        }
    };
    
    const mappedName = pyqMap[subject] && pyqMap[subject][pyqChapterName];
    if (mappedName && chapterDetailsData[subject][mappedName] && chapterDetailsData[subject][mappedName].mostAsked) {
        // Special case: Calculus (Diff+Int) combine Diff & Int
        if (pyqChapterName === "Calculus (Diff+Int)" && chapterDetailsData[subject]["Integration & Area Under Curves"]) {
            const diff = chapterDetailsData[subject]["Calculus (Limits, Continuity, Differentiability)"].mostAsked.slice(0, 3);
            const int = chapterDetailsData[subject]["Integration & Area Under Curves"].mostAsked.slice(0, 3);
            return [...diff, ...int];
        }
        return chapterDetailsData[subject][mappedName].mostAsked;
    }
    
    // Fallback: Fuzzy search
    const pyqLower = pyqChapterName.toLowerCase();
    for (const [fullName, details] of Object.entries(chapterDetailsData[subject])) {
        const fullLower = fullName.toLowerCase();
        const pyqWords = pyqLower.split(/[\s,&/()]+/).filter(w => w.length > 2);
        const matchCount = pyqWords.filter(w => fullLower.includes(w)).length;
        if (matchCount >= 1 && details.mostAsked) {
            return details.mostAsked;
        }
    }
    return [];
}

function renderPredictions() {
    const grid = document.getElementById('predictionsGrid');
    grid.innerHTML = '';
    
    predictionsData.forEach(pred => {
        const subjectColors = { physics: 'var(--physics-color)', chemistry: 'var(--chemistry-color)', maths: 'var(--maths-color)' };
        const card = document.createElement('div');
        card.className = 'prediction-card';
        card.innerHTML = `
            <div class="prediction-subject" style="color:${subjectColors[pred.subject]}">${pred.subject.toUpperCase()}</div>
            <div class="prediction-topic">${pred.topic}</div>
            <div class="prediction-reason">${pred.reason}</div>
            <div class="prediction-confidence" style="color:${pred.confidence >= 90 ? 'var(--accent-rose)' : 'var(--accent-amber)'}">
                🎯 Confidence: ${pred.confidence}%
            </div>
        `;
        grid.appendChild(card);
    });
}

// ─── MOCK TEST ENGINE ───────────────────────────
let mockTimer = null;
let mockTimeLeft = 0;

function startMockTest(mode) {
    let questions = [];
    let timeMinutes = 180;
    
    if (mode === 'full') {
        // Mix 10 physics + 10 chemistry + 10 maths (from available questions)
        questions = [
            ...mockQuestions.physics.slice(0, 10),
            ...mockQuestions.chemistry.slice(0, 10),
            ...mockQuestions.maths.slice(0, 10),
        ];
        timeMinutes = 90; // Adjusted for available questions
    } else {
        questions = mockQuestions[mode] || [];
        timeMinutes = 45;
    }
    
    if (questions.length === 0) {
        alert('No questions available for this mode yet!');
        return;
    }
    
    state.mockState = {
        mode,
        questions,
        answers: new Array(questions.length).fill(null),
        marked: new Set(),
        currentQ: 0,
        startTime: Date.now(),
    };
    
    mockTimeLeft = timeMinutes * 60;
    
    // Show test UI
    document.getElementById('mockLanding').style.display = 'none';
    document.getElementById('mockActive').style.display = 'block';
    document.getElementById('mockResults').style.display = 'none';
    
    // Build question nav
    renderQuestionNav();
    renderCurrentQuestion();
    startTimer();
}

function renderQuestionNav() {
    const nav = document.getElementById('mockQuestionNav');
    nav.innerHTML = '';
    state.mockState.questions.forEach((q, i) => {
        const dot = document.createElement('div');
        dot.className = `mock-q-dot ${i === state.mockState.currentQ ? 'current' : ''} ${state.mockState.answers[i] !== null ? 'answered' : ''} ${state.mockState.marked.has(i) ? 'marked' : ''}`;
        dot.textContent = i + 1;
        dot.onclick = () => goToQuestion(i);
        nav.appendChild(dot);
    });
}

function renderCurrentQuestion() {
    const area = document.getElementById('mockQuestionArea');
    const i = state.mockState.currentQ;
    const q = state.mockState.questions[i];
    const answer = state.mockState.answers[i];
    
    const subjectColors = {
        'Mechanics': 'var(--physics-dim)', 'Electrostatics': 'var(--physics-dim)', 'EMI': 'var(--physics-dim)',
        'Modern Physics': 'var(--physics-dim)', 'Optics': 'var(--physics-dim)', 'Thermodynamics': 'var(--physics-dim)',
        'Magnetism': 'var(--physics-dim)', 'Waves': 'var(--physics-dim)', 'Semiconductors': 'var(--physics-dim)',
        'Current Electricity': 'var(--physics-dim)', 'Gravitation': 'var(--physics-dim)',
        'Chemical Bonding': 'var(--chemistry-dim)', 'Equilibrium': 'var(--chemistry-dim)', 'Electrochemistry': 'var(--chemistry-dim)',
        'Chemical Kinetics': 'var(--chemistry-dim)', 'Organic Chemistry': 'var(--chemistry-dim)',
        'Coordination Compounds': 'var(--chemistry-dim)', 'p-Block': 'var(--chemistry-dim)', 'Solutions': 'var(--chemistry-dim)',
        'Calculus': 'var(--maths-dim)', 'Coordinate Geometry': 'var(--maths-dim)', 'Probability': 'var(--maths-dim)',
        'Matrices': 'var(--maths-dim)', 'Vectors': 'var(--maths-dim)', 'Trigonometry': 'var(--maths-dim)',
        'Differential Equations': 'var(--maths-dim)', 'Sequences': 'var(--maths-dim)', 'Complex Numbers': 'var(--maths-dim)',
    };
    
    let bg = 'var(--bg-elevated)';
    Object.keys(subjectColors).forEach(key => {
        if (q.chapter.includes(key) || key.includes(q.chapter)) bg = subjectColors[key];
    });
    
    area.innerHTML = `
        <div class="mock-q-badge" style="background:${bg}">${q.chapter}</div>
        <div class="mock-q-number">Question ${i + 1} of ${state.mockState.questions.length} ${q.type === 'integer' ? '(Numerical / Integer Type — No negative marking)' : '(MCQ — +4/-1)'}</div>
        <div class="mock-q-text">${q.text}</div>
        ${q.type === 'mcq' ? `
            <div class="mock-q-options">
                ${q.options.map((opt, j) => `
                    <div class="mock-q-option ${answer === j ? 'selected' : ''}" onclick="selectAnswer(${j})">
                        <span class="mock-q-option-letter">${String.fromCharCode(65 + j)}</span>
                        <span>${opt}</span>
                    </div>
                `).join('')}
            </div>
        ` : `
            <div>
                <label style="font-size:13px; color:var(--text-muted); display:block; margin-bottom:8px;">Enter your numerical answer:</label>
                <input type="number" class="mock-q-integer-input" id="integerInput" value="${answer !== null ? answer : ''}" onchange="selectAnswer(parseFloat(this.value))" placeholder="Type answer...">
            </div>
        `}
    `;
}

function selectAnswer(value) {
    state.mockState.answers[state.mockState.currentQ] = value;
    renderQuestionNav();
    renderCurrentQuestion();
}

function goToQuestion(i) {
    state.mockState.currentQ = i;
    renderQuestionNav();
    renderCurrentQuestion();
}

function nextQuestion() {
    if (state.mockState.currentQ < state.mockState.questions.length - 1) {
        state.mockState.currentQ++;
        renderQuestionNav();
        renderCurrentQuestion();
    }
}

function prevQuestion() {
    if (state.mockState.currentQ > 0) {
        state.mockState.currentQ--;
        renderQuestionNav();
        renderCurrentQuestion();
    }
}

function markQuestion() {
    const i = state.mockState.currentQ;
    if (state.mockState.marked.has(i)) {
        state.mockState.marked.delete(i);
    } else {
        state.mockState.marked.add(i);
    }
    renderQuestionNav();
}

function clearAnswer() {
    state.mockState.answers[state.mockState.currentQ] = null;
    renderQuestionNav();
    renderCurrentQuestion();
}

function startTimer() {
    clearInterval(mockTimer);
    mockTimer = setInterval(() => {
        mockTimeLeft--;
        if (mockTimeLeft <= 0) {
            clearInterval(mockTimer);
            submitMockTest();
            return;
        }
        const h = Math.floor(mockTimeLeft / 3600);
        const m = Math.floor((mockTimeLeft % 3600) / 60);
        const s = mockTimeLeft % 60;
        document.getElementById('mockTimer').textContent = 
            `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        
        // Flash red when < 5 min
        if (mockTimeLeft < 300) {
            document.getElementById('mockTimer').style.animation = 'pulse 1s infinite';
        }
    }, 1000);
}

function submitMockTest() {
    clearInterval(mockTimer);
    
    const ms = state.mockState;
    let correct = 0, wrong = 0, unattempted = 0;
    let marks = 0;
    const questionResults = [];
    
    ms.questions.forEach((q, i) => {
        const ans = ms.answers[i];
        let isCorrect = false;
        
        if (ans === null || ans === '') {
            unattempted++;
            questionResults.push({ ...q, userAnswer: null, isCorrect: false, status: 'unattempted' });
        } else if (q.type === 'mcq') {
            if (ans === q.correct) {
                correct++;
                marks += 4;
                isCorrect = true;
            } else {
                wrong++;
                marks -= 1;
            }
            questionResults.push({ ...q, userAnswer: ans, isCorrect, status: isCorrect ? 'correct' : 'wrong' });
        } else {
            // Integer type
            if (Math.abs(ans - q.correct) < 0.01) {
                correct++;
                marks += 4;
                isCorrect = true;
            } else {
                wrong++;
                // No negative for integer type
            }
            questionResults.push({ ...q, userAnswer: ans, isCorrect, status: isCorrect ? 'correct' : 'wrong' });
        }
    });
    
    const maxMarks = ms.questions.length * 4;
    const percentage = Math.round((Math.max(0, marks) / maxMarks) * 100);
    const timeTaken = Math.round((Date.now() - ms.startTime) / 1000);
    const performanceScale = Math.min(10, Math.max(1, Math.round(percentage / 10)));
    
    // Save to history
    const result = {
        date: new Date().toLocaleDateString(),
        mode: ms.mode,
        total: ms.questions.length,
        correct, wrong, unattempted,
        marks, maxMarks, percentage,
        performanceScale,
        timeTaken,
        questionResults,
    };
    
    state.testHistory.push(result);
    addXP(correct * 5 + 10); // XP for taking test
    
    // Badge checks
    earnBadge('first_test');
    if (performanceScale === 10) earnBadge('perfect_10');
    if (ms.mode === 'physics' && percentage >= 80) earnBadge('physics_pro');
    if (ms.mode === 'chemistry' && percentage >= 80) earnBadge('chemistry_pro');
    if (ms.mode === 'maths' && percentage >= 80) earnBadge('maths_pro');
    if (state.testHistory.length >= 5) earnBadge('mock_5');
    if (state.testHistory.length >= 10) earnBadge('mock_10');
    
    // Check improvement
    if (state.testHistory.length >= 2) {
        const prev = state.testHistory[state.testHistory.length - 2];
        if (percentage - prev.percentage >= 20) earnBadge('improver');
    }
    
    saveState();
    
    // Render results
    renderResults(result);
}

function renderResults(result) {
    document.getElementById('mockActive').style.display = 'none';
    document.getElementById('mockResults').style.display = 'block';
    
    const resultsDiv = document.getElementById('mockResults');
    
    // Performance scale colors
    const scaleColors = ['#fc8181','#fc8181','#f6ad55','#f6ad55','#f6e05e','#f6e05e','#68d391','#68d391','#4fd1c5','#4fd1c5'];
    
    // Subject-wise analysis
    const subjectAnalysis = {};
    result.questionResults.forEach(qr => {
        const subj = getSubjectFromChapter(qr.chapter);
        if (!subjectAnalysis[subj]) subjectAnalysis[subj] = { total: 0, correct: 0, wrong: 0 };
        subjectAnalysis[subj].total++;
        if (qr.status === 'correct') subjectAnalysis[subj].correct++;
        if (qr.status === 'wrong') subjectAnalysis[subj].wrong++;
    });
    
    const timeMin = Math.floor(result.timeTaken / 60);
    const timeSec = result.timeTaken % 60;
    
    // Feedback generation
    let strengths = [], improvements = [], actions = [];
    
    if (result.percentage >= 80) strengths.push("Excellent overall performance! You're exam-ready for this section.");
    if (result.correct > result.wrong) strengths.push("Good accuracy — you're making more correct choices than wrong ones.");
    Object.entries(subjectAnalysis).forEach(([subj, data]) => {
        const pct = Math.round((data.correct / data.total) * 100);
        if (pct >= 80) strengths.push(`Strong in ${subj} (${pct}% accuracy)`);
        if (pct < 50) improvements.push(`${subj} needs attention — only ${pct}% accuracy. Revise fundamentals.`);
    });
    
    if (result.unattempted > 3) improvements.push(`${result.unattempted} questions left unattempted. Remember: Integer type has NO negative marking!`);
    if (result.wrong > result.correct) improvements.push("Too many wrong answers. Focus on accuracy over speed.");
    
    actions.push("Review every wrong answer below — understand WHY it went wrong.");
    actions.push("Revise formulas for chapters where you made errors.");
    if (result.percentage < 60) actions.push("Go back to basics — re-study the weak chapters before next mock.");
    actions.push("Take another mock in 2-3 days to track improvement.");
    
    resultsDiv.innerHTML = `
        <div class="mock-results-card">
            <div class="mock-results-title">Test Complete! 🎉</div>
            <div class="mock-results-score">${result.marks}/${result.maxMarks}</div>
            <div class="mock-results-max">${result.percentage}% · ${result.mode.toUpperCase()} Mode · ${timeMin}m ${timeSec}s</div>
            
            <div class="mock-results-stats">
                <div class="mock-results-stat">
                    <div class="mock-results-stat-number" style="color:var(--accent-green)">${result.correct}</div>
                    <div class="mock-results-stat-label">Correct</div>
                </div>
                <div class="mock-results-stat">
                    <div class="mock-results-stat-number" style="color:var(--accent-rose)">${result.wrong}</div>
                    <div class="mock-results-stat-label">Wrong</div>
                </div>
                <div class="mock-results-stat">
                    <div class="mock-results-stat-number" style="color:var(--text-muted)">${result.unattempted}</div>
                    <div class="mock-results-stat-label">Unattempted</div>
                </div>
                <div class="mock-results-stat">
                    <div class="mock-results-stat-number" style="color:var(--accent-amber)">${result.correct}/${result.total}</div>
                    <div class="mock-results-stat-label">Accuracy</div>
                </div>
            </div>
            
            <div class="mock-results-scale">
                <h3 style="font-size:18px;">Performance Scale</h3>
                <div class="performance-scale">
                    ${scaleColors.map((color, i) => `
                        <div class="scale-segment" style="background:${i < result.performanceScale ? color : 'var(--bg-secondary)'}; ${i < result.performanceScale ? 'box-shadow: 0 0 8px ' + color : ''}"></div>
                    `).join('')}
                    <span style="font-size:24px; font-weight:700; margin-left:12px; color:${scaleColors[result.performanceScale - 1]}">${result.performanceScale}/10</span>
                </div>
            </div>
            
            ${Object.keys(subjectAnalysis).length > 1 ? `
                <div style="margin-top:24px;">
                    <h3 style="font-size:16px; margin-bottom:12px;">Subject-wise Breakdown</h3>
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px;">
                        ${Object.entries(subjectAnalysis).map(([subj, data]) => {
                            const pct = Math.round((data.correct / data.total) * 100);
                            return `
                                <div style="padding:16px; border-radius:var(--radius-md); background:var(--bg-elevated); border:1px solid var(--border-subtle);">
                                    <div style="font-size:14px; font-weight:600; margin-bottom:6px;">${subj}</div>
                                    <div style="font-size:24px; font-weight:700; color:${pct >= 70 ? 'var(--accent-green)' : pct >= 50 ? 'var(--accent-amber)' : 'var(--accent-rose)'}">${pct}%</div>
                                    <div style="font-size:12px; color:var(--text-muted)">${data.correct}/${data.total} correct</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
        
        <div class="mock-results-feedback">
            <h3>📊 Detailed Feedback & Improvement Plan</h3>
            
            ${strengths.length > 0 ? `
                <div class="feedback-section feedback-strength">
                    <h4>💪 Strengths</h4>
                    <ul>${strengths.map(s => `<li>✅ ${s}</li>`).join('')}</ul>
                </div>
            ` : ''}
            
            ${improvements.length > 0 ? `
                <div class="feedback-section feedback-improve">
                    <h4>⚠️ Areas for Improvement</h4>
                    <ul>${improvements.map(s => `<li>📌 ${s}</li>`).join('')}</ul>
                </div>
            ` : ''}
            
            <div class="feedback-section feedback-action">
                <h4>🎯 Action Plan</h4>
                <ul>${actions.map(s => `<li>→ ${s}</li>`).join('')}</ul>
            </div>
        </div>
        
        <div style="margin-bottom:24px;">
            <h3 style="font-family:var(--font-serif); font-size:20px; margin-bottom:16px;">📝 Question-wise Review</h3>
            ${result.questionResults.map((qr, i) => `
                <div style="padding:16px; margin-bottom:12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid ${qr.status === 'correct' ? 'rgba(104,211,145,0.3)' : qr.status === 'wrong' ? 'rgba(252,129,129,0.3)' : 'var(--border-subtle)'};">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span style="font-weight:600;">Q${i+1}. ${qr.chapter}</span>
                        <span style="padding:3px 10px; border-radius:var(--radius-full); font-size:12px; font-weight:600; background:${qr.status === 'correct' ? 'var(--accent-green-dim)' : qr.status === 'wrong' ? 'var(--accent-rose-dim)' : 'var(--bg-elevated)'}; color:${qr.status === 'correct' ? 'var(--accent-green)' : qr.status === 'wrong' ? 'var(--accent-rose)' : 'var(--text-muted)'}">
                            ${qr.status === 'correct' ? '✓ Correct' : qr.status === 'wrong' ? '✗ Wrong' : '— Skipped'}
                        </span>
                    </div>
                    <p style="font-size:14px; margin-bottom:8px;">${qr.text}</p>
                    ${qr.type === 'mcq' ? `
                        <div style="font-size:13px; color:var(--text-secondary);">
                            <div>Your answer: <strong style="color:${qr.isCorrect ? 'var(--accent-green)' : 'var(--accent-rose)'}">${qr.userAnswer !== null ? qr.options[qr.userAnswer] : 'Not attempted'}</strong></div>
                            <div>Correct answer: <strong style="color:var(--accent-green)">${qr.options[qr.correct]}</strong></div>
                        </div>
                    ` : `
                        <div style="font-size:13px; color:var(--text-secondary);">
                            <div>Your answer: <strong>${qr.userAnswer !== null ? qr.userAnswer : 'Not attempted'}</strong></div>
                            <div>Correct answer: <strong style="color:var(--accent-green)">${qr.correct}</strong></div>
                        </div>
                    `}
                    <div style="margin-top:8px; padding:10px; border-radius:var(--radius-sm); background:var(--accent-teal-dim); font-size:13px; color:var(--accent-teal); line-height:1.6;">
                        💡 <strong>Explanation:</strong> ${qr.explanation}
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div style="text-align:center;">
            <button class="btn-primary" onclick="backToMockLanding()">← Back to Mock Tests</button>
            <button class="btn-secondary" style="margin-left:12px;" onclick="startMockTest('${result.mode}')">Retake Test</button>
        </div>
    `;
}

function backToMockLanding() {
    document.getElementById('mockLanding').style.display = 'block';
    document.getElementById('mockActive').style.display = 'none';
    document.getElementById('mockResults').style.display = 'none';
    renderMockHistory();
}

function renderMockHistory() {
    const list = document.getElementById('mockHistoryList');
    if (state.testHistory.length === 0) {
        list.innerHTML = '<p class="empty-state">No tests taken yet. Start your first mock!</p>';
        return;
    }
    
    list.innerHTML = state.testHistory.map((t, i) => `
        <div class="mock-history-item">
            <span>${t.date} — ${t.mode.toUpperCase()}</span>
            <span class="score-cell">${t.marks}/${t.maxMarks}</span>
            <span>${t.percentage}%</span>
            <span>${t.performanceScale}/10</span>
        </div>
    `).join('');
}

function getSubjectFromChapter(chapter) {
    const physicsChapters = ['Mechanics', 'Electrostatics', 'EMI', 'Modern Physics', 'Optics', 'Thermodynamics', 'Magnetism', 'Waves', 'Semiconductors', 'Current Electricity', 'Gravitation'];
    const chemChapters = ['Chemical Bonding', 'Equilibrium', 'Electrochemistry', 'Chemical Kinetics', 'Organic Chemistry', 'Coordination Compounds', 'p-Block', 'Solutions'];
    
    for (const c of physicsChapters) {
        if (chapter.includes(c) || c.includes(chapter)) return 'Physics';
    }
    for (const c of chemChapters) {
        if (chapter.includes(c) || c.includes(chapter)) return 'Chemistry';
    }
    return 'Mathematics';
}

// ─── CHEAT SHEETS ───────────────────────────────
function showCheatSheet(type) {
    document.querySelectorAll('.cheats-tab').forEach(tab => {
        tab.classList.toggle('active', tab.textContent.toLowerCase().includes(type === 'lastmin' ? 'last' : type));
    });
    
    const content = document.getElementById('cheatsContent');
    const data = cheatSheetData[type];
    
    content.innerHTML = data.map(card => `
        <div class="cheat-card">
            <div class="cheat-card-icon">${card.icon}</div>
            <h4>${card.title}</h4>
            <ul>
                ${card.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// ─── BADGES ─────────────────────────────────────
function renderBadges() {
    const grid = document.getElementById('badgesGrid');
    grid.innerHTML = '';
    
    let totalEarned = 0;
    
    badgesData.forEach(badge => {
        const earned = state.badgesEarned.has(badge.id);
        if (earned) totalEarned++;
        
        const card = document.createElement('div');
        card.className = `badge-card ${earned ? 'earned' : 'locked'}`;
        card.innerHTML = `
            <div class="badge-icon">${badge.icon}</div>
            <div class="badge-name">${badge.name}</div>
            <div class="badge-desc">${badge.desc}</div>
            <div class="badge-xp">${earned ? '✓ Earned' : `${badge.xp} XP`}</div>
        `;
        grid.appendChild(card);
    });
    
    document.getElementById('totalBadges').textContent = totalEarned;
    document.getElementById('totalXP').textContent = `${state.xp} XP`;
    
    // Rank
    let currentRank = rankLevels[0];
    let nextRank = rankLevels[1];
    for (let i = rankLevels.length - 1; i >= 0; i--) {
        if (state.xp >= rankLevels[i].minXP) {
            currentRank = rankLevels[i];
            nextRank = rankLevels[i + 1] || null;
            break;
        }
    }
    document.getElementById('currentRank').textContent = currentRank.name;
    
    if (nextRank) {
        const progress = ((state.xp - currentRank.minXP) / (nextRank.minXP - currentRank.minXP)) * 100;
        document.getElementById('xpFill').style.width = `${progress}%`;
        document.getElementById('xpNext').textContent = `Next: ${nextRank.minXP} XP for ${nextRank.name}`;
    } else {
        document.getElementById('xpFill').style.width = '100%';
        document.getElementById('xpNext').textContent = 'Max rank achieved! 🏆';
    }
}

function earnBadge(badgeId) {
    if (state.badgesEarned.has(badgeId)) return;
    
    const badge = badgesData.find(b => b.id === badgeId);
    if (!badge) return;
    
    state.badgesEarned.add(badgeId);
    state.xp += badge.xp;
    saveState();
    
    // Show notification
    showBadgeNotification(badge);
}

function addXP(amount) {
    state.xp += amount;
    saveState();
}

function showBadgeNotification(badge) {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed; top: 20px; right: 20px; z-index: 10000;
        padding: 16px 24px; border-radius: 12px;
        background: linear-gradient(135deg, #1a1a20, #22222a);
        border: 1px solid rgba(246,173,85,0.3);
        box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(246,173,85,0.2);
        display: flex; align-items: center; gap: 12px;
        animation: fadeSlideIn 0.5s ease-out;
        max-width: 350px;
    `;
    notif.innerHTML = `
        <span style="font-size:32px;">${badge.icon}</span>
        <div>
            <div style="font-size:11px; color:var(--accent-amber); font-weight:600; text-transform:uppercase; letter-spacing:0.1em;">Badge Earned!</div>
            <div style="font-size:15px; font-weight:600; color:var(--text-primary);">${badge.name}</div>
            <div style="font-size:12px; color:var(--text-secondary);">${badge.desc} · +${badge.xp} XP</div>
        </div>
    `;
    document.body.appendChild(notif);
    
    // Confetti effect
    spawnConfetti();
    
    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.transform = 'translateY(-20px)';
        notif.style.transition = 'all 0.5s ease-out';
        setTimeout(() => notif.remove(), 500);
    }, 4000);
}

function spawnConfetti() {
    const colors = ['#4fd1c5', '#f6ad55', '#fc8181', '#b794f4', '#68d391', '#63b3ed'];
    for (let i = 0; i < 30; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.cssText = `
            left: ${Math.random() * 100}vw;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            animation: confetti-fall ${1.5 + Math.random() * 2}s linear forwards;
            animation-delay: ${Math.random() * 0.5}s;
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
            width: ${4 + Math.random() * 8}px;
            height: ${4 + Math.random() * 8}px;
        `;
        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 4000);
    }
}

// ─── ROADMAP ────────────────────────────────────
function renderRoadmap() {
    const slider = document.getElementById('weekSlider');
    slider.innerHTML = '';
    
    roadmapData.forEach((week, i) => {
        const pill = document.createElement('button');
        pill.className = `week-pill ${i === 0 ? 'active' : ''}`;
        pill.textContent = `Week ${week.week}`;
        pill.onclick = () => showWeek(i);
        slider.appendChild(pill);
    });
    
    showWeek(0);
}

function showWeek(index) {
    document.querySelectorAll('.week-pill').forEach((p, i) => {
        p.classList.toggle('active', i === index);
    });
    
    const week = roadmapData[index];
    const detail = document.getElementById('roadmapDetail');
    
    detail.innerHTML = `
        <div class="roadmap-week-title">Week ${week.week}</div>
        <div class="roadmap-week-theme">${week.theme}</div>
        ${week.days.map(day => `
            <div class="roadmap-day">
                <div class="roadmap-day-label">${day.day}</div>
                <div class="roadmap-day-content">
                    <div>${day.subjects.map(s => `<span class="subject-tag ${s}">${s}</span>`).join('')}</div>
                    <h4>${day.title}</h4>
                    <p>${day.detail}</p>
                </div>
            </div>
        `).join('')}
    `;
}

// ─── DOUBTS / CHAT ──────────────────────────────
function sendDoubt() {
    const input = document.getElementById('doubtInput');
    const text = input.value.trim();
    if (!text) return;
    
    input.value = '';
    addUserMessage(text);
    
    state.doubtsAsked++;
    if (state.doubtsAsked >= 10) earnBadge('doubt_10');
    saveState();
    
    // Simulate thinking delay
    setTimeout(() => {
        const response = generateResponse(text);
        addBotMessage(response);
    }, 800);
}

function askQuickDoubt(text) {
    document.getElementById('doubtInput').value = '';
    addUserMessage(text);
    
    state.doubtsAsked++;
    saveState();
    
    setTimeout(() => {
        const response = doubtResponses[text] || generateResponse(text);
        addBotMessage(response);
    }, 600);
}

function addUserMessage(text) {
    const messages = document.getElementById('doubtMessages');
    const msg = document.createElement('div');
    msg.className = 'doubt-message user';
    msg.innerHTML = `
        <div class="doubt-avatar">👧</div>
        <div class="doubt-bubble">${text}</div>
    `;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

function addBotMessage(text) {
    const messages = document.getElementById('doubtMessages');
    const msg = document.createElement('div');
    msg.className = 'doubt-message bot';
    msg.innerHTML = `
        <div class="doubt-avatar">👩‍🏫</div>
        <div class="doubt-bubble">${text.replace(/\n/g, '<br>')}</div>
    `;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

function generateResponse(text) {
    const lower = text.toLowerCase();
    
    // Check for specific topics
    if (lower.includes('integration') || lower.includes('integral')) {
        return `Great question about integration, Nishu! 🧮\n\n**Key Integration Techniques for JEE**:\n\n1. **Substitution**: For √(a²-x²), put x = a sinθ\n2. **By Parts**: ILATE rule — ∫u dv = uv - ∫v du\n3. **Partial Fractions**: For P(x)/Q(x) when deg(P) < deg(Q)\n4. **Special**: ∫eˣ[f(x)+f'(x)]dx = eˣf(x) + C\n\n**JEE Super Tip**: Most JEE integrals can be solved by just 3 methods:\n→ Substitution (50% of problems)\n→ By Parts (30%)\n→ Partial Fractions (20%)\n\nWant me to explain any specific type? 🎯`;
    }
    
    if (lower.includes('formula') || lower.includes('formulas')) {
        return `Here's how to remember formulas effectively, Nishu! 📐\n\n**The WRITE method**:\n1. **W**rite formulas by hand (not typing!)\n2. **R**epeat daily for 7 days → long-term memory\n3. **I**nterconnect related formulas\n4. **T**est yourself without looking\n5. **E**xplain to someone else (even imaginary!)\n\n**Tip**: Go to the Formula Vault section — I've marked all critical formulas with 🔴. Start with those!\n\nWould you like formulas for a specific chapter? 💪`;
    }
    
    if (lower.includes('nervous') || lower.includes('stress') || lower.includes('worried') || lower.includes('scared')) {
        return `Hey Nishu, it's completely normal to feel nervous! 💝\n\n**Remember these facts**:\n→ You've been preparing consistently\n→ Lakhs of students appear but you're PREPARING — that already sets you apart\n→ JEE is just one exam — it does NOT define your worth\n\n**Quick Stress Busters**:\n1. 4-7-8 breathing: Inhale 4s, Hold 7s, Exhale 8s\n2. Close your eyes and visualize yourself solving questions confidently\n3. Take a 10-min walk — physical movement reduces cortisol\n4. Talk to someone you trust\n\n**My belief**: Consistent effort ALWAYS pays off. You've got this, champion! 🏆\n\nWould you like a quick quiz to boost your confidence? 😊`;
    }
    
    if (lower.includes('physics') && (lower.includes('hard') || lower.includes('difficult'))) {
        return `I understand, Nishu! Physics can feel overwhelming. Here's my approach: 🎯\n\n**The 3-Step Physics Strategy**:\n\n**Step 1: Conceptual Foundation** (Don't skip this!)\n→ Read NCERT thoroughly for each chapter\n→ Understand the 'WHY' behind every formula\n→ Draw diagrams for every problem\n\n**Step 2: Problem Solving Pattern**\n→ Read problem → Draw diagram → Identify given/find\n→ Choose correct principle (energy? momentum? force?)\n→ Write equations → Solve\n\n**Step 3: Practice Progression**\n→ Week 1: NCERT examples + exercises\n→ Week 2: Previous year JEE questions\n→ Week 3: Advanced problems\n\n**Easiest marks in Physics**: Units & Dimensions, Modern Physics, Semiconductors\n**Most scoring**: Mechanics + Electrodynamics (40% of paper!)\n\nYou'll love physics once it clicks. Let's work on it together! 💪`;
    }
    
    if (lower.includes('organic') || lower.includes('reaction') || lower.includes('mechanism')) {
        return `Organic Chemistry is all about PATTERNS, Nishu! 🧪\n\n**The Pattern Recognition Approach**:\n\n**Category 1: Electrophilic Reactions**\n→ EAS (Aromatic), Electrophilic Addition\n→ Think: electron-rich attacks electron-poor\n\n**Category 2: Nucleophilic Reactions**\n→ SN1, SN2, Addition to C=O\n→ Think: electron-rich species attacks positive center\n\n**Category 3: Elimination**\n→ E1, E2, Dehydration\n→ Think: losing HX or H₂O\n\n**Memory Trick for Named Reactions**:\n→ Aldol = ALDehyde + enOL → β-hydroxy aldehyde\n→ Cannizzaro = CAN't have α-H → disproportionation\n→ Wittig = give a WING to carbonyl → alkene\n\n**Daily Practice**: 10 product prediction problems. In 2 weeks, you'll master it! 🔥`;
    }
    
    if (lower.includes('schedule') || lower.includes('plan') || lower.includes('timetable')) {
        return `Here's a daily timetable suggestion for you, Nishu! 📋\n\n**6:00 AM** — Wake up, freshen up\n**6:30-8:30** — Physics (2 hours) — Best focus time!\n**8:30-9:00** — Breakfast + break\n**9:00-11:00** — Mathematics (2 hours)\n**11:00-11:30** — Short break + snack\n**11:30-1:00** — Chemistry (1.5 hours)\n**1:00-2:00** — Lunch + rest\n**2:00-3:30** — Problem solving (mixed)\n**3:30-4:00** — Break\n**4:00-5:30** — Weak area focus\n**5:30-6:00** — Exercise/walk 🏃‍♀️\n**6:00-7:30** — Revision + formula review\n**7:30-8:00** — Dinner\n**8:00-9:30** — Mock test practice / PYQ\n**9:30-10:00** — Quick revision of day's work\n**10:00 PM** — Sleep! 😴\n\n**Total study**: 10-11 hours (quality > quantity!)\n\nCheck out the Roadmap section for your 16-week plan! 🗺️`;
    }
    
    // Default response
    return `That's a great question, Nishu! 🤔\n\nLet me help you with that. Here's what I suggest:\n\n1. Check the **Formula Vault** for relevant formulas\n2. Look at **PYQ Analysis** for how this topic was tested\n3. Try related problems in **Mock Tests**\n\nCould you be more specific about which concept or problem you need help with? I'm here to make it crystal clear! 💡\n\n**Quick links**:\n→ Click "Formulas" for the formula vault\n→ Click "PYQ Analysis" for previous year patterns\n→ Click "Cheat Sheets" for quick tricks\n\nRemember: No question is too small or too silly. Ask away! 😊`;
}

// ─── EXCEL DOWNLOAD ─────────────────────────────
function downloadExcel() {
    // Generate CSV content for the study plan
    let csv = '\ufeff'; // BOM for Excel UTF-8
    csv += 'NEXA JEE 2027 — 16-Week Study Plan for Nishu Kumari\n\n';
    csv += 'Week,Day,Date (Approx),Subject(s),Topic,Details,Status,Notes\n';
    
    const startDate = new Date();
    let dayCounter = 0;
    
    roadmapData.forEach(week => {
        week.days.forEach(day => {
            const date = new Date(startDate);
            date.setDate(date.getDate() + dayCounter);
            const dateStr = date.toLocaleDateString('en-IN');
            const subjects = day.subjects.join(' + ').toUpperCase();
            
            // Escape commas and quotes in CSV
            const escapeCsv = (str) => `"${str.replace(/"/g, '""')}"`;
            
            csv += `${week.week},${day.day},${dateStr},${escapeCsv(subjects)},${escapeCsv(day.title)},${escapeCsv(day.detail)},☐ Not Started,\n`;
            dayCounter++;
        });
    });
    
    csv += '\n\n=== HIGH WEIGHTAGE CHAPTERS ===\n';
    csv += 'Subject,Chapter,Weightage (%),Priority,Questions (10yr),Frequency,Completed\n';
    
    Object.entries(chaptersData).forEach(([subject, chapters]) => {
        chapters.forEach(ch => {
            csv += `${subject.toUpperCase()},${ch.name},${ch.weightage},${'⭐'.repeat(ch.stars)},${ch.qCount},${ch.pyqYears},☐\n`;
        });
    });
    
    csv += '\n\n=== CRITICAL FORMULAS ===\n';
    csv += 'Subject,Chapter,Formula Name,Formula,Priority,Notes/Tricks\n';
    
    Object.entries(formulasData).forEach(([subject, chapters]) => {
        chapters.forEach(ch => {
            ch.formulas.filter(f => f.priority === 'critical').forEach(f => {
                const escapeCsv = (str) => `"${str.replace(/"/g, '""')}"`;
                csv += `${subject.toUpperCase()},${escapeCsv(ch.chapter)},${escapeCsv(f.name)},${escapeCsv(f.expr)},🔴 CRITICAL,${escapeCsv(f.note)}\n`;
            });
        });
    });
    
    csv += '\n\n=== PREDICTED HOT TOPICS (JAN 2027) ===\n';
    csv += 'Subject,Topic,Confidence %,Reasoning\n';
    
    predictionsData.forEach(pred => {
        const escapeCsv = (str) => `"${str.replace(/"/g, '""')}"`;
        csv += `${pred.subject.toUpperCase()},${escapeCsv(pred.topic)},${pred.confidence}%,${escapeCsv(pred.reason)}\n`;
    });
    
    // Download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Nexa_JEE_2027_StudyPlan_Nishu.csv';
    link.click();
    
    addXP(5);
    saveState();
}

// ─── DEEP-WORK SPRINT FOCUS TIMER ───────────────
let focusTimerInterval = null;
let focusTimerSeconds = 50 * 60; // 50-minute deep work sprint
let focusTimerRunning = false;
let focusTimerIsBreak = false;

function toggleFocusTimer() {
    const pill = document.getElementById('focusTimerPill');
    const label = document.getElementById('focusTimerLabel');
    const icon = document.getElementById('focusTimerIcon');

    if (focusTimerRunning) {
        // Pause
        clearInterval(focusTimerInterval);
        focusTimerRunning = false;
        if (pill) pill.classList.remove('running');
        if (label) label.textContent = 'Paused';
        if (icon) icon.textContent = '⏸️';
    } else {
        // Start / Resume
        focusTimerRunning = true;
        if (pill) pill.classList.add('running');
        if (label) label.textContent = focusTimerIsBreak ? 'Break' : 'Focusing';
        if (icon) icon.textContent = focusTimerIsBreak ? '☕' : '🔥';

        focusTimerInterval = setInterval(() => {
            if (focusTimerSeconds > 0) {
                focusTimerSeconds--;
                updateFocusTimerDisplay();
            } else {
                // Timer finished
                clearInterval(focusTimerInterval);
                focusTimerRunning = false;
                if (pill) pill.classList.remove('running');

                if (!focusTimerIsBreak) {
                    // Completed a 50m focus sprint!
                    state.focusTimerSessions = (state.focusTimerSessions || 0) + 1;
                    addXP(25);
                    saveState();
                    alert("🎉 Outstanding work, Nishu! You completed a full 50-minute Deep-Work Sprint (+25 XP). Enjoy a 10-minute relaxation break.");
                    focusTimerIsBreak = true;
                    focusTimerSeconds = 10 * 60;
                    if (label) label.textContent = 'Break';
                    if (icon) icon.textContent = '☕';
                } else {
                    // Completed break
                    alert("🔔 Break over, champion! Ready for another focused sprint?");
                    focusTimerIsBreak = false;
                    focusTimerSeconds = 50 * 60;
                    if (label) label.textContent = 'Sprint';
                    if (icon) icon.textContent = '⏱️';
                }
                updateFocusTimerDisplay();
            }
        }, 1000);
    }
}

function updateFocusTimerDisplay() {
    const display = document.getElementById('focusTimerDisplay');
    if (!display) return;
    const mins = Math.floor(focusTimerSeconds / 60);
    const secs = focusTimerSeconds % 60;
    display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// ─── ACTIVE RECALL FORMULA FLASHCARDS ───────────
let fcActiveIndex = 0;
let fcCurrentList = [];
let fcFilter = 'all';

function initFlashcards() {
    if (typeof flashcardsData === 'undefined') return;

    if (fcFilter === 'all') {
        fcCurrentList = [...flashcardsData];
    } else {
        fcCurrentList = flashcardsData.filter(c => c.subject === fcFilter);
    }

    if (fcActiveIndex >= fcCurrentList.length) {
        fcActiveIndex = 0;
    }

    // Update count badge
    const totalCountEl = document.getElementById('fcCountAll');
    if (totalCountEl) totalCountEl.textContent = flashcardsData.length;

    renderActiveFlashcard();
    updateFlashcardMasteryStats();
}

function filterFlashcards(subject) {
    fcFilter = subject;
    fcActiveIndex = 0;

    document.querySelectorAll('.flashcard-filters .filter-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.subject === subject);
    });

    initFlashcards();
}

function renderActiveFlashcard() {
    const wrapper = document.getElementById('flashcardWrapper');
    if (wrapper) wrapper.classList.remove('flipped');

    if (!fcCurrentList || fcCurrentList.length === 0) return;
    const card = fcCurrentList[fcActiveIndex];
    if (!card) return;

    // Elements
    const badgeFront = document.getElementById('fcSubjectBadge');
    const badgeBack = document.getElementById('fcSubjectBadgeBack');
    const chapFront = document.getElementById('fcChapterText');
    const chapBack = document.getElementById('fcChapterTextBack');
    const promptText = document.getElementById('fcPromptText');
    const formulaText = document.getElementById('fcFormulaText');
    const insightText = document.getElementById('fcInsightText');
    const mnemonicText = document.getElementById('fcMnemonicText');
    const counterText = document.getElementById('fcCounterText');

    if (badgeFront) badgeFront.textContent = card.subject.toUpperCase();
    if (badgeBack) badgeBack.textContent = card.subject.toUpperCase() + ' · FACULTY PRO-TIP';
    if (chapFront) chapFront.textContent = card.chapter;
    if (chapBack) chapBack.textContent = card.chapter;
    if (promptText) promptText.textContent = card.front;
    if (formulaText) formulaText.textContent = card.back;
    if (insightText) insightText.innerHTML = `💡 <strong>Faculty Insight:</strong> ${card.insight}`;
    if (mnemonicText) mnemonicText.innerHTML = `🧠 <strong>Recall Key:</strong> ${card.mnemonic}`;

    const currentMastery = state.flashcardsMastery[card.id];
    const statusLabel = currentMastery === 'mastered' ? '🟢 Mastered' : currentMastery === 'medium' ? '🟡 Reviewing' : currentMastery === 'hard' ? '🔴 Needs Practice' : '⚪ Unrated';

    if (counterText) {
        counterText.textContent = `Card ${fcActiveIndex + 1} of ${fcCurrentList.length} · ${statusLabel}`;
    }
}

function flipActiveFlashcard() {
    const wrapper = document.getElementById('flashcardWrapper');
    if (wrapper) {
        wrapper.classList.toggle('flipped');
    }
}

function nextFlashcard() {
    if (!fcCurrentList || fcCurrentList.length === 0) return;
    fcActiveIndex = (fcActiveIndex + 1) % fcCurrentList.length;
    renderActiveFlashcard();
}

function prevFlashcard() {
    if (!fcCurrentList || fcCurrentList.length === 0) return;
    fcActiveIndex = (fcActiveIndex - 1 + fcCurrentList.length) % fcCurrentList.length;
    renderActiveFlashcard();
}

function rateActiveFlashcard(rating) {
    if (!fcCurrentList || fcCurrentList.length === 0) return;
    const card = fcCurrentList[fcActiveIndex];
    if (!card) return;

    const prevRating = state.flashcardsMastery[card.id];
    state.flashcardsMastery[card.id] = rating;

    if (rating === 'mastered' && prevRating !== 'mastered') {
        addXP(5);
    }
    saveState();
    updateFlashcardMasteryStats();

    // Advance card with smooth transition
    setTimeout(() => {
        nextFlashcard();
    }, 250);
}

function updateFlashcardMasteryStats() {
    if (typeof flashcardsData === 'undefined') return;
    const total = flashcardsData.length;
    let masteredCount = 0;
    flashcardsData.forEach(c => {
        if (state.flashcardsMastery[c.id] === 'mastered') masteredCount++;
    });

    const pct = Math.round((masteredCount / total) * 100);
    const masteryText = document.getElementById('fcMasteryText');
    const progressFill = document.getElementById('fcProgressFill');

    if (masteryText) masteryText.textContent = `Mastered: ${masteredCount} / ${total} (${pct}%)`;
    if (progressFill) progressFill.style.width = `${pct}%`;
}

// ─── IITian MISTAKE DIARY & NTA TRAP VAULT ─────────
let currentMistakeTab = 'traps';
let currentMistakeFilter = 'all';

function initMistakeDiary() {
    renderTraps();
    renderUserMistakes(currentMistakeFilter);
    updateMistakeStats();
}

function renderTraps() {
    const grid = document.getElementById('trapsGrid');
    if (!grid || typeof classicTrapsData === 'undefined') return;

    grid.innerHTML = classicTrapsData.map(trap => `
        <div class="trap-card">
            <div class="trap-card-header">
                <span class="trap-subject-badge subject-tag ${trap.subject}">${trap.subject.toUpperCase()}</span>
                <span class="trap-freq-badge">⚠️ ${trap.frequency}</span>
            </div>
            <h3 class="trap-title">${trap.title}</h3>
            <div class="trap-problem-box">
                <strong>📌 The Problem Scenario:</strong><br>${trap.problem}
            </div>
            <div class="trap-danger-box">
                <strong>🚨 The NTA Trick / Student Instinct Mistake:</strong><br>${trap.trap}
            </div>
            <div class="trap-prevention-box">
                <strong>💡 IITian Master Rule:</strong><br>${trap.prevention}
            </div>
        </div>
    `).join('');
}

function switchMistakeTab(tab) {
    currentMistakeTab = tab;
    const trapsBtn = document.getElementById('tabTrapsBtn');
    const logBtn = document.getElementById('tabLogBtn');
    const trapsContent = document.getElementById('mistakesTrapsContent');
    const logContent = document.getElementById('mistakesLogContent');

    if (trapsBtn) trapsBtn.classList.toggle('active', tab === 'traps');
    if (logBtn) logBtn.classList.toggle('active', tab === 'log');
    if (trapsContent) trapsContent.classList.toggle('active', tab === 'traps');
    if (logContent) logContent.classList.toggle('active', tab === 'log');

    if (tab === 'log') {
        renderUserMistakes(currentMistakeFilter);
        updateMistakeStats();
    }
}

function toggleMistakeForm() {
    const formCard = document.getElementById('mistakeFormCard');
    if (!formCard) return;
    const isHidden = formCard.style.display === 'none' || formCard.style.display === '';
    formCard.style.display = isHidden ? 'block' : 'none';
}

function saveUserMistake() {
    const subjEl = document.getElementById('mFormSubject');
    const chapEl = document.getElementById('mFormChapter');
    const questEl = document.getElementById('mFormQuestion');
    const typeEl = document.getElementById('mFormType');
    const lessonEl = document.getElementById('mFormLesson');

    if (!chapEl || !lessonEl) return;
    const chapter = chapEl.value.trim();
    const lesson = lessonEl.value.trim();
    const question = questEl ? questEl.value.trim() : '';

    if (!chapter || !lesson) {
        alert("Please provide the Chapter/Topic name and your Golden Rule / Lesson!");
        return;
    }

    const newMistake = {
        id: 'mistake_' + Date.now(),
        subject: subjEl ? subjEl.value : 'physics',
        chapter: chapter,
        question: question || 'Self-study / Mock test problem',
        errorType: typeEl ? typeEl.value : 'Conceptual Gap',
        lesson: lesson,
        status: 'pending',
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    state.userMistakes.unshift(newMistake);
    addXP(10);
    saveState();

    // Reset inputs
    chapEl.value = '';
    if (questEl) questEl.value = '';
    if (lessonEl) lessonEl.value = '';

    toggleMistakeForm();
    renderUserMistakes(currentMistakeFilter);
    updateMistakeStats();
}

function filterUserMistakes(filter) {
    currentMistakeFilter = filter;
    document.querySelectorAll('.mistake-filter-row .filter-pill').forEach(btn => {
        btn.classList.remove('active');
    });
    if (filter === 'all') document.getElementById('mfAll')?.classList.add('active');
    if (filter === 'pending') document.getElementById('mfPending')?.classList.add('active');
    if (filter === 'mastered') document.getElementById('mfMastered')?.classList.add('active');

    renderUserMistakes(filter);
}

function renderUserMistakes(filter = 'all') {
    const list = document.getElementById('userMistakesList');
    if (!list) return;

    let items = state.userMistakes || [];
    if (filter === 'pending') items = items.filter(m => m.status !== 'mastered');
    if (filter === 'mastered') items = items.filter(m => m.status === 'mastered');

    if (items.length === 0) {
        list.innerHTML = `
            <div style="text-align:center; padding: 32px 16px; background:var(--bg-card); border-radius:var(--radius-md); border:1px dashed var(--border-subtle); color:var(--text-muted);">
                <div style="font-size:32px; margin-bottom:8px;">📕</div>
                <p style="font-size:14px; margin-bottom:6px;">No mistakes found in this filter.</p>
                <p style="font-size:12px; color:var(--text-secondary);">"The difference between an average student and an AIR &lt; 1000 is how zealously they track and review their mistakes."</p>
            </div>
        `;
        return;
    }

    list.innerHTML = items.map(m => `
        <div class="user-mistake-card ${m.status === 'mastered' ? 'resolved' : ''}">
            <div class="user-mistake-header">
                <div style="display:flex; align-items:center; gap:8px;">
                    <span class="subject-tag ${m.subject}">${m.subject.toUpperCase()}</span>
                    <span class="user-mistake-title">${m.chapter}</span>
                </div>
                <span class="user-mistake-type-pill">${m.errorType}</span>
            </div>
            <p style="font-size:13.5px; color:var(--text-secondary); margin:0;"><strong>Q:</strong> ${m.question}</p>
            <div class="user-mistake-lesson">
                <strong>🛡️ Golden Rule (Never Repeat):</strong> ${m.lesson}
            </div>
            <div class="user-mistake-footer">
                <span style="font-size:11.5px; color:var(--text-muted);">${m.date} · Status: <strong>${m.status === 'mastered' ? '🟢 Mastered (Immune)' : '⏳ Pending Review'}</strong></span>
                <div style="display:flex; gap:12px;">
                    <button class="btn-mistake-action" onclick="toggleResolveMistake('${m.id}')">
                        ${m.status === 'mastered' ? '↩ Re-test Error' : '✓ Mark Immune / Mastered'}
                    </button>
                    <button class="btn-mistake-action delete" onclick="deleteUserMistake('${m.id}')">🗑️ Remove</button>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleResolveMistake(id) {
    const m = state.userMistakes.find(item => item.id === id);
    if (!m) return;

    if (m.status === 'mastered') {
        m.status = 'pending';
    } else {
        m.status = 'mastered';
        addXP(15);
    }

    saveState();
    renderUserMistakes(currentMistakeFilter);
    updateMistakeStats();
}

function deleteUserMistake(id) {
    if (!confirm("Are you sure you want to remove this error log?")) return;
    state.userMistakes = state.userMistakes.filter(m => m.id !== id);
    saveState();
    renderUserMistakes(currentMistakeFilter);
    updateMistakeStats();
}

function updateMistakeStats() {
    const mistakes = state.userMistakes || [];
    const total = mistakes.length;
    const resolved = mistakes.filter(m => m.status === 'mastered').length;
    const pct = total === 0 ? 0 : Math.round((resolved / total) * 100);

    const totalEl = document.getElementById('mistakeTotalCount');
    const resEl = document.getElementById('mistakeResolvedPercent');
    const topEl = document.getElementById('mistakeTopPattern');
    const userCountEl = document.getElementById('userMistakeCount');

    if (totalEl) totalEl.textContent = total;
    if (resEl) resEl.textContent = pct + '%';
    if (userCountEl) userCountEl.textContent = total;

    if (mistakes.length === 0) {
        if (topEl) topEl.textContent = 'None yet';
    } else {
        const counts = {};
        mistakes.forEach(m => {
            counts[m.errorType] = (counts[m.errorType] || 0) + 1;
        });
        let maxCount = 0;
        let topPattern = 'None';
        for (const [type, count] of Object.entries(counts)) {
            if (count > maxCount) {
                maxCount = count;
                topPattern = type;
            }
        }
        const short = topPattern.split('/')[0].trim();
        if (topEl) topEl.textContent = short;
    }
}

// ═══════════════════════════════════════════════════
// GITHUB CLOUD SYNC & STUDENT PROGRESS TRACKER
// ═══════════════════════════════════════════════════

let gitHubSyncTimeout = null;
const GITHUB_REPO_OWNER = 'revanth-dev1';
const GITHUB_REPO_NAME = 'NexaJEE';
const GITHUB_FILE_PATH = 'student_progress.json';

function getGitHubToken() {
    return localStorage.getItem('nexa_github_token') || '';
}

function getComprehensiveProgressReport() {
    let physicsTotal = 0, physicsDone = 0, physicsDoneList = [];
    let chemTotal = 0, chemDone = 0, chemDoneList = [];
    let mathsTotal = 0, mathsDone = 0, mathsDoneList = [];

    if (typeof chaptersData !== 'undefined') {
        (chaptersData.physics || []).forEach((ch, i) => {
            physicsTotal++;
            const id = `physics-${i}`;
            if (state.completedChapters.has(id)) {
                physicsDone++;
                physicsDoneList.push(ch.name);
            }
        });
        (chaptersData.chemistry || []).forEach((ch, i) => {
            chemTotal++;
            const id = `chemistry-${i}`;
            if (state.completedChapters.has(id)) {
                chemDone++;
                chemDoneList.push(ch.name);
            }
        });
        (chaptersData.maths || []).forEach((ch, i) => {
            mathsTotal++;
            const id = `maths-${i}`;
            if (state.completedChapters.has(id)) {
                mathsDone++;
                mathsDoneList.push(ch.name);
            }
        });
    }

    const totalChapters = physicsTotal + chemTotal + mathsTotal;
    const completedChapters = physicsDone + chemDone + mathsDone;
    const overallPct = totalChapters === 0 ? 0 : Math.round((completedChapters / totalChapters) * 100);

    // Mock test stats
    const tests = state.testHistory || [];
    const testsCount = tests.length;
    let avgScore = 0;
    let bestScore = 0;
    if (testsCount > 0) {
        const sum = tests.reduce((acc, t) => acc + (t.percentage || 0), 0);
        avgScore = Math.round(sum / testsCount);
        bestScore = Math.max(...tests.map(t => t.percentage || 0));
    }

    // Flashcard stats
    let fcMastered = 0, fcReview = 0, fcHard = 0;
    const totalFc = typeof flashcardsData !== 'undefined' ? flashcardsData.length : 18;
    Object.values(state.flashcardsMastery || {}).forEach(status => {
        if (status === 'mastered') fcMastered++;
        else if (status === 'medium') fcReview++;
        else if (status === 'hard') fcHard++;
    });

    // Mistake stats
    const mistakes = state.userMistakes || [];
    const mistakesResolved = mistakes.filter(m => m.status === 'mastered').length;
    const resolutionRate = mistakes.length === 0 ? '0%' : Math.round((mistakesResolved / mistakes.length) * 100) + '%';

    const counts = {};
    mistakes.forEach(m => { counts[m.errorType] = (counts[m.errorType] || 0) + 1; });
    let topVuln = 'None';
    let maxC = 0;
    for (const [k, v] of Object.entries(counts)) {
        if (v > maxC) { maxC = v; topVuln = k; }
    }

    const now = new Date();
    const dateFormatted = now.toLocaleDateString('en-IN', {
        day: 'numeric', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });

    return {
        student: "Nishu Kumari",
        target: "JEE Main 2027",
        lastUpdated: now.toISOString(),
        lastUpdatedFormatted: dateFormatted,
        overallProgress: {
            totalChapters: totalChapters,
            completedChapters: completedChapters,
            percentage: overallPct,
            physics: {
                total: physicsTotal,
                completed: physicsDone,
                percentage: physicsTotal === 0 ? 0 : Math.round((physicsDone / physicsTotal) * 100),
                completedList: physicsDoneList
            },
            chemistry: {
                total: chemTotal,
                completed: chemDone,
                percentage: chemTotal === 0 ? 0 : Math.round((chemDone / chemTotal) * 100),
                completedList: chemDoneList
            },
            mathematics: {
                total: mathsTotal,
                completed: mathsDone,
                percentage: mathsTotal === 0 ? 0 : Math.round((mathsDone / mathsTotal) * 100),
                completedList: mathsDoneList
            }
        },
        studyEffort: {
            xp: state.xp,
            streakDays: state.streak,
            focusSessions: state.focusTimerSessions || 0,
            focusMinutes: (state.focusTimerSessions || 0) * 50,
            doubtsAsked: state.doubtsAsked,
            formulasViewed: state.formulasViewed
        },
        mockTests: {
            totalAttempted: testsCount,
            averageScore: avgScore,
            bestScore: bestScore,
            history: tests.slice(0, 10)
        },
        flashcards: {
            total: totalFc,
            mastered: fcMastered,
            reviewing: fcReview,
            hard: fcHard,
            masteryPercentage: Math.round((fcMastered / totalFc) * 100)
        },
        mistakeDiary: {
            totalLogged: mistakes.length,
            masteredImmune: mistakesResolved,
            resolutionRate: resolutionRate,
            topVulnerability: topVuln,
            recentEntries: mistakes.slice(0, 10)
        },
        rawState: {
            completedChapters: [...state.completedChapters],
            testHistory: state.testHistory,
            badgesEarned: [...state.badgesEarned],
            xp: state.xp,
            streak: state.streak,
            lastVisit: state.lastVisit,
            doubtsAsked: state.doubtsAsked,
            formulasViewed: state.formulasViewed,
            userMistakes: state.userMistakes,
            flashcardsMastery: state.flashcardsMastery,
            focusTimerSessions: state.focusTimerSessions
        }
    };
}

function debouncedGitHubSync() {
    clearTimeout(gitHubSyncTimeout);
    gitHubSyncTimeout = setTimeout(() => {
        syncProgressToGitHub(true);
    }, 4000);
}

async function syncProgressToGitHub(isSilent = false) {
    const token = getGitHubToken();
    const dot = document.getElementById('syncStatusDot');
    const text = document.getElementById('syncStatusText');
    const pill = document.getElementById('cloudSyncPill');
    const bannerStatus = document.getElementById('trackerSyncStatusText');
    const bannerTime = document.getElementById('trackerLastSyncTime');

    if (!token) {
        if (dot) dot.textContent = '🟢';
        if (text) text.textContent = 'Local Active';
        if (pill) pill.classList.remove('syncing');
        if (bannerStatus) bannerStatus.textContent = 'Saved Locally in Browser Storage';
        if (bannerTime) bannerTime.textContent = 'Local persistence active · Click Settings to connect GitHub';
        if (!isSilent) {
            openSyncModal();
            const feedback = document.getElementById('syncFeedback');
            if (feedback) {
                feedback.style.display = 'block';
                feedback.style.background = 'rgba(246, 173, 85, 0.15)';
                feedback.style.color = 'var(--accent-amber)';
                feedback.innerHTML = 'ℹ️ Progress is saved safely on your device! To enable automatic commits directly into GitHub <code>student_progress.json</code>, enter your GitHub Personal Access Token below and click Save & Sync.';
            }
        }
        return;
    }

    if (dot) dot.textContent = '🟡';
    if (text) text.textContent = 'Syncing...';
    if (pill) pill.classList.add('syncing');

    try {
        const report = getComprehensiveProgressReport();
        const contentStr = JSON.stringify(report, null, 2);
        
        // Base64 encode for UTF-8
        const utf8Bytes = new TextEncoder().encode(contentStr);
        let binaryStr = '';
        for (let i = 0; i < utf8Bytes.length; i++) {
            binaryStr += String.fromCharCode(utf8Bytes[i]);
        }
        const b64Content = btoa(binaryStr);

        // Get current sha
        const getUrl = `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/${GITHUB_FILE_PATH}`;
        const getRes = await fetch(getUrl, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        let sha = null;
        if (getRes.ok) {
            const data = await getRes.json();
            sha = data.sha;
        }

        // Put updated content
        const putPayload = {
            message: `Update Nishu's progress: ${report.overallProgress.percentage}% syllabus completed [Auto-Sync]`,
            content: b64Content,
            branch: 'main'
        };
        if (sha) {
            putPayload.sha = sha;
        }

        const putRes = await fetch(getUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(putPayload)
        });

        if (putRes.ok) {
            const timeStr = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
            localStorage.setItem('nexa_last_sync', new Date().toISOString());

            if (dot) dot.textContent = '🟢';
            if (text) text.textContent = 'Synced';
            if (pill) pill.classList.remove('syncing');
            if (bannerStatus) bannerStatus.textContent = 'Auto-Sync Enabled · Connected to revanth-dev1/NexaJEE';
            if (bannerTime) bannerTime.textContent = `Last Synced: Today at ${timeStr} IST`;

            if (!isSilent) {
                alert(`✅ Progress Synced to GitHub!\n\nAll of Nishu's course progress (${report.overallProgress.completedChapters} chapters, ${report.studyEffort.focusMinutes} focus mins, ${report.mockTests.totalAttempted} mock tests) has been securely committed to student_progress.json on GitHub.`);
            }
        } else {
            const errJson = await putRes.json().catch(() => ({}));
            throw new Error(errJson.message || 'GitHub API returned ' + putRes.status);
        }
    } catch (err) {
        console.warn('GitHub Sync Notice:', err);
        if (dot) dot.textContent = '⚪';
        if (text) text.textContent = 'Local';
        if (pill) pill.classList.remove('syncing');
        if (bannerStatus) bannerStatus.textContent = 'Saved Locally in Browser Storage';
        if (bannerTime) bannerTime.textContent = 'Offline cache active';

        if (!isSilent) {
            alert('Cloud Sync notice: Progress is saved safely in local storage. To enable direct GitHub auto-commit, check your Personal Access Token in Sync Settings.');
        }
    }
}

async function restoreProgressFromCloud() {
    if (!confirm("This will restore Nishu's progress from student_progress.json on GitHub. Any new unsynced local data will be replaced. Continue?")) return;

    try {
        const url = `https://raw.githubusercontent.com/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/main/${GITHUB_FILE_PATH}?t=${Date.now()}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Could not fetch remote file: " + res.status);
        
        const data = await res.json();
        if (data.rawState) {
            state.completedChapters = new Set(data.rawState.completedChapters || []);
            state.testHistory = data.rawState.testHistory || [];
            state.badgesEarned = new Set(data.rawState.badgesEarned || []);
            state.xp = data.rawState.xp || 0;
            state.streak = data.rawState.streak || 0;
            state.doubtsAsked = data.rawState.doubtsAsked || 0;
            state.formulasViewed = data.rawState.formulasViewed || 0;
            state.userMistakes = data.rawState.userMistakes || [];
            state.flashcardsMastery = data.rawState.flashcardsMastery || {};
            state.focusTimerSessions = data.rawState.focusTimerSessions || 0;
            
            saveState();
            updateProgress();
            renderBadges();
            renderChapters('all');
            renderTrackerSection();

            alert(`✅ Progress Restored Successfully!\n\nLoaded: ${state.completedChapters.size} completed chapters, ${state.xp} XP, ${state.testHistory.length} mock tests from GitHub.`);
            closeSyncModal();
        } else {
            alert("No saved learning state found in remote file.");
        }
    } catch (err) {
        alert("Restore failed: " + err.message);
    }
}

function renderTrackerSection() {
    const report = getComprehensiveProgressReport();

    // Top 4 stats
    const sylPctEl = document.getElementById('trkSyllabusPct');
    const chDoneEl = document.getElementById('trkChaptersDone');
    const studyMinEl = document.getElementById('trkStudyMinutes');
    const sprintEl = document.getElementById('trkSprintCount');
    const mockAccEl = document.getElementById('trkMockAccuracy');
    const testsEl = document.getElementById('trkTestsTaken');
    const fcMastEl = document.getElementById('trkFlashcardsMastered');
    const fcPctEl = document.getElementById('trkFlashcardsPct');

    if (sylPctEl) sylPctEl.textContent = `${report.overallProgress.percentage}%`;
    if (chDoneEl) chDoneEl.textContent = `${report.overallProgress.completedChapters} of ${report.overallProgress.totalChapters} High-Yield Chapters`;
    if (studyMinEl) studyMinEl.textContent = `${report.studyEffort.focusMinutes}m`;
    if (sprintEl) sprintEl.textContent = `${report.studyEffort.focusSessions} deep-work sprints`;
    if (mockAccEl) mockAccEl.textContent = report.mockTests.totalAttempted > 0 ? `${report.mockTests.averageScore}%` : '—';
    if (testsEl) testsEl.textContent = `${report.mockTests.totalAttempted} mock tests taken`;
    if (fcMastEl) fcMastEl.textContent = `${report.flashcards.mastered} / ${report.flashcards.total}`;
    if (fcPctEl) fcPctEl.textContent = `${report.flashcards.masteryPercentage}% active recall`;

    // Subjects
    const p = report.overallProgress.physics;
    const c = report.overallProgress.chemistry;
    const m = report.overallProgress.mathematics;

    const pPctEl = document.getElementById('trkPhysicsPct');
    const pFillEl = document.getElementById('trkPhysicsFill');
    const pCntEl = document.getElementById('trkPhysicsCount');
    if (pPctEl) pPctEl.textContent = `${p.percentage}%`;
    if (pFillEl) pFillEl.style.width = `${p.percentage}%`;
    if (pCntEl) pCntEl.textContent = `${p.completed} of ${p.total} Chapters Completed`;

    const cPctEl = document.getElementById('trkChemPct');
    const cFillEl = document.getElementById('trkChemFill');
    const cCntEl = document.getElementById('trkChemCount');
    if (cPctEl) cPctEl.textContent = `${c.percentage}%`;
    if (cFillEl) cFillEl.style.width = `${c.percentage}%`;
    if (cCntEl) cCntEl.textContent = `${c.completed} of ${c.total} Chapters Completed`;

    const mPctEl = document.getElementById('trkMathsPct');
    const mFillEl = document.getElementById('trkMathsFill');
    const mCntEl = document.getElementById('trkMathsCount');
    if (mPctEl) mPctEl.textContent = `${m.percentage}%`;
    if (mFillEl) mFillEl.style.width = `${m.percentage}%`;
    if (mCntEl) mCntEl.textContent = `${m.completed} of ${m.total} Chapters Completed`;

    // Render interactive chapter chips for each subject
    renderSubjectTrackerChips('physics', 'trkPhysicsChips');
    renderSubjectTrackerChips('chemistry', 'trkChemChips');
    renderSubjectTrackerChips('maths', 'trkMathsChips');

    // Test History
    const histList = document.getElementById('trkTestHistoryList');
    if (histList) {
        if (state.testHistory.length === 0) {
            histList.innerHTML = '<p class="empty-state">No mock tests taken yet. Start a 25Q or 75Q test in the Mock Test arena!</p>';
        } else {
            histList.innerHTML = state.testHistory.slice(0, 5).map(t => `
                <div class="tracker-history-item">
                    <span><strong>${t.mode.toUpperCase()}</strong> · ${t.date}</span>
                    <span style="font-weight:700; color:var(--accent-teal);">${t.marks}/${t.maxMarks} (${t.percentage}%)</span>
                </div>
            `).join('');
        }
    }

    // Mistake Summary
    const mistSummary = document.getElementById('trkMistakeSummary');
    if (mistSummary) {
        mistSummary.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
                <span>Total Errors Logged: <strong>${report.mistakeDiary.totalLogged}</strong></span>
                <span>Immune / Mastered: <strong style="color:var(--accent-green);">${report.mistakeDiary.masteredImmune}</strong></span>
            </div>
            <div style="font-size:13px; margin-bottom:12px;">
                Resolution Rate: <strong>${report.mistakeDiary.resolutionRate}</strong> · Top Vulnerability: <span style="color:var(--accent-rose); font-weight:600;">${report.mistakeDiary.topVulnerability}</span>
            </div>
            <button class="btn-secondary" style="font-size:12px; padding:6px 14px;" onclick="navigateTo('mistakes')">Open Mistake Diary →</button>
        `;
    }
}

function renderSubjectTrackerChips(subject, containerId) {
    const container = document.getElementById(containerId);
    if (!container || !chaptersData[subject]) return;

    container.innerHTML = chaptersData[subject].map((ch, i) => {
        const id = `${subject}-${i}`;
        const done = state.completedChapters.has(id);
        return `
            <div class="trk-chip ${done ? 'done' : ''}" onclick="toggleChapter('${id}'); renderTrackerSection();" title="Click to toggle completed">
                <span>${done ? '✓' : '○'} ${ch.name}</span>
                <span style="font-size:10px; opacity:0.8;">${ch.weightage}%</span>
            </div>
        `;
    }).join('');
}

function downloadProgressReport() {
    const report = getComprehensiveProgressReport();
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Nishu_Kumari_JEE_Progress_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
}

function openSyncModal() {
    const modal = document.getElementById('syncModal');
    const tokenInput = document.getElementById('ghTokenInput');
    if (tokenInput) {
        tokenInput.value = localStorage.getItem('nexa_github_token') || '';
    }
    if (modal) modal.classList.add('open');
}

function closeSyncModal(e) {
    if (e && e.target && e.target.classList.contains('masterclass-modal')) return;
    const modal = document.getElementById('syncModal');
    if (modal) modal.classList.remove('open');
}

async function testGitHubConnection() {
    const feedback = document.getElementById('syncFeedback');
    const tokenInput = document.getElementById('ghTokenInput');
    const token = tokenInput ? tokenInput.value.trim() : '';

    if (feedback) {
        feedback.style.display = 'block';
        feedback.style.background = 'rgba(79, 209, 197, 0.1)';
        feedback.style.color = 'var(--accent-teal)';
        feedback.innerHTML = '⏳ Testing connection to GitHub repository...';
    }

    try {
        const url = `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/${GITHUB_FILE_PATH}`;
        const res = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token || getGitHubToken()}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (res.ok) {
            const data = await res.json();
            if (feedback) {
                feedback.style.background = 'rgba(72, 187, 120, 0.15)';
                feedback.style.color = 'var(--accent-green)';
                feedback.innerHTML = `✅ <strong>Connected!</strong> Target file <code>${data.name}</code> (${data.size} bytes) is ready for live auto-commits.`;
            }
        } else {
            throw new Error(`GitHub error ${res.status}: check token permissions.`);
        }
    } catch (err) {
        if (feedback) {
            feedback.style.background = 'rgba(245, 101, 101, 0.15)';
            feedback.style.color = 'var(--accent-rose)';
            feedback.innerHTML = `❌ Connection failed: ${err.message}`;
        }
    }
}

function saveGitHubSettingsAndSync() {
    const tokenInput = document.getElementById('ghTokenInput');
    if (tokenInput && tokenInput.value.trim()) {
        localStorage.setItem('nexa_github_token', tokenInput.value.trim());
    }
    syncProgressToGitHub(false);
    closeSyncModal();
}

// ─── INITIALIZATION ─────────────────────────────
function init() {
    loadState();
    updateGreeting();
    updateStreak();
    updateProgress();
    earnBadge('first_login');
    renderMockHistory();
    updateFocusTimerDisplay();
    
    // Auto-render sections on first load
    renderChapters('all');
    renderTrackerSection();

    // Background sync on app launch
    debouncedGitHubSync();
    
    console.log('🎯 Nexa JEE initialized for Nishu Kumari');
    console.log('📚 75 Chapters | 500+ Formulas | 35 Mock Questions | 16-Week Roadmap');
    console.log('☁️ GitHub Cloud Persistence Active: student_progress.json');
}

// Run on load
document.addEventListener('DOMContentLoaded', init);
