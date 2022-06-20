import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainPageComponent from './components/MainPageComponent';
import TimerComponent from './components/TimerComponent';
import FilterComponent from './components/FilterComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <MainPageComponent/>
      <StatusBar style="auto" />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
