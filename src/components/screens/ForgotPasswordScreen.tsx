import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

interface ForgotPasswordProps {
  onBackToLogin: () => void;
}

export default function ForgotPasswordScreen({ onBackToLogin }: ForgotPasswordProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Forgot Password</Text>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.instruction}>
          Please enter your email address to receive a verification code.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput style={styles.input} placeholder="example@example.com" placeholderTextColor="#A0A0A0" />
        </View>

        <TouchableOpacity style={styles.sendButton} onPress={onBackToLogin}>
          <Text style={styles.sendButtonText}>Send Code</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onBackToLogin} style={styles.backLink}>
          <Text style={styles.backText}>Back to Log In</Text>
        </TouchableOpacity>
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
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#F7FFF9',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: 'center',
  },
  instruction: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    backgroundColor: '#E8F5E9',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    fontSize: 14,
    color: '#333',
  },
  sendButton: {
    width: '100%',
    backgroundColor: '#4ECCA3',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backLink: {
    marginTop: 10,
  },
  backText: {
    color: '#2E7D32',
    fontWeight: 'bold',
    fontSize: 14,
  },
});