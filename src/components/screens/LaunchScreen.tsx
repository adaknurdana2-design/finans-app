import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface LaunchScreenProps {
  onNavigateToLogin: () => void;
  onNavigateToRegister: () => void;
  onNavigateToForgot: () => void;
}

export default function LaunchScreen({
  onNavigateToLogin,
  onNavigateToRegister,
  onNavigateToForgot,
}: LaunchScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Text style={styles.icon}>📈</Text>
        <Text style={styles.title}>FinWise</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        {/* Log In батырмасы */}
        <TouchableOpacity style={styles.primaryButton} onPress={onNavigateToLogin}>
          <Text style={styles.primaryButtonText}>Log In</Text>
        </TouchableOpacity>

        {/* Sign Up батырмасы */}
        <TouchableOpacity style={styles.secondaryButton} onPress={onNavigateToRegister}>
          <Text style={styles.secondaryButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Forgot Password сілтемесі */}
        <TouchableOpacity onPress={onNavigateToForgot} style={styles.forgotTouch}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FFF9',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 70,
    paddingHorizontal: 24,
  },
  logoBox: {
    alignItems: 'center',
    marginTop: 40,
  },
  icon: {
    fontSize: 55,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    color: '#757575',
    textAlign: 'center',
    paddingHorizontal: 15,
    lineHeight: 18,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#4ECCA3',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 14,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    width: '100%',
    backgroundColor: '#E8F5E9',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  secondaryButtonText: {
    color: '#2E7D32',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotTouch: {
    padding: 5,
  },
  forgotText: {
    color: '#555555',
    fontSize: 14,
  },
});