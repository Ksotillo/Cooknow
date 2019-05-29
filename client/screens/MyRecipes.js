import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Dimensions, ScrollView, TouchableWithoutFeedback,   ImageBackground, } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import materialTheme from '../constants/Theme';
import {  Recipe } from '../components/';
import {  Consumer } from '../constants/context';
// import recipes from '../constants/recipes'


const { width } = Dimensions.get('screen');

class MyRecipes extends React.Component {
  
  renderRecipes = recipes => {
    const items = []

    for (const [index, value] of recipes.entries()) {
      if (value) {
        items.push(<Recipe horizontal key={index} recipe={value} />)
      }
    }

    return(
      <Block flex>
          {items}
      </Block>
    )
  }

  render() {
    const { navigation, recipe, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];
    

    return (
      <Consumer>{ ({ recipes }) =>
        <Block flex center style={styles.home}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.recipes}>
                {/* <Block flex> */}
                  {this.renderRecipes(recipes)}
                  
                    {/* <Recipe horizontal recipe={recipes[0]} />
                    <Recipe horizontal recipe={recipes[1]} />
                    <Recipe horizontal recipe={recipes[2]} />
                    <Recipe horizontal recipe={recipes[3]} /> */}
                    {/* <Recipe recipe={recipes[4]} full />
                    <Recipe recipe={recipes[5]} horizontal />
                    <Block flex row>
                    <Recipe recipe={recipes[6]} style={{ marginRight: theme.SIZES.BASE }} />
                    <Recipe recipe={recipes[7]} />
                    </Block> */}
                    {/* <Recipe recipe={recipes[8]} horizontal /> */}
                    {/* <Recipe recipe={recipes[9]} full /> */}
                {/* </Block> */}
            </ScrollView>
        </Block>}
        </Consumer>
    );
  }
}

export default withNavigation(MyRecipes);

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
});