import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

interface QuicklyAnalysisScreenProps {
  onBackToHome: () => void;
  onOpenNotification: () => void;
}

export default function QuicklyAnalysisScreen({ onBackToHome, onOpenNotification }: QuicklyAnalysisScreenProps) {
  return (
    <View style={styles.container}>
      {/* Жоғарғы Header (Артқа қайту және Хабарлама) */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBackToHome} style={styles.iconButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Quickly Analysis</Text>
        
        <TouchableOpacity onPress={onOpenNotification} style={styles.iconButtonBg}>
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Жоғарғы шағын карточкалар (Savings & Revenue) */}
        <View style={styles.statsCard}>
          <View style={styles.savingsBox}>
            <Text style={styles.circleIcon}>🎯</Text>
            <Text style={styles.savingsTitle}>Savings On Goals</Text>
          </View>
          <View style={styles.statsDetails}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Revenue Last Week:</Text>
              <Text style={styles.statValueGreen}>$4.000.00</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Food Last Week:</Text>
              <Text style={styles.statValueRed}>-$100.00</Text>
            </View>
          </View>
        </View>

        {/* График орналасқан ақ блок (April Expenses) */}
        <View style={styles.chartContainer}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>April Expenses</Text>
            <View style={styles.chartIcons}>
              <View style={styles.miniIconBox}><Text>🔍</Text></View>
              <View style={styles.miniIconBox}><Text>📅</Text></View>
            </View>
          </View>

          {/* График сызықтары мен бағандары */}
          <View style={styles.graphBox}>
            <Text style={styles.graphAxis}>15k</Text>
            <Text style={styles.graphAxis}>10k</Text>
            <Text style={styles.graphAxis}>5k</Text>
            <Text style={styles.graphAxis}>1k</Text>

            {/* Бағандар имитациясы */}
            <View style={styles.barsRow}>
              <View style={styles.barGroup}>
                <View style={[styles.barGreen, { height: 20 }]} />
                <View style={[styles.barBlue, { height: 35 }]} />
                <Text style={styles.barLabel}>1st Week</Text>
              </View>
              <View style={styles.barGroup}>
                <View style={[styles.barGreen, { height: 10 }]} />
                <View style={[styles.barBlue, { height: 50 }]} />
                <Text style={styles.barLabel}>2nd Week</Text>
              </View>
              <View style={styles.barGroup}>
                <View style={[styles.barGreen, { height: 40 }]} />
                <View style={[styles.barBlue, { height: 80 }]} />
                <Text style={styles.barLabel}>3rd Week</Text>
              </View>
              <View style={styles.barGroup}>
                <View style={[styles.barGreen, { height: 60 }]} />
                <View style={[styles.barBlue, { height: 45 }]} />
                <Text style={styles.barLabel}>4th Week</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Транзакциялар тізімі */}
        <View style={styles.transactionList}>
          <View style={styles.transactionItem}>
            <View style={styles.transIconBox}><Text>💰</Text></View>
            <View style={styles.transInfo}>
              <Text style={styles.transTitle}>Salary</Text>
              <Text style={styles.transDate}>18:27 - April 30</Text>
            </View>
            <Text style={styles.transCategory}>Monthly</Text>
            <Text style={styles.transAmountGreen}>$4.000,00</Text>
          </View>

          <View style={styles.transactionItem}>
            <View style={styles.transIconBox}><Text>🛒</Text></View>
            <View style={styles.transInfo}>
              <Text style={styles.transTitle}>Groceries</Text>
              <Text style={styles.transDate}>17:00 - April 24</Text>
            </View>
            <Text style={styles.transCategory}>Pantry</Text>
            <Text style={styles.transAmountRed}>-$100,00</Text>
          </View>

          <View style={styles.transactionItem}>
            <View style={styles.transIconBox}><Text>🏠</Text></View>
            <View style={styles.transInfo}>
              <Text style={styles.transTitle}>Rent</Text>
              <Text style={styles.transDate}>8:30 - April 15</Text>
            </View>
            <Text style={styles.transCategory}>Rent</Text>
            <Text style={styles.transAmountRed}>-$674,40</Text>
          </View>
        </View>
      </ScrollView>

      {/* Төменгі навигация мәзірі (Басылатын батырмалар) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={onBackToHome}><Text style={styles.navIcon}>🏠</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navIconActive}>📊</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navIcon}>🔄</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navIcon}>📦</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navIcon}>👤</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4ECCA3' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 50, paddingHorizontal: 20, paddingBottom: 15 },
  iconButton: { width: 36, height: 36, justifyContent: 'center', alignItems: 'center' },
  iconButtonBg: { width: 36, height: 36, backgroundColor: '#FFFFFF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  backArrow: { fontSize: 24, color: '#FFFFFF', fontWeight: 'bold' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF' },
  bellIcon: { fontSize: 16 },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 20 },
  statsCard: { backgroundColor: '#F7FFF9', borderRadius: 20, padding: 15, flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  savingsBox: { alignItems: 'center', flex: 1, borderRightWidth: 1, borderRightColor: '#E0E0E0', paddingRight: 10 },
  circleIcon: { fontSize: 30, marginBottom: 5 },
  savingsTitle: { fontSize: 11, fontWeight: 'bold', color: '#333', textAlign: 'center' },
  statsDetails: { flex: 1.5, paddingLeft: 15 },
  statItem: { marginVertical: 4 },
  statLabel: { fontSize: 10, color: '#777' },
  statValueGreen: { fontSize: 13, fontWeight: 'bold', color: '#2E7D32' },
  statValueRed: { fontSize: 13, fontWeight: 'bold', color: '#D32F2F' },
  statDivider: { height: 1, backgroundColor: '#E0E0E0', marginVertical: 4 },
  chartContainer: { backgroundColor: '#F7FFF9', borderRadius: 20, padding: 15, marginBottom: 15 },
  chartHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  chartTitle: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  chartIcons: { flexDirection: 'row', gap: 8 },
  miniIconBox: { width: 28, height: 28, backgroundColor: '#E8F5E9', borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  graphBox: { height: 130, borderBottomWidth: 1, borderBottomColor: '#ddd', justifyContent: 'flex-end', position: 'relative', paddingBottom: 5 },
  graphAxis: { position: 'absolute', fontSize: 9, color: '#aaa', left: 0 },
  barsRow: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', width: '100%', paddingLeft: 20 },
  barGroup: { alignItems: 'center', flex: 1 },
  barGreen: { width: 6, backgroundColor: '#4ECCA3', borderTopLeftRadius: 3, borderTopRightRadius: 3, marginBottom: 2 },
  barBlue: { width: 6, backgroundColor: '#2563EB', borderTopLeftRadius: 3, borderTopRightRadius: 3 },
  barLabel: { fontSize: 9, color: '#666', marginTop: 4 },
  transactionList: { backgroundColor: '#F7FFF9', borderRadius: 20, padding: 15, marginBottom: 20 },
  transactionItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  transIconBox: { width: 35, height: 35, backgroundColor: '#E8F5E9', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  transInfo: { flex: 1 },
  transTitle: { fontSize: 13, fontWeight: 'bold', color: '#333' },
  transDate: { fontSize: 10, color: '#888' },
  transCategory: { fontSize: 11, color: '#666', marginRight: 10 },
  transAmountGreen: { fontSize: 13, fontWeight: 'bold', color: '#2E7D32' },
  transAmountRed: { fontSize: 13, fontWeight: 'bold', color: '#D32F2F' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#F7FFF9', paddingVertical: 12, borderRadius: 25 },
  navIcon: { fontSize: 18, opacity: 0.5 },
  navIconActive: { fontSize: 18 },
});