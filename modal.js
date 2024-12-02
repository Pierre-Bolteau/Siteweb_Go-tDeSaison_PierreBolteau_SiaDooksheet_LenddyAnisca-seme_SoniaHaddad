// Ouvrir la modal
document.getElementById('openModalBtn').addEventListener('click', function() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    
    // Ouvrir la modal
    modal.style.display = 'flex';

    // Modifier l'URL de l'iframe pour activer l'autoplay
    const videoSrc = videoFrame.src.split("?")[0];  // Enlever les paramètres existants
    videoFrame.src = `${videoSrc}?autoplay=1`;  // Ajouter autoplay à chaque ouverture

    // Arrêter la vidéo de fond
    const backgroundVideo = document.getElementById('backgroundVideo');
    if (backgroundVideo) {
        backgroundVideo.pause();
    }
});

// Fermer la modal
document.getElementById('closeModalBtn').addEventListener('click', function() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    
    // Cache la modal
    modal.style.display = 'none';

    // Réinitialiser l'URL de l'iframe pour arrêter l'autoplay
    const videoSrc = videoFrame.src.split("?")[0];  // Enlever les paramètres d'URL
    videoFrame.src = videoSrc;  // Remettre l'URL de base sans autoplay

    // Relancer la vidéo de fond
    const backgroundVideo = document.getElementById('backgroundVideo');
    if (backgroundVideo) {
        backgroundVideo.play();
    }
});

// Fermer la modal si on clique en dehors de l'iframe
window.addEventListener('click', function(event) {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    
    if (event.target === modal) {
        // Cache la modal
        modal.style.display = 'none';

        // Réinitialiser l'URL de l'iframe
        const videoSrc = videoFrame.src.split("?")[0];
        videoFrame.src = videoSrc;

        // Relancer la vidéo de fond
        const backgroundVideo = document.getElementById('backgroundVideo');
        if (backgroundVideo) {
            backgroundVideo.play();
        }
    }
});

// Changer la couleur du menu au scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    const menuLinks = document.querySelectorAll('.nav-link');
    const siteTitle = document.getElementById('site-title');

    if (window.scrollY > 50) {
        header.classList.add('bg-white');
        header.classList.add('shadow-md');
        siteTitle.classList.add('text-black');
        menuLinks.forEach(link => link.classList.add('text-black'));
    } else {
        header.classList.remove('bg-white');
        header.classList.remove('shadow-md');
        siteTitle.classList.remove('text-black');
        menuLinks.forEach(link => link.classList.remove('text-black'));
        menuLinks.forEach(link => link.classList.add('text-white'));
    }
});

// Animation des membres de l'équipe
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-x-16');
                entry.target.classList.add('opacity-100', 'translate-x-0');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    const anim = document.querySelectorAll('.anim');
    anim.forEach(member => observer.observe(member));
});
