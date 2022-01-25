const moreInfoElement = document.getElementById('moreinfo');
const overlay = document.getElementById('overlay');
moreInfoElement.addEventListener('click', projectInfo);
function projectInfo() {
  overlay.classList.add('active-overlay');
  
  setTimeout(() => {
    overlay.classList.remove('active-overlay');
  }, 3000);
}