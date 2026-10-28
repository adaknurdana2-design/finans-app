import React, { useState } from 'react';
import LaunchScreen from './src/components/screens/LaunchScreen';
import LoginScreen from './src/components/screens/LoginScreen';
import RegisterScreen from './src/components/screens/RegisterScreen';
import ForgotPasswordScreen from './src/components/screens/ForgotPasswordScreen';
import SecurityPinScreen from './src/components/screens/SecurityPinScreen';
import NewPasswordScreen from './src/components/screens/NewPasswordScreen';
import SuccessScreen from './src/components/screens/SuccessScreen';
import HomeScreen from './src/components/screens/HomeScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('launch');

  if (currentScreen === 'login') {
    return (
      <LoginScreen
        onNavigateToRegister={() => setCurrentScreen('register')}
        onNavigateToForgot={() => setCurrentScreen('forgot')}
        onLoginSuccess={() => setCurrentScreen('home')}
      />
    );
  }

  if (currentScreen === 'register') {
    return <RegisterScreen onNavigateToLogin={() => setCurrentScreen('login')} />;
  }

  if (currentScreen === 'forgot') {
    return (
      <ForgotPasswordScreen
        onSendCode={() => setCurrentScreen('securityPin')}
        onBackToLogin={() => setCurrentScreen('login')}
      />
    );
  }

  if (currentScreen === 'securityPin') {
    return (
      <SecurityPinScreen
        onAccept={() => setCurrentScreen('newPassword')}
        onSendAgain={() => alert('Код қайта жіберілді!')}
      />
    );
  }

  if (currentScreen === 'newPassword') {
    return (
      <NewPasswordScreen
        onChangePassword={() => setCurrentScreen('success')}
      />
    );
  }

  if (currentScreen === 'success') {
    return (
      <SuccessScreen
        onGoToHome={() => setCurrentScreen('home')}
      />
    );
  }

  if (currentScreen === 'home') {
    return <HomeScreen />;
  }

  return (
    <LaunchScreen
      onNavigateToLogin={() => setCurrentScreen('login')}
      onNavigateToRegister={() => setCurrentScreen('register')}
      onNavigateToForgot={() => setCurrentScreen('forgot')}
    />
  );
}