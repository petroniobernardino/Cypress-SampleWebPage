Feature: Valida elementos - Parte 02

Como tester.
Quero aprender encontrar e utilizar os elementos de uma pagina teste.
Para treinar o cypress.

Scenario: Validar clique simples no button Generate Alert Box
    Given acesso a pagina SampleTestePage. 
    When realizo um clique simples no button Generate Alert Box
    Then valido se o texto do alert e igual a hi, JavaTpoint Testing

Scenario: Validar clique simples no button Generate Confirm Box
    Given acesso a pagina SampleTestePage. 
    When realizo um clique simples no button Generate Confirm Box
    Then valido se o texto que aparece na pagina SampleTestePage e igual a You pressed OK!

Scenario: Validar a acao do DragAndDrop
    Given acesso a pagina SampleTestePage. 
    When Movo a imagem JavaTPoint para dentro da div targetDiv
    Then valido se a imagem foi inserida com sucesso