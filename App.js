import { StyleSheet, SafeAreaView, Platform,  } from 'react-native';
import PokemonCard from './components/PokemonCard';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard />
      <StatusBar backgroundColor='white' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
