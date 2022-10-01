/// <reference types="cypress" />

describe('URL navigates to root', () => {
	it('visit "/" url and redirect to "/search', () => {
		cy.visit('http://localhost:3000');
		cy.url().should('eq', 'http://localhost:3000/search');
	});
});

describe('Searching for movie', () => {
	it('verify search results match search query', () => {
		cy.visit('http://localhost:3000/search');
		cy.get('input').type('Fifty Shades Freed');
		cy.contains('submit').click();
		cy.contains('Fifty Shades Freed');
	});
});
