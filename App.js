import { StyleSheet, SafeAreaView, Platform, image } from 'react-native';
import PokemonCard from './components/PokemonCard';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const alex = {
    id: 1,
    name: 'Alex Johnson',
    image: require('./assets/images/Patricia-Smith.png'),
    occupation: 'Software Engineer',
    yearsOfExperience: 5,
    skills: ['JavaScript', 'React', 'Node.js'],
    hourlyRate: 50,
  };

  const carlos = {
    id: 2,
    name: 'Carlos Hernandez',
    image: require('./assets/images/Marie-Curie.png'),
    occupation: 'UI/UX Designer',
    yearsOfExperience: 3,
    skills: ['UI Design', 'Wireframing', 'Prototyping'],
    hourlyRate: 40,
  };

  const elena = {
    id: 3,
    name: 'Elena Petrova',
    image: require('./assets/images/Elena-Petrova.png'),
    occupation: 'Data Scientist',
    yearsOfExperience: 7,
    skills: ['Python', 'Machine Learning', 'Data Analysis'],
    hourlyRate: 60,
  };

  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard {...carlos} />
      <PokemonCard {...alex} />
      <PokemonCard {...elena} />
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
