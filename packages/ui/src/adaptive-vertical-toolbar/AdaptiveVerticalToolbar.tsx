import { Grid, Menu, MenuItem, ToolbarProps } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import {
  cloneElement,
  EventHandler,
  forwardRef,
  ForwardRefExoticComponent,
  Key,
  MouseEvent,
  ReactElement,
  ReactNode,
  RefAttributes,
  useRef,
  useState,
} from 'react';
import { Button } from '../button/Button';
import { mergeRefs } from '../utils/mergeRefs';
import { useResizeObserver } from '../utils/ResizeObserver';

const useStyles = makeStyles(
  { root: { overflow: 'hidden', height: '100%' } },
  { name: 'SD-AdaptiveVerticalToolbar' },
);

const defaultMoreElement = (
  <Button type="button">
    <MoreHoriz />
  </Button>
);

export interface AdaptiveVerticalToolbarItem {
  key: Key;
  label: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export interface AdaptiveVerticalToolbarProps
  extends RefAttributes<HTMLDivElement>,
    Omit<ToolbarProps, 'children'> {
  items: AdaptiveVerticalToolbarItem[];
  render: (item: AdaptiveVerticalToolbarItem) => ReactNode;

  moreElement?: ReactElement<{
    onClick: EventHandler<MouseEvent<HTMLElement>>;
  }>;
}

export const AdaptiveVerticalToolbar: ForwardRefExoticComponent<AdaptiveVerticalToolbarProps> =
  forwardRef(({ items, render, moreElement = defaultMoreElement }, ref) => {
    const styles = useStyles();
    const itemNodes = useRef<Array<null | HTMLElement>>([]);
    const optionsButtonRef = useRef<HTMLDivElement>(null);
    const [firstHiddenIdx, setFirstHiddenIdx] = useState(-1);

    const menuItems = firstHiddenIdx === -1 ? [] : items.slice(firstHiddenIdx);
    const [menuButtonNode, setMenuButtonRef] = useState<HTMLElement>();

    const [rootNode, setRootNode] = useState<null | HTMLDivElement>(null);

    useResizeObserver(rootNode, (node) => {
      const rootRect = node.getBoundingClientRect();
      const rootHeight = rootRect.bottom;

      const optionsButtonRect =
        optionsButtonRef.current?.getBoundingClientRect();
      const optionsButtonWidth = optionsButtonRect?.height || 0;
      const maxBottomPosition = rootHeight - optionsButtonWidth;

      const mountedNodes = itemNodes.current.filter(
        (x): x is HTMLDivElement => x != null,
      );
      const hiddenIdx = mountedNodes.findIndex((itemNode, idx) => {
        itemNode.removeAttribute('hidden');

        const itemRect = itemNode.getBoundingClientRect();

        // Ignore options button height when checking last item.
        if (idx === mountedNodes.length - 1) {
          return itemRect.bottom > rootHeight;
        }

        return itemRect.bottom > maxBottomPosition;
      });

      if (hiddenIdx !== -1) {
        mountedNodes.slice(hiddenIdx).forEach((itemNode) => {
          itemNode.setAttribute('hidden', 'true');
        });
      }

      setFirstHiddenIdx(hiddenIdx);
    });

    return (
      <Grid
        spacing={1}
        direction="column"
        container={true}
        wrap="nowrap"
        className={styles.root}
        ref={mergeRefs(ref, (node) => {
          setRootNode(node);
        })}
      >
        {items.map((item, idx) => (
          <Grid
            key={item.key}
            item={true}
            ref={(node) => {
              itemNodes.current[idx] = node;
            }}
          >
            {render(item)}
          </Grid>
        ))}

        {menuItems.length > 0 && (
          <Grid item={true} ref={optionsButtonRef} component="div">
            {cloneElement(moreElement, {
              onClick: ({ currentTarget }: MouseEvent<HTMLElement>) => {
                setMenuButtonRef(currentTarget);
              },
            })}

            <Menu
              open={!!menuButtonNode}
              anchorEl={menuButtonNode}
              onClose={() => {
                setMenuButtonRef(undefined);
              }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.key}
                  onClick={(event) => {
                    item.onClick?.(event);
                    setMenuButtonRef(undefined);
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        )}
      </Grid>
    );
  });
