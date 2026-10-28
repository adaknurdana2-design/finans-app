import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

interface LoginScreenProps {
  onNavigateToRegister: () => void;
  onNavigateToForgot: () => void;
  onLoginSuccess: () => void;
}

export default function LoginScreen({
  onNavigateToRegister,
  onNavigateToForgot,
  onLoginSuccess,
}: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer} bounces={false}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Welcome</Text>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username Or Email</Text>
          <TextInput
            style={styles.input}
            placeholder="example@example.com"
            placeholderTextColor="#A0A0A0"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="••••••••"
            placeholderTextColor="#A0A0A0"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Log In батырмасы -> Басты бетке (HomeScreen) апарады */}
        <TouchableOpacity style={styles.loginButton} onPress={onLoginSuccess}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        {/* Forgot Password басу арқылы өтеді */}
        <TouchableOpacity onPress={onNavigateToForgot} style={styles.forgotTouch}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Sign Up басу арқылы тіркелуге өтеді */}
        <TouchableOpacity style={styles.signupButton} onPress={onNavigateToRegister}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.fingerprintText}>Use Fingerprint To Access</Text>

        <Text style={styles.orText}>or sign up with</Text>

        <View style={styles.socialRow}>
          <View style={styles.socialCircle}><Text style={styles.socialText}>f</Text></View>
          <View style={styles.socialCircle}><Text style={styles.socialText}>G</Text></View>
        </View>

        <TouchableOpacity onPress={onNavigateToRegister} style={styles.bottomLinkContainer}>
          <Text style={styles.bottomLinkText}>
            Don't have an account? <Text style={styles.linkAction}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ECCA3',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  topSection: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#F7FFF9',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 14,
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
    marginTop: 8,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotTouch: {
    marginBottom: 15,
  },
  forgotText: {
    color: '#555',
    fontSize: 13,
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
    marginBottom: 15,
  },
  orText: {
    fontSize: 11,
    color: '#888',
    marginBottom: 12,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 15,
  },
  socialCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  socialText: {
    fontWeight: 'bold',
    color: '#333',
  },
  bottomLinkContainer: {
    marginTop: 5,
  },
  bottomLinkText: {
    fontSize: 12,
    color: '#666',
  },
  linkAction: {
    color: '#2563EB',
    fontWeight: 'bold',
  },
});