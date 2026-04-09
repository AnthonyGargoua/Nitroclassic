// Banque d'images gratuites de haute qualité (Unsplash) adaptées au "confirmé"
const imgs = {
    pecs: "https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=600",
    dos: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=600",
    legs: "https://images.unsplash.com/photo-1434608216196-18084a9e526c?q=80&w=600",
    epaules: "https://images.unsplash.com/photo-1541534741688-6078c6bd35e5?q=80&w=600",
}

// TON PROGRAMME PPL COMPLET - NIVEAU CONFIRMÉ
const workoutData = {
    "Lundi": {
        spec: "Push 1 - Focus Pecs Lourds",
        exercises: [
            { name: "Développé Couché (Barre)", sets: 4, reps: "6-8", muscle: "Pecs / Triceps", img: imgs.pecs },
            { name: "Développé Incliné (Haltères)", sets: 3, reps: "10-12", muscle: "Pecs Haut", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600" },
            { name: "Développé Militaire Assis (Haltères)", sets: 3, reps: "8-10", muscle: "Épaules", img: imgs.epaules },
            { name: "Écartés Poulie Vis-à-vis Basse", sets: 3, reps: "12-15", muscle: "Pecs (Finition)", img: "https://images.unsplash.com/photo-1599058918146-1be5803fb1ac?q=80&w=600" },
            { name: "Barre au Front (EZ)", sets: 3, reps: "10-12", muscle: "Triceps", img: "https://images.unsplash.com/photo-1534367919830-466d71b48d21?q=80&w=600" }
        ]
    },
    "Mardi": {
        spec: "Pull 1 - Épaisseur Dos",
        exercises: [
            { name: "Soulevé de Terre (Deadlift)", sets: 3, reps: "5", muscle: "Dos Global / Ischios", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=600" },
            { name: "Tractions Lestées", sets: 3, reps: "6-8", muscle: "Grand Dorsal", img: imgs.dos },
            { name: "Rowing Barre T", sets: 3, reps: "10-12", muscle: "Milieu Dos", img: "https://images.unsplash.com/photo-1598971639058-aba7c52e94a3?q=80&w=600" },
            { name: "Oiseau Poulie (Reverse Pec Deck)", sets: 3, reps: "15", muscle: "Arrière Épaule", img: imgs.epaules },
            { name: "Curl Barre (Standing)", sets: 3, reps: "8-10", muscle: "Biceps", img: "https://images.unsplash.com/photo-1581009146145-b5ef03a7401a?q=80&w=600" }
        ]
    },
    "Mercredi": {
        spec: "Legs 1 - Focus Quadriceps",
        exercises: [
            { name: "Squat Barre Haute", sets: 4, reps: "6-8", muscle: "Cuisses Global", img: imgs.legs },
            { name: "Presse à Cuisses (Inclinée)", sets: 3, reps: "10-12", muscle: "Quadriceps", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600" },
            { name: "Leg Extension", sets: 3, reps: "15-20", muscle: "Quadriceps (Isolation)", img: "https://images.unsplash.com/photo-1574673130244-c707e9d8352b?q=80&w=600" },
            { name: "Machine Adducteurs", sets: 3, reps: "15", muscle: "Adducteurs", img: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=600" },
            { name: "Mollets Debout (Machine)", sets: 4, reps: "12-15", muscle: "Mollets", img: "https://images.unsplash.com/photo-1606902926961-63859664684b?q=80&w=600" }
        ]
    },
    "Jeudi": {
        spec: "Push 2 - Focus Épaules/Incliné",
        exercises: [
            { name: "Développé Militaire Barre (Standing)", sets: 4, reps: "6-8", muscle: "Épaules", img: imgs.epaules },
            { name: "Développé Incliné Barre", sets: 3, reps: "8-10", muscle: "Pecs Haut", img: imgs.pecs },
            { name: "Élévations Latérales Haltères", sets: 4, reps: "12-15", muscle: "Épaules Latérales", img: "https://images.unsplash.com/photo-1590487949411-2c58ed91c480?q=80&w=600" },
            { name: "Pec Deck (Machine)", sets: 3, reps: "12", muscle: "Pecs (Stries)", img: "https://images.unsplash.com/photo-1581009146145-b5ef03a7401a?q=80&w=600" },
            { name: "Extension Triceps Poulie Haute", sets: 3, reps: "12-15", muscle: "Triceps", img: "https://images.unsplash.com/photo-1603503164104-ff2d87e0f2b3?q=80&w=600" }
        ]
    },
    "Vendredi": {
        spec: "Pull 2 - Largeur Dos / Biceps",
        exercises: [
            { name: "tirage Vertical Prise Large", sets: 4, reps: "10-12", muscle: "Grand Dorsal", img: imgs.dos },
            { name: "Rowing Haltère (Unilatéral)", sets: 3, reps: "10", muscle: "Dos / Trapezes", img: "https://images.unsplash.com/photo-1589131665487-eb9b2d88102d?q=80&w=600" },
            { name: "Pull Over Poulie Haute (Bras tendus)", sets: 3, reps: "15", muscle: "Grand Dorsal (Isolation)", img: "https://images.unsplash.com/photo-1598971639058-aba7c52e94a3?q=80&w=600" },
            { name: "Curl Pupitre (Machine ou EZ)", sets: 3, reps: "10-12", muscle: "Biceps Short Head", img: "https://images.unsplash.com/photo-1581009146145-b5ef03a7401a?q=80&w=600" },
            { name: "Curl Marteau Haltères", sets: 3, reps: "10-12", muscle: "Brachial / Avant-bras", img: "https://images.unsplash.com/photo-1581009146145-b5ef03a7401a?q=80&w=600" }
        ]
    },
    "Samedi": {
        spec: "Legs 2 - Focus Ischios/Fessiers",
        exercises: [
            { name: "Soulevé de Terre Jambes Tendues (RDL)", sets: 4, reps: "8-10", muscle: "Ischios / Fessiers", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=600" },
            { name: "Hip Thrust Barre (Lesté)", sets: 3, reps: "8-10", muscle: "Fessiers", img: imgs.legs },
            { name: "Leg Curl Assis ou Couché", sets: 3, reps: "12-15", muscle: "Ischios (Isolation)", img: "https://images.unsplash.com/photo-1574673130244-c707e9d8352b?q=80&w=600" },
            { name: "Machine Abducteurs", sets: 3, reps: "15", muscle: "Moyen Fessier", img: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=600" },
            { name: "Presse à Cuisses (Pieds hauts)", sets: 3, reps: "12", muscle: "Ischios / Fessiers", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600" }
        ]
    }
};

let timerInterval;
const defaultRestTime = 90; // 1m30 par défaut

function loadDay(day) {
    const data = workoutData[day];
    if (!data) return;

    // Mise à jour de l'en-tête
    document.getElementById('current-day-name').innerText = day;
    document.getElementById('current-specialty').innerText = data.spec;
    
    const container = document.getElementById('workout-list');
    container.innerHTML = ""; // Vide la liste actuelle

    // Génération des cartes d'exercices
    data.exercises.forEach((ex, exIndex) => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        
        let setsHTML = '';
        for (let i = 1; i <= ex.sets; i++) {
            setsHTML += `
                <div class="set-row">
                    <span class="set-number">${i}</span>
                    <input type="number" placeholder="kg" pattern="[0-9]*" inputmode="decimal">
                    <input type="number" placeholder="${ex.reps}" pattern="[0-9]*" inputmode="numeric">
                    
                    <button class="btn-timer-set" onclick="startTimer(${defaultRestTime})">
                        <i class="fas fa-history"></i>
                    </button>

                    <button class="check-set-btn" onclick="toggleSetCheck(this)">
                        <i class="fas fa-check"></i>
                    </button>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="card-header-img">
                <img src="${ex.img}" class="exercise-img" loading="lazy">
                <div class="card-header-text">
                    <span class="muscle-tag">${ex.muscle}</span>
                    <h3>${ex.name}</h3>
                </div>
            </div>
            <div class="exercise-logs">
                <div class="log-labels">
                    <span>SET</span><span>POIDS</span><span>REPS</span>
                </div>
                ${setsHTML}
            </div>
        `;
        container.appendChild(card);
    });

    // Gestion de l'état actif dans la nav bar
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    // Trouve le bouton cliqué (ou le premier par défaut)
    const currentNavBtn = Array.from(document.querySelectorAll('.tab-bar .nav-item')).find(btn => btn.innerText.includes(day.substring(0,3)));
    if(currentNavBtn) currentNavBtn.classList.add('active');
    
    // Scroll en haut de la page
    window.scrollTo(0,0);
}

// Gère le bouton de validation de série
function toggleSetCheck(btn) {
    btn.classList.toggle('checked');
    if(btn.classList.contains('checked')){
        // Optionnel : Lancer automatiquement le timer quand on check ?
        // startTimer(defaultRestTime);
    }
}

// --- Logique du Minuteur Flottant ---
function startTimer(seconds) {
    clearInterval(timerInterval);
    const timerBar = document.getElementById('floating-timer');
    const display = document.getElementById('timer-display');
    
    timerBar.classList.remove('hidden'); // Affiche le timer
    let timeLeft = seconds;
    
    updateDisplay(timeLeft, display);

    timerInterval = setInterval(() => {
        timeLeft--;
        updateDisplay(timeLeft, display);
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            display.innerText = "NEXT!";
            // Vibration iOS
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate([300, 100, 300]);
            }
            // Tu peux ajouter un son ici si tu veux
        }
    }, 1000);
}

function updateDisplay(timeLeft, displayEl) {
    let mins = Math.floor(timeLeft / 60);
    let secs = timeLeft % 60;
    displayEl.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('floating-timer').classList.add('hidden');
}

// Chargement initial sur le jour actuel (optionnel, ici Lundi par défaut)
window.onload = () => {
    // Tu peux détecter le jour actuel avec new Date().getDay() si tu veux
    loadDay('Lundi');
};
