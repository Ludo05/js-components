const square = document.querySelector('.square')

window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const val = scroll * 0.5
    square.style.transform = `translateX(${0.45 * val}%)`
    square.style.borderRadius = `${0.035 * val}%`
    square.style.height = `${0.1 * val}px`
    square.style.width = `${0.1 * val}px`

})

