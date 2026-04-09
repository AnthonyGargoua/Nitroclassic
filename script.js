// 1. Banque d'images (Libres de droits - Unsplash)
const imgs = {
    pecs: "https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=600",
    dos: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=600",
    legs: "https://images.unsplash.com/photo-1434608216196-18084a9e526c?q=80&w=600",
    epaules: "https://images.unsplash.com/photo-1541534741688-6078c6bd35e5?q=80&w=600",
    bras: "https://images.unsplash.com/photo-1581009146145-b5ef03a7401a?q=80&w=600"
}

// 2. TON PROGRAMME PPL COMPLET (CONFIRMÉ)
const workoutData = {
    "Lundi": {
        spec: "Push 1 - Focus Pecs Lourds",
        duration: "75",
        exercises: [
            { name: "Développé Couché (Barre)", sets: 4, reps: "6-8", muscle: "Pecs", img: imgs.pecs },
            { name: "Développé Incliné (Haltères)", sets: 3, reps: "10-12", muscle: "Pecs Haut", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600" },
            { name: "Développé Militaire Assis", sets: 3, reps: "8-10", muscle: "Épaules", img: imgs.epaules },
            { name: "Écartés Poulie Vis-à-vis", sets: 3, reps: "12-15", muscle: "Pecs", img: "https://images.unsplash.com/photo-1599058918146-1be5803fb1ac?q=80&w=600" },
            { name: "Barre au Front", sets: 3, reps: "10-12", muscle: "Triceps", img: imgs.bras }
        ]
    },
    "Mardi": {
        spec: "Pull 1 - Épaisseur Dos",
        duration: "70",
        exercises: [
            { name: "Soulevé de Terre", sets: 3, reps: "5", muscle: "Dos / Ischios", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=600" },
            { name: "Tractions Lestées", sets: 3, reps: "6-8", muscle: "Dos", img: imgs.dos },
            { name: "Rowing Barre T", sets: 3, reps: "10-12", muscle: "Dos", img: "https://images.unsplash.com/photo-1598971639058-aba7c52e94a3?q=80&w=600" },
            { name: "Oiseau Poulie", sets: 3, reps: "15", muscle: "Arrière Épaule", img: imgs.epaules },
            { name: "Curl Barre (Standing)", sets: 3, reps: "8-10", muscle: "Biceps", img: imgs.bras }
        ]
    },
    "Mercredi": {
        spec: "Legs 1 - Focus Quadriceps",
        duration: "85",
        exercises: [
            { name: "Squat Barre Haute", sets: 4, reps: "6-8", muscle: "Cuisses", img: imgs.legs },
            { name: "Presse à Cuisses", sets: 3, reps: "12-15", muscle: "Quads", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600" },
            { name: "Leg Extension", sets: 3, reps: "15-20", muscle: "Quads", img: "https://images.unsplash.com/photo-1574673130244-c707e9d8352b?q=80&w=600" },
            { name: "Machine Adducteurs", sets: 3, reps: "15", muscle: "Adducteurs", img: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=600" },
            { name: "Mollets Debout", sets: 4, reps: "12-15", muscle: "Mollets", img: "https://images.unsplash.com/photo-1606902926961-63859664684b?q=80&w=600" }
        ]
    },
    "Jeudi": {
        spec: "Push 2 - Focus Épaules",
        duration: "75",
        exercises: [
            { name: "Développé Militaire Barre", sets: 4, reps: "6-8", muscle: "Épaules", img: imgs.epaules },
            { name: "Développé Incliné Barre", sets: 3, reps: "8-10", muscle: "Pecs Haut", img: imgs.pecs },
            { name: "Élévations Latérales", sets: 4, reps: "12-15", muscle: "Épaules", img: "https://images.unsplash.com/photo-1590487949411-2c58ed91c480?q=80&w=600" },
            { name: "Pec Deck", sets: 3, reps: "12", muscle: "Pecs", img: imgs.pecs },
            { name: "Triceps Poulie Haute", sets: 3, reps: "12-15", muscle: "Triceps", img: imgs.bras }
        ]
    },
    "Vendredi": {
        spec: "Pull 2 - Largeur Dos",
        duration: "70",
        exercises: [
            { name: "Tirage Vertical Large", sets: 4, reps: "10-12", muscle: "Dos", img: imgs.dos },
            { name: "Rowing Haltère", sets: 3, reps: "10", muscle: "Dos", img: "https://images.unsplash.com/photo-1589131665487-eb9b2d88102d?q=80&w=600" },
            { name: "Pull Over Poulie", sets: 3, reps: "15", muscle: "Dos", img: "https://images.unsplash.com/photo-1598971639058-aba7c52e94a3?q=80&w=600" },
            { name: "Curl Pupitre", sets: 3, reps: "10-12", muscle: "Biceps", img: imgs.bras },
            { name: "Curl Marteau", sets: 3, reps: "10-12", muscle: "Biceps", img: imgs.bras }
        ]
    },
    "Samedi": {
        spec: "Legs 2 - Ischios & Fessiers",
        duration: "80",
        exercises: [
            { name: "SdT Jambes Tendues", sets: 4, reps: "8-10", muscle: "Ischios", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=600" },
            { name: "Hip Thrust Barre", sets: 3, reps: "8-10", muscle: "Fessiers", img: imgs.legs },
            { name: "Leg Curl Assis", sets: 3, reps: "12-15", muscle: "Ischios", img: "https://images.unsplash.com/photo-1574673130244-c707e9d8352b?q=80&w=600" },
            { name: "Machine Abducteurs", sets: 3, reps: "15", muscle: "Fessiers", img: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=600" },
            { name: "Presse (Pieds Hauts)", sets: 3, reps: "12", muscle: "Ischios/Fessiers", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600" }
        ]
    }
};

let timerInterval;

// 3. FONCTION DE CHARGEMENT DU JOUR
function loadDay(day) {
    const data = workoutData[day];
    if (!data) return;

    // Mise à jour de l'UI Header
    document.getElementById('current-day-name').innerText = day;
    document.getElementById('current-specialty').innerText = data.spec;
    document.getElementById('session-duration').innerHTML = `<i class="far fa-clock"></i> ${data.duration} min`;
    
    const container = document.getElementById('workout-list');
    container.innerHTML = ""; 

    data.exercises.forEach((ex) => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        
        let setsHTML = '';
        for (let i = 1; i <= ex.sets; i++) {
            setsHTML += `
                <div class="set-row">
                    <span class="set-number">${i}</span>
                    <input type="number" placeholder="kg" inputmode="decimal" pattern="[0-9]*">
                    <input type="number" placeholder="${ex.reps}" inputmode="numeric" pattern="[0-9]*">
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
                    <span>SET</span><span>KG</span><span>REPS</span><span>OK</span>
                </div>
                ${setsHTML}
                <div class="timer-selector">
                    <button class="timer-opt" onclick="startTimer(60)">1m</button>
                    <button class="timer-opt" onclick="startTimer(90)">1m30</button>
                    <button class="timer-opt" onclick="startTimer(120)">2m</button>
                    <button class="timer-opt" onclick="startTimer(180)">3m</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // Navigation Focus
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.trim().toLowerCase() === day.substring(0,3).toLowerCase()) {
            btn.classList.add('active');
        }
    });
    
    window.scrollTo(0,0);
}

// 4. LOGIQUE TIMER
function startTimer(seconds) {
    clearInterval(timerInterval);
    const timerBar = document.getElementById('floating-timer');
    const display = document.getElementById('timer-display');
    
    timerBar.classList.remove('hidden');
    let timeLeft = seconds;
    
    const update = () => {
        let mins = Math.floor(timeLeft / 60);
        let secs = timeLeft % 60;
        display.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    update();

    timerInterval = setInterval(() => {
        timeLeft--;
        update();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            display.innerText = "NEXT!";
            if (window.navigator.vibrate) window.navigator.vibrate([200, 100, 200]);
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('floating-timer').classList.add('hidden');
}

function toggleSetCheck(btn) {
    btn.classList.toggle('checked');
}

// Lancement par défaut sur le jour actuel
window.onload = () => {
    const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const aujourdhui = jours[new Date().getDay()];
    // Si c'est dimanche (repos), on charge le Lundi par défaut
    loadDay(aujourdhui === "Dimanche" ? "Lundi" : aujourdhui);
};
