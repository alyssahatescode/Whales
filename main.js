console.log("JavaScript is Working!")

// svg animation
const arrowPath= "M47.5 47.5L56 0V56H0L47.5 47.5Z"

const rectanglePath = "M3.5 4.5L56 0V56H0L3.5 4.5Z"

const transMode = document.querySelector('#rectangle');
let toggle = false;

transMode.addEventListener('click', () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    })


timeline.add({
    taregts: ".square",
    d: [
        {value: toggle ? arrowPath : rectanglePath}
    ]
})
.add({
    taregts: "#rectangle",
    rotate: 340
}, '-= 350')

if(!toggle){
    toggle = true 
}else{
    toggle = false
}
})






// parallax
window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
};

dialogArticle = (() => {
    const dialog = document.querySelector('.dialog-width');
    const openButton = dialog.nextElementSibling;
    const closeButton = dialog.querySelector('sl-button[slot="footer"]');

    openButton.addEventListener('click', () => dialog.show());
    closeButton.addEventListener('click', () => dialog.hide());
  })();



// lightbox
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        // removing double images
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click' , e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})



// map/dialog

