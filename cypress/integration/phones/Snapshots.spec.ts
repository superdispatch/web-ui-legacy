it('takes snapshots', () => {
  cy.visitStorybook();

  cy.getStoriesByKind(/^Phones/).then((stories) => {
    for (const story of stories) {
      cy.takeStorySnapshot(story.kind, story.name, ['mobile', 'desktop']);
    }
  });
});
