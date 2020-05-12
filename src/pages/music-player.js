import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../../src/components/MusicPlayer/Layout"
import Player from "../../src/components/MusicPlayer/Player"
import PlayList from "../../src/components/MusicPlayer/PlayList"

const MusicPlayer = () => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Layout>
      <Player />
      <PlayList />
    </Layout>
  </>
)

export default MusicPlayer
