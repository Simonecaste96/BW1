const generaCerchio = (corrette, sbagliate, totali) => {
    // Definiamo i dati per il grafico
    const data = {
        datasets: [
            {
                data: [corrette, sbagliate],
                backgroundColor: ["#00ff00", "#ff0000"], // Colori delle fette
                borderWidth: 0, // Rimuove lo spazio tra i colori
                color: "black"
            }
        ],
        labels: ["Corrette", "Sbagliate"]
    };

    // Configurazione del grafico
    const options = {
        responsive: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                // Disable the on-canvas tooltip
                enabled: false,

                external: function(context) {
                    // Tooltip Element
                    let tooltipEl = document.getElementById('chartjs-tooltip');

                    // Create element on first render
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip';
                        tooltipEl.innerHTML = '<table></table>';
                        document.body.appendChild(tooltipEl);
                    }

                    // Hide if no tooltip
                    const tooltipModel = context.tooltip;
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Set caret Position
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }

                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }

                    // Set Text
                    if (tooltipModel.body) {
                        const titleLines = tooltipModel.title || [];
                        const bodyLines = tooltipModel.body.map(getBody);

                        let innerHtml = '<thead>';

                        titleLines.forEach(function(title) {
                            innerHtml += '<tr><th>' + title + '</th></tr>';
                        });
                        innerHtml += '</thead><tbody>';

                        bodyLines.forEach(function(body, i) {
                            const colors = tooltipModel.labelColors[i];
                            let style = 'background:' + colors.backgroundColor;
                            style += '; border-color:' + colors.borderColor;
                            style += '; border-width: 2px';
                            const span = '<span style="' + style + '">' + body + '</span>';
                            innerHtml += '<tr><td>' + span + '</td></tr>';
                        });
                        innerHtml += '</tbody>';

                        let tableRoot = tooltipEl.querySelector('table');
                        tableRoot.innerHTML = innerHtml;
                    }

                    const position = context.chart.canvas.getBoundingClientRect();
                    const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                    tooltipEl.style.font = bodyFont.string;
                    tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                }
            }
        },
        cutout: "65%" // Percentuale di spazio vuoto all'interno del grafico
    };

    // Creiamo il grafico
    const ctx = document.getElementById("ciambella").getContext("2d");
    new Chart(ctx, {
        type: "doughnut",
        data: data,
        options: options
    });
}

const init = () => {
    let risultati = sessionStorage.getItem("risultati")
    risultati = JSON.parse(risultati)
    generaCerchio(risultati.corrette, risultati.sbagliate, risultati.totale)
}


const buttonFeedback = document.getElementById("buttonFeedback")
buttonFeedback.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'indexFeedback.html';
})


window.addEventListener('load', init)