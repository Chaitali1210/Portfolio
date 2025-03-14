
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.progress-fill');
                fills.forEach(fill => {
                    const targetWidth = fill.closest('.skill-item').querySelector('.skill-percentage').textContent;
                    setTimeout(() => {
                        fill.style.width = targetWidth;
                    }, 100);
                });
            }
        });
    }, { threshold: 0.1 });

    const fills = document.querySelectorAll('.progress-fill');
    fills.forEach(fill => {
        fill.style.width = '0';
    });

    const progressContainer = document.querySelector('.progress-container');
    if (progressContainer) {
        observer.observe(progressContainer);
    }
});

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}