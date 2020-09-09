/// <reference types="cypress" />

import '@4tw/cypress-drag-drop'

Given(/^acesso a pagina SampleTestePage.$/, () => {
    cy.visit('https://www.testandquiz.com/selenium/testing.html'); 
});

When(/^realizo um clique simples no button Generate Alert Box$/, () => {
    cy.contains('Generate Alert Box').click();	
});

Then(/^valido se o texto do alert e igual a hi, JavaTpoint Testing$/, () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`hi, JavaTpoint Testing`)
      })
});

When(/^realizo um clique simples no button Generate Confirm Box$/, () => {
    cy.contains('Generate Confirm Box').click();
});

Then(/^valido se o texto que aparece na pagina SampleTestePage e igual a You pressed OK!$/, () => {
	cy.get('p#demo').should('contain', 'You pressed OK!');
});

When(/^Movo a imagem JavaTPoint para dentro da div targetDiv$/, () => {
    cy.get('#sourceImage').drag('#targetDiv');	
});

Then(/^valido se a imagem foi inserida com sucesso$/, () => {
    cy.get('div#targetDiv').should('have.html', '<img id="sourceImage" src="https://image.ibb.co/gDtUPe/jtp.png" alt="javatpoint" draggable="true" ondragstart="drag(event)" height="120px">')	
});