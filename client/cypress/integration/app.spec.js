describe('Expense Tracker App E2E Test', () => {
    it('should display expense tracker title', () => {
      cy.visit('/');
      cy.title().should('include', 'Expense Tracker');
    });
  
    it('should add an expense', () => {
      cy.visit('/');
  
      cy.get('.expense-input[name="name"]').type('Test');
      cy.get('.expense-input[name="amount"]').type('100');
      cy.get('.add-expense-button').click();
  
      cy.get('.expense-list-item .name').should('have.text', 'Test');
      cy.get('.expense-list-item .amount').should('have.text', '100');
    });
  });
  