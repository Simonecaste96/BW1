


//Prendiamo gli elementi dell'HTML che ci servono nel JS

const gestioneCheckbox = () => {
    const unchecked = document.getElementById("unchecked");
    const checked = document.getElementById("checked");
    const button = document.getElementById("button");
    const avviso = document.querySelector(".avviso");
    
    //Selezionando la checkbox vuota la sostituiamo con la checkbox gia spuntata, abilitiamo il bottone e nascondiamo l'avviso(Devi accettare per procedere con il quiz)
    unchecked.addEventListener("click", (e) => {
        unchecked.style.display = "none";
        checked.style.display = "inline";
        button.classList.add("abilitato");
        avviso.style.display = "none";
    });

    //Selezionando la checkbox spuntata la sostiutiamo con la checkbox vuota, disabilitiamo il bottone e facciamo comparire l'avviso.
    checked.addEventListener("click", (e) => {
        unchecked.style.display = "inline";
        checked.style.display = "none";
        button.classList.remove("abilitato");
        avviso.style.display = "block";
    });

    //Se è stata spuntata la checkbox il bottone diventa utilizzabile e porta alla pagina seguente, altrimenti non fa nulla
    button.addEventListener("click", (e) => {
        e.preventDefault();
        if (button.classList.contains("abilitato")) {
            window.location.href = 'indexDomande.html';
        }
    })
};

// La funzione init gestisce tutto quello che abbiamo indicato, in questo caso gestioneCheckbox
const init = () => {
    gestioneCheckbox();
};

// Quando carica la pagina, esegue la funzione callback init
window.addEventListener("load", init);
