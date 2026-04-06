Feature: Login

  Scenario: Login com sucesso
    Given que estou na página de login
    When eu insiro usuário e senha válidos
    Then devo acessar o sistema

  Scenario: Login inválido
    Given que estou na página de login
    When eu insiro usuário ou senha inválidos
    Then devo ver mensagem de erro
    