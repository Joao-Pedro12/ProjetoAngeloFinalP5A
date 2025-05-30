# 🔪 P5AutomationExerciseFinal

Projeto de testes automatizados utilizando **Cypress** com **BDD (Cucumber)** e **Esbuild**, desenvolvido como exercício prático da disciplina de Testes de Software.

## 🚀 Tecnologias utilizadas

* [Cypress](https://www.cypress.io/)
* [Cucumber (Gherkin)](https://github.com/badeball/cypress-cucumber-preprocessor)
* [Esbuild](https://esbuild.github.io/)
* Node.js com gerenciador de pacotes **NPM**

## 📁 Estrutura do projeto

```
P5AutomationExerciseFinal/
├── cypress/
│   ├── e2e/
│   │   └── features/           # Arquivos .feature (cenários em Gherkin)
│   └── support/
│       ├── e2e.js              # Arquivo de suporte Cypress
│       └── steps/              # Step definitions dos testes
├── cypress.config.js
├── package.json
├── README.md
```

## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/P5AutomationExerciseFinal.git
cd P5AutomationExerciseFinal
```

2. Instale as dependências:

```bash
npm install
```

## ▶️ Como rodar os testes

### Com interface gráfica (modo interativo):

```bash
npx cypress open
```

> Isso abrirá o Cypress Test Runner. Selecione um dos arquivos `.feature` na interface.

### Em modo headless (terminal):

```bash
npx cypress run
```

## 🧪 Scripts úteis

Adicione os scripts ao `package.json`:

```json
"scripts": {
  "test:gui": "cypress open",
  "test:cli": "cypress run"
}
```

E depois execute com:

```bash
npm run test:gui
# ou
npm run test:cli
```

---

## 👥 Integrantes do grupo

* João Pedro Silva Souza Nunes
* Humberto Itiró Morimitsu
* João Victor de Lima Uchôa
* Paulo Dutra
* João Gabriel de Souza Dutra

---

## 📄 Licença

Projeto acadêmico. Livre para fins educacionais.
