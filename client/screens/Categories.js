import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import { Icon, Recipe, Category } from '../components/';

const { width } = Dimensions.get('screen');
import categories from '../constants/categories';


export default class Categories extends React.Component {
    renderSearch = () => {
      const { navigation } = this.props;
      const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="camera-18" family="GalioExtra" />
  
      return (
        <Input
          right
          color="black"
          style={styles.search}
          iconContent={iconCamera}
          placeholder="¿Qué categoría deseas ver?"// Cambiar
        />
      )
    }
    
    renderTabs = () => {
      const { navigation } = this.props;
  
      return (
        <Block row style={styles.tabs}>
          <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Categories')}>
            <Block row middle>
              <Icon name="grid-square" family="Galio" style={{ paddingRight: 8 }} />
              <Text size={16} style={styles.tabTitle}>Categorías</Text>
            </Block>
          </Button>
          <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Pro')}>
            <Block row middle>
              <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
              <Text size={16} style={styles.tabTitle}>Populares</Text>
            </Block>
          </Button>
        </Block>
      )
    }
  
    renderRecipes = () => {
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.recipes}>
          <Block flex>
            <Category category={categories[0]} />
            <Category category={categories[1]} />
            <Category category={categories[2]} />
            <Category category={categories[3]} />
            {/* <Recipe recipe={recipes[4]} full />
            <Recipe recipe={recipes[5]} horizontal />
            <Block flex row>
              <Recipe recipe={recipes[6]} style={{ marginRight: theme.SIZES.BASE }} />
              <Recipe recipe={recipes[7]} />
            </Block> */}
            {/* <Recipe recipe={recipes[8]} horizontal /> */}
			{/* <Recipe recipe={recipes[9]} full /> */}
          </Block>
        </ScrollView>
      )
    }
  
    render() {
      return (
        <Block flex center style={styles.home}>
          {this.renderRecipes()}
        </Block>
      );
    }
  }
  
const styles = StyleSheet.create({
    home: {
      width: width,    
    },
    search: {
      height: 48,
      width: width - 32,
      marginHorizontal: 16,
      borderWidth: 1,
      borderRadius: 3,
    },
    header: {
      backgroundColor: theme.COLORS.WHITE,
      shadowColor: theme.COLORS.BLACK,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 8,
      shadowOpacity: 0.2,
      elevation: 4,
      zIndex: 2,
    },
    tabs: {
      marginBottom: 24,
      marginTop: 10,
      elevation: 4,
    },
    tab: {
      backgroundColor: theme.COLORS.TRANSPARENT,
      width: width * 0.50,
      borderRadius: 0,
      borderWidth: 0,
      height: 24,
      elevation: 0,
    },
    tabTitle: {
      lineHeight: 19,
      fontWeight: '300'
    },
    divider: {
      borderRightWidth: 0.3,
      borderRightColor: theme.COLORS.MUTED,
    },
    recipes: {
      width: width - theme.SIZES.BASE * 2,
      paddingVertical: theme.SIZES.BASE * 2,
	},
  });
  