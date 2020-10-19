import React, { Component } from 'react';
import JournalList from "./journals/journal_list";

export default class App extends Component {
    render () {
      return (
      <div className="App">
      <h1>React, Props, and a State Deep Dive</h1>
      <JournalList heading = "List One" />
      <JournalList heading = "List Two" />
      </div>
    );
  }
}
