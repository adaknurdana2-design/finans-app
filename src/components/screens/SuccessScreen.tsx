import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface SuccessProps {
  onGoToHome: () => void;
}

export default function SuccessScreen({ onGoToHome }: SuccessProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={1} onPress={onGoToHome}>
      <View style={styles.successCircle}>
        <Text style={styles.checkmark}>✓</Text>
      </View>
      <Text style={styles.successText}>Password Has Been</Text>
      <Text style={styles.successText}>Changed Successfully</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4ECCA3', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  successCircle: { width: 100, height: 100, borderRadius: 50, borderWidth: 4, borderColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', marginBottom: 25 },
  checkmark: { fontSize: 45, color: '#FFFFFF', fontWeight: 'bold' },
  successText: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center' },
});