import React from 'react';
import Componente from "../screens/Componente";
import renderer from "react-test-renderer";


  test('renders correctly', () => {  
  const tree = renderer.create(<Componente />).toJSON();
    expect(tree).toMatchSnapshot();
})