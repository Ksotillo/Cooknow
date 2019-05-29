
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button, Block,
 Text, Input, theme } from 'galio-framework';

const { width } = Dimensions.get('screen');

import t from 'tcomb-form-native'; // 0.6.9

// import recipes from '../constants/recipes'

const Form = t.form.Form;

const Recipe = t.struct({
  title: t.String,
  description: t.String,
  category: t.String,
  prepare: t.String,
  time: t.Number,
  ingredients: t.list(t.String),
  difficulty: t.String,
});

export default class CreateRecipe extends Component {

    handleCreate = (navigation) => {
        const value = this._form.getValue(); // use that ref to get the form value
        onCreate = navigation.getParam('onCreate');
        onCreate(value);
        navigation.navigate('MyRecipes');
    }

    handleEdit = (navigation) => {
        const value = this._form.getValue(); // use that ref to get the form value
        onEdit = navigation.getParam('onEdit');
        onEdit(value);
        navigation.navigate('MyRecipes');
    }
    
    render() {
        const { navigation } = this.props;
        const recipe = navigation.getParam('recipe')
        console.log(recipe);
        

    return (
        <Block flex center style={styles.home}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.recipes}>
                { !recipe ? (
                    <>
                        <Form ref={c => this._form = c}  type={Recipe} />   
                        <Button onPress={() => this.handleCreate(navigation)}>Crear receta</Button>
                    </>
                ) : (
                    <>
                        <Form ref={c => this._form = c}  type={Recipe} value={recipe}/>
                        <Button onPress={() => this.handleEdit(navigation)}>Actualizar receta</Button>
                    </>
                )}
            </ScrollView>
        </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  home: {
    width: width,
  },
  recipes: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});