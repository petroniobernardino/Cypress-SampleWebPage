Feature: Validar elementos - Parte 01

Como tester.
Quero aprender encontrar e utilizar os elementos de uma pagina teste.
Para treinar o cypress.

Scenario: Validar texto da pagina.
    Given acesso a pagina SampleTestePage. 
    Then valido se existe o texto This is sample text, na terceira linha.

Scenario: Validar o link 
    Given acesso a pagina SampleTestePage. 
    When clico no link This is a link
    Then valido se acessou o site javatpoint.com

Scenario: Validar o campo texto e o button que muda de cor ao ser clicado
    Given acesso a pagina SampleTestePage. 
    When escrevo o texto Passei Por aqui! no campo text.
    When clico no button submit
    Then valido se esse button ficou da cor verde

Scenario: Validar os elementos RadioBox, CkeckBox, select e o duplo clique no button
    Given acesso a pagina SampleTestePage. 
    When marco a opcao Male no RadioBox
    When marco a opcao Automation Testing no CkeckBox
    When marco seleciono a opcao Database Testing no select
    When clico no button Double-click to generate alert box
    Then valido se o texto do alert e igual a hi, JavaTpoint Testing