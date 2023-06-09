import { normalize } from 'polished'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  ${normalize()}
  /* @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap'); */
  
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`
