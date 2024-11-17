import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const ProfileScreen = ({ navigation, theme }) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.header, { color: theme.colors.text }]}>User Profile</Text>
      <Image source={require('../assets/dp.jpg')} style={styles.image} />
      <Text style={[styles.text, { color: theme.colors.text }]}>
        Abbas Khan {'\n'}
        Age: 21y {'\n'}
        BMI: 18.1 "within the optimum range!"{'\n\n'}
        You are going good! Maintain your water intake to stay healthy!
      </Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
