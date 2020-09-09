/// <reference types="cypress" />

Given(/^acesso a pagina SampleTestePage.$/, () => {
    cy.visit('https://www.testandquiz.com/selenium/testing.html'); 
});

Then(/^valido se existe o texto This is sample text, na terceira linha.$/, () => {
    cy.get('.col-md-12 > b').should('contain' , 'This is sample text.');
});

When(/^clico no link This is a link$/, () => {
    cy.contains('This is a link').click();
});

Then(/^valido se acessou o site javatpoint.com$/, () => {
    cy.url().should('contain' , 'javatpoint.com/');
});

When(/^escrevo o texto Passei Por aqui! no campo text.$/, () => {
	cy.get('input#fname').type('Passei Por aqui!');
});

When(/^clico no button submit$/, () => {
	cy.get('button#idOfButton').click();
});

Then(/^valido se esse button ficou da cor verde$/, () => {
	cy.get('button#idOfButton').should('have.attr', 'style', 'background: green;');
});

When(/^marco a opcao Male no RadioBox$/, () => {
	cy.get('input#male').check();
});

When(/^marco a opcao Automation Testing no CkeckBox$/, () => {
	cy.get('input[type="checkbox"]').check('Automation');
});

When(/^marco seleciono a opcao Database Testing no select$/, () => {
	cy.get('select#testingDropdown').select('Database Testing');
});

When(/^clico no button Double-click to generate alert box$/, () => {
	cy.get('button#dblClkBtn').dblclick();
});

Then(/^valido se o texto do alert e igual a hi, JavaTpoint Testing$/, () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`hi, JavaTpoint Testing`)
    })	
});
