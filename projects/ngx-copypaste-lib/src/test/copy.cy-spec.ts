import { CypressTestMaskComponent } from './utils/cypress-test.component';

describe('Test Date Hh:m0', () => {
    it('should return value from ctrl+V', () => {
        cy.mount(CypressTestMaskComponent);

        cy.get('#masked').type('testing').should('have.value', 'testing');
        cy.get('#btn').click();
        cy.get('#pre').should('have.text', 'true');
    });
});
