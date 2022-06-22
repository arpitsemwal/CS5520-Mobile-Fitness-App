import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// we will deal with buttons here

function TimerButtonOperation({ isRunning, handleLeftButtonPress, handleRightButtonPress }) {
    return (
        <>
            <TouchableOpacity
                style={[
                    styles.controlButtonBorder,
                    { backgroundColor: "grey" },
                ]}
                onPress={handleLeftButtonPress}
            >
                <View style={styles.controlButton}>
                    <Text style={{ color: "white", fontSize: 30 }}>
                        {isRunning ? "SET COUNT" : "RESET"}
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.controlButtonBorder,
                    { backgroundColor: "grey" },
                ]}
                onPress={handleRightButtonPress}
            >
                <View style={styles.controlButton}>
                    <Text style={{ color: "white", fontSize: 30 }} >
                        {isRunning ? "STOP" : "START"}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    );
}


const styles = StyleSheet.create({
    controlButtonBorder: {
        justifyContent: "center",
        alignItems: "center",
        width: 190,
        height: 70,
        borderRadius: 70,
    },
    controlButton: {
        justifyContent: "center",
        alignItems: "center",
        width: 190,
        height: 70,
        borderRadius: 65,
        borderColor: "black",
        borderWidth: 3,
    },
});

export default React.memo(TimerButtonOperation);