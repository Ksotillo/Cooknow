import React from 'react';
import MyRecipes from "../screens/MyRecipes";

import renderer from "react-test-renderer";


test('renders correctly', () => {  
    const tree = renderer.create(<MyRecipes />).toJSON();
    expect(tree).toMatchSnapshot();
})