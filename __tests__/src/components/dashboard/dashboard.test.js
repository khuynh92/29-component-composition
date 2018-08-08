import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from '../../../../src/components/dashboard/Dashboard.js';

describe('<Dashboard/> Enzyme Test', () => {
  it('loads components at application start', () => {
    let app = shallow(<Dashboard/>);
    expect(app.find('NoteCreateForm').exists()).toBeTruthy();
    expect(app.find('NoteList').exists()).toBeTruthy();

  });
});

describe('<Dashboard/> Snapshot Test', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Dashboard />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});


