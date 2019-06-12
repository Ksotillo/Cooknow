import React from 'react';
import Categories from "../screens/Categories";
import renderer from "react-test-renderer";


  test('renders correctly', () => {  
  const tree = renderer.create(<Categories />).toJSON();
    expect(tree).toMatchSnapshot();
})