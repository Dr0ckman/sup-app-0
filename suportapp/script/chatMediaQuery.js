function handleTabletChange(mediaQuery) {
    if (mediaQuery.matches) { // Si el mediaQuery hace match
        document.querySelector('#toggleSidebarBtn').classList.add("show")
    }
}

let mediaQuery = window.matchMedia("(min-width: 768px)") // Breakpoint de -md en bootstrap

handleTabletChange(mediaQuery) 

mediaQuery.addEventListener("change", () => {
    handleTabletChange(mediaQuery);
})
