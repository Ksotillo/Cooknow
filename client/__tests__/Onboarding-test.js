import React from 'react';
import Onboarding from "../screens/Onboarding";
import renderer from "react-test-renderer";


  test('renders correctly', () => {  
  const tree = renderer.create(<Onboarding />).toJSON();
    expect(tree).toMatchSnapshot();
})