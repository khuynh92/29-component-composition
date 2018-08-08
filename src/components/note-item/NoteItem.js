import React, { Component } from 'react';

import './NoteItem.scss';

export default class NoteItem extends Component {

  handleClick = (e) => {
    this.props.removeNote(e.target.parentNode);
  }

  render() {
    return this.props.notes.map(note => (

      <li key={note.id} id={note.id}>
        <button onClick={this.handleClick}>x</button>
        <div>
          <h4 className="note-title">{note.title}</h4>
          <p>{note.content}</p>
        </div>
      </li>

    )
    );
  }

}
