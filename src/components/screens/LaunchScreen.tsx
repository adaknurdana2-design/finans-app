import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LaunchScreenA() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.icon}>📈</Text>
        <Text style={styles.title}>FinWise</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ECCA3', // Сүрәттәге яшел фон
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  icon: {
    fontSize: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
});