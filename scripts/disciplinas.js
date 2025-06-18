const Disciplinas = [
    { id: 1, name: "Tecnologias de Internet", description: "UMAIA : 2024/25 : 2º Semestre", image: "/assets/background.png" },
    { id: 2, name: "Sistemas Operativos", description: "UMAIA : 2024/25 : 2º Semestre", image: "/assets/background.png" },
    { id: 3, name: "Bases de Dados", description: "UMAIA : 2024/25 : 2º Semestre", image: "/assets/background.png" },
    { id: 4, name: "Estatística e Probabilidades", description: "UMAIA : 2024/25 : 2º Semestre", image: "/assets/background.png" },
    { id: 5, name: "Análise de Sistemas", description: "UMAIA : 2024/25 : 2º Semestre", image: "/assets/background.png" },
    { id: 6, name: "Algoritmos e Estruturas de Dados", description: "UMAIA : 2024/25 : 2º Semestre", image: "/assets/background.png" }
];

const container = document.getElementById("disciplinas-container");

Disciplinas.map(disciplina => {
    const card = document.createElement("article");
    card.className = "disciplina-card";
    card.innerHTML = `
        <img src="${disciplina.image}" alt="${disciplina.name}" >
        <div class="disciplina-card-info">
            <a href="">${disciplina.name}</a>
            <p>${disciplina.description}</p>
            <a class="profile-button" href="disciplina.html?id=${disciplina.id}">Ver mais</a>
        </div>

    `;
    container.appendChild(card);
});
