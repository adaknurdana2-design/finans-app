import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function RegisterScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Create Account</Text>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} placeholder="example@example.com" placeholderTextColor="#A0A0A0" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="example@example.com" placeholderTextColor="#A0A0A0" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput style={styles.input} placeholder="+1 123 456 789" placeholderTextColor="#A0A0A0" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date Of Birth</Text>
          <TextInput style={styles.input} placeholder="DD / MM / YYYY" placeholderTextColor="#A0A0A0" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} secureTextEntry value="••••••••" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput style={styles.input} secureTextEntry value="••••••••" />
        </View>

        <Text style={styles.termsText}>By continuing, you agree to Terms of Use and Privacy Policy.</Text>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
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
  contentContainer: {
    flexGrow: 1,
  },
  topSection: {
    paddingVertical: 40,
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
    paddingTop: 25,
    paddingBottom: 30,
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    fontSize: 11,
    color: '#555',
    marginBottom: 3,
  },
  input: {
    width: '100%',
    backgroundColor: '#E8F5E9',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    fontSize: 13,
    color: '#333',
  },
  termsText: {
    fontSize: 10,
    color: '#777',
    textAlign: 'center',
    marginVertical: 10,
  },
  signupButton: {
    width: '100%',
    backgroundColor: '#4ECCA3',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 5,
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});