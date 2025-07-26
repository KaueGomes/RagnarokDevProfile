function positionPoring() {
  const mainDiv = document.querySelector('.main-div');
  const poring = document.querySelector('.poring-float');
  if (!mainDiv || !poring) return;

  const mainRect = mainDiv.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const offset = 8;

  poring.style.left = (mainRect.right + scrollLeft - poring.offsetWidth - offset) + 'px';
  poring.style.top = (mainRect.bottom + scrollTop - poring.offsetHeight - offset) + 'px';
}

window.addEventListener('resize', positionPoring);
window.addEventListener('DOMContentLoaded', positionPoring); 