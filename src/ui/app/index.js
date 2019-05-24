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
        source="url"
        video="http://cdn.playbuzz.com/content/feed/video-1.mp4"
      />
      <Video
        title="Be a winner!"
        source="url"
        video="http://cdn.playbuzz.com/content/feed/video-1.mp4"
        views={432144}
      />
      <Video
        title="Be a winner!"
        source="url"
      />
    </Videos>
  </>
);
export default App;
