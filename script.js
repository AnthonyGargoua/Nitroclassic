const imgs = {
    pecs: "https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=600",
    dos: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=600",
    legs: "https://images.unsplash.com/photo-1434608216196-18084a9e526c?q=80&w=600",
    epaules: "https://images.unsplash.com/photo-1541534741688-6078c6bd35e5?q=80&w=600",
    bras: "https://images.unsplash.com/photo-1581009146145-b5ef03a7401a?q=80&w=600"
};

const workoutData = {
    "Lundi": { spec: "Push 1 - Pecs/Tri", duration: "75", exercises: [
        { name: "Dév. Couché Barre", sets: 4, reps: "6-8", muscle: "Pecs", img: imgs.pecs },
        { name: "Dév. Incliné Haltères", sets: 3, reps: "10-12", muscle: "Pecs Haut", img: imgs.pecs },
        { name: "Dév. Militaire Assis", sets: 3, reps: "8-10", muscle: "Epaules", img: imgs.epaules },
        { name: "Ecartés Poulie Vis-à-vis", sets: 3, reps: "12-15", muscle: "Pecs", img: imgs.pecs },
        { name: "Barre au Front", sets: 3, reps: "10-12", muscle: "Triceps", img: imgs.bras }
    ]},
    "Mardi": { spec: "Pull 1 - Dos/Bi", duration: "70", exercises: [
        { name: "Soulevé de Terre", sets: 3, reps: "5", muscle: "Dos", img: imgs.dos },
        { name: "Tractions Lestées", sets: 3, reps: "6-8", muscle: "Dos", img: imgs.dos },
        { name: "Rowing Barre T", sets: 3, reps: "10-12", muscle: "Dos", img: imgs.dos },
        { name: "Oiseau Poulie", sets: 3, reps: "15", muscle: "Epaules", img: imgs.epaules },
        { name: "Curl Barre EZ", sets: 3, reps: "8-10", muscle: "Biceps", img: imgs.bras }
    ]},
    "Mercredi": { spec: "Legs 1 - Quads", duration: "85", exercises: [
        { name: "Squat Barre Haute", sets: 4, reps: "6-8", muscle: "Cuisses", img: imgs.legs },
        { name: "Presse à Cuisses", sets: 3, reps: "10-15", muscle: "Quads", img: imgs.legs },
        { name: "Leg Extension", sets: 3, reps: "15-20", muscle: "Quads", img: imgs.legs },
        { name: "Adducteurs Machine", sets: 3, reps: "15", muscle: "Adducteurs", img: imgs.legs },
        { name: "Mollets Debout", sets: 4, reps: "12-15", muscle: "Mollets", img: imgs.legs }
    ]},
    "Jeudi": { spec: "Push 2 - Epaules/Pecs", duration: "75", exercises: [
        { name: "Dév. Militaire Barre", sets: 4, reps: "6-8", muscle: "Epaules", img: imgs.epaules },
        { name: "Dév. Incliné Barre", sets: 3, reps: "8-10", muscle: "Pecs Haut", img: imgs.pecs },
        { name: "Elévations Latérales", sets: 4, reps: "12-15", muscle: "Epaules", img: imgs.epaules },
        { name: "Pec Deck", sets: 3, reps: "12", muscle: "Pecs", img: imgs.pecs },
        { name: "Extension Poulie", sets: 3, reps: "12-15", muscle: "Triceps", img: imgs.bras }
    ]},
    "Vendredi": { spec: "Pull 2 - Largeur Dos", duration: "70", exercises: [
        { name: "Tirage Vertical Large", sets: 4, reps: "10-12", muscle: "Dos", img: imgs.dos },
        { name: "Rowing Haltère", sets: 3, reps: "10", muscle: "Dos", img: imgs.dos },
        { name: "Pull Over Poulie", sets: 3, reps: "15", muscle: "Dos", img: imgs.dos },
        { name: "Curl Pupitre", sets: 3, reps: "10-12", muscle: "Biceps", img: imgs.bras },
        { name: "Curl Marteau", sets: 3, reps: "10-12", muscle: "Biceps", img: imgs.bras }
    ]},
    "Samedi": { spec: "Legs 2 - Ischios", duration: "80", exercises: [
        { name: "SdT Jambes Tendues", sets: 4, reps: "8-10", muscle: "Ischios", img: imgs.legs },
        { name: "Hip Thrust", sets: 3, reps: "8-10", muscle: "Fessiers", img: imgs.legs },
        { name: "Leg Curl Assis", sets: 3, reps: "12-15", muscle: "Ischios", img: imgs.legs },
        { name: "Abducteurs Machine", sets: 3, reps: "15", muscle: "Fessiers", img: imgs.legs },
        { name: "Presse Pieds Hauts", sets: 3, reps: "12", muscle: "Ischios", img: imgs.legs }
    ]}
};

let timerInterval;

// --- FONCTION PRINCIPALE ---
function loadDay(day) {
    const data = workoutData[day];
    if (!data) return;

    // Mise à jour de l'en-tête
    document.getElementById('current-day-name').innerText = day;
    document.getElementById('current-specialty').innerText = data.spec;
    document.getElementById('session-duration').innerHTML = `<i class="far fa-clock"></i> ${data.duration} min`;
    
    const container = document.getElementById('workout-list');
    container.innerHTML = ""; 

    // Génération des exercices
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
                <div class="log-labels"><span>SET</span><span>KG</span><span>REPS</span><span>OK</span></div>
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

    // Mise à jour visuelle des boutons du menu
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.trim() === day.substring(0,3).toUpperCase()) {
            btn.classList.add('active');
        }
    });

    window.scrollTo(0,0);
}

// --- LOGIQUE DU TIMER ---
function startTimer(seconds) {
    // Petit hack : on déclenche une micro-vibration de 1ms au clic
    // Cela "déverrouille" l'autorisation de vibrer pour Safari
    if (navigator.vibrate) navigator.vibrate(1);

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
            display.innerText = "GO !";
            
            // On tente la vibration finale
            if (navigator.vibrate) {
                navigator.vibrate([400, 200, 400]); 
            }
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

// --- DÉTECTION AUTO AU CHARGEMENT ---
window.addEventListener('DOMContentLoaded', () => {
    const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const indexActuel = new Date().getDay();
    let jourACharger = jours[indexActuel];

    // Si on est dimanche, on bascule sur Lundi
    if (indexActuel === 0) jourACharger = "Lundi";

    loadDay(jourACharger);
});
