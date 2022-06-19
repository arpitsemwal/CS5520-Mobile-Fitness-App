import React, { Component } from 'react';
import { View, Alert, Button, Image, StyleSheet, Text, ImageBackground } from 'react-native';

export default class ExerciseComponent extends Component {

  render() {
    return (
      <View style={[styles.container]}>
        <ImageBackground
          source={require('./assets/Abs.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <Text style={styles.name}>{ `${this.props.name}` }</Text>
          <Text style={[styles.category]}>{ this.props.category }</Text>
          <Text style={styles.description}>{ this.props.description }</Text>
        </ImageBackground>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 150,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: '10%',
  },
  category: {
    fontSize: 14,
    fontWeight: 'medium',
    color: '#fff',
    paddingLeft: '10%',
  },
  description: {
    fontSize: 12,
    fontWeight: 'medium',
    color: '#fff',
    paddingLeft: '10%',
    paddingTop: '5%',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 6,
    overflow: 'hidden'
  },
});
