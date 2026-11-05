import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import HomeScreen from './HomeScreen';
import AnalysisScreen from './AnalysisScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'Home' | 'Analysis'>('Home');

  const handleOpenNotification = () => {
    Alert.alert('Хабарламалар', 'Жаңа хабарламалар жоқ.');
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'Home' ? (
        <HomeScreen
          onOpenNotification={handleOpenNotification}
          onOpenAccountBalance={() => Alert.alert('Account Balance', 'Баланс мәліметтері ашылуда')}
          onOpenAnalysis={() => setCurrentScreen('Analysis')}
        />
      ) : (
        <AnalysisScreen
          onBack={() => setCurrentScreen('Home')}
          onOpenNotification={handleOpenNotification}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ECCA3',
  },
});