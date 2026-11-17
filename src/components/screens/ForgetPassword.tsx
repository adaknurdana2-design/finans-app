import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function ForgetPassword({ navigation }: any) {
  const [email, setEmail] = useState('');
  const handleNext = () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Enter your email address');
      return;
    }
    if (!email.includes('@')) {
      Alert.alert('Error', 'Enter a valid email');
      return;
    }
    Alert.alert('Success', 'Password reset link sent!');
  };
  return (
    <LinearGradient
      colors={['#00D68F', '#A8F0CF', '#FFFFFF']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Forgot Password</Text>
        <View style={styles.card}>
          <Text style={styles.heading}>Reset Password?</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text>
          <View style={styles.form}>
            <Text style={styles.label}>Enter Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="example@example.com"
              placeholderTextColor="#A0A0A0"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNext}
          >
            <Text style={styles.nextText}>Next Step</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>or sign up with</Text>
          <View style={styles.social}>
            <Text style={styles.socialIcon}>ⓕ</Text>
            <Text style={styles.socialIcon}>Ⓖ</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.bottomText}>
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={styles.link}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
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
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    flex: 1,
    minHeight: 800,
    paddingHorizontal: 35,
    paddingTop: 110,
    alignItems: 'center',
  },
  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: '#222',
  },
  description: {
    fontSize: 13,
    color: '#555',
    marginTop: 15,
    lineHeight: 18,
    alignSelf: 'flex-start',
  },
  form: {
    width: '100%',
    marginTop: 105,
  },
  label: {
    fontSize: 16,
    marginLeft: 5,
    color: '#222',
  },
  input: {
    height: 55,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#16BD7B',
    width: 215,
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 55,
  },
  nextText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#073D2B',
  },
  signupButton: {
    marginTop: 140,
  },
  signupText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#222',
  },
  orText: {
    marginTop: 25,
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
  bottom: {
    flexDirection: 'row',
    marginTop: 35,
  },
  bottomText: {
    color: '#777',
    fontSize: 12,
  },
  link: {
    color: '#5997C5',
    fontSize: 12,
  },
});