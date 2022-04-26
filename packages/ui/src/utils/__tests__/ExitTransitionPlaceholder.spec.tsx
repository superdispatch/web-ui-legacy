import { render, screen } from '@testing-library/react';
import { ExitTransitionPlaceholder } from '../ExitTransitionPlaceholder';

it('render null child', () => {
  const child = null;
  const { container } = render(
    <ExitTransitionPlaceholder in={true}>{child}</ExitTransitionPlaceholder>,
  );
  expect(container).toBeEmptyDOMElement();
});

it('render null with boolean child', () => {
  const child = true;
  const { container } = render(
    <ExitTransitionPlaceholder in={true}>{child}</ExitTransitionPlaceholder>,
  );
  expect(container).toBeEmptyDOMElement();
});

it('render child', () => {
  const { rerender } = render(
    <ExitTransitionPlaceholder in={true}>
      <p>Test</p>
    </ExitTransitionPlaceholder>,
  );
  expect(screen.getByText('Test')).toBeInTheDocument();

  rerender(
    <ExitTransitionPlaceholder in={false}>
      <p />
    </ExitTransitionPlaceholder>,
  );
  expect(screen.getByText('Test')).toBeInTheDocument();
});
