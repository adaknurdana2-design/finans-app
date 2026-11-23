import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function SecurityPin({ navigation }: any) {
  const [pin, setPin] = useState(['2', '7', '3', '9', '1', '6']);
  const handleAccept = () => {
    Alert.alert('Success', 'Security PIN accepted!');
  };
  return (
    <LinearGradient
      colors={['#00D68F', '#A8F0CF', '#FFFFFF']}
      style={styles.container}
    >
      <Text style={styles.title}>Security Pin</Text>
      <View style={styles.card}>
        <Text style={styles.heading}>Enter Security Pin</Text>
        <View style={styles.pinContainer}>
          {pin.map((number, index) => (
            <View style={styles.pinBox} key={index}>
              <Text style={styles.pinText}>{number}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={styles.acceptButton}
          onPress={handleAccept}
        >
          <Text style={styles.acceptText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sendAgain}
          onPress={() => Alert.alert('PIN', 'A new PIN has been requested.')}
        >
          <Text style={styles.sendText}>Send Again</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>or sign up with</Text>
        <View style={styles.social}>
          <Text style={styles.socialIcon}>ⓕ</Text>
          <Text style={styles.socialIcon}>Ⓖ</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 90,
    marginBottom: 75,
    color: '#111',
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    paddingHorizontal: 30,
    paddingTop: 110,
    alignItems: 'center',
  },
  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: '#222',
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 75,
  },
  pinBox: {
    width: 42,
    height: 55,
    borderBottomWidth: 2,
    borderBottomColor: '#16BD7B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  },
  acceptButton: {
    backgroundColor: '#16BD7B',
    width: 215,
    padding: 13,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 65,
  },
  acceptText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#073D2B',
  },
  sendAgain: {
    marginTop: 30,
  },
  sendText: {
    fontSize: 17,
    color: '#16BD7B',
    fontWeight: '600',
  },
  orText: {
    marginTop: 150,
    color: '#777',
  },
  social: {
    flexDirection: 'row',
    gap: 25,
    marginTop: 20,
  },
  socialIcon: {
    fontSize: 30,
    color: '#555',
  },
});