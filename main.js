(function () {
  'use strict';

  // 네비게이션 클릭 시 해당 섹션으로 부드럽게 스크롤 (scrollIntoView)
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // 로고 클릭 시 맨 위로 스크롤
  var logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', function (e) {
      e.preventDefault();
      document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Footer 연도 자동 입력
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Fade-in 애니메이션 (Intersection Observer)
  var fadeEls = document.querySelectorAll('.card-fade');
  if (!('IntersectionObserver' in window)) {
    fadeEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
    );

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Hero 섹션 슬라이드 기능 (20초마다 배경색 전환)
  var heroSection = document.querySelector('.hero');
  if (heroSection) {
    var isWhite = false;
    
    setInterval(function () {
      if (isWhite) {
        heroSection.classList.remove('slide-white');
      } else {
        heroSection.classList.add('slide-white');
      }
      isWhite = !isWhite;
    }, 20000); // 20초 = 20000ms
  }
})();