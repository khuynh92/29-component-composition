import React, { Component } from 'react';

export default class NoteCreateForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} onChange={this.props.handleChange}>
        <label>
          Title:
          <br />
          <input required value={this.props.title} onChange={this.props.handleChange} id='title' type="text" />
        </label>
        <br />
        <label>
          Notes:
          <br />
          <textarea required value={this.props.content} id='content' />
        </label>
        <br />
        <input type="submit" />

      </form>
    );
  }
}