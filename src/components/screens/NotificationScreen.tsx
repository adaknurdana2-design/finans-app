import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

interface NotificationScreenProps {
  onBackToHome: () => void;
}

export default function NotificationScreen({ onBackToHome }: NotificationScreenProps) {
  return (
    <View style={styles.container}>
      {/* Жоғарғы Header бөлігі */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBackToHome} style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <View style={styles.bellIconBox}>
          <Text>🔔</Text>
        </View>
      </View>

      {/* Астына қарай жылжытуға болатын хабарламалар тізімі */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Today бөлімі */}
        <Text style={styles.sectionTitle}>Today</Text>
        
        <View style={styles.notifCard}>
          <View style={styles.iconBox}><Text>🔔</Text></View>
          <View style={styles.notifInfo}>
            <Text style={styles.notifTitle}>Reminder!</Text>
            <Text style={styles.notifDesc}>Set up your automatic savings to meet your savings goal...</Text>
            <Text style={styles.notifTime}>17:00 - April 24</Text>
          </View>
        </View>

        <View style={styles.notifCard}>
          <View style={styles.iconBox}><Text>⭐</Text></View>
          <View style={styles.notifInfo}>
            <Text style={styles.notifTitle}>New Update</Text>
            <Text style={styles.notifDesc}>Set up your automatic savings to meet your savings goal...</Text>
            <Text style={styles.notifTime}>17:00 - April 24</Text>
          </View>
        </View>

        {/* Yesterday бөлімі */}
        <Text style={styles.sectionTitle}>Yesterday</Text>

        <View style={styles.notifCard}>
          <View style={styles.iconBox}><Text>💰</Text></View>
          <View style={styles.notifInfo}>
            <Text style={styles.notifTitle}>Transactions</Text>
            <Text style={styles.notifDesc}>A new transaction has been registered</Text>
            <Text style={styles.subDetail}>Groceries | Pantry | -$100,00</Text>
            <Text style={styles.notifTime}>17:00 - April 24</Text>
          </View>
        </View>

        <View style={styles.notifCard}>
          <View style={styles.iconBox}><Text>🔔</Text></View>
          <View style={styles.notifInfo}>
            <Text style={styles.notifTitle}>Reminder!</Text>
            <Text style={styles.notifDesc}>Set up your automatic savings to meet your savings goal...</Text>
            <Text style={styles.notifTime}>17:00 - April 24</Text>
          </View>
        </View>

        {/* This Weekend бөлімі */}
        <Text style={styles.sectionTitle}>This Weekend</Text>

        <View style={styles.notifCard}>
          <View style={styles.iconBox}><Text>📉</Text></View>
          <View style={styles.notifInfo}>
            <Text style={styles.notifTitle}>Expense Record</Text>
            <Text style={styles.notifDesc}>We recommend that you be more attentive to your finances.</Text>
            <Text style={styles.notifTime}>17:00 - April 24</Text>
          </View>
        </View>

        <View style={styles.notifCard}>
          <View style={styles.iconBox}><Text>💰</Text></View>
          <View style={styles.notifInfo}>
            <Text style={styles.notifTitle}>Transactions</Text>
            <Text style={styles.notifDesc}>A new transaction has been registered</Text>
            <Text style={styles.subDetail}>Food | Dinner | -$70,40</Text>
            <Text style={styles.notifTime}>17:00 - April 24</Text>
          </View>
        </View>

        {/* Тағы қосымша 3 жаңа сообщение (скролл арқылы астына түсіп қарау үшін) */}
        <Text style={styles.sectionTitle}>Earlier</Text>

        <View style={styles.notifCard}>
          <View style={styles.iconBox}><Text>🛡️</Text></View>
          <View style={styles.notifInfo}>
            <Text style={styles.notifTitle}>Security Alert</Text>
            <Text style={styles.notifDesc}>New login detected from a different device.</Text>
            <Text style={styles.notifTime}>12:30 - April 23</Text>
          </View>
        </View>

        <View style={styles.notifCard}>
          <View style={styles.iconBox}><Text>🎁</Text></View>
          <View style={styles.notifInfo}>
            <Text style={styles.notifTitle}>Cashback Earned</Text>
            <Text style={styles.notifDesc}>You received $15.00 cashback from last transaction.</Text>
            <Text style={styles.notifTime}>09:15 - April 22</Text>
          </View>
        </View>

        <View style={styles.notifCard}>
          <View style={styles.iconBox}><Text>📈</Text></View>
          <View style={styles.notifInfo}>
            <Text style={styles.notifTitle}>Monthly Report</Text>
            <Text style={styles.notifDesc}>Your financial summary for April is now ready to view.</Text>
            <Text style={styles.notifTime}>08:00 - April 21</Text>
          </View>
        </View>

      </ScrollView>

      {/* Төменгі Навигация */}
      <View style={styles.bottomNav}>
        <Text style={styles.navIconActive}>🏠</Text>
        <Text style={styles.navIcon}>📊</Text>
        <Text style={styles.navIcon}>🔄</Text>
        <Text style={styles.navIcon}>📦</Text>
        <Text style={styles.navIcon}>👤</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4ECCA3' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 50, paddingHorizontal: 20, paddingBottom: 15 },
  backButton: { width: 35, height: 35, justifyContent: 'center', alignItems: 'center' },
  backArrow: { fontSize: 24, color: '#FFFFFF', fontWeight: 'bold' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' },
  bellIconBox: { width: 36, height: 36, backgroundColor: '#FFFFFF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  scrollContent: { backgroundColor: '#F7FFF9', borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingHorizontal: 20, paddingTop: 20, paddingBottom: 30 },
  sectionTitle: { fontSize: 13, fontWeight: 'bold', color: '#333', marginVertical: 10 },
  notifCard: { flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 16, padding: 12, marginBottom: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 },
  iconBox: { width: 38, height: 38, backgroundColor: '#E8F5E9', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  notifInfo: { flex: 1 },
  notifTitle: { fontSize: 13, fontWeight: 'bold', color: '#222', marginBottom: 2 },
  notifDesc: { fontSize: 11, color: '#666', marginBottom: 4 },
  subDetail: { fontSize: 11, fontWeight: 'bold', color: '#2563EB', marginBottom: 4 },
  notifTime: { fontSize: 10, color: '#2563EB', textAlign: 'right' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#F7FFF9', paddingVertical: 12, borderTopWidth: 1, borderTopColor: '#E0E0E0' },
  navIcon: { fontSize: 18, opacity: 0.5 },
  navIconActive: { fontSize: 18 },
});