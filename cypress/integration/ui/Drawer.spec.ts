it('takes snapshots', () => {
  cy.visitStorybook();

  cy.findByRole('button', { name: 'Open Drawer' }).click();
  cy.findByRole('heading', { name: 'Title' }).should('be.visible');

  cy.takeStorySnapshot('Navigation/Drawer', 'Basic', ['mobile', 'desktop']);
});
