describe('renders the home page', () => {
    it('renders correctly', () => {
        cy.visit('/');
        cy.get('#root').should('exist');
    });

    it('renders the correct component on about page', () => {
        cy.visit('/');
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="#/about"]').click();
        /* ==== End Cypress Studio ==== */
        cy.get('.infoSquare').should('exist');
    });

    it('allows the user to log in', () => {
        cy.visit('/');
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.infoSquare > #loginButton').click();
        /* ==== End Cypress Studio ==== */
    });
});