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
      <Video
        title="Top 10 fastest cars in the world"
        source="youtube"
        video="tw4jkyfY4HE"
        views={25560867}
      />
    </Videos>
  </>
);
export default App;
