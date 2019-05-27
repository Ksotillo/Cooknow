import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, FlatList } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo';

import { Icon } from '../components';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

export default class RecipeDetail extends React.Component {

getIngredients(ingredients){
    const ingre = ingredients.map(ingredient => {
        return { key: ingredient }
    });
    // const ingre = { key: ...ingredients }
    // console.log(ingre)
    return ingre;
}

  render() {
    const  { navigation } = this.props;
    const recipe  = navigation.getParam('recipe');
    return (
      <Block flex style={styles.recipeDetail}>
        <Block flex>
          <ImageBackground
            source={{uri: recipe.image}}
            style={styles.recipeDetailContainer}
            imageStyle={styles.recipeDetailImage}>
            <Block flex style={styles.recipeDetailDetails}>
              <Block style={styles.recipeDetailTexts}>
                <Text color="white" size={28} style={{ paddingBottom: 8 }}>{recipe.title}</Text>
                <Block row space="between">
                  <Block row>
                    <Block middle style={styles.pro}>
                      <Text size={16} color="white">{recipe.description}</Text>
                    </Block>
                    {/* <Text color="white" size={16} muted style={styles.seller}>Seller</Text>
                    <Text size={16} color={materialTheme.COLORS.WARNING}>
                      4.8 <Icon name="shape-star" family="GalioExtra" size={14} />
                    </Text> */}
                  </Block>
                  <Block>
                    {/* <Text color={theme.COLORS.MUTED} size={16}>
                      <Icon name="pin-3" family="Galio" color={theme.COLORS.MUTED} size={16} />
                      {`  `} Los Angeles, CA
                      </Text> */}
                  </Block>
                </Block>
              </Block>
              <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} />
            </Block>
          </ImageBackground>
        </Block>
        <Block flex style={styles.options}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block row space="between" style={{ padding: theme.SIZES.BASE, }}>
              <Block middle>
                <Text bold size={12} style={{marginBottom: 8}}>Categoría</Text>
                <Text muted size={12}>{recipe.category}</Text>
              </Block>
              <Block middle>
                <Text bold size={12} style={{marginBottom: 8}}>Tiempo</Text>
                <Text muted size={12}>{recipe.time/60} minutos</Text>
              </Block>
              <Block middle>
                <Text bold size={12} style={{marginBottom: 8}}>Dificultad</Text>
                <Text muted size={12}>{recipe.difficulty}</Text>
              </Block>
            </Block>
            <Block row space="between" style={{ paddingVertical: 16, alignItems: 'baseline' }}>
              <Text size={16} bold>Ingredientes</Text>
              {/* <Text size={12} color={theme.COLORS.PRIMARY} onPress={() => this.props.navigation.navigate('Home')}>Ver todos</Text> */}
            </Block>
            <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
              <FlatList 
                data = { this.getIngredients(recipe.ingredients) }
                renderItem = { ({item})  => <Text style={styles.recipeDetailIngredients} size={12}>✅ {item.key}</Text>}
              >
              </FlatList>
            </Block>
            <Block row space="between" style={{ paddingVertical: 16, alignItems: 'baseline'  }}>
              <Text size={16} bold>Preparación</Text>
              {/* <Text size={12} color={theme.COLORS.PRIMARY} onPress={() => this.props.navigation.navigate('Home')}>Ver todos</Text> */}
            </Block>
            <Block style={{ marginBottom: 100 }}>
            <Text size={12}>{recipe.prepare}</Text>
            </Block>
              
          </ScrollView>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  recipeDetail: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 2,
  },
  recipeDetailImage: {
    width: width * 1.1,
    height: 'auto',
  },
  recipeDetailContainer: {
    width: width,
    height: height / 2,
  },
  recipeDetailDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  recipeDetailTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2
  },
  recipeDetailIngredients: {
    paddingLeft: 10,
    paddingVertical: 10
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: '100%',
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    position: 'relative',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 7,
    // marginBottom: 100,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
  },
});
