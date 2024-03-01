import { View, Text, StyleSheet, Platform, Image } from 'react-native';

export default function PokemonCard({
  name,
  image,
  occupation,
  yearsOfExperience,
  skills,
  hourlyRate,
}) {
  return (
    <View style={styles.card}>
      <View>
        <Text>{name}</Text>
        <Text>{occupation}</Text>
      </View>
      {/* <Image source={image} accessibilityLabel={`${name}`} /> */}
      <View>
        <Text>Years of Experience: {yearsOfExperience}</Text>
      </View>
      <View>
        <Text>Skills: {skills.join(', ')}</Text>
      </View>
      <View>
        <Text>Hourly Rate: ${hourlyRate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#ccc',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },

      android: {
        elevation: 4,
      },
    }),
  },
});
