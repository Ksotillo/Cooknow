import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import materialTheme from '../constants/Theme';

const { width } = Dimensions.get('screen');

class Recipe extends React.Component {
  render() {
    const { navigation, recipe, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

    return (
      <Block row={horizontal} card flex style={[styles.recipe, styles.shadow, style]}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('RecipeDetail', { recipe: recipe })}>
          <Block flex style={[styles.imageContainer, styles.shadow]}>
            <Image source={{ uri: recipe.image }} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('RecipeDetail', { recipe: recipe })}>
          <Block flex space="between" style={styles.recipeDescription}>
            <Text size={14} style={styles.recipeTitle}>{recipe.title}</Text>
            <Text size={12} muted={!priceColor} color={priceColor}>Dificultad: {recipe.difficulty}</Text>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

export default withNavigation(Recipe);

const styles = StyleSheet.create({
  recipe: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  recipeTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  recipeDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
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