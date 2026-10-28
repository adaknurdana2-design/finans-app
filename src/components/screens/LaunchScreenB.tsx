import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function LaunchScreenB() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Жоғарғы логотип пен мәтін */}
        <View style={styles.logoBox}>
          <Text style={styles.iconSymbol}>📈</Text>
          <Text style={styles.title}>FinWise</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </Text>
        </View>

        {/* Төменгі батырмалар */}
        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotTouch}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4FBF7', // Жұмсақ ақшыл-жасыл фон
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 70,
    paddingHorizontal: 24,
  },
  logoBox: {
    alignItems: 'center',
    marginTop: 60,
  },
  iconSymbol: {
    fontSize: 50,
    color: '#38CB89',
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    color: '#8C98A8',
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 18,
  },
  bottomSection: {
    width: '100%',
    alignItems: 'center',
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#38CB89',
    paddingVertical: 16,
    borderRadius: 28,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#38CB89',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    width: '100%',
    backgroundColor: '#E2F4EC',
    paddingVertical: 16,
    borderRadius: 28,
    alignItems: 'center',
    marginBottom: 20,
  },
  secondaryButtonText: {
    color: '#2E7D32',
    fontSize: 16,
    fontWeight: '600',
  },
  forgotTouch: {
    padding: 5,
  },
  forgotText: {
    color: '#555555',
    fontSize: 13,
    fontWeight: '500',
  },
});