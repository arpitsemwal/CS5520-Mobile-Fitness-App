import React, { Component } from 'react';
import { View, Alert, Button, Image, StyleSheet, TextInput, } from 'react-native';

export default class MainPageComponent extends Component {

    constructor() {
        super()
        this.state = {
            excerciseData: [],
        }
    }

    componentDidMount() {
        this.fetchDataFromFitnessApi();
    }

    fetchDataFromFitnessApi() {
        fetch('https://wger.de/api/v2/exerciseinfo/?limit=5')
            .then((response) => response.json())
            .then((source) => {
                this.setState({
                    excerciseData: source.results
                });
            })
    }

    render() {
        console.log(this.state.excerciseData[2]);
        return (
            <View style={styles.container}>
                
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
    textInput: {
        height: 40,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1
      },
});
