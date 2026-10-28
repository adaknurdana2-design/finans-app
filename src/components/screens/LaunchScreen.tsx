import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LaunchScreenA() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.iconWrapper}>
          <Text style={styles.iconSymbol}>📈</Text>
        </View>
        <Text style={styles.title}>FinWise</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38CB89', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  iconWrapper: {
    marginBottom: 12,
  },
  iconSymbol: {
    fontSize: 55,
    color: '#FFFFFF',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
});