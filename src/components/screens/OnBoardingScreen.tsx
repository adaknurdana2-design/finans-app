import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function OnBoardingScreen() {
  return (
    <View style={styles.container}>
      {/* Жоғарғы мәтін */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Welcome To</Text>
        <Text style={styles.subtitle}>Expense Manager</Text>
      </View>

      {/* Ортасындағы иллюстрация орны (суреттің орнына блок) */}
      <View style={styles.imageBox}>
        <Text style={styles.imageEmoji}>🪙💳</Text>
      </View>

      {/* Төменгі бөлік (Индикаторлар мен батырма) */}
      <View style={styles.footer}>
        {/* Беттің қай жерде тұрғанын көрсететін нүктелер */}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Next батырмасы */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Ақ фон
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    color: '#757575',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1b5e20', // Қою жасыл түс
    marginTop: 5,
  },
  imageBox: {
    width: 240,
    height: 240,
    backgroundColor: '#e8f5e9', // Ақшыл жасыл фон
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageEmoji: {
    fontSize: 50,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#c8e6c9',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#2e7d32',
    width: 22, // Белсенді нүкте ұзындау болады
  },
  button: {
    width: '100%',
    backgroundColor: '#2e7d32', // Жасыл батырма
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});