const Disciplinas = [
    { id: 1, nome: "Tecnologias de Internet" },
    { id: 2, nome: "Sistemas Operativos" },
    { id: 3, nome: "Bases de Dados" },
    { id: 4, nome: "Estatística e Probabilidades" },
    { id: 5, nome: "Análise de Sistemas" },
    { id: 6, nome: "Algoritmos e Estruturas de Dados" }
];

const container = document.getElementById("disciplinas-container");

Disciplinas.map(disciplina => {
    const card = document.createElement("article");
    card.className = "disciplina-card";
    card.innerHTML = `
        <h3>${disciplina.nome}</h3>
        <a href="disciplina.html?id=${disciplina.id}">Ver mais</a>
    `;
    container.appendChild(card);
});
