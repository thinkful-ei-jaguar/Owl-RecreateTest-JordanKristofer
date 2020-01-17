import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from './Stage.js';


describe('<Stage />', () => {
  //Smoke Testing 
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Stage 
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
      .create(<Stage  
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});