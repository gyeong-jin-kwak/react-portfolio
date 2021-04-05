import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BREAK_POINT_PC } from "Components/utilStyles";

export default createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    padding-top: 58px;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
  }

  .container {
    .content-wrap {
      width: 100%;
      margin: 0 auto;
        @media only screen and (min-width: ${BREAK_POINT_PC}px) {
          max-width: 1024px;
        }
    }

    &--card {
      display: flex;
      flex: 1 1 0%;
      background-color: rgb(248, 249, 250);

      .content-wrap {
        display: flex;
        width: 100%;
        padding: 2rem 0;
        flex-wrap: wrap;
        @media only screen and (min-width: ${BREAK_POINT_PC}px) {
          max-width: 1056px;
        }
      }
    }
  }

  //divider 
  .divider {
    display: block;

    &.divider--thick {
      background: rgb(241, 243, 245);
      height: 1rem;
      margin-top: 2rem;
      box-shadow: rgb(0 0 0 / 4%) 0px 8px 8px -8p;
    }

    &.divider--thin {
      width: 100%;
      height: 1px;
      margin: 1rem 0;
      background: rgb(233, 236, 239);
    }
  }

  //color
  .key-bg {
    background-color: #72A0DF;
  }

  .key-color {
    color: #36619e;
  }

  .about-link {
    &:hover {
      filter: invert(.5) sepia(1) saturate(2) hue-rotate(175deg);
    }
  }
`;
