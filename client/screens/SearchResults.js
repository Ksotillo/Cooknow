import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Dimensions, ScrollView, TouchableWithoutFeedback,   ImageBackground, } from 'react-native';
import { Block, Text, theme } from 'galio-framework';


import {  Recipe } from '../components/';
import {  Consumer } from '../constants/context';


const { width } = Dimensions.get('screen');


class SearchResults extends React.Component {
  
    renderRecipes = (recipes, searchKey) => {
        const Recipes = recipes.filter(recipe => {
            if (recipe.title.includes(searchKey) || recipe.description.includes(searchKey)) {
                return recipe;
            }
        })
        console.log(Recipes)

      const items = []
  
      for (const [index, value] of Recipes.entries()) {
        if (value) {
          items.push(<Recipe horizontal key={index} recipe={value} />)
        }
      }

      return(
        <Block flex>
            {items.length > 0 ? (
                <>
                    {items}
                </>
            ) : (
                <>
                    <Text style={[styles.recipeTitle, styles.ups]}>Ups! Parece que no tenemos lo que buscas 😅</Text>
                </>
            )} 
        </Block>
      )
    }
  
    render() {
      const { navigation, recipes, horizontal, full, style, priceColor, imageStyle } = this.props;
      const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];
      const searchKey  = navigation.getParam('search');
  
      return (
        <Consumer>{ ({ recipes }) =>
          <Block flex center style={styles.home}>
              <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.recipes}>
                    {this.renderRecipes(recipes, searchKey)}
              </ScrollView>
          </Block>}
          </Consumer>
      );
    }
  }
  
  export default withNavigation(SearchResults);
  
  const styles = StyleSheet.create({
    recipe: {
      backgroundColor: theme.COLORS.WHITE,
      marginVertical: theme.SIZES.BASE,
      borderWidth: 0,
      minHeight: 114,
      paddingTop: 20
    },
    recipes: {
      width: width - theme.SIZES.BASE * 2,
      paddingVertical: theme.SIZES.BASE * 2,
    },
    recipeTitle: {
      flex: 1,
      flexWrap: 'wrap',
      paddingTop: 25,
    },
    recipeDescription: {
      padding: theme.SIZES.BASE / 2,
    },
    home: {
        width: width
    },
    imageContainer: {
      elevation: 1,
    },
    image: {
      borderRadius: 3,
      marginHorizontal: theme.SIZES.BASE / 2,
      marginTop: -16,
    },
    imageBlock: {
      overflow: 'hidden',
      borderRadius: 4,
    },
    horizontalImage: {
      height: 122,
      width: 'auto',
    },
    fullImage: {
      height: 215,
      width: width - theme.SIZES.BASE * 3,
    },
    shadow: {
      shadowColor: theme.COLORS.BLACK,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.1,
      elevation: 2,
    },
    ups: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
  });