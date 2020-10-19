import React, { Component } from 'react';

const rawJournalData = [
    { title: 'Post One', content: 'Post content', status: 'draft'},
    { title: 'Post One', content: 'Post content', status: 'published'},
    { title: 'Post One', content: 'Post content', status: 'published'},
    { title: 'Post One', content: 'Post content', status: 'published'}
];
export default class JournalList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            journalData: rawJournalData,
            greeting: 'Hi there',
            isOpen: true
        }
    }
    render() { 
        return <h2>{this.props.heading}</h2>;
    }
}
 
