import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './src/components/screens/HomeScreen';
import AnalysisScreen from './src/components/screens/AnalysisScreen';
import NotificationScreen from './src/components/screens/NotificationScreen';
import AccountBalanceScreen from './src/components/screens/AccountBalanceScreen';
import QuicklyAnalysisScreen from './src/components/screens/QuicklyAnalysisScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  return (
    <View style={styles.container}>
      {currentScreen === 'Home' && (
        <HomeScreen
          onOpenNotification={() => setCurrentScreen('Notifications')}
          onOpenAccountBalance={() => setCurrentScreen('AccountBalance')}
          onOpenAnalysis={() => setCurrentScreen('Analysis')}
        />
      )}

      {currentScreen === 'Analysis' && (
        <AnalysisScreen
          onBack={() => setCurrentScreen('Home')}
          onOpenNotification={() => setCurrentScreen('Notifications')}
          onOpenBalance={() => setCurrentScreen('AccountBalance')}
          onOpenQuickly={() => setCurrentScreen('QuicklyAnalysis')}
        />
      )}

      {currentScreen === 'Notifications' && (
        <NotificationScreen
          onBack={() => setCurrentScreen('Analysis')}
        />
      )}

      {currentScreen === 'AccountBalance' && (
        <AccountBalanceScreen
          onBack={() => setCurrentScreen('Analysis')}
        />
      )}

      {currentScreen === 'QuicklyAnalysis' && (
        <QuicklyAnalysisScreen
          onBack={() => setCurrentScreen('Analysis')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00D09E',
  },
});