import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'

export default class ChangeImageComponent extends Component {

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
        console.log("abs" + this.state.abs)
        console.log("arms" + this.state.arms)
        console.log("chest" + this.state.chest)
        console.log("back" + this.state.back)
        console.log("shoulder" + this.state.shoulder)
        console.log("legs" + this.state.legs)
        console.log("wristInjury" + this.state.wristInjury)
        console.log("elbowInjury" + this.state.elbowInjury)
        console.log("shoulderInjury" + this.state.shoulderInjury)
        console.log("lowerBackInjury" + this.state.lowerBackInjury)
        console.log("kneeInjury" + this.state.kneeInjury)
        return (
            <View style={styles.container}>
                <Text> Muscle groups: </Text>
                <View style={styles.switchButton}>
                    <Text> Abs </Text>
                    <Switch
                        value = {this.state.abs}
                        onValueChange = {(value) => this.setState(
                            {abs: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text> Arms </Text>
                    <Switch
                        value = {this.state.arms}
                        onValueChange = {(value) => this.setState(
                            {arms: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text> Chest </Text>
                    <Switch
                        value = {this.state.chest}
                        onValueChange = {(value) => this.setState(
                            {chest: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text> Back </Text>
                    <Switch
                        value = {this.state.back}
                        onValueChange = {(value) => this.setState(
                            {back: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text> Shoulder </Text>
                    <Switch
                        value = {this.state.shoulder}
                        onValueChange = {(value) => this.setState(
                            {shoulder: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text> Legs </Text>
                    <Switch
                        value = {this.state.legs}
                        onValueChange = {(value) => this.setState(
                            {legs: value}
                        )}
                    />
                </View>
                <Text> Injury: </Text>
                <View style={styles.switchButton}>
                    <Text> Wrist </Text>
                    <Switch
                        value = {this.state.wristInjury}
                        onValueChange = {(value) => this.setState(
                            {wristInjury: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text> Elbow </Text>
                    <Switch
                        value = {this.state.elbowInjury}
                        onValueChange = {(value) => this.setState(
                            {elbowInjury: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text> Shoulder </Text>
                    <Switch
                        value = {this.state.shoulderInjury}
                        onValueChange = {(value) => this.setState(
                            {shoulderInjury: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text> Lower Back </Text>
                    <Switch
                        value = {this.state.lowerBackInjury}
                        onValueChange = {(value) => this.setState(
                            {lowerBackInjury: value}
                        )}
                    />
                </View>
                <View style={styles.switchButton}>
                    <Text> Knee </Text>
                    <Switch
                        value = {this.state.kneeInjury}
                        onValueChange = {(value) => this.setState(
                            {kneeInjury: value}
                        )}
                    />
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
      },
});
