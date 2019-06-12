import React from 'react';
import { Easing, Animated, Platform } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import { Block, Text, theme } from "galio-framework";

import ComponentsScreen from '../screens/Components';
import HomeScreen from '../screens/Home';
import OnboardingScreen from '../screens/Onboarding';
import ProfileScreen from '../screens/Profile';
import ProScreen from '../screens/Pro';
import SettingsScreen from '../screens/Settings';
import CategoriesScreen from '../screens/Categories'
import RecipeDetailScreen from '../screens/RecipeDetail'
import MyRecipesScreen from '../screens/MyRecipes'
import CreateRecipeScreen from '../screens/CreateRecipe'
import SearchResultsScreen from '../screens/SearchResults'
import FavoritesScreen from '../screens/Favorites'
import RecipeByCategoryScreen from '../screens/RecipeByCategory'

import Menu from './Menu';
import Header from '../components/Header';
import { Drawer } from '../components/';

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index
    const width = layout.initWidth
    
    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    })
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1],
    })
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0],
    })

    const scaleWithOpacity = { opacity }
    const screenName = "Search"

    if (screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] }
  }
})

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header white transparent title="Profile" navigation={navigation} />,
      headerTransparent: true,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
})

const ComponentsStack = createStackNavigator({
  Components: {
    screen: ComponentsScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header back title="Components" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
})

const CategoriesStack = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header  search title="Categorías" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
})

const RecipeDetailStack = createStackNavigator({
  RecipeDetail: {
    screen: RecipeDetailScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header  back title="Detalles de la receta" navigation={navigation} />,
      headerTransparent: true,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
})


const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header search tabs title="Bienvenido" navigation={navigation} />,
    })
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header back title="Configuración" navigation={navigation} />,
    })
  },
  Components: {
    screen: ComponentsScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header title="Components" navigation={navigation} />,
    })
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header back white transparent title="Perfil" navigation={navigation} />,
      headerTransparent: true,
    })
  },
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header back title="Categorías" navigation={navigation} />,
    })
  },
  RecipeDetail: {
    screen: RecipeDetailScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header  back title="Detalles de la receta" navigation={navigation} />,
      headerTransparent: true,
    })
  },
  MyRecipes: {
    screen: MyRecipesScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header search back title="Mis recetas" navigation={navigation} />,
      
    })
  },
  SearchResults: {
    screen: SearchResultsScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header search back title="Resultados:" navigation={navigation} />,
      
    })
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header  back title="Mis recetas favoritas" navigation={navigation} />,
      
    })
  },
  RecipeByCategory: {
    screen: RecipeByCategoryScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header  back title="Recetas disponibles:" navigation={navigation} />,
      
    })
  },
  CreateRecipe: {
    screen: CreateRecipeScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header  back title="Crear Receta" navigation={navigation} />,
    })
  },
  Pro: {
    screen: ProScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header back white transparent title="" navigation={navigation} />,
      headerTransparent: true,
    })
  },
},
{
  cardStyle: { 
    backgroundColor: '#EEEEEE', //this is the backgroundColor for the app
  },
  transitionConfig,
});

const AppStack = createDrawerNavigator(
  {
    Onboarding: {
      screen: OnboardingScreen,
      navigationOptions: {
        drawerLabel: () => {},
      },
    },
    Dashboard: {
      screen: HomeStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Home" title="Inicio" />
        ),
      }),
    },
    Categories: {
      screen: CategoriesStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Categories" title="Categorias" />
        ),
      }),
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Favorites" title="Favoritos" />
        ),
      }),
    },
    MyRecipes: {
      screen: MyRecipesScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="MyRecipes" title="Mis recetas" />
        ),
      }),
    },
    // NewCollection: {
    //   screen: ProScreen,
    //   navigationOptions: (navOpt) => ({
    //     drawerLabel: ({focused}) => (
    //       <Drawer focused={focused} screen="Pro" title="New Collection" />
    //     ),
    //   }),
    // },
    Profile: {
      screen: ProfileStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Profile" title="Perfil" />
        ),
      }),
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Settings" title="Configuración" />
        ),
      }),
    },
    // Components: {
    //   screen: ComponentsStack,
    //   navigationOptions: (navOpt) => ({
    //     drawerLabel: ({focused}) => (
    //       <Drawer focused={focused} screen="Components" title="Components" />
    //     ),
    //   }),
    // },
    MenuDivider: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: () => <Block style={{marginVertical: 8}}><Text>{` `}</Text></Block>,
      },
    },
    // SignIn: {
    //   screen: HomeStack,
    //   navigationOptions: (navOpt) => ({
    //     drawerLabel: ({focused}) => (
    //       <Drawer focused={focused} screen="Home" title="Iniciar Sesión" />
    //     ),
    //   }),
    // },
    // SignUp: {
    //   screen: HomeStack,
    //   navigationOptions: (navOpt) => ({
    //     drawerLabel: ({focused}) => (
    //       <Drawer focused={focused} screen="Home" title="Registrarse" />
    //     ),
    //   }),
    // },
  },
  Menu
);

export default createSwitchNavigator(
  {
    App: AppStack,
    Home: HomeStack,
  },
  {
    initialRouteName: 'App',
  }
);