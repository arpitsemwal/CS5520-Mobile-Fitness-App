import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet, ImageBackground } from 'react-native'

const image = { uri: "https://mfiles.alphacoders.com/683/thumb-1920-683110.jpg" };

export default class FilterComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            abs: this.props.abs,
            arms: this.props.arms,
            chest: this.props.chest,
            back: this.props.back,
            shoulder: this.props.shoulder,
            legs: this.props.legs,
            wristInjury: this.props.wristInjury,
            elbowInjury: this.props.elbowInjury,
            shoulderInjury: this.props.shoulderInjury,
            lowerBackInjury: this.props.lowerBackInjury,
            kneeInjury: this.props.kneeInjury,
        }
    }

    static defaultProps =  {
        abs: false,
        arms: false,
        chest: false,
        back: false,
        shoulder: false,
        legs: false,
        wristInjury: false,
        elbowInjury: false,
        shoulderInjury: false,
        lowerBackInjury: false,
        kneeInjury: false,
    }

    render() {
        return (
            <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.title}> Muscle groups: </Text>
                <View style={styles.switchButton}>
                    <Text style={styles.filterText}> Abs </Text>
                    <Switch
                        trackColor={{ false: "#999999", true: "#40FF00" }}
                        ios_backgroundColor = "#999999"
                        style={styles.switch}
                        value = {this.state.abs}
                        onValueChange = {(value) => this.setState(
                            {abs: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text style={styles.filterText}> Arms </Text>
                    <Switch
                        trackColor={{ false: "#999999", true: "#40FF00" }}
                        ios_backgroundColor = "#999999"
                        style={styles.switch}
                        value = {this.state.arms}
                        onValueChange = {(value) => this.setState(
                            {arms: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text style={styles.filterText}> Chest </Text>
                    <Switch
                        trackColor={{ false: "#999999", true: "#40FF00" }}
                        ios_backgroundColor = "#999999"
                        style={styles.switch}
                        value = {this.state.chest}
                        onValueChange = {(value) => this.setState(
                            {chest: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text style={styles.filterText}> Back </Text>
                    <Switch
                        trackColor={{ false: "#999999", true: "#40FF00" }}
                        ios_backgroundColor = "#999999"
                        style={styles.switch}
                        value = {this.state.back}
                        onValueChange = {(value) => this.setState(
                            {back: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text style={styles.filterText}> Shoulder </Text>
                    <Switch
                        trackColor={{ false: "#999999", true: "#40FF00" }}
                        ios_backgroundColor = "#999999"
                        style={styles.switch}
                        value = {this.state.shoulder}
                        onValueChange = {(value) => this.setState(
                            {shoulder: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text style={styles.filterText}> Legs </Text>
                    <Switch
                        trackColor={{ false: "#999999", true: "#40FF00" }}
                        ios_backgroundColor = "#999999"
                        style={styles.switch}
                        value = {this.state.legs}
                        onValueChange = {(value) => this.setState(
                            {legs: value}
                        )}
                    />
                </View>
                <Text style={styles.title}> Injury: </Text>
                <View style={styles.switchButton}>
                    <Text style={styles.filterText}> Wrist </Text>
                    <Switch
                        trackColor={{ false: "#999999", true: "#40FF00" }}
                        ios_backgroundColor = "#999999"
                        style={styles.switch}
                        value = {this.state.wristInjury}
                        onValueChange = {(value) => this.setState(
                            {wristInjury: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text style={styles.filterText}> Elbow </Text>
                    <Switch
                        trackColor={{ false: "#999999", true: "#40FF00" }}
                        ios_backgroundColor = "#999999"
                        style={styles.switch}
                        value = {this.state.elbowInjury}
                        onValueChange = {(value) => this.setState(
                            {elbowInjury: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text style={styles.filterText}> Shoulder </Text>
                    <Switch
                        trackColor={{ false: "#999999", true: "#40FF00" }}
                        ios_backgroundColor = "#999999"
                        style={styles.switch}
                        value = {this.state.shoulderInjury}
                        onValueChange = {(value) => this.setState(
                            {shoulderInjury: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text style={styles.filterText}> Lower Back </Text>
                    <Switch
                        trackColor={{ false: "#999999", true: "#40FF00" }}
                        ios_backgroundColor = "#999999"
                        style={styles.switch}
                        value = {this.state.lowerBackInjury}
                        onValueChange = {(value) => this.setState(
                            {lowerBackInjury: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text style={styles.filterText}> Knee </Text>
                    <Switch
                        trackColor={{ false: "#999999", true: "#40FF00" }}
                        ios_backgroundColor = "#999999"
                        style={styles.switch}
                        value = {this.state.kneeInjury}
                        onValueChange = {(value) => this.setState(
                            {kneeInjury: value}
                        )}
                    />
                </View>
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
    },
    switchButton: {
        flexDirection: 'row',
        padding: 2,
        justifyContent: 'center'
    },
    title: {
        fontSize: 25,
        color: "#000",
        marginRight: 100,
        marginLeft: 100,
        color: "white",
        lineHeight: 84,
        fontWeight: "bold",
        backgroundColor: "#000000c0",
        textAlign: "center",
    },
    filterText: {
        fontSize: 20,
        color: "#000",
        color: "white",
        textAlign: "left",
        width: 140
        // marginRight: 80,
        // marginLeft: 80,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: "cover"
    },
    switch: {
        marginRight: 10,
    }
});
