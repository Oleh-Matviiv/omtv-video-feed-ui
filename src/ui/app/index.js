import React from 'react';
import { createGlobalStyle } from 'styled-components';

import GlobalStyle from './GlobalStyle';
import Menu from './Menu';
import Videos from './Videos';
import Video from './video';

const App = () => (
  <>
    <GlobalStyle />
    <Menu />
    <Videos>
      <Video
        title="Be a winner!"
      />
      <Video
        title="How to prepare a great beer"
      />
    </Videos>
  </>
);
export default App;
