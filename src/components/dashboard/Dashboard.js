import React, { Component, Fragment } from 'react';

import NoteCreateForm from '../note-create-form/NoteCreateForm.js';
import NoteList from '../note-list/NoteList.js';
import uuid from 'uuid/v4';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      title: '',
      notes: [],
    };
  }

  componentDidMount() {
    if (localStorage && localStorage.state) {
      let stateFromStorage = JSON.parse(localStorage.state);
      this.setState({ ...stateFromStorage });
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  addNote = (e) => {
    e.preventDefault();

    let newNote = {
      id: uuid(),
      title: this.state.title,
      content: this.state.content,
      editing: false,
      completed: false,
    };

    this.setState((prevState) => {
      return {
        content: '',
        title: '',
        notes: [...prevState.notes, newNote],
      };
    }, () => localStorage.state = JSON.stringify(this.state)
    );
  }

  removeNote = (note) => {

    let arr = [...this.state.notes];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === note.id) {
        arr.splice(i, 1);
        break;
      }
    }

    this.setState({
      notes: arr,
    }, () => localStorage.state = JSON.stringify(this.state)
    );
  };

  render() {
    return (
      <Fragment>
        <NoteCreateForm title={this.state.title} content={this.state.content} handleSubmit={this.addNote} handleChange={this.handleChange} />
        <NoteList removeNote={this.removeNote} notes={this.state.notes} />
      </Fragment>

    );
  }
}