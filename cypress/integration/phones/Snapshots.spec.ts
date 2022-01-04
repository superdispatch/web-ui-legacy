it('takes snapshots', () => {
  cy.visitStorybook();

  cy.getAllStories('Phones').then((stories) => {
    for (const story of stories) {
      cy.takeStorySnapshot(story.kind, story.name, ['mobile', 'desktop']);
    }
  });
});
