const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav-ul')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navUl.classList.toggle('active')
})

const root = document.documentElement;
const marqueElementsDisplayed = getComputedStyle(root).getPropertyValue('--marque-elements-displayed');

const marqueContent = document.querySelector('.marque-content');

root.style.setProperty('--marque-elements', marqueContent.children.length);

for (let i = 0; i < marqueElementsDisplayed; i++) {
    marqueContent.appendChild(marqueContent.children[i].cloneNode(true))
}

const marqueAni = document.getElementById('marque-ani')
const marqueFixed = document.getElementById('marque-fixed')

function screenChange(e) {
    if(e.matches) {
        marqueAni.classList.add('hide');
        marqueFixed.classList.remove('hide');
    } else { 
        marqueFixed.classList.add('hide');
        marqueAni.classList.remove('hide');
    }
}

const mediaQuery = window.matchMedia('(min-width: 800px)')

mediaQuery.addListener(screenChange)

screenChange(mediaQuery)

// Animations

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { 
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => 
    observer.observe(el)
)


const hiddenBlur = document.querySelectorAll('.hiddenb');
hiddenBlur.forEach((el) => 
    observer.observe(el)
)

const slideRight = document.querySelectorAll('.slide-right');
slideRight.forEach((el) => 
    observer.observe(el)
)

const slideLeft = document.querySelectorAll('.slide-left');
slideLeft.forEach((el) => 
    observer.observe(el)
)