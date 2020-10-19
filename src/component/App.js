import React, { Component } from 'react';
import JournalList from "./journals/journal-list";
// import { JournalEntry, SomeOtherComponent } from "./journals/journal-entry";

export default class App extends Component {
    render () {
      return (
      <div className="App">
      <h1>React, Props, and a State Deep Dive</h1>
      <JournalList heading = "List One" />
      
      {/* <JournalEntry title = "Zac's Journal Entry 1"/>
      <JournalEntry content = "This is what happened today"/>
      <SomeOtherComponent content = "P.S. this did too" /> */}
      </div>
    );
  }
}
