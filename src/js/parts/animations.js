import { gsap } from 'gsap'

// not stagger animations

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animate(entry.target);
        }
    })
});




function animate(elem) {
    if (elem) {
        if (elem.hasAttribute('data-opacity-only')) {
            gsap.to(elem, {
                opacity: 1,
                duration: 1,
                delay: +elem.dataset.delay ? +elem.dataset.delay : 0,
                ease: 'ease'
            });
        }
        else {
            gsap.to(elem, {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 1,
                delay: +elem.dataset.delay ? +elem.dataset.delay : 0,
                ease: 'ease'
            });
        }
    }
}

const animateElems = document.querySelectorAll('[data-animate]');
export const animations = () => {
    if (!animateElems.length) return
    animateElems.forEach(elem => {
        observer.observe(elem);
    })
}





// stagger animations
const observerStagger = new IntersectionObserver((entries, self) => {
    let targets = entries
        .map(entry => {
            if (entry.isIntersecting) {
                self.unobserve(entry.target)
                return entry.target;
            }
        })
        .filter(item => item != undefined);

    animateStagger(targets)
});

function animateStagger(elem) {
    if (elem) {
        gsap.to(elem, {
            opacity: 1,
            duration: 1,
            x: 0,
            y: 0,
            ease: 'ease',
            stagger: 0.2
        });
    }
}

const animateElemsStagger = document.querySelectorAll('[data-animate-stagger]');
export const animationsStagger = () => {
    if (!animateElemsStagger.length) return

    animateElemsStagger.forEach(elem => {
        observerStagger.observe(elem);
    })
}