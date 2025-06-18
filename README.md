# Relatório do Projeto - Trabalho Prático Final  
**Univ. da Maia – Licenciatura em Informática, Tecnologias e Internet**  
**Unidade Curricular: Desenvolvimento Web – Época Especial 2024/25**  
**Grupo: a definir (ex: inf24tigXX)**

---

## 1. Project Presentation – Apresentação do Projeto

Este projeto foi desenvolvido no âmbito da unidade curricular de Desenvolvimento Web, com o objetivo de aplicar conhecimentos adquiridos ao longo do semestre em HTML5, CSS3, JavaScript e XML.  

O tema do projeto enquadra-se na área **"Ensino"**, conforme definido no enunciado. A aplicação desenvolvida consiste num site informativo que apresenta um conjunto de disciplinas relacionadas com o curso de Tecnologias e Informação, com destaque para a organização dos conteúdos, facilidade de navegação e integração de dados estruturados em XML.

O projeto inclui um total de **6 páginas HTML**, das quais 4 principais:
- `index.html` (Página principal)
- `sobre.html` (Sobre o projeto e autores)
- `disciplinas.html` (Lista geral de disciplinas)
- `disciplina.html` (Detalhe de uma disciplina)
- e ainda páginas adicionais como `criarConta.html` e `recuperarSenha.html`.

O trabalho foi desenvolvido em grupo, com recurso a ferramentas de versionamento (Git/GitHub) e alojado na plataforma [Netlify](https://bright-beignet-49dc5a.netlify.app/pages/), conforme exigido.

---

## 2. User Interface – Interface com o Utilizador

Não foi feito um estudo prévio com wireframes, mas a interface foi desenvolvida tendo como base princípios de usabilidade e design limpo.  

O site utiliza uma **estrutura modular**, com componentes reutilizáveis como `navbar` e `footer`, integrados dinamicamente em cada página através de JavaScript.

A organização das páginas é feita com layout responsivo, utilizando media queries, flexbox e boas práticas de estrutura semântica.

**Elementos de navegação:**
- Menu principal fixo no topo (navbar)
- Rodapé com informações
- Links internos e externos
- Links dinâmicos gerados com base em dados XML (disciplinas)

---

## 3. Product – Produto

### 📌 Descrição Técnica

O site é composto por:
- HTML5 com marcação semântica (`header`, `section`, `article`, `nav`, `main`, `footer`)
- CSS3 externo com:
  - seletores variados (classe, id, tipo, pseudo-classes e pseudo-elementos)
  - estilização de listas, tabelas, formulários
  - uso de imagens de fundo e substituição de elementos por imagens
  - responsividade para desktop e mobile

- JavaScript com:
  - inclusão dinâmica de `navbar` e `footer`
  - carregamento de dados de um ficheiro XML (`disciplinas.xml`) para gerar dinamicamente as disciplinas
  - manipulação de DOM (esconder, mostrar elementos)

### 📄 XML + XSD
Foram incluídos dois conjuntos de ficheiros:
- `disciplinas.xml` + `disciplinas.xsd`
- `utilizadores.xml` + `utilizadores.xsd`

A página `disciplinas.html` integra o conteúdo de `disciplinas.xml` dinamicamente usando JavaScript, conforme pedido no enunciado.

### 🌐 Site Publicado

O site encontra-se disponível em:
👉 [https://bright-beignet-49dc5a.netlify.app/pages/](https://bright-beignet-49dc5a.netlify.app/pages/)

### 🛠️ Instruções de Instalação

**Local:**
- Abrir o ficheiro `index.html` na pasta `/pages` com qualquer browser
- Ter os ficheiros organizados conforme a estrutura original (componentes, scripts, data, styles, etc.)

**Netlify:**
- O repositório GitHub foi conectado à Netlify
- O site é automaticamente atualizado a cada _push_ no repositório

### 🔒 Regras de Utilização

Não são necessárias credenciais ou autenticação. O site é público.

### 🧭 Ajuda à Navegação

A navegação é simples e intuitiva:
- O menu superior indica sempre a localização
- As disciplinas são clicáveis e levam à página de detalhe
- Tooltips e marcações de destaque são usadas nos textos

### ✅ Validações

- Os formulários possuem validação HTML5 básica (ex: campos obrigatórios, e-mail válido)
- Os ficheiros HTML e CSS foram validados com o [W3C Validator](https://validator.w3.org/) e [CSS Validator](https://jigsaw.w3.org/css-validator/)
- A validação XML foi testada com o schema `.xsd`

### 🔧 Implementação de Requisitos

| Requisito | Cumprido |
|----------|----------|
| 4 páginas HTML com estrutura semântica | ✅ |
| Tabela com `thead`, `tbody`, `tfoot`, `rowspan`, `colspan` | ✅ |
| Listas aninhadas (ordenadas, não ordenadas, definições) | ✅ |
| Destaque de texto com `em`, `strong`, `mark` | ✅ |
| Imagens com `img`, `figure`, `figcaption` + via CSS | ✅ |
| Links internos e externos | ✅ |
| Formulário com validação | ✅ |
| CSS com seletores variados e media queries | ✅ |
| Flutuação, posicionamento, substituição por imagem | ✅ |
| Manipulação DOM com JS | ✅ |
| Integração dinâmica de XML com JS | ✅ |
| Site publicado em Netlify | ✅ |

---

## 4. Presentation – Apresentação

A apresentação será feita de forma prática com base no repositório GitHub e site publicado.  
Serão demonstrados:
- Cumprimento dos requisitos técnicos
- Navegação entre páginas
- Carregamento dinâmico de dados via XML
- Responsividade

