it('takes snapshots', () => {
  cy.visitStorybook();

  cy.findByRole('button', { name: 'Menu' }).click();

  cy.takeStorySnapshot('Navigation/Menu', 'Basic', ['mobile', 'desktop']);
});
