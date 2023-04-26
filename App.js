  import { StyleSheet, Text, SafeAreaView } from 'react-native';
  import PassengerMapScreen from './screens/PassengerMapScreen';
  import HomeScreen from './screens/HomeScreen';
  import PassengerMap from './components/PassengerMap';


  export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF', // specify your desired background color
    },
  });