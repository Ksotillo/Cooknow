import React from 'react';
import Recipe from "../components/Recipe";
import renderer from "react-test-renderer";


  test('renders correctly', () => {  
  const tree = renderer.create(<Recipe />).toJSON();
    expect(tree).toMatchSnapshot();
})