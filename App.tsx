import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { mycolours } from './src/styles/colours';
import Button from './src/components/Button';
import MyKeyBoard from './src/components/MyKeyBoard';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={[styles.container, theme === 'light' ? {} : { backgroundColor: '#000' }]}>
      <StatusBar style="auto" />
      <Switch
      style={{
        transform: [{ scale: 1.5 }] // Adjust the scale value to increase the size
      }}
    value={theme === "light"}
    onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
  ></Switch>
  <MyKeyBoard/>
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mycolours.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:30,
  },
});
