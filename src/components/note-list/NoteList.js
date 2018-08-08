import React, { Component } from 'react';

import NoteItem from '../note-item/NoteItem.js'; 

import './NoteList.scss';

export default class NoteList extends Component {

  render() {
    return (
      <ul id="note-list">
        {this.props.notes.map(note => <NoteItem key={note.id} note={note} {...this.props}/>)}
      </ul>
    );
  }
}