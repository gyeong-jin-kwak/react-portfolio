import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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
    padding-top: 50px;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
  }

  .wrap {
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    width: calc(100% - 2rem);
  }

  .container {
    &--card {
      display: flex;
      margin-bottom: 2rem;
      background-color: rgb(248, 249, 250);

      .content-wrap {
        flex: 1 1 0%;
      }
    }
  }
`;
