import React from 'react';
import Favorites from "../screens/Favorites";
import renderer from "react-test-renderer";


  test('renders correctly', () => {  
  const tree = renderer.create(<Favorites />).toJSON();
    expect(tree).toMatchSnapshot();
})