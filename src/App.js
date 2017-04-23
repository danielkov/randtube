import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import github from './github_logo.png'

import { get } from 'axios'

import YouTubePlayer from './components/YouTubePlayer'
import Button from './components/Button'

const AK = 'AIzaSyCdn4_CX69Mcb_R4y3-iUXN2gdwsXsOhds'
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

function getRandomString () {
  let poss = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let rand = ''
  for (var i = 0; i < 4; i++) {
    rand += poss.charAt(Math.floor(Math.random() * 62))
  }
  return rand
}

class App extends Component {
  state = {
    videoId: ''
  }
  componentWillMount () {
    this.getNewVideo()
  }
  getNewVideo () {
    get(API_URL, {
      params: {
        part: 'id',
        key: AK,
        q: getRandomString(),
        maxResults: '1',
        type: 'video'
      }
    })
    .then(res => this.setState({
      videoId: res.data.items[0].id.videoId
    }))
    .catch(e => console.log(e))
  }
  render () {
    return (
      <div className="app">
        <header>
          <div className="header-div">
            <img src={logo} alt="RandTube logo" />
            <h2 className="header-h2">RandTube</h2>
            <h3 className="header-h3">Random YouTube Videos</h3>
            <img
              src={github}
              alt="Project on GitHub"
              onClick={() => {window.location.replace('https://www.github.com/danielkov/randtube')}}
              style={ { cursor: 'pointer' } }
            />
          </div>
        </header>
        <main className="main">
          <YouTubePlayer id={this.state.videoId} />
          <Button onClick={(e) => {this.getNewVideo()}}>Random Video</Button>
        </main>
      </div>
    )
  }
}

export default App;
