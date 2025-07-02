const floatingObjects = document.querySelectorAll('.floating-objects div');

floatingObjects.forEach(obj => {
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        obj.style.transform = `translate(${x}px, ${y}px)`;
    }, 5000);
});
