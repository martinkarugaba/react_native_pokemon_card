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
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.occupation}>{occupation}</Text>
      </View>
      <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name}`}
      />
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
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: '700',
    color: '#212121',
  },
  occupation: {
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: 350,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: 'blue',
    resizeMode: 'contain',
  },
});
