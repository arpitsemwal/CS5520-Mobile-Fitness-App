import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet, ImageBackground, TouchableOpacity, DeviceEventEmitter } from 'react-native'

const image = { uri: 'https://mfiles.alphacoders.com/683/thumb-1920-683110.jpg' };

const allCategories = [
  'Abs', 'Arms', 'Chest', 'Back', 'Shoulder', 'Legs', 'Wrist Injury', 'Elbow Injury', 'Shoulder Injury', 'Lower Back Injury', 'Knee Injury'
];

const medicalInjuries = {
  'Wrist Injury': [],
  'Elbow Injury': [],
  'Shoulder Injury': [],
  'Lower Back Injury': [],
  'Knee Injury': [],
}
export default class FilterComponent extends Component {

  constructor(props) {
    super(props);
    const { categoriesToFilter } = this.props.route.params;
    this.state = {
      Abs: categoriesToFilter.includes('Abs'),
      Arms: categoriesToFilter.includes('Arms'),
      Chest: categoriesToFilter.includes('Chest'),
      Back: categoriesToFilter.includes('Back'),
      Shoulder: categoriesToFilter.includes('Shoulder'),
      Legs: categoriesToFilter.includes('Legs'),
      WristInjury: categoriesToFilter.includes('WristInjury'),
      ElbowInjury: categoriesToFilter.includes('ElbowInjury'),
      ShoulderInjury: categoriesToFilter.includes('ShoulderInjury'),
      LowerBackInjury: categoriesToFilter.includes('LowerBackInjury'),
      KneeInjury: categoriesToFilter.includes('KneeInjury'),
    }
  }

  addCategoryToFilters = (category) => {
    this.setState({ [category]: !this.state[category] });
  }

  applyAndGoToMain = () => {
    const filtersApplied = (
      Object.keys(this.state).filter(category => this.state[category])
    );
    DeviceEventEmitter.emit('filterAppliedEvent', filtersApplied);
    this.props.navigation.goBack();
  }

  render() {
      return (
          <View style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
              <Text style={styles.title}> Muscle groups </Text>
              <View style={styles.switchButton}>
                  <Text style={styles.filterText}> Abs </Text>
                  <Switch
                      trackColor={{ false: '#999999', true: '#40FF00' }}
                      ios_backgroundColor = '#999999'
                      style={styles.switch}
                      value = { this.state.Abs }
                      onValueChange = {() => this.addCategoryToFilters('Abs')}
                  />
              </View>
              <View style={styles.switchButton}>
                  <Text style={styles.filterText}> Arms </Text>
                  <Switch
                      trackColor={{ false: '#999999', true: '#40FF00' }}
                      ios_backgroundColor = '#999999'
                      style={styles.switch}
                      value = { this.state.Arms }
                      onValueChange = {() => this.addCategoryToFilters('Arms')}
                  />
              </View>
              <View style={styles.switchButton}>
                  <Text style={styles.filterText}> Chest </Text>
                  <Switch
                      trackColor={{ false: '#999999', true: '#40FF00' }}
                      ios_backgroundColor = '#999999'
                      style={styles.switch}
                      value = { this.state.Chest }
                      onValueChange = {() => this.addCategoryToFilters('Chest')}
                  />
              </View>
              <View style={styles.switchButton}>
                  <Text style={styles.filterText}> Back </Text>
                  <Switch
                      trackColor={{ false: '#999999', true: '#40FF00' }}
                      ios_backgroundColor = '#999999'
                      style={styles.switch}
                      value = { this.state.Back }
                      onValueChange = {() => this.addCategoryToFilters('Back')}
                  />
              </View>
              <View style={styles.switchButton}>
                  <Text style={styles.filterText}> Shoulder </Text>
                  <Switch
                      trackColor={{ false: '#999999', true: '#40FF00' }}
                      ios_backgroundColor = '#999999'
                      style={styles.switch}
                      value = { this.state.Shoulder }
                      onValueChange = {() => this.addCategoryToFilters('Shoulder')}
                  />
              </View>
              <View style={styles.switchButton}>
                  <Text style={styles.filterText}> Legs </Text>
                  <Switch
                      trackColor={{ false: '#999999', true: '#40FF00' }}
                      ios_backgroundColor = '#999999'
                      style={styles.switch}
                      value = { this.state.Legs }
                      onValueChange = {() => this.addCategoryToFilters('Legs')}
                  />
              </View>
              <Text style={styles.title}> Injury </Text>
              <View style={styles.switchButton}>
                  <Text style={styles.filterText}> Wrist </Text>
                  <Switch
                      trackColor={{ false: '#999999', true: '#40FF00' }}
                      ios_backgroundColor = '#999999'
                      style={styles.switch}
                      value = { this.state.WristInjury }
                      onValueChange = {() => this.addCategoryToFilters('WristInjury')}
                  />
              </View>
              <View style={styles.switchButton}>
                  <Text style={styles.filterText}> Elbow </Text>
                  <Switch
                      trackColor={{ false: '#999999', true: '#40FF00' }}
                      ios_backgroundColor = '#999999'
                      style={styles.switch}
                      value = { this.state.ElbowInjury }
                      onValueChange = {() => this.addCategoryToFilters('ElbowInjury')}
                  />
              </View>
              <View style={styles.switchButton}>
                  <Text style={styles.filterText}> Shoulder </Text>
                  <Switch
                      trackColor={{ false: '#999999', true: '#40FF00' }}
                      ios_backgroundColor = '#999999'
                      style={styles.switch}
                      value = { this.state.ShoulderInjury }
                      onValueChange = {() => this.addCategoryToFilters('ShoulderInjury')}
                  />
              </View>
              <View style={styles.switchButton}>
                  <Text style={styles.filterText}> Lower Back </Text>
                  <Switch
                      trackColor={{ false: '#999999', true: '#40FF00' }}
                      ios_backgroundColor = '#999999'
                      style={styles.switch}
                      value = { this.state.LowerBackInjury }
                      onValueChange = {() => this.addCategoryToFilters('LowerBackInjury')}
                  />
              </View>
              <View style={styles.switchButton}>
                  <Text style={styles.filterText}> Knee </Text>
                  <Switch
                      trackColor={{ false: '#999999', true: '#40FF00' }}
                      ios_backgroundColor = '#999999'
                      style={styles.switch}
                      value = { this.state.KneeInjury }
                      onValueChange = {() => this.addCategoryToFilters('KneeInjury')}
                  />
              </View>
          </ImageBackground>
          <View style={styles.buttonContainer}>
              <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={[styles.bubble, styles.button]}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  onPress={() => this.applyAndGoToMain()}
                  style={[styles.bubble, styles.button]}
              >
              <Text style={styles.buttonText}>Apply</Text>
              </TouchableOpacity>
          </View>
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
  },
  switchButton: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontSize: 25,
    color: '#000',
    marginRight: 100,
    marginLeft: 100,
    color: 'white',
    lineHeight: 84,
    fontWeight: 'bold',
    backgroundColor: '#000000c0',
    textAlign: 'center',
  },
  filterText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'left',
    width: 140
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover'
  },
  switch: {
    marginRight: 10,
  },
  button: {
    width: 100,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 25
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    bottom: 50
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  }
});
