// Highlights the section currently in view in the sidebar nav.
(function () {
  var links = [].slice.call(document.querySelectorAll('nav.toc a'));
  if (!links.length || !('IntersectionObserver' in window)) return;

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) {
        a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id);
      });
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  [].slice.call(document.querySelectorAll('section')).forEach(function (s) {
    obs.observe(s);
  });
})();
