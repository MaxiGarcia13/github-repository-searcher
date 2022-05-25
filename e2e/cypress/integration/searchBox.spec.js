/// <reference types="cypress"/>

import repositories0 from '../fixtures/repositories_0.json';
import repositories1000 from '../fixtures/repositories_1000.json';

describe('First test', function () {
  this.beforeEach(function () {
    cy.visit('/');

    cy.intercept('https://api.github.com/repositories?since=*', (req) => {
      req.on('response', (res) => {
        res.setDelay(500);
      });

      req.reply(req.query.since === '0' ? repositories0 : repositories1000);
    }).as('api');

    cy.get('.search-box__input').as('input');
  });

  it('Check search by press enter', () => {
    cy.wait('@api').then((interception) => {
      expect(interception.request.url).to.match(/since=0/);
    });

    cy.get('@input').type('1000{enter}');

    cy.wait('@api').then((interception) => {
      expect(interception.request.url).to.match(/since=1000/);
    });
  });

  it('Check search by click button', () => {
    cy.wait('@api').then((interception) => {
      expect(interception.request.url).to.match(/since=0/);
    });

    cy.get('.search-box__input').type('1000');
    cy.get('.search-box__button').click();

    cy.wait('@api').then((interception) => {
      expect(interception.request.url).to.match(/since=1000/);
    });
  });

  it('Check loading component when searching data', () => {
    const getLoading = (index = 1) => cy.get(`:nth-child(${index}) > .skeleton-item`);

    getLoading().should('be.visible');

    cy.wait('@api');
    getLoading().should('not.exist');

    cy.get('@input').type('1000{enter}');

    getLoading().should('be.visible');

    cy.wait('@api')
    .then((interception) => {
      expect(interception.request.url).to.match(/since=1000/);
    });

    getLoading().should('not.exist');
  });

  it('Check render cards', () => {
    for (let index = 0; index < repositories0.length; index++) {
      const card = repositories0[index];

      const childIndex = index + 1;

      cy.get(`:nth-child(${childIndex}) > .result-item > article > .result-item__header > .result-item__cover`)
        .invoke('attr', 'src')
        .should('eq', card.owner.avatar_url);
      cy.get(`:nth-child(${childIndex}) > .result-item > article > .result-item__name`).should('contain', card.name);
      cy.get(`:nth-child(${childIndex}) > .result-item > article > .result-item__artist-name`).should(
        'contain',
        card.description
      );
    }
  });
});
