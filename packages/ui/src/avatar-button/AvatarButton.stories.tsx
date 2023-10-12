import { Edit } from '@material-ui/icons';
import { Meta } from '@storybook/react';
import { UseState } from '@superdispatch/ui-docs';
import { Inline } from '../inline/Inline';
import { Stack } from '../stack/Stack';
import { AvatarButton } from './AvatarButton';

export default {
  title: 'Inputs/Avatar Button',
  component: AvatarButton,
} as Meta;

export const basic = () => (
  <Inline space="small" verticalAlign="center">
    <AvatarButton />
    <AvatarButton size="large" />
  </Inline>
);

export const disabled = () => (
  <Inline space="small" verticalAlign="center">
    <AvatarButton disabled={true} />
    <AvatarButton size="large" disabled={true} />
  </Inline>
);

export const loading = () => (
  <Inline space="small" verticalAlign="center">
    <AvatarButton isLoading={true} />
    <AvatarButton size="large" isLoading={true} />
  </Inline>
);

export const textBasic = () => (
  <Inline space="small" verticalAlign="center">
    <AvatarButton>AB</AvatarButton>
    <AvatarButton size="large">AB</AvatarButton>
  </Inline>
);

export const textDisabled = () => (
  <Inline space="small" verticalAlign="center">
    <AvatarButton disabled={true}>AB</AvatarButton>
    <AvatarButton size="large" disabled={true}>
      AB
    </AvatarButton>
  </Inline>
);

export const textLoading = () => (
  <Inline space="small" verticalAlign="center">
    <AvatarButton isLoading={true}>AB</AvatarButton>
    <AvatarButton size="large" isLoading={true}>
      AB
    </AvatarButton>
  </Inline>
);

export const pictureBasic = () => (
  <Inline space="small" verticalAlign="center">
    <AvatarButton src="https://images.unsplash.com/photo-1571816119607-57e48af1caa9?q=80&w=256&h=256" />
    <AvatarButton
      size="large"
      src="https://images.unsplash.com/photo-1571816119607-57e48af1caa9?q=80&w=256&h=256"
    />
  </Inline>
);

export const pictureDisabled = () => (
  <Inline space="small" verticalAlign="center">
    <AvatarButton
      disabled={true}
      src="https://images.unsplash.com/photo-1571816119607-57e48af1caa9?q=80&w=256&h=256"
    />
    <AvatarButton
      size="large"
      disabled={true}
      src="https://images.unsplash.com/photo-1571816119607-57e48af1caa9?q=80&w=256&h=256"
    />
  </Inline>
);

export const pictureLoading = () => (
  <Inline space="small" verticalAlign="center">
    <AvatarButton
      isLoading={true}
      src="https://images.unsplash.com/photo-1571816119607-57e48af1caa9?q=80&w=256&h=256"
    />
    <AvatarButton
      size="large"
      isLoading={true}
      src="https://images.unsplash.com/photo-1571816119607-57e48af1caa9?q=80&w=256&h=256"
    />
  </Inline>
);

export const interactive = () => (
  <UseState initialState={false}>
    {(state, setState) => {
      const handleClick = () => {
        setState(true);
        setTimeout(() => {
          setState(false);
        }, 500);
      };

      return (
        <Stack space="small">
          <Inline space="small" verticalAlign="center">
            <AvatarButton
              icon={<Edit />}
              disabled={state}
              onClick={handleClick}
            >
              SM
            </AvatarButton>
            <AvatarButton
              icon={<Edit />}
              size="large"
              disabled={state}
              onClick={handleClick}
            >
              SM
            </AvatarButton>

            <AvatarButton isLoading={state} onClick={handleClick}>
              SM
            </AvatarButton>
            <AvatarButton size="large" isLoading={state} onClick={handleClick}>
              SM
            </AvatarButton>
          </Inline>

          <Inline space="small" verticalAlign="center">
            <AvatarButton
              disabled={state}
              icon={<Edit />}
              onClick={handleClick}
              src="https://images.unsplash.com/photo-1571816119607-57e48af1caa9?q=80"
            />
            <AvatarButton
              size="large"
              disabled={state}
              icon={<Edit />}
              onClick={handleClick}
              src="https://images.unsplash.com/photo-1571816119607-57e48af1caa9?q=80"
            />

            <AvatarButton
              isLoading={state}
              onClick={handleClick}
              src="https://images.unsplash.com/photo-1571816119607-57e48af1caa9?q=80"
            />
            <AvatarButton
              size="large"
              isLoading={state}
              onClick={handleClick}
              src="https://images.unsplash.com/photo-1571816119607-57e48af1caa9?q=80"
            />
          </Inline>
        </Stack>
      );
    }}
  </UseState>
);
