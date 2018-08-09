import React from 'react';

import Dashboard from '../../../../src/components/dashboard/Dashboard.js';
import NoteItem from '../../../../src/components/note-item/NoteItem.js';

describe('<NoteCreateForm /> Enzyme test', () => {

  it('should have an initial state', () => {

    const note = {
      id: 12345,
      title: 'new title',
      content: 'new content',
      editing: false,
      completed: false,
    };

    let wrapper = shallow(<NoteItem note={note} />);
    expect(wrapper.find('ContentRender').exists()).toBeTruthy();
  });

  it('should be able to remove notes', () => {
    let wrapper = shallow(<Dashboard />);
    let instance = wrapper.instance();

    let note = {
      id: 12345,
      title: 'new title',
      content: 'new content',
      editing: false,
      completed: false,
    };

    instance.state.notes = [note];

    expect(wrapper.state('notes').length).toBe(1);

    instance.removeNote(note);

    expect(wrapper.state('notes').length).toBe(0);
  });
});