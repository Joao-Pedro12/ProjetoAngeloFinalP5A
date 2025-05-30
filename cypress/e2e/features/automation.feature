Feature: Testes básicos no site AutomationExercise

  Scenario: Acessar a página inicial
    Given que o usuário acessa o site AutomationExercise
    Then a página inicial deve ser exibida

  Scenario: Acessar a aba de produtos
    Given que o usuário acessa a aba de produtos
    Then a página inicial deve ser exibida

  Scenario: Buscar por um produto existente
    Given que o usuário acessa a aba de produtos
    When ele busca por "shirt"
    Then ele deve visualizar resultados relacionados

  Scenario: Acessar a página de contato
    Given que o usuário acessa o site AutomationExercise
    When ele clica na aba "Contact us"
    Then ele deve visualizar o formulário de contato

  Scenario: Verificar o título da página inicial
    Given que o usuário acessa o site AutomationExercise
    Then o título da página deve ser "Automation Exercise"
