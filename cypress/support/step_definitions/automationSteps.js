import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário acessa o site AutomationExercise", () => {
  cy.visit("https://automationexercise.com");
});

Then("a página inicial deve ser exibida", () => {
  cy.get("body").should("contain.text", "Home");
});

Given("que o usuário acessa a aba de produtos", () => {
  cy.visit("https://automationexercise.com/products");
});

When("ele busca por {string}", (produto) => {
  cy.get("#search_product").should("be.visible").type(produto);
  cy.get("#submit_search").click();
});

Then("ele deve visualizar resultados relacionados", () => {
  cy.get(".productinfo").should("exist");
});

When("ele clica na aba {string}", (aba) => {
  cy.get(".nav.navbar-nav li a").contains(aba).click(); // ✅ esse seletor agora é 100% confiável
});

Then("ele deve visualizar o formulário de contato", () => {
  cy.contains("Get In Touch").should("be.visible");
});


Then("o título da página deve ser {string}", (tituloEsperado) => {
  cy.title().should("include", tituloEsperado);
});
