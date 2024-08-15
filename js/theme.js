document.addEventListener("DOMContentLoaded", initTheme)

const elements = {
    body: document.querySelector('body'),
    h1: document.querySelector('h1'),
    p: document.getElementById('job'),
    theme: document.getElementById('theme'),
    barTop: document.getElementById('decoration-bar-top'),
    barBottom: document.getElementById('decoration-bar-bottom')
}

function initTheme() {
    const theme = getTheme() || 'light'
    setTheme(theme)
}

function changeTheme() {
    applyTransition()
    const currentTheme = getTheme() === 'dark' ? 'light' : 'dark'
    setTheme(currentTheme)
    saveTheme(currentTheme)

    setTimeout(removeTransition, 400)
}

function setTheme(theme) {
    const isDark = theme === 'dark'
    updateClasses(isDark)
    elements.theme.style.backgroundImage = isDark ? 'url(../images/lightmode.png)' : 'url(../images/darkmode.png)'
}

function updateClasses(isDark) {
    const action = isDark ? 'add' : 'remove'
    const oppositeAction = isDark ? 'remove' : 'add'

    elements.body.classList[action]('body-dark')
    elements.h1.classList[action]('letter-dark')
    elements.p.classList[action]('letter-dark')
    elements.theme.classList[action]('button-dark')
    elements.barTop.classList[action]('bar-top-dark')
    elements.barBottom.classList[action]('bar-bottom-dark')

    elements.body.classList[oppositeAction]('body-light')
    elements.h1.classList[oppositeAction]('letter-light')
    elements.p.classList[oppositeAction]('letter-light')
    elements.theme.classList[oppositeAction]('button-light')
    elements.barTop.classList[oppositeAction]('bar-top-light')
    elements.barBottom.classList[oppositeAction]('bar-bottom-light')
}

function applyTransition() {
    Object.values(elements).forEach(el => {
        el.style.transition = 'all 0.4s ease'
    })
}

function removeTransition() {
    Object.values(elements).forEach(el => {
        el.style.transition = ''
    })
}

function saveTheme(theme) {
    localStorage.setItem('theme', theme)
}

function getTheme() {
    return localStorage.getItem('theme')
}