import type { ClientApi } from '@storybook/client-api';
import { StoreItem } from '@storybook/client-api/dist/ts3.9/types';

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      storyAPI: typeof storyAPI;
      selectStory: typeof selectStory;
      visitStorybook: typeof visitStorybook;
      takeSnapshots: typeof takeSnapshots;
      takeStorySnapshot: typeof takeStorySnapshot;
      getStoriesByKind: typeof getStoriesByKind;
    }
  }
}

Cypress.Commands.add('visitStorybook', visitStorybook);
function visitStorybook(): void {
  const host = Cypress.env('HOST') || 'http://localhost:5000';

  cy.visit(`${host}/iframe.html`);
}

Cypress.Commands.add('storyAPI', storyAPI);
function storyAPI(): Cypress.Chainable<ClientApi> {
  return cy
    .window()
    .then((win) => Cypress._.get(win, '__STORYBOOK_CLIENT_API__') as ClientApi);
}

Cypress.Commands.add('selectStory', selectStory);
function selectStory(kind: string, name: string): void {
  storyAPI().then((api) => {
    const store = api.store();
    const story = store.getRawStory(kind, name);

    expect(story).to.have.property('id');

    store.setSelection({ viewMode: 'story', storyId: story.id });

    cy.get(`[data-story="${story.id}"]`).should('be.visible');
  });
}

type SnapshotWidths = ReadonlyArray<'mobile' | 'tablet' | 'desktop'>;

Cypress.Commands.add('takeSnapshots', takeSnapshots);
function takeSnapshots(
  name: string,
  widths: SnapshotWidths = ['desktop'],
): void {
  cy.percySnapshot(name, {
    widths: widths.map((width) =>
      width === 'mobile' ? 320 : width === 'tablet' ? 768 : 1024,
    ),
  });
}

Cypress.Commands.add('takeStorySnapshot', takeStorySnapshot);
function takeStorySnapshot(
  kind: string,
  name: string,
  widths?: SnapshotWidths,
): void {
  cy.selectStory(kind, name);
  cy.takeSnapshots(`${kind}: ${name}`, widths);
}

Cypress.Commands.add('getStoriesByKind', getStoriesByKind);
function getStoriesByKind(
  kind: string | RegExp,
): Cypress.Chainable<StoreItem[]> {
  return storyAPI().then((api) => {
    const result: StoreItem[] = [];
    const store = api.store();
    const stories = store.getStoriesJsonData().stories as Record<
      string,
      StoreItem
    >;

    for (const story of Object.values(stories)) {
      if (typeof kind === 'string') {
        if (kind && story.kind === kind) {
          result.push(story);
        }
      } else if (story.kind.match(kind)) {
        result.push(story);
      }
    }

    return result;
  });
}
