const { animate, text, stagger } = anime;

const { chars: chars1 } = text.split('.home-profession-1', { chars: true });
const { chars: chars2 } = text.split('.home-profession-2', { chars: true });

animate(chars1, {
  translateY: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 3000, easing: 'easeInCubic' }
  ],
  duration: 800,
  easing: 'easeOutCubic',
  delay: stagger(80),
  loop: true
});

animate(chars2, {
  translateY: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 3000, easing: 'easeInCubic' }
  ],
  duration: 900,
  easing: 'easeOutCubic',
  delay: stagger(80),
  loop: true
});

const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24 ,
  slidesPerView: 'auto' ,
  grabCursor: true ,
  speed: 600 ,

  pagination: {
    el: '.swiper-pagination',
  },

  autoplay:{
    delay:3000,
  }
});

/* ================== WORK TABS ================== */

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetSelector = tab.dataset.target;
        const targetContent = document.querySelector(targetSelector);

        if (!targetContent) return; // xavfsizlik

        // barcha content va tablardan active ni olib tashlaymiz
        tabContents.forEach(content => {
            content.classList.remove('work-active');
        });

        tabs.forEach(t => {
            t.classList.remove('work-active');
        });

        // bosilgan tab va unga mos content ni active qilamiz
        tab.classList.add('work-active');
        targetContent.classList.add('work-active');
    });
});

// Mobile Menu
const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Scroll Animations
ScrollReveal({
  distance: "60px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home__content, .section__title", { origin: "top" });
ScrollReveal().reveal(".skills__grid, .projects__grid, .contact__form", { origin: "bottom" });




