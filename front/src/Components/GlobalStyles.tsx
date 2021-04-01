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
    &--card {
      display: flex;
      flex: 1 1 0%;
      background-color: rgb(248, 249, 250);

      .content-wrap {
        display: flex;
        width: 100%;
        margin: 0 auto;
        padding: 2rem 0;
        flex-wrap: wrap;
        @media only screen and (min-width: ${BREAK_POINT_PC}px) {
          max-width: 1056px;
        }
      }
    }
  }
`;
