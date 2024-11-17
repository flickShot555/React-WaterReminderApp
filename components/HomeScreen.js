import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const HomeScreen = ({ navigation, theme }) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.header, { color: theme.colors.text }]}>Welcome to Your Water Reminder App!</Text>
      <Image source={require('../assets/homepage.jpg')} style={styles.image} />
      <Text style={[styles.text, { color: theme.colors.text }]}>
        This is your personal water reminder application's main screen. Navigate to explore more about our app features and user profiles.
      </Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
