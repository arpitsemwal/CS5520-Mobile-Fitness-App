import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet, ImageBackground, TouchableOpacity, DeviceEventEmitter } from 'react-native'

const image = { uri: 'https://mfiles.alphacoders.com/683/thumb-1920-683110.jpg' };

const allCategories = [
  'Abs', 'Arms', 'Chest', 'Back', 'Shoulders', 'Legs'
];

const medicalInjuries = {
  WristInjury: ['Abs', 'Back', 'Legs'],
  ElbowInjury: ['Back', 'Legs'],
  ShoulderInjury: ['Abs', 'Back', 'Chest', 'Legs'],
  LowerBackInjury: ['Arms', 'Chest', 'Legs', 'Shoulders'],
  KneeInjury: ['Abs', 'Arms', 'Back', 'Chest', 'Shoulders'],
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
      Shoulders: categoriesToFilter.includes('Shoulders'),
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

  addMedicalInjuryToFilters = (injury) => {
    medicalInjuries[injury].forEach(category => {
      this.setState({ [category]: !this.state[injury] });
    });
    this.addCategoryToFilters(injury);
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
                      value = { this.state.Shoulders }
                      onValueChange = {() => this.addCategoryToFilters('Shoulders')}
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
                      onValueChange = {() => this.addMedicalInjuryToFilters('WristInjury')}
                  />
              </View>
              <View style={styles.switchButton}>
                  <Text style={styles.filterText}> Elbow </Text>
                  <Switch
                      trackColor={{ false: '#999999', true: '#40FF00' }}
                      ios_backgroundColor = '#999999'
                      style={styles.switch}
                      value = { this.state.ElbowInjury }
                      onValueChange = {() => this.addMedicalInjuryToFilters('ElbowInjury')}
                  />
              </View>
              <View style={styles.switchButton}>
                  <Text style={styles.filterText}> Shoulder </Text>
                  <Switch
                      trackColor={{ false: '#999999', true: '#40FF00' }}
                      ios_backgroundColor = '#999999'
                      style={styles.switch}
                      value = { this.state.ShoulderInjury }
                      onValueChange = {() => this.addMedicalInjuryToFilters('ShoulderInjury')}
                  />
              </View>
              <View style={styles.switchButton}>
                  <Text style={styles.filterText}> Lower Back </Text>
                  <Switch
                      trackColor={{ false: '#999999', true: '#40FF00' }}
                      ios_backgroundColor = '#999999'
                      style={styles.switch}
                      value = { this.state.LowerBackInjury }
                      onValueChange = {() => this.addMedicalInjuryToFilters('LowerBackInjury')}
                  />
              </View>
              <View style={styles.switchButton}>
                  <Text style={styles.filterText}> Knee </Text>
                  <Switch
                      trackColor={{ false: '#999999', true: '#40FF00' }}
                      ios_backgroundColor = '#999999'
                      style={styles.switch}
                      value = { this.state.KneeInjury }
                      onValueChange = {() => this.addMedicalInjuryToFilters('KneeInjury')}
                  />
              </View>
          </ImageBackground>
          <View style={styles.buttonContainer}>
              <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={[styles.bubble, styles.button]}
              >
                <Text style={styles.buttonText}>CANCEL</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  onPress={() => this.applyAndGoToMain()}
                  style={[styles.bubble, styles.button]}
              >
              <Text style={styles.buttonText}>APPLY</Text>
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
