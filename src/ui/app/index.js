import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';

import GlobalStyle from './GlobalStyle';
import Menu from './Menu';
import Videos from './Videos';
import Video from './video';
import Working from './Working';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://cdn.playbuzz.com/content/feed/resources'
        );
        setVideos(response.data.items);
      }
      catch(error) { console.log(error); }
      finally { setLoading(false); };
    };
    getVideos();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Menu />
      <Videos>{
        videos.length > 0 ? videos.map(v => {
          const props = {
            ...v,
            video: v.videoId || v.url
          };

          return <Video {...props} />;
        }) : <Working loading={loading} />
      }</Videos>
    </>
  );
};

export default App;
