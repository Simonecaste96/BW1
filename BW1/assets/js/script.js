const gestioneCheckbox = () => {
    const unchecked = document.getElementById('unchecked');
    const checked = document.getElementById('checked');
    const button = document.getElementById('button');
    const avviso = document.querySelector('.avviso')
    unchecked.addEventListener('click', (e) => {
        unchecked.style.display = 'none';
        checked.style.display = 'inline';
        button.classList.add('abilitato')
        avviso.style.display = 'none'
    })
    checked.addEventListener('click', (e) => {
        unchecked.style.display = 'inline';
        checked.style.display = 'none';
        button.classList.remove('abilitato')
        avviso.style.display = 'block'
    })
}

const init = () => {
    gestioneCheckbox()
}

window.addEventListener('load', init)