import React from 'react';
import RecipeDetail from "../screens/RecipeDetail";

import renderer from "react-test-renderer";


  test('renders correctly', () => {  
    const tree = renderer.create(<RecipeDetail />).toJSON();
    expect(tree).toMatchSnapshot();
})