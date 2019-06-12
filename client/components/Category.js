import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback,   ImageBackground, } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import materialTheme from '../constants/Theme';

const { width } = Dimensions.get('screen');

class Category extends React.Component {
  render() {
    const { navigation, category, categories, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

    return (
    //   <Block row={true} card flex style={[styles.category, styles.shadow, style]}>
    //     <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { recipe: recipe })}>
    //       <Block flex style={[styles.imageContainer, styles.shadow]}>
    //         <Image source={{ uri: category.image }} style={imageStyles} />
    //       </Block>
    //     </TouchableWithoutFeedback>
    //     <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { recipe: recipe })}>
    //       <Block flex space="between" style={styles.categoryDescription}>
    //         <Text size={20} style={styles.categoryTitle}>{category.title}</Text>
    //         {/* <Text size={12} muted={!priceColor} color={priceColor}> {category.difficulty}</Text> */}
    //       </Block>
    //     </TouchableWithoutFeedback>
    //   </Block>
    <Block flex card shadow style={styles.category}>
              <ImageBackground
                source={{ uri: category.image }}
                style={[styles.imageBlock, { width: width - (theme.SIZES.BASE * 2), height: 252 }]}
                imageStyle={{ width: width - (theme.SIZES.BASE * 2), height: 252 }}>
				  <TouchableWithoutFeedback onPress={() => navigation.navigate('RecipeByCategory', {categories: categories} )}>
                <Block style={styles.categoryTitle}>
                  <Text size={18} bold color={theme.COLORS.WHITE}>{category.category}</Text>
                </Block>
            </TouchableWithoutFeedback>
              </ImageBackground>
        </Block>
    );
  }
}

export default withNavigation(Category);

const styles = StyleSheet.create({
//   category: {
//     backgroundColor: theme.COLORS.WHITE,
//     marginVertical: theme.SIZES.BASE,
//     borderWidth: 0,
//     minHeight: 114,
//   },
//   categoryTitle: {
//     flex: 1,
//     flexWrap: 'wrap',
//     paddingTop: 25,
//   },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
    borderRadius: 10
  },
  categoryTitle: {
    height: '100%',
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryDescription: {
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