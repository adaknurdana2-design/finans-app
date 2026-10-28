import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

interface NewPasswordProps {
  onChangePassword: () => void;
}

export default function NewPasswordScreen({ onChangePassword }: NewPasswordProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>New Password</Text>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>New Password</Text>
          <TextInput style={styles.input} secureTextEntry value="••••••••" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm New Password</Text>
          <TextInput style={styles.input} secureTextEntry value="••••••••" />
        </View>

        <TouchableOpacity style={styles.button} onPress={onChangePassword}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4ECCA3' },
  topSection: { height: 160, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#FFFFFF' },
  bottomSection: { flex: 1, backgroundColor: '#F7FFF9', borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingHorizontal: 24, paddingTop: 40, alignItems: 'center' },
  inputContainer: { width: '100%', marginBottom: 20 },
  label: { fontSize: 12, color: '#555', marginBottom: 5 },
  input: { width: '100%', backgroundColor: '#E8F5E9', paddingVertical: 12, paddingHorizontal: 15, borderRadius: 12, fontSize: 14, color: '#333' },
  button: { width: '100%', backgroundColor: '#4ECCA3', paddingVertical: 14, borderRadius: 25, alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});