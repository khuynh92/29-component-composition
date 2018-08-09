import React, { Component } from 'react';

import NoteItem from '../note-item/NoteItem.js';

import './NoteList.scss';

export default class NoteList extends Component {

  render() {
    return (
      <React.Fragment>
        <ul id="note-list">
          {this.props.notes.map(note => <NoteItem key={note.id} note={note} {...this.props} />)}
        </ul>
        {this.props.notes.length > 0 && <p id="updateText">* To update a note, double click the note you want to update *</p>}
      </React.Fragment>
    );
  }
}