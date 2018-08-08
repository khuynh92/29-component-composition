import React from 'react';

import './NoteUpdateForm.scss';

export default class NoteUpdateForm extends React.Component {

  state = {
    content: this.props.note.content, 
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      content: e.target.value,
    });
  }

  updateNote = (e) => {
    e.preventDefault(); 
    let note = {...this.props.note};
    note.content = this.state.content;

    this.props.updateNote(note);
  }
  render() {
    return (
      <li className="editing">
        <form onSubmit={this.updateNote}>
          <label>
            Update Content: <br />
            <textarea type="text" value={this.state.content} id="editContent" onChange={this.handleChange}/>
          </label>
          <input type="submit" value="update"/>
        </form>
        <button onClick={() => this.props.cancelBtn(this.props.note.id)}>cancel</button>
      </li>
    );
  }
}