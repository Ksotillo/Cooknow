/*!

 =========================================================
 * Material Kit React Native - v1.1.2
 =========================================================
 * Recipe Page: https://demos.creative-tim.com/material-kit-react-native/
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react-native/blob/master/LICENSE)
 =========================================================
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from 'react';
import { Platform, StatusBar, Image } from 'react-native';
import { AppLoading, Asset } from 'expo';
import { Block, GalioProvider } from 'galio-framework';
import { Provider } from './constants/context';

import Screens from './navigation/Screens';
import { Images, recipes, categories, materialTheme } from './constants/';

// cache app images
const assetImages = [
  Images.Pro,
  Images.Profile,
  Images.Avatar,
  Images.Onboarding,
];

// cache recipe images
recipes.map(recipe => assetImages.push(recipe.image));

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
	recipes,
	favorites: []
  };


//   Metodos de crear, editar y eliminar

//   Crear

  handleRecipeCreated = recipe =>
  this.setState(({ recipes }) => ({
      recipes: [
          ...recipes,
          recipe
      ]
  }))

  //Editar

  handleRecipeEdit = recipe =>
        this.setState( ({ recipes }) => ({
            recipes: [
                ...recipes.filter(indexedRecipe => indexedRecipe.title !== recipe.title),
                recipe
            ]
		}))
		

		// Eliminar

		handleRecipeDeleted = title =>{
			if (title) {
				this.setState(({ recipes }) => ({
					// recipes: recipes.filter(recipe => recipe.title !== title)
					recipes: recipes.filter( recipe => {
						console.log(recipe.title !== title, recipe.title, title)
						return recipe.title !== title;
					} )
				}))
			}
		}
		
		//  Seleccion

		handleRecipeSelected = title =>
        this.setState(({ recipes }) => ({//Voy a agarrar todo el arreglo de recipes
            recipe: recipes.find(recipe => recipe.title === title),//Y voy a buscar y retornar la app con el id seleccionado
        }))


		//   Añadir a favoritos

		handleRecipeFavAdded = recipe =>
		this.setState(({ favorites }) => ({
			favorites: [
				...favorites,
				recipe
			]
		}))

		// Eliminar de favoritos

		handleRecipeFavDeleted = title =>{
			if (title) {
				this.setState(({ favorites }) => ({
					// recipes: recipes.filter(recipe => recipe.title !== title)
					favorites: favorites.filter( recipe => {
						console.log(recipe.title !== title, recipe.title)
						return recipe.title !== title;
					} )
				}))
			}
		}

		recipeIsFav = title => {
			return this.state.favorites.find(recipe => recipe.title === title);
		}

  getContext = () => ({
    ...this.state,
	onCreate: this.handleRecipeCreated,
	onEdit: this.handleRecipeEdit,
	onDelete: this.handleRecipeDeleted,
	onSelect: this.handleRecipeSelected,
	onFavAdded: this.handleRecipeFavAdded,
	onFavDeleted: this.handleRecipeFavDeleted,
	recipeIsFav: this.recipeIsFav,
})



  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <GalioProvider theme={materialTheme}>
          <Provider value={this.getContext()}>
            <Block flex>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <Screens />
            </Block>
          </Provider>
        </GalioProvider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      ...cacheImages(assetImages),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
