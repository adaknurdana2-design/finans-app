import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface SecurityPinProps {
  onAccept: () => void;
  onSendAgain: () => void;
}

export default function SecurityPinScreen({ onAccept, onSendAgain }: SecurityPinProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Security Pin</Text>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.label}>Enter Security Pin</Text>

        {/* PIN цифрлары тұрған шеңберлер */}
        <View style={styles.pinRow}>
          <View style={styles.pinCircle}><Text style={styles.pinText}>2</Text></View>
          <View style={styles.pinCircle}><Text style={styles.pinText}>7</Text></View>
          <View style={styles.pinCircle}><Text style={styles.pinText}>3</Text></View>
          <View style={styles.pinCircle}><Text style={styles.pinText}>9</Text></View>
          <View style={styles.pinCircle}><Text style={styles.pinText}>1</Text></View>
          <View style={styles.pinCircle}><Text style={styles.pinText}>6</Text></View>
        </View>

        <TouchableOpacity style={styles.acceptButton} onPress={onAccept}>
          <Text style={styles.acceptButtonText}>Accept</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sendAgainButton} onPress={onSendAgain}>
          <Text style={styles.sendAgainText}>Send Again</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or sign up with</Text>
        <View style={styles.socialRow}>
          <View style={styles.socialCircle}><Text>f</Text></View>
          <View style={styles.socialCircle}><Text>G</Text></View>
        </View>

        <Text style={styles.bottomText}>Don't have an account? <Text style={styles.linkText}>Sign Up</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4ECCA3' },
  topSection: { height: 160, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#FFFFFF' },
  bottomSection: { flex: 1, backgroundColor: '#F7FFF9', borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingHorizontal: 24, paddingTop: 30, alignItems: 'center' },
  label: { fontSize: 13, color: '#555', marginBottom: 20, fontWeight: '500' },
  pinRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 30 },
  pinCircle: { width: 38, height: 38, borderRadius: 19, borderWidth: 1.5, borderColor: '#4ECCA3', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8F5E9' },
  pinText: { fontSize: 14, fontWeight: 'bold', color: '#2E7D32' },
  acceptButton: { width: '100%', backgroundColor: '#4ECCA3', paddingVertical: 14, borderRadius: 25, alignItems: 'center', marginBottom: 12 },
  acceptButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  sendAgainButton: { width: '100%', backgroundColor: '#E8F5E9', paddingVertical: 14, borderRadius: 25, alignItems: 'center', marginBottom: 20 },
  sendAgainText: { color: '#2E7D32', fontSize: 16, fontWeight: 'bold' },
  orText: { fontSize: 11, color: '#888', marginBottom: 10 },
  socialRow: { flexDirection: 'row', gap: 15, marginBottom: 15 },
  socialCircle: { width: 35, height: 35, borderRadius: 17.5, borderWidth: 1, borderColor: '#ddd', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  bottomText: { fontSize: 11, color: '#666' },
  linkText: { color: '#2563EB', fontWeight: 'bold' },
});