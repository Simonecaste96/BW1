const init = () => {
    let risultati = sessionStorage.getItem("risultati")
    risultati = JSON.parse(risultati)
}

window.addEventListener('load', init)