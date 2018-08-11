import React, { Component } from 'react';

import NoteUpdateForm from '../note-update-form/NoteUpdateForm.js';
import './NoteItem.scss';

export default class NoteItem extends Component {

  render() {
    return !this.props.note.editing ? <ContentRender {...this.props} /> : <NoteUpdateForm  {...this.props}/>;
  }

}

let ContentRender = (props) => {
  return (

    <li onDoubleClick={() => props.editNote(props.note)} key={props.note.id} id={props.note.id}>
      <button onClick={() => props.removeNote(props.note)}>x</button>
      <div>
        <h4 className="note-title">{props.note.title}</h4>
        <p>{props.note.content}</p>
      </div>
    </li>
  );

};


