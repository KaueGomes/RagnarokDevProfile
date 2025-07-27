function positionPoring() {
  const mainDiv = document.querySelector('.main-div');
  const poring = document.querySelector('.poring-float');
  if (!mainDiv || !poring) return;

  const mainRect = mainDiv.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Alinha o CENTRO do poring com o canto inferior direito da main-div
  poring.style.left = (mainRect.right + scrollLeft - poring.offsetWidth / 2) + 'px';
  poring.style.top = (mainRect.bottom + scrollTop - poring.offsetHeight / 2) + 'px';
}

window.addEventListener('resize', positionPoring);
window.addEventListener('DOMContentLoaded', positionPoring); 