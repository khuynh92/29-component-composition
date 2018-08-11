import React from 'react';

import NoteCreateForm from '../../../../src/components/note-create-form/NoteCreateForm.js';
import Dashboard from '../../../../src/components/dashboard/Dashboard.js';

describe('<NoteCreateForm /> Enzyme test', () => {

  it('should have an initial state', () => {
    let wrapper = shallow(<NoteCreateForm />);
    expect(wrapper.find('form').exists()).toBeTruthy();
  });

  it('should handle form changes', () => {
    const wrapper = shallow(<Dashboard />);
    const instance = wrapper.instance();


    const e = {
      preventDefault: function(){},
      target: {
        id: 'title',
        value: 'new title',
        type: 'text',
      },
    };

    instance.handleChange(e);
    

    expect(wrapper.state('title')).toBe('new title');
  });

  it('should handle form submits', () => {
    const dashboardShallow = shallow(<Dashboard />);
    const dashboardInstance = dashboardShallow.instance();

    const e = {
      preventDefault: function(){},
    };
    dashboardInstance.addNote(e);

    expect(dashboardShallow.state('notes').length).toBe(1);
  });
});
