/// <reference types="cypress"/>
import repositories0 from '../fixtures/repositories_0.json';
import repositories1000 from '../fixtures/repositories_1000.json';

describe('First test', function () {
  beforeEach(function () {
    cy.visit('/');

    cy.intercept('https://api.github.com/repositories?since=*', (req) => {
      req.reply(req.query.since === '0' ? repositories0 : repositories1000);
    }).as('api');

    cy.get(':nth-child(2) > .skeleton-item').as('loading');
    cy.get(':nth-child(2) > .result-item > article > .result-item__name').as('cardName');
  });

  it('Search by press enter', () => {
    cy.get('@loading').should('be.visible');

    cy.wait('@api').then(() => {
      cy.get('@cardName').should('contain', 'wycats/merb-core');
    });

    cy.get('.search-box__input').type('1000{enter}');

    cy.wait('@api');

    cy.get('@cardName').should('contain', 'mojombo/fixture-scenarios');
  });

  it('Search by click button', () => {
    cy.get('@loading').should('be.visible');

    cy.get('@cardName').should('contain', 'wycats/merb-core');

    cy.get('.search-box__input').type('1000');
    cy.get('.search-box__button').click();

    cy.wait('@api');

    cy.get('@cardName').should('contain', 'mojombo/fixture-scenarios');
  });
});
