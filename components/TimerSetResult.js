import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { displayTime } from "./TimerUtil";

// print the set timings
function TimerSetResult({ results }) {
  
  return (
    <ScrollView>
      <View style={styles.resultItem} />

      {results.map((item, index) => (
        <View key={index} style={styles.resultItem}>
          <Text style={styles.resultItemText}>
            SET {results.length - index}
          </Text>

          <Text style={styles.resultItemText}>{displayTime(item)}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "white",
    height: 60,
    paddingHorizontal: 15,
  },
  resultItemText: { 
    color: "white",
    fontSize: 30,
   },
});

export default React.memo(TimerSetResult);