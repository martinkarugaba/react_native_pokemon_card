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
      <View style={styles.imageWrapper}>
        <Image
          source={image}
          style={styles.image}
          accessibilityLabel={`${name}`}
        />
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.experience}>
          Years of Experience: {yearsOfExperience}
        </Text>
        <Text style={styles.skills}>Skills: {skills.join(', ')}</Text>
        <Text style={styles.hourlyRate}>Hourly Rate: ${hourlyRate}/hr</Text>
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
  imageWrapper: {
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: 350,
    marginBottom: 30,
    borderColor: 'blue',
    resizeMode: 'contain',
  },
  infoWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
  },
  experience: {
    fontSize: 18,
    marginBottom: 4,
    fontWeight: '500',
  },
  skills: {
    fontSize: 18,
    marginBottom: 4,
    fontWeight: '500',
  },
  hourlyRate: {
    fontSize: 18,
    marginBottom: 4,
    fontWeight: '500',
  },
});
