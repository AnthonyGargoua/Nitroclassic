const cars = [
    { id: 1, name: "Bugatti Chiron", brand: "Bugatti", engine: "771e23097e414da3b89531818274737d", desc: "La quintessence du W16..." },
    { id: 2, name: "Ferrari LaFerrari", brand: "Ferrari", engine: "6b2a060133914a2295f554620f1d9370", desc: "Le premier hybride de Maranello..." },
    // ... Ajoute les 18 autres ici sur le même modèle
];

const carGrid = document.getElementById('carGrid');
const modal = document.getElementById('carModal');

// Génération des 20 cartes
cars.forEach(car => {
    carGrid.innerHTML += `
        <div class="car-card" onclick="openCar(${car.id})">
            <img src="https://source.unsplash.com/featured/?${car.name.replace(' ', '')}" alt="${car.name}">
            <h3>${car.brand}</h3>
            <p>${car.name}</p>
            <i class="fas fa-plus-circle" style="color: var(--primary)"></i>
        </div>
    `;
});

function openCar(id) {
    const car = cars.find(c => c.id === id);
    document.getElementById('modalTitle').innerText = car.name;
    document.getElementById('modalDesc').innerText = car.desc;
    
    // Intégration Sketchfab 3D
    document.getElementById('sketchfab-container').innerHTML = `
        <iframe src="https://sketchfab.com/models/${car.engine}/embed?autostart=1&ui_theme=dark"></iframe>
    `;

    // Carrousel Intérieur (Images démo)
    const interiorSlides = document.getElementById('interiorSlides');
    interiorSlides.innerHTML = `
        <div class="swiper-slide"><img src="https://source.unsplash.com/featured/?car,interior"></div>
        <div class="swiper-slide"><img src="https://source.unsplash.com/featured/?dashboard,car"></div>
        <div class="swiper-slide"><img src="https://source.unsplash.com/featured/?steeringwheel"></div>
    `;

    modal.style.display = "block";
    
    // Init Swiper après affichage
    new Swiper(".mySwiper", {
        pagination: { el: ".swiper-pagination", clickable: true },
        autoplay: { delay: 3000 }
    });
}

// Fermeture Modal
document.querySelector('.close-modal').onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

// Mode Sombre / Clair toggle
document.getElementById('theme-toggle').onclick = () => {
    document.body.classList.toggle('light-mode'); // À définir en CSS si besoin d'un mode clair très blanc
};
