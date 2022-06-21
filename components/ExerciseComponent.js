import React, { Component } from 'react';
import { View, Alert, Button, Image, StyleSheet, Text, ImageBackground, TouchableHighlight} from 'react-native';

const regex = /(<([^>]+)>)/ig;

export default class ExerciseComponent extends Component {
  constructor(props) {
    super(props);
  }

  showDescription = () => {
    if (this.props.selectMode) {
      this.selectOrDeselect();
      return;
    }
    Alert.alert(
      `Description: ${ this.props.name }`,
      this.props.description.replace(regex, ''),
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  selectOrDeselect = () => {
    const isSelected = this.props.isSelected;
    if (isSelected) {
      this.props.removeFromQueue(this.props.name);
    } else {
      this.props.addToQueue(this.props.name);
    }
  }

  getOpacity = () => {
    if (this.props.selectMode) {
      return this.props.isSelected ? 1 : 0.5;
    } else {
      return 1;
    }
  }

  render() {
    return (
      <TouchableHighlight onPress={this.showDescription} onLongPress={this.selectOrDeselect}>
        <View style={[styles.container, { opacity: this.getOpacity() }]}>
          <ImageBackground
            source={this.props.image}
            resizeMode='cover'
            style={styles.image}>
            <Text style={styles.name}>{ `${this.props.name}` }</Text>
            <Text style={[styles.category]}>{ this.props.category }</Text>
          </ImageBackground>
        </View>
      </TouchableHighlight>
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
    width: '100%'
},
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: '10%',
  },
  category: {
    fontSize: 13,
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
    width: 400
  },
});
