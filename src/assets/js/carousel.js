// Adds arrow and dot controls to .carousel elements. The track itself is a
// scroll-snap container, so swiping works without this script.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll('.carousel').forEach((carousel) => {
  const track = carousel.querySelector('.carousel__track');
  const slides = [...track.children];
  const dots = [...carousel.querySelectorAll('.carousel__dot')];
  const [prev, next] = carousel.querySelectorAll('.carousel__arrow');
  const controls = carousel.querySelector('.carousel__controls');

  const currentIndex = () => Math.round(track.scrollLeft / track.clientWidth);

  const update = () => {
    const index = currentIndex();
    dots.forEach((dot, i) => dot.setAttribute('aria-current', i === index ? 'true' : 'false'));
    prev.disabled = index === 0;
    next.disabled = index === slides.length - 1;
  };

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, index));
    if (reduceMotion.matches) {
      track.scrollTo({ left: clamped * track.clientWidth });
      update();
    } else {
      track.scrollTo({ left: clamped * track.clientWidth, behavior: 'smooth' });
    }
  };

  prev.addEventListener('click', () => goTo(currentIndex() - 1));
  next.addEventListener('click', () => goTo(currentIndex() + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
  track.addEventListener('scroll', update, { passive: true });
  track.addEventListener('scrollend', update);
  track.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(currentIndex() - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); goTo(currentIndex() + 1); }
  });

  controls.hidden = false;
  update();
});
