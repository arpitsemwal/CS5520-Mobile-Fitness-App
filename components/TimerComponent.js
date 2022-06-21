import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TimerSetResult from './TimerSetResult';
import TimerButtonOperation from './TimerButtonOperation';
import { displayTime } from './TimerUtil';

export default function TimerComponent(props) {
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const [results, setResults] = useState([]);
  const timer = useRef(null);
  const [index, setIndex] = useState(0);

  const handleLeftButtonPress = useCallback(() => {
      if (isRunning) {
          setResults((previousResults) => [time, ...previousResults]);
      } else {
          setResults([]);
          setTime(0);
      }
  }, [isRunning, time]);

  const handleRightButtonPress = useCallback(() => {
      if (!isRunning) {
          const interval = setInterval(() => {
              setTime((previousTime) => previousTime + 1);
          }, 10);

          timer.current = interval;
      } else {
          clearInterval(timer.current);
      }

      setRunning((previousState) => !previousState);
  }, [isRunning]);

  return (
      <SafeAreaView style={styles.container}>
          <StatusBar style='light' />

          <View style={styles.display}>
              <Text style={styles.currentWorkout}>current workout</Text>
              <Text style={styles.workoutName}>{ props.route.params.selectedList[index] }</Text>
              <Text style={styles.timeText}>{displayTime(time)}</Text>
          </View>

          <Text style={styles.recommendedSet}>recommended sets (3)</Text>
          <View style={styles.control}>
              <TimerButtonOperation
                  isRunning={isRunning}
                  handleLeftButtonPress={handleLeftButtonPress}
                  handleRightButtonPress={handleRightButtonPress}
              />
          </View>

          <View style={styles.result}>
              <TimerSetResult results={results} />
          </View>
          {
            index + 1 <= props.route.params.selectedList.length - 1 &&
            <Text onPress={ () => { setIndex(index + 1); setResults([]); } } style={styles.nextWorkout}>{ `Next up > ${ props.route.params.selectedList[index + 1]}`} </Text>
          }
          {
            index === props.route.params.selectedList.length - 1 &&
            <Text onPress={ () => props.navigation.goBack() } style={styles.nextWorkout}>{ `Exit Coach`} </Text>
          }
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  display: {
    flex: 3 / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentWorkout: {
    color: '#ccc',
    fontSize: 40,
    fontWeight: '100',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  workoutName: {
    color: '#f2aa4c',
    fontSize: 50,
    fontWeight: '200',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  nextWorkout: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '200',
    textAlign: 'right',
    fontStyle: 'italic',
  },
  recommendedSet: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '200',
    textAlign: 'left',
    fontStyle: 'italic',
    paddingLeft: 10,
    paddingBottom: 10
  },
  timeText: {
    color: '#fff',
    fontSize: 50,
    fontWeight: '200',
  },
  control: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  result: { flex: 2 / 5 },
});