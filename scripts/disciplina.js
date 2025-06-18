const Disciplinas = [
  {
    id: 1,
    name: "Tecnologias de Internet",
    description: "UMAIA : 2024/25 : 2º Semestre",
    image: "/assets/iot.png",
    caption: "Interface Web",
    conteudos: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    id: 2,
    name: "Sistemas Operativos",
    description: "UMAIA : 2024/25 : 2º Semestre",
    image: "/assets/sistemasoperativos.png",
    caption: "Kernel e Gestão de Recursos",
    conteudos: ["Processos", "Threads", "Escalonamento", "Memória"]
  },
  {
    id: 3,
    name: "Bases de Dados",
    description: "UMAIA : 2024/25 : 2º Semestre",
    image: "/assets/bases-de-dados.jpeg",
    caption: "Modelos e Consultas",
    conteudos: ["Modelo Relacional", "SQL", "Procedimentos Armazenados"]
  },
  {
    id: 4,
    name: "Estatística e Probabilidades",
    description: "UMAIA : 2024/25 : 2º Semestre",
    image: "/assets/estatistica.png",
    caption: "Dados e Análises",
    conteudos: ["Distribuições", "Amostragem", "Testes de Hipóteses"]
  },
  {
    id: 5,
    name: "Análise de Sistemas",
    description: "UMAIA : 2024/25 : 2º Semestre",
    image: "/assets/analise-sistemas.jpg",
    caption: "Modelação e Requisitos",
    conteudos: ["Diagramas UML", "Casos de Uso", "Requisitos Funcionais"]
  },
  {
    id: 6,
    name: "Algoritmos e Estruturas de Dados",
    description: "UMAIA : 2024/25 : 2º Semestre",
    image: "/assets/aed.jpg",
    caption: "Eficiência e Estruturação",
    conteudos: ["Listas", "Pilhas e Filas", "Recursividade", "Grafos"]
  }
];

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function renderDisciplina() {
  const id = parseInt(getQueryParam("id"));
  const disciplina = Disciplinas.find((d) => d.id === id);

  if (!disciplina) {
    document.querySelector("main").innerHTML = "<p>Disciplina não encontrada.</p>";
    return;
  }

  document.getElementById("disciplina-title").textContent = disciplina.name;
  document.getElementById("disciplina-description").textContent = disciplina.description;
  document.getElementById("disciplina-image").src = disciplina.image;
  document.getElementById("disciplina-image").alt = disciplina.name;
  document.getElementById("disciplina-caption").textContent = disciplina.caption;

  const lista = document.getElementById("disciplina-conteudos");
  lista.innerHTML = "";
  disciplina.conteudos.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", renderDisciplina);