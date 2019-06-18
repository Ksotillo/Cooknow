import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text, theme } from "galio-framework";

import Icon from './Icon';
import materialTheme from '../constants/Theme';



class DrawerItem extends React.Component {
  renderIcon = () => {
    console.log('props (?)', this.props);
    const { title, focused } = this.props;
   
    switch (title) {
      case 'Inicio':
        return (
          <Icon
            size={16}
            name="shop"
            family="GalioExtra"
            color={focused ? 'white' : materialTheme.COLORS.MUTED} />
        );
      case 'Categorias':
        return (
          <Icon
            size={16}
            name="grid-square"
            family="Galio"
            color={focused ? 'white' : materialTheme.COLORS.MUTED} />
        );
      case 'Favoritos':
        return (
          <Icon
            size={16}
            name="heart-2"
            family="Galio"
            color={focused ? 'white' : materialTheme.COLORS.MUTED} />
        );
      case 'Mis recetas':
        return (
          <Icon
            size={16}
            name="basket-simple"
            family="GalioExtra"
            color={focused ? 'white' : materialTheme.COLORS.MUTED} />
        );
      case 'New Collection':
        return (
          <Icon
            size={16}
            name="selection"
            family="Galio"
            color={focused ? 'white' : materialTheme.COLORS.MUTED} />
        );
      case 'Perfil':
        return (
          <Icon
            size={16}
            name="circle-10"
            family="GalioExtra"
            color={focused ? 'white' : materialTheme.COLORS.MUTED} />
        );
      case 'Configuración':
        return (
          <Icon
            size={16}
            name="flower-06"
            family="Galio"
            color={focused ? 'white' : materialTheme.COLORS.MUTED} />
        );
      case 'Components':
        return (
          <Icon
            size={16}
            name="ui-04"
            family="Galio"
            color={focused ? 'white' : materialTheme.COLORS.MUTED} />
        );
      case 'Iniciar Sesión':
        return (
          <Icon
            size={16}
            name="log-in"
            family="Galio"
            color={focused ? 'white' : materialTheme.COLORS.MUTED} />
        );
      case 'Registrarse':
        return (
          <Icon
            size={16}
            name="add-27"
            family="Galio"
            color={focused ? 'white' : materialTheme.COLORS.MUTED} />
        );
      default:
        return null;
    }
  }


  render() {
    const { focused, title } = this.props;
    
    return (
      <Block flex row style={[styles.defaultStyle, focused ? [styles.activeStyle, styles.shadow] : null]}>
        <Block middle flex={0.1} style={{ marginRight: 28 }}>
          {this.renderIcon()}
        </Block>
        <Block row center flex={0.9}>
          <Text size={18} color={focused ? 'white' : 'black'}>
            {title}
          </Text>
        </Block>
      </Block>
    );
  }
}

export default DrawerItem;

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  activeStyle: {
    backgroundColor: materialTheme.COLORS.ACTIVE,
    borderRadius: 4,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginLeft: 8,
    borderRadius: 2,
    height: 16,
    width: 36,
  },
})