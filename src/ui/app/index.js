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
      <Video
        title="How to prepare a great beer"
        source="facebook"
        video="1052114818157758"
        views={4569654}
      />
    </Videos>
  </>
);
export default App;
