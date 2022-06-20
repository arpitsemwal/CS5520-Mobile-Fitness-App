import React, { Component } from 'react';
import { View, Alert, Button, Image, StyleSheet, Text, ImageBackground } from 'react-native';

export default class ExerciseComponent extends Component {

  render() {
    const regex = /(<([^>]+)>)/ig;
    return (
      <View style={[styles.container]}>
        <ImageBackground
          source={this.props.image}
          resizeMode="cover"
          style={styles.image}>
          <Text style={styles.name}>{ `${this.props.name}` }</Text>
          <Text style={[styles.category]}>{ this.props.category }</Text>
          <Text ellipsizeMode='tail' numberOfLines={5} style={styles.description}>{ this.props.description.replace(regex, '') }</Text>
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
    minHeight: 150,
    maxHeight: 150,
},
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: '10%',
  },
  category: {
    fontSize: 13,
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
    overflow: 'hidden',
    width: '100%',
  },
});
