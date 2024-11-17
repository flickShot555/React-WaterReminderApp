import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const DetailsScreen = ({ navigation, theme }) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.header, { color: theme.colors.text }]}>App Details</Text>
      <Text style={[styles.text, { color: theme.colors.text }]}>
        This application is your personal assistant to remind you of your water intake based on your weight and height.
      </Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;
