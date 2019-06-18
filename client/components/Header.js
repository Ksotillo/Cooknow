import React from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import { Button, Block, NavBar, Input, Text, theme } from 'galio-framework';
import { Alert} from 'react-native'

import Icon from './Icon';
import { Consumer } from "../constants/context";
import materialTheme from '../constants/Theme';

const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

// const ChatButton = ({isWhite, style, navigation}) => (
//   <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Pro')}>
//     <Icon
//       family="GalioExtra"
//       size={16}
//       name="chat-33"
//       color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
//     />
//     <Block middle style={styles.notify} />
//   </TouchableOpacity>
// );

// const BasketButton = ({isWhite, style, navigation}) => (
//   <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Pro')}>
//     <Icon
//       family="GalioExtra"
//       size={16}
//       name="basket-simple"
//       color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
//     />
//     <Block middle style={styles.notify} />
//   </TouchableOpacity>
// );

const CreateButton = ({isWhite, style, navigation}) => (
  <Consumer>{ ({ onCreate }) =>
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('CreateRecipe', { onCreate: onCreate } )}>
    <Icon
      family="MaterialIcons"
      size={19}
      name="add-circle-outline"
      color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
    {/* <Block middle style={styles.notify} /> */}
  </TouchableOpacity>
  }</Consumer>
);

// const DeleteButton = ({isWhite, style, navigation}) => (
//   <Consumer>{ ({ onDelete, recipe }) =>
//   <TouchableOpacity style={[styles.button, style]} onPress={onDelete()}>
//     <Icon
//       family="MaterialCommunityIcons"
//       size={22}
//       name="delete-circle"
//       color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
//     />
//     {/* <Block middle style={styles.notify} /> */}
//   </TouchableOpacity>
//   }</Consumer>
// );
// navigation.navigate('MyRecipes')
const SearchButton = ({isWhite, style, navigation, search}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('SearchResults', { search }) }>
    <Icon
      size={16}
      family="Galio"
      name="zoom-split"
      color={theme.COLORS[isWhite ? 'WHITE' : 'MUTED']}
    />
  </TouchableOpacity>
);

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {textSearch: ''};
	  }

	  search = () => {
		  console.log(this.state.textSearch)
	  }

	  // alert = () => {
		// Alert.alert(
		// 	'Función no disponible 😅',
		// 	'¡Está función estará disponible en próximas actualizaciones!',
		// 	[
		// 	  {text: 'OK', onPress: () => console.log('OK Pressed')},
		// 	],
		// 	{cancelable: false},
		//   );
	  // }

  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return (back ? navigation.goBack() : navigation.openDrawer());
  }

  renderRight = () => {
    const { white, title, navigation } = this.props;
    const { routeName } = navigation.state;

    if (title === 'Title') {
      return [
        // <ChatButton key='chat-title' navigation={navigation} isWhite={white} />,
        // <BasketButton key='basket-title' navigation={navigation} isWhite={white} />
      ]
    }

    switch (routeName) {
      case 'Home':
        return ([
          // <ChatButton key='chat-home' navigation={navigation} isWhite={white} />,
          // <BasketButton key='basket-home' navigation={navigation} isWhite={white} />
        ]);
      case 'MyRecipes':
        return ([
          <CreateButton key='create-myrecipes' navigation={navigation} />
        ]);
      case 'RecipeDetail':
        return ([
          // <DeleteButton key='create-myrecipes' navigation={navigation} />
        ]);
      case 'Categories':
        return ([
          // <ChatButton key='chat-categories' navigation={navigation} isWhite={white} />,
          // <BasketButton key='basket-categories' navigation={navigation} isWhite={white} />
        ]);
      case 'Category':
        return ([
          // <ChatButton key='chat-deals' navigation={navigation} isWhite={white} />,
          // <BasketButton key='basket-deals' navigation={navigation} isWhite={white} />
        ]);
      case 'Profile':
        return ([
          // <ChatButton key='chat-profile' navigation={navigation} isWhite={white} />,
          // <BasketButton key='basket-deals' navigation={navigation} isWhite={white} />
        ]);
      case 'Recipe':
        return ([
          // <SearchButton key='search-recipe' navigation={navigation} isWhite={white} />,
          // <BasketButton key='basket-recipe' navigation={navigation} isWhite={white} />
        ]);
      case 'Search':
        return ([
          // <ChatButton key='chat-search' navigation={navigation} isWhite={white} />,
          // <BasketButton key='basket-search' navigation={navigation} isWhite={white} />
        ]);
      case 'Settings':
        return ([
          // <ChatButton key='chat-search' navigation={navigation} isWhite={white} />,
          // <BasketButton key='basket-search' navigation={navigation} isWhite={white} />
        ]);
      default:
        break;
    }
  }

  handleSearchPlaceholder = (title) => {
    switch(title){
    	case 'Bienvenido':
        	return "¿Qué receta quieres hacer hoy?"

    	case 'Categorías':
          	return '¿Qué categoría deseas ver?'

		case 'Mis recetas':
            return '¿Cuál receta deseas revisar?'
          default:
			  break;
    }
  }

  handleSearch = (title, navigation) => {
    switch(title){
    	case 'Bienvenido':
        	return <SearchButton key='search-product' navigation={navigation} isWhite={false} search={this.state.textSearch} />

		case 'Resultados:':
        	return <SearchButton key='search-product' navigation={navigation} isWhite={false} search={this.state.textSearch} />

    	case 'Categorías':
          	return <Icon size={16} color={theme.COLORS.MUTED} name="zoom-split" family="Galio" />

		case 'Mis recetas':
      		return <SearchButton key='search-product' navigation={navigation} isWhite={false} search={this.state.textSearch} />
          default:
			  break;
    }
  }

  renderSearch = () => {
    const { navigation, title } = this.props;
    return (
      <Input
        right
        color="black"
        style={styles.search}
        placeholder={this.handleSearchPlaceholder(title)}
        // onFocus={() => navigation.navigate('Home')}
          // iconContent={<Icon size={16} color={theme.COLORS.MUTED} name="zoom-split" family="Galio" />}
		iconContent={this.handleSearch(title, navigation)}
		onChangeText={(textSearch) => this.setState({textSearch})}
      />
    )
  }

  renderTabs = () => {
    const { navigation, tabTitleLeft, tabTitleRight } = this.props;

    return (
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Categories')}>
          <Block row middle>
            <Icon name="grid-square" family="Galio" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>{tabTitleLeft || 'Categorías'}</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Favorites')}>
          <Block row middle>
            <Icon size={16} name="heart-2" family="Galio" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>{tabTitleRight || 'Favoritos'}</Text>
          </Block>
        </Button>
      </Block>
    )
  }

  renderHeader = () => {
    const { search, tabs } = this.props;
    if (search || tabs) {
      return (
        <Block center>
          {search ? this.renderSearch() : null}
          {tabs ? this.renderTabs() : null}
        </Block>
      )
    }
    return null;
  }

  render() {
    const { back, title, white, transparent, navigation } = this.props;
    const { routeName } = navigation.state;
    const noShadow = ["Search", "Deals", "Pro", "Profile"].includes(routeName);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
    ];

    return (
      <Block style={headerStyles}>
        <NavBar
          back={back}
          title={title}
          style={styles.navbar}
          transparent={transparent}
          right={this.renderRight()}
          rightStyle={{ alignItems: 'center' }}
          leftStyle={{ paddingVertical: 12, flex: 0.3 }}
          leftIconColor={white ? theme.COLORS.WHITE : theme.COLORS.ICON}
          titleStyle={[
            styles.title,
            {color: theme.COLORS[white ? 'WHITE' : 'ICON']},
          ]}
          onLeftPress={this.handleLeftPress}
        />
        {this.renderHeader()}
      </Block>
    );
  }
}

export default withNavigation(Header);

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: materialTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 8,
    right: 8,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
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
})