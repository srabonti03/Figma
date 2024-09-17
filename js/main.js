const slider = document.querySelector('.slider');
const thumb = document.querySelector('.thumb');

slider.addEventListener('click', (event) => {
    const rect = slider.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const angle = Math.atan2(y - 50, x - 50) * (180 / Math.PI);
    thumb.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
});