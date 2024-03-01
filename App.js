import { StyleSheet, SafeAreaView, Platform, image } from 'react-native';
import PokemonCard from './components/PokemonCard';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const mentor = {
    id: 1,
    name: 'John Doe',
    image: require('./assets/images/Alex-Johnson.png'),
    occupation: 'Software Engineer',
    yearsOfExperience: 5,
    skills: ['JavaScript', 'React', 'Node.js'],
    hourlyRate: 50,
  };

  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard {...mentor} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
