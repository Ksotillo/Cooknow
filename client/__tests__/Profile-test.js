import React from 'react';
import Profile from "../screens/Profile";

import renderer from "react-test-renderer";

test('renders correctly', () => {  
    const tree = renderer.create(<Profile />).toJSON();
    expect(tree).toMatchSnapshot();
})