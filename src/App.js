import React, { Component } from 'react';
import './App.css';
import { VoicePlayer } from './react-voice-components/index.js';

const VoicePlayerMounter = ({ play, text, onEnd, pause }) => {
  if (play) {
    return (
      <VoicePlayer lang="ja-JP" text={ text } play={ play } onEnd={ onEnd } pause={ pause}  />
    );
  } else {
    return null;
  }
};

class VoicePlayerController extends Component {
  constructor(props) {
    super();
    this.state = { text: 'こんにちわ！', play: false, };
    this.handleChange   = this.handleChange.bind(this);
    this.handleSubmit   = this.handleSubmit.bind(this);
    this.handleVoiceEnd = this.handleVoiceEnd.bind(this);
    this.handlePlay     = this.handlePlay.bind(this);
    this.handlePause    = this.handlePause.bind(this);
    this.handleResume   = this.handleResume.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  handlePlay(event) {
    this.setState({ play: true });
  }
  handlePause(event) {
    this.setState({ pause: true });
  }
  handleResume(event) {
    this.setState({ pause: false });
  }
  handleVoiceEnd(event) {
    this.setState({ play: false, pause: false });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          React Voice Componentsを使ってみた<br />
          <textarea name="voice_text" value={ this.state.text } onChange={ this.handleChange } />
        </label>
        <br />
        <button onClick={ this.handlePlay }>再生</button>
        <button onClick={ this.handlePause }>一時停止</button>
        <button onClick={ this.handleResume }>再開</button>
        <VoicePlayerMounter text={ this.state.text } play={ this.state.play } pause={ this.state.pause } onEnd={ this.handleVoiceEnd } />
      </form>
    );
  }
}

class App extends Component {
  render() {
    return (
      <VoicePlayerController />
    )
  }
}

export default App;
