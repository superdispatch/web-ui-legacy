import { Skeleton } from '@material-ui/lab';
import { renderCSS } from '@superdispatch/ui-testutils';

it('checks component css', () => {
  expect(renderCSS(<Skeleton />, ['MuiSkeleton'])).toMatchInlineSnapshot(`
    .MuiSkeleton-root {
      height: 1.2em;
      display: block;
      background-color: rgba(25, 35, 52, 0.11);
    }

    .MuiSkeleton-text {
      height: auto;
      transform: scale(1, 0.6);
      margin-top: 0;
      border-radius: 3px;
      margin-bottom: 0;
      transform-origin: 0 60%;
    }

    .MuiSkeleton-text:empty:before {
      content: '\\00a0';
    }

    .MuiSkeleton-circle {
      border-radius: 50%;
    }

    .MuiSkeleton-pulse {
      animation: MuiSkeleton-keyframes-pulse 1.5s ease-in-out 0.5s infinite;
    }

    @keyframes MuiSkeleton-keyframes-pulse {
      0% {
        opacity: 1;
      }

      50% {
        opacity: 0.4;
      }

      100% {
        opacity: 1;
      }
    }

    .MuiSkeleton-wave {
      overflow: hidden;
      position: relative;
    }

    .MuiSkeleton-wave::after {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: '';
      position: absolute;
      animation: MuiSkeleton-keyframes-wave 1.6s linear 0.5s infinite;
      transform: translateX(-100%);
      background: linear-gradient(90deg, transparent, Color.Silver200, transparent);
    }

    @keyframes MuiSkeleton-keyframes-wave {
      0% {
        transform: translateX(-100%);
      }

      60% {
        transform: translateX(100%);
      }

      100% {
        transform: translateX(100%);
      }
    }

    .MuiSkeleton-withChildren > * {
      visibility: hidden;
    }

    .MuiSkeleton-fitContent {
      max-width: fit-content;
    }

    .MuiSkeleton-heightAuto {
      height: auto;
    }
  `);
});
