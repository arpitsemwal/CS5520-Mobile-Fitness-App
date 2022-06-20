import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, FlatList, Button, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from "react";
import ExerciseComponent from './ExerciseComponent';


// get data from this URL!
const URL = "https://wger.de/api/v2/exerciseinfo/?limit=30";

const MainPageComponent = () => {
    // managing state with 'useState'
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [name, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const imageMapping = {
      Abs: require('../assets/Abs.jpg'),
      Arms: require('../assets/Arms.png'),
      Back: require('../assets/Back.jpg'),
      Calves: require('../assets/Calves.jpg'),
      Chest: require('../assets/Chest.jpg'),
      Legs: require('../assets/Legs.jpg'),
      Shoulders: require('../assets/Shoulders.jpg'),
    }

    // similar to 'componentDidMount', gets called once
    useEffect(() => {
        fetch(URL)
            .then((response) => response.json()) // get response, convert to json
            .then((json) => {
                setData(json.results.filter(item => item.language.short_name === 'en'));
                setTitle(json.name);
                setDescription(json.description);
            })
            .catch((error) => alert(error)) // display errors
            .finally(() => setLoading(false)); // change loading state
    }, []);

    // Also get call asynchronous function
    async function getListAsync() {
        try {
            let response = await fetch(URL);
            let json = await response.json();
            setData(json.results);
            setTitle(json.name);
            setDescription(json.description);
            setLoading(false);
        } catch (error) {
            alert(error);
        }
    }

    const renderItem = ({ item }) => {
      return <ExerciseComponent name={item.name} description={item.description} category={item.category.name} image={imageMapping[item.category.name]}/>
    }

    return (
        <><SafeAreaView style={styles.container}>
            {/* While fetching show the indicator, else show response*/}
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <View>
                    {/* Title from URL */}
                    <Text style={styles.name}>{name}</Text>

                    <View style={{ borderBottomWidth: 1, marginBottom: 12 }}></View>
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={renderItem} />
                </View>
            )}
        </SafeAreaView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => this.goToCoach()}
                    style={[styles.bubble, styles.button]}
                >
                    <Text style={styles.buttonText}>COACH</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.goToFilter()}
                    style={[styles.bubble, styles.button]}
                >
                    <Text style={styles.buttonText}>FILTER</Text>
                </TouchableOpacity>

            </View></>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 48,
        backgroundColor: 'black'
    },
    Text: {
        fontSize: 26,
        fontWeight: "200",
        fontWeight: "bold",
        color: 'white'
    },
    name: {
        fontSize: 32,
        fontWeight: "bold",
    },
    description: {
        textAlign: "center",
        marginBottom: 18,
        fontWeight: "200",
        color: "green",
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
        bottom: 100
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        color: 'black'
    }
});

export default MainPageComponent;