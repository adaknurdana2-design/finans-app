import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function OnBoardingScreenB() {
  return (
    <View style={styles.container}>
      {/* Өске яшел фондагы язулар */}
      <View style={styles.topSection}>
        <Text style={styles.title}>¿Are You Ready To</Text>
        <Text style={styles.subtitle}>Take Control Of</Text>
        <Text style={styles.subtitle}>Your Finaces?</Text>
      </View>

      {/* Аскы ак блок */}
      <View style={styles.bottomSection}>
        <View style={styles.imageBox}>
          <Text style={styles.emoji}>📱💳</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

        {/* Индикатор нөктәләре */}
        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ECCA3',
  },
  topSection: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 2,
    textAlign: 'center',
  },
  bottomSection: {
    flex: 0.6,
    backgroundColor: '#F7FFF9',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  imageBox: {
    width: 180,
    height: 180,
    backgroundColor: '#E8F5E9',
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 50,
  },
  button: {
    width: '100%',
    backgroundColor: '#2E7D32',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#2E7D32',
    width: 20,
  },
});