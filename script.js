gsap.registerPlugin(ScrollTrigger);

// 1. Animation d'entrée (Loader)
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    tl.to(".loader", { duration: 1, y: "-100%", ease: "power4.inOut" })
      .from(".hero h1", { duration: 1.2, y: 100, opacity: 0, stagger: 0.2, ease: "power4.out" }, "-=0.5")
      .from("nav", { opacity: 0, y: -20 }, "-=1");
});

// 2. Animation de texte qui suit le scroll (Parallaxe)
gsap.to(".hero h1", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    x: -200,
    opacity: 0
});

// 3. Révélation des cartes au scroll
gsap.utils.toArray('.car-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// 4. Curseur personnalisé (Effet Wouah)
const cursor = document.createElement("div");
cursor.style.cssText = "position:fixed; width:20px; height:20px; background:var(--accent); border-radius:50%; pointer-events:none; z-index:9999; mix-blend-mode:difference; transition: transform 0.1s";
document.body.appendChild(cursor);

window.addEventListener("mousemove", e => {
    gsap.to(cursor, { x: e.clientX - 10, y: e.clientY - 10, duration: 0.5 });
});

// Agrandi le curseur sur les liens
document.querySelectorAll('a, button, .car-card').forEach(el => {
    el.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 4 }));
    el.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1 }));
});
