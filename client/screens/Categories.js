import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import { Consumer } from '../constants/context';

import { Icon, Recipe, Category } from '../components/';

const { width } = Dimensions.get('screen');
import categories from '../constants/categories';


export default class Categories extends React.Component {
    // renderSearch = () => {
    //   const { navigation } = this.props;
    //   const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="camera-18" family="GalioExtra" />
  
    //   return (
    //     <Input
    //       right
    //       color="black"
    //       style={styles.search}
    //       iconContent={iconCamera}
    //       placeholder="¿Qué categoría deseas ver?"// Cambiar
    //     />
    //   )
    // }
    
    // renderTabs = () => {
    //   const { navigation } = this.props;
  
    //   return (
    //     <Block row style={styles.tabs}>
    //       <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Categories')}>
    //         <Block row middle>
    //           <Icon name="grid-square" family="Galio" style={{ paddingRight: 8 }} />
    //           <Text size={16} style={styles.tabTitle}>Categorías</Text>
    //         </Block>
    //       </Button>
    //       <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Pro')}>
    //         <Block row middle>
    //           <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
    //           <Text size={16} style={styles.tabTitle}>Populares</Text>
    //         </Block>
    //       </Button>
    //     </Block>
    //   )
    // }
  
	getRecipesByCateogories(recipes){
        const initRecipes = categories.reduce((recipes, category) => ({//Esto es para que cuando se elimine todas las recipes de una categoria no se elimine la categoria tambien, sino se mantenga
            ...recipes,
            [category.title]: []
        }), {})

        return Object.entries(
                recipes.reduce((recipes, recipe) => {
                const { category } = recipe//Guardo la categoria de la recipe en una variable

                recipes[category] = [...recipes[category], recipe]//Asigno en mi array de recipes dependiendo la categoria las distinas recipes
                return recipes;
			}, initRecipes)
			)
	}
	
	convertIntoArray(categories){
		let key = '';
		const obj = {};

		categories = categories.flat();
		console.log(categories)
		categories.forEach( x=> {
			if (typeof x === 'string') {
				key = x.replace(/ /g,"");
				if (!obj[key]){
					obj[key] = [];
				}
			} else if (Array.isArray(x)) {
				obj[key] = x;
			}
		})
		console.log(obj);
		return obj;
	}

	renderCategories = recipes => {
		const categoriesObject = this.getRecipesByCateogories(recipes);
		const categories = this.convertIntoArray(categoriesObject);
		const items = []
	
		// for (const [index, value] of categories.entries()) {
		//   if (value) {
		// 	items.push(<Category key={index} category={value[0]} />)
		//   }
		// }
	
		for (var key in categories) {
			if (categories.hasOwnProperty(key)) {
				// console.log(key + " -> " + p[key])
				const category = categories[key][0];
				console.log(category);
				items.push(<Category key={key} category={categories[key][0]} categories={categories[key]}/>)
			}
		}

		return(
		  <Block flex>
			  {items}
		  </Block>
		)
	  }

    renderRecipes = () => {
      return (
		  <Consumer>{ ({ recipes }) =>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.recipes}>
		  {this.renderCategories(recipes)}
		  {/* {this.getRecipesByCateogories(recipes)} */}
        </ScrollView>}
		</Consumer>
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
  