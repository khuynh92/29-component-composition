import React, { Component } from 'react';

import NoteItem from '../note-item/NoteItem.js'; 

import './NoteList.scss';

export default class NoteList extends Component {

  render() {
    return (
      <ul id="note-list">
        <NoteItem removeNote={this.props.removeNote} notes={this.props.notes} />
      </ul>
    );
  }
}