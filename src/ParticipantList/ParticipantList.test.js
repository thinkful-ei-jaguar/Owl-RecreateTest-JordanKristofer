import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './ParticipantList.js';


describe('<ParticipantList />', () => {
  //Smoke Testing 
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ParticipantList 
        // header='TEST HEADER'
      />, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  //Snapshot Testing 
  it('renders this UI as expected', () => {
    //render the component as JSON
    const tree = renderer
      .create(<ParticipantList  
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});