const selectors = {
    content: '.content',
    accordion: '.accordion',
    button: 'button',
    active: 'active'
}

const accordion = document.querySelectorAll(selectors.accordion)

accordion.forEach(elem => {
    const content = elem.querySelector(selectors.content)
    elem.querySelector(selectors.button).addEventListener('click', () => {
        content.classList.toggle('active')
    })
})
