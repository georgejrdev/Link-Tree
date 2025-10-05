if (localStorage.getItem("georgejrdev-theme") != null) {
    setTheme(localStorage.getItem("georgejrdev-theme"))
} else {
    setTheme("light-theme")
}

function setTheme(theme){
    document.getElementsByTagName("body")[0].className = theme
    localStorage.setItem("georgejrdev-theme", theme)
}