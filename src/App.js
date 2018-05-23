import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider as StateProvider} from 'mobx-react';
import {Provider as ThemeProvider} from 'rebass';
import {injectGlobal} from 'styled-components';
import * as stores from './stores';
import theme, {colors} from "./theme";

import Aleo from './styles/Aleo_v1.3/Webfonts/Regular/Aleo-Regular.woff';
import Brand from "./views/Brand";

injectGlobal`
  @font-face {
    font-family: 'Aleo';
    src: local('Aleo'), url('${Aleo}') format('woff');
  }
  body {
    background-color: ${colors.brandBackground}
  }
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <StateProvider {...stores}>
            <div>
              <Brand/>
            </div>
          </StateProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
