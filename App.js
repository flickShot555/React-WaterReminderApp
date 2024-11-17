/**
  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, Text, View } from 'react-native';
  
  export default function App() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
*/
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text } from 'react-native';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import ProfileScreen from './components/ProfileScreen';
import { MyThemeLight, MyThemeDark } from './components/themes';
import styles from './components/styles';

const Stack = createStackNavigator();

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const currentTheme = isDarkTheme ? MyThemeDark : MyThemeLight;

  return (
    <NavigationContainer theme={currentTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={(props) => <HomeScreen {...props} theme={currentTheme} />}
          options={{
            headerStyle: { backgroundColor: currentTheme.colors.card },
            headerTintColor: currentTheme.colors.text,
            headerTitle: () => <Text style={{ fontWeight: 'bold', color: currentTheme.colors.text }}>Home</Text>,
          }}
        />
        <Stack.Screen
          name="Details"
          component={(props) => <DetailsScreen {...props} theme={currentTheme} />}
          options={{
            headerStyle: { backgroundColor: currentTheme.colors.card },
            headerTintColor: currentTheme.colors.text,
            headerTitle: () => <Text style={{ fontWeight: 'bold', color: currentTheme.colors.text }}>Details</Text>,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={(props) => <ProfileScreen {...props} theme={currentTheme} />}
          options={{
            headerStyle: { backgroundColor: currentTheme.colors.card },
            headerTintColor: currentTheme.colors.text,
            headerTitle: () => <Text style={{ fontWeight: 'bold', color: currentTheme.colors.text }}>Profile</Text>,
          }}
        />
      </Stack.Navigator>
      <TouchableOpacity
        style={[styles.toggleButton, { backgroundColor: currentTheme.colors.primary }]}
        onPress={() => setIsDarkTheme(!isDarkTheme)}
      >
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>
    </NavigationContainer>
  );
}
