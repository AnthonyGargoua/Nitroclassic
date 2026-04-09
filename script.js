const workoutData = {
    "Lundi": {
        title: "Push (Pecs, Épaules, Triceps)",
        exercises: [
            { name: "Développé Couché Barre", sets: 4, img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500" },
            { name: "Développé Militaire Haltères", sets: 3, img: "https://images.unsplash.com/photo-1541534741688-6078c6bd35e5?q=80&w=500" },
            { name: "Écartés Poulie Haute", sets: 3, img: "https://images.unsplash.com/photo-1581009146145-b5ef03a7401a?q=80&w=500" },
            { name: "Dips (Lesté)", sets: 3, img: "https://images.unsplash.com/photo-1590487949411-2c58ed91c480?q=80&w=500" }
        ]
    },
    "Mardi": {
        title: "Pull (Dos, Biceps)",
        exercises: [
            { name: "Tractions", sets: 4, img: "https://images.unsplash.com/photo-1598971639058-aba7c52e94a3?q=80&w=500" },
            { name: "Rowing Barre", sets: 3, img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=500" },
            { name: "Curl Marteau", sets: 3, img: "https://images.unsplash.com/photo-1581009146145-b5ef03a7401a?q=80&w=500" }
        ]
    },
    "Mercredi": {
        title: "Legs (Quads, Adducteurs)",
        exercises: [
            { name: "Squat Barre", sets: 4, img: "https://images.unsplash.com/photo-1574673130244-c707e9d8352b?q=80&w=500" },
            { name: "Presse à cuisses", sets: 3, img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500" }
        ]
    }
    // Tu peux dupliquer pour les autres jours suivant ton programme...
};

let timerInterval;

function loadDay(day) {
    const data = workoutData[day];
    if (!data) return;

    document.getElementById('current-day-display').innerText = `${day} - ${data.title}`;
    const container = document.getElementById('workout-list');
    container.innerHTML = "";

    data.exercises.forEach(ex => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        
        let setsHTML = '';
        for (let i = 1; i <= ex.sets; i++) {
            setsHTML += `
                <div class="set-row">
                    <span>S${i}</span>
                    <input type="number" placeholder="kg" pattern="[0-9]*">
                    <input type="number" placeholder="reps" pattern="[0-9]*">
                    <input type="checkbox" class="check-set">
                </div>
            `;
        }

        card.innerHTML = `
            <img src="${ex.img}" class="exercise-img">
            <div class="exercise-info">
                <h3>${ex.name}</h3>
                ${setsHTML}
            </div>
        `;
        container.appendChild(card);
    });

    // Update active tab
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// Timer Logic
function startTimer(seconds) {
    clearInterval(timerInterval);
    let timeLeft = seconds;
    const display = document.getElementById('timer-display');
    
    timerInterval = setInterval(() => {
        let mins = Math.floor(timeLeft / 60);
        let secs = timeLeft % 60;
        display.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            display.innerText = "START!";
            window.navigator.vibrate(500); // Vibre sur téléphone
        }
        timeLeft--;
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('timer-display').innerText = "01:30";
}

// Initial Load
window.onload = () => loadDay('Lundi');
