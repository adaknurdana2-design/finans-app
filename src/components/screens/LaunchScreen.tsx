import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LaunchScreen() {
  return (
    <View style={styles.container}>
      {/* Ортасындағы логотип немесе атау */}
      <View style={styles.logoContainer}>
        <View style={styles.iconBox}>
          {/* Мұнда графикалық иконка орнына символ немесе сурет қоюға болады */}
          <Text style={styles.iconText}>📈</Text>
        </View>
        <Text style={styles.logoTitle}>FinWise</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Суреттегідей ақ фон
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  iconBox: {
    width: 80,
    height: 80,
    backgroundColor: '#E8F5E9', // Ақшыл жасыл фон
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  iconText: {
    fontSize: 36,
  },
  logoTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32', // Қою жасыл түс (FinWise жазуы)
    letterSpacing: 1,
  },
});