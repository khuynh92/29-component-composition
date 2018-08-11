import React from 'react';
import renderer from 'react-test-renderer';

import NoteCreateForm from '../../../../src/components/note-create-form/NoteCreateForm.js';
import Dashboard from '../../../../src/components/dashboard/Dashboard.js';
import NoteItem from '../../../../src/components/note-item/NoteItem.js';
import NoteUpdateForm from '../../../../src/components/note-update-form/NoteUpdateForm';


describe('<NoteCreateForm /> Enzyme test', () => {

  it('should have an initial state', () => {
    const note = {
      id: 12345,
      title: 'new title',
      content: 'new content',
      editing: false,
      completed: false,
    };

    let wrapper = shallow(<NoteUpdateForm note={note}/>);
    expect(wrapper.find('form').exists()).toBeTruthy();
  });

  it('should update a note from the state', () => {
    let dashboardShallow = shallow(<Dashboard />);
    let dashboardInstance = dashboardShallow.instance();
    let updateNote = dashboardInstance.updateNote;

    const note = {
      id: 12345,
      title: 'new title',
      content: 'new content',
      editing: false,
      completed: false,

    };
    dashboardInstance.state.notes = [note];
    expect(dashboardShallow.state('notes')[0].content).toBe('new content');

  

    const e = {
      preventDefault: () => {},
    };


    let wrapper = shallow(<NoteUpdateForm note={note} updateNote={updateNote}/>);
    let instance = wrapper.instance();

    instance.state.content = 'newer content';
    instance.updateNote(e);
    
    expect(dashboardShallow.state('notes')[0].content).toBe('newer content');
  });
});