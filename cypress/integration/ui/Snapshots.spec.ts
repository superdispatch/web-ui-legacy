it('takes snapshots', () => {
  cy.visitStorybook();

  for (const namespace of [
    /^Data Display/,
    /^Surfaces/,
    /^Layout/,
    /^Inputs/,
    'Navigation/Tabs',
    'Navigation/Link',
  ]) {
    cy.getStoriesByKind(namespace).then((stories) => {
      for (const story of stories) {
        cy.takeStorySnapshot(story.kind, story.name, ['mobile', 'desktop']);
      }
    });
  }
});
