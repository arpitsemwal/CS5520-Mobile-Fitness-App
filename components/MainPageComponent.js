import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import React, { useState, useEffect } from "react";

// get data from this URL!
const URL = "https://wger.de/api/v2/exerciseinfo/?limit=10";

const MainPageComponent = () => {
    // managing state with 'useState'
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [name, setTitle] = useState([]);
    const [description, setDescription] = useState([]);

    // similar to 'componentDidMount', gets called once
    useEffect(() => {
        fetch(URL)
            .then((response) => response.json()) // get response, convert to json
            .then((json) => {
                setData(json.results);
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

    return (
        <SafeAreaView style={styles.container}>
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
                        renderItem={({ item }) => (
                            <View style={{ paddingBottom: 10 }}>
                                <Text style={styles.Text}>
                                    {item.id}. {item.name}
                                </Text>
                            </View>
                        )}
                    />
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 48,
    },
    Text: {
        fontSize: 26,
        fontWeight: "200",
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
});

export default MainPageComponent;