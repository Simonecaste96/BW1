
  const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Cosa significa CPU?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Nel linguaggio di programmazione Java, quale di queste parole chiave utilizzeresti su una variabile per assicurarti che non venga modificata?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Il logo di Snapchat è una campana.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "I puntatori non venivano utilizzati nel linguaggio di programmazione C originale; sono stati aggiunti successivamente in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Qual è il formato di immagine più preferito utilizzato per i loghi nel database Wikimedia?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Nel web design, cosa significa CSS?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Qual è il nome in codice del sistema operativo mobile Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Su Twitter, quale è il limite di caratteri per un tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux è stato creato come alternativa a Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Quale linguaggio di programmazione condivide il suo nome con un'isola in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let arrayRisposte = []

// arrayRisposte[5] = "false"
// if (arrayRisposte[5]) {
//     console.log('esiste')
// } else {
//     console.log('non esiste')
// }

// let arrayRisposte = [5]
// let found = arrayRisposte.indexOf(5)
// if (found >= 0) {
//     console.log('trovato')
// } else {
//     console.log('non trovato')
//     arrayRisposte.push(5)
// }

// if (questions[5].estratto) {
//     console.log('ripeti')
// } else {
//     console.log('non trovato')
//     questions[5].estratto = true;
// }


// LET COUNT FUNZIONA DA CONTATORE, CHE EQUIVALE ALLA PRIMA DOMANDA
let count = 1;

//SI CREA UNA FUNZIONE, LA QUALE PRENDE L'ID nell'html numeroDomanda, per poi aggiornarlo in base alla quantità delle domande effettuate.
const numeroDomanda = () => {
  document.getElementById('numeroDomanda').innerText = count;
}

const randomizzaRisposte = (array) => {
    let arrayRisposte = [];
    array.forEach(element => {
        let random = Math.floor(Math.random() * array.length)
        console.log(random)
        while (arrayRisposte.includes(array[random])) {
          random = Math.floor(Math.random() * array.length)
        }
        arrayRisposte.push(array[random])
    });
    return arrayRisposte
}

// Prendiamo le domande ed andiamo ad inserirle dentro al div questions
const strutturaDomanda = (indice) => {
    const domande = document.getElementById("questions")
    let risposte = []
    domande.innerHTML = ""; 
    //Creiamo l'elemento h2 con l'id domanda e lo assegnamo alla const domanda impostando id e class.
    const domanda = document.createElement("h2")
    domanda.setAttribute("id", "domanda")
    domanda.classList.add('domanda');
    //Prendiamo la domanda dall'array questions con il suo indice estratto e l'assegnamo all'innerText della domanda.
    domanda.innerText = questions[indice].question
    domande.appendChild(domanda);
    // Creiamo il primo bottone della risposta giusta, assegnando i valori indicati durante la progettazione (id,class,type)
    const rispostaGiusta = document.createElement("button")
    rispostaGiusta.setAttribute("id", "buttonRisposta1")
    rispostaGiusta.classList.add('buttonRisposta')
    rispostaGiusta.setAttribute("type", "button")
    // Prendiamo la risposta corretta dalla domanda estratta dall'array e l'assegnamo all'innerText la risposta corretta.
    rispostaGiusta.innerText = questions[indice].correct_answer;
    risposte.push(rispostaGiusta)
    // Cicliamo l'array delle risposte non corrette per creare i relativi bottoni
    for (let i = 0; i < questions[indice].incorrect_answers.length; i++) {
        const risposta = document.createElement("button");
        // Mettiamo i+2 perché, essendo il primo id del bottone precedentemente creato con id 1, se il valore i è 1 va ad interferire con il primo bottone, se il valore di i è 0 in questo caso con il +2 va a partire da id 2
        risposta.setAttribute('id', `buttonRisposta${(i+2)}`);
        risposta.classList.add("buttonRisposta");
        risposta.setAttribute("type", "button");
        // Prendiamo la risposta errata dalla domanda estratta dall'array e l'assegnamo all'innerText della risposta della [i] corrispondente.
        risposta.innerText = questions[indice].incorrect_answers[i]
        risposte.push(risposta)
    }
    let risposteCasuali = randomizzaRisposte(risposte)
    domande.append(...risposteCasuali)
}

//Con il metodo math random andiamo a creare un numero randomico (tra 0 e 0.9999999) che verrà moltiplicato con la lunghezza dell'array questions in modo da ottenere un indice randomico
const pescaDomanda = () => {
  const random = Math.floor(Math.random() * questions.length);
  //SE L'INDICE RANDOM è PRESENTE NELL'ARRAY, RIPESCA. ALTRIMENTI DICHIARA L'INDICE DELL'ARRAY RISPOSTE CON IL VALORE STRINGA: FALSE
  if(arrayRisposte[random]) {
    pescaDomanda();
  } else {
    arrayRisposte[random] = "false";
    strutturaDomanda(random)
  }
}
// 
const init = () => {
    document.getElementById("totaleDomande").innerText = questions.length;
    numeroDomanda();
  pescaDomanda();
};

window.addEventListener("load", init);