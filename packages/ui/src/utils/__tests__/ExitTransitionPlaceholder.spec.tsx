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
  let child = 'Test';
  const { rerender } = render(
    <ExitTransitionPlaceholder in={true}>{child}</ExitTransitionPlaceholder>,
  );
  expect(screen.getByText(child)).toBeInTheDocument();

  child = 'newChild';
  rerender(
    <ExitTransitionPlaceholder in={false}>{child}</ExitTransitionPlaceholder>,
  );
  expect(screen.queryByText(child)).toBeNull();
});
