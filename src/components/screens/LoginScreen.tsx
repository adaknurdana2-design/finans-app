import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Верхняя часть с заглавием */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Welcome</Text>
      </View>

      {/* Нижняя белая часть с полями ввода */}
      <View style={styles.bottomSection}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username Or Email</Text>
          <TextInput 
            style={styles.input} 
            placeholder="example@example.com" 
            placeholderTextColor="#A0A0A0" 
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput 
            style={styles.input} 
            secureTextEntry 
            value="••••••••" 
            placeholderTextColor="#A0A0A0" 
          />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.fingerprintText}>Use Fingerprint To Access</Text>
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
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  bottomSection: {
    flex: 0.75,
    backgroundColor: '#F7FFF9',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 24,
    paddingTop: 30,
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
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
  loginButton: {
    width: '100%',
    backgroundColor: '#4ECCA3',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotText: {
    color: '#555',
    fontSize: 13,
    marginBottom: 15,
  },
  signupButton: {
    width: '100%',
    backgroundColor: '#E8F5E9',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  signupButtonText: {
    color: '#2E7D32',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fingerprintText: {
    color: '#2E7D32',
    fontSize: 13,
    fontWeight: '500',
  },
});