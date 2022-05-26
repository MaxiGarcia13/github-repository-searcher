Cypress.Commands.add('searchPressEnter', (value) => {
  cy.get('.search-box__input').type(`${value}{enter}`);
});

Cypress.Commands.add('searchClick', (value) => {
  cy.get('.search-box__input').type(value);
  cy.get('.search-box__button').click();
});
