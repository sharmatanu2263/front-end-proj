// GSAP Animations with ScrollTrigger

  $('.textillate').each(function() {
    const options = $(this).data('textillate-options');
    $(this).textillate(options);
  });
  
gsap.registerPlugin(ScrollTrigger);

// Navbar Animation on Load
gsap.from(".navbar", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// Featured Post Animation
gsap.from(".featured-post .content", {
  scrollTrigger: {
    trigger: ".featured-post",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".featured-post .image img", {
  scrollTrigger: {
    trigger: ".featured-post",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  x: 30,
  duration: 1.2,
  ease: "power2.out"
});


// All Categories Section Animation
gsap.from(".category-card", {
  scrollTrigger: {
    trigger: ".all-categories-section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out"
});

// Call-to-Action Section Animation
gsap.from(".cta-section", {
  scrollTrigger: {
    trigger: ".cta-section",
    start: "top 90%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power2.out"
});

// Footer Section Animation
gsap.from(".footer-section", {
  scrollTrigger: {
    trigger: ".footer-section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power2.out"
});

// Textillate.js Animations for Headings
$(".textillate").textillate({
  in: {
    effect: 'fadeInDown',
    delay: 50,
  }
});
