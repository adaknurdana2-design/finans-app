import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

interface AnalysisScreenProps {
  onBack: () => void;
  onOpenNotification: () => void;
}

export default function AnalysisScreen({ onBack, onOpenNotification }: AnalysisScreenProps) {
  const [activeTab, setActiveTab] = useState<'Daily' | 'Weekly' | 'Monthly' | 'Yearly'>('Monthly');

  const getData = () => {
    switch (activeTab) {
      case 'Daily':
        return { income: '$250.00', expense: '$45.00', limit: '$1,000.00', percent: '5%' };
      case 'Weekly':
        return { income: '$1,420.00', expense: '$380.00', limit: '$5,000.00', percent: '15%' };
      case 'Monthly':
        return { income: '$4,120.00', expense: '$1,187.40', limit: '$20,000.00', percent: '30%' };
      case 'Yearly':
        return { income: '$48,200.00', expense: '$14,530.30', limit: '$100,000.00', percent: '45%' };
    }
  };

  const currentData = getData();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Analysis</Text>
        <TouchableOpacity style={styles.notificationBell} onPress={onOpenNotification}>
          <Text>🔔</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.balanceCard}>
        <View style={styles.balanceRow}>
          <View>
            <Text style={styles.balanceLabel}>📊 Total Balance</Text>
            <Text style={styles.balanceAmount}>$7,783.00</Text>
          </View>
          <View>
            <Text style={styles.balanceLabel}>📉 Total Expense</Text>
            <Text style={styles.expenseAmount}>-{currentData.expense}</Text>
          </View>
        </View>

        <View style={styles.progressBarBg}>
          {/* Қатені кетіру үшін width мәніне 'as any' қосылды */}
          <View style={[styles.progressBarFill, { width: currentData.percent as any }]} />
        </View>
        <View style={styles.progressRow}>
          <Text style={styles.progressText}>{currentData.percent}</Text>
          <Text style={styles.progressLimit}>{currentData.limit}</Text>
        </View>
        <Text style={styles.progressSubText}>{currentData.percent} Of Your Expenses, Looks Good.</Text>
      </View>

      <View style={styles.filterTabContainer}>
        {(['Daily', 'Weekly', 'Monthly', 'Yearly'] as const).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.filterButton, activeTab === tab && styles.activeFilterButton]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.filterText, activeTab === tab && styles.activeFilterText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.statsCard}>
        <View style={styles.statsHeaderRow}>
          <Text style={styles.statsTitle}>Income & Expenses ({activeTab})</Text>
          <View style={styles.statsActionIcons}>
            <Text style={styles.actionIcon}>🔍</Text>
            <Text style={styles.actionIcon}>📊</Text>
          </View>
        </View>

        <View style={styles.chartContainer}>
          <View style={styles.chartLine}><Text style={styles.chartLineText}>15k</Text></View>
          <View style={styles.chartLine}><Text style={styles.chartLineText}>10k</Text></View>
          <View style={styles.chartLine}><Text style={styles.chartLineText}>5k</Text></View>
          <View style={styles.chartLine}><Text style={styles.chartLineText}>1k</Text></View>

          <View style={styles.barsArea}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <View key={index} style={styles.barGroup}>
                <View style={styles.barsWrapper}>
                  <View style={[styles.barGreen, { height: index % 2 === 0 ? '60%' : '80%' }]} />
                  <View style={[styles.barBlue, { height: index % 2 === 0 ? '40%' : '30%' }]} />
                </View>
                <Text style={styles.barDayText}>{day}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.summaryRow}>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryIcon}>↗️</Text>
          <Text style={styles.summaryLabel}>Income</Text>
          <Text style={styles.summaryValueGreen}>{currentData.income}</Text>
        </View>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryIcon}>↘️</Text>
          <Text style={styles.summaryLabel}>Expense</Text>
          <Text style={styles.summaryValueRed}>{currentData.expense}</Text>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={onBack}><Text style={styles.navIcon}>🏠</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navIconActive}>📊</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navIcon}>🔄</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navIcon}>📦</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navIcon}>👤</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4ECCA3' },
  contentContainer: { paddingTop: 50, paddingBottom: 20, paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  backButton: { width: 36, height: 36, backgroundColor: '#FFFFFF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  backButtonText: { fontSize: 18, fontWeight: 'bold', color: '#2E7D32' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF' },
  notificationBell: { width: 36, height: 36, backgroundColor: '#FFFFFF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  balanceCard: { backgroundColor: '#2E7D32', borderRadius: 20, padding: 20, marginBottom: 15 },
  balanceRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  balanceLabel: { fontSize: 11, color: '#C8E6C9' },
  balanceAmount: { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', marginTop: 4 },
  expenseAmount: { fontSize: 20, fontWeight: 'bold', color: '#81D4FA', marginTop: 4 },
  progressBarBg: { height: 6, backgroundColor: '#1B5E20', borderRadius: 3, marginBottom: 5 },
  progressBarFill: { height: '100%', backgroundColor: '#FFFFFF', borderRadius: 3 },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  progressText: { fontSize: 11, color: '#FFFFFF', fontWeight: 'bold' },
  progressLimit: { fontSize: 11, color: '#C8E6C9' },
  progressSubText: { fontSize: 11, color: '#C8E6C9' },
  filterTabContainer: { flexDirection: 'row', backgroundColor: '#E8F5E9', borderRadius: 25, padding: 4, marginBottom: 20 },
  filterButton: { flex: 1, paddingVertical: 8, alignItems: 'center', borderRadius: 20 },
  activeFilterButton: { backgroundColor: '#2E7D32' },
  filterText: { fontSize: 10, color: '#555', fontWeight: '500' },
  activeFilterText: { color: '#FFFFFF', fontWeight: 'bold' },
  statsCard: { backgroundColor: '#F7FFF9', borderRadius: 20, padding: 15, marginBottom: 15 },
  statsHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  statsTitle: { fontSize: 13, fontWeight: 'bold', color: '#333' },
  statsActionIcons: { flexDirection: 'row', gap: 10 },
  actionIcon: { fontSize: 14 },
  chartContainer: { height: 160, position: 'relative', justifyContent: 'flex-end', paddingBottom: 5 },
  chartLine: { position: 'absolute', left: 0, right: 0, borderTopWidth: 1, borderTopColor: '#EEEEEE', flexDirection: 'row', paddingTop: 2 },
  chartLineText: { fontSize: 9, color: '#AAA' },
  barsArea: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', height: '100%', paddingLeft: 25 },
  barGroup: { alignItems: 'center', flex: 1 },
  barsWrapper: { flexDirection: 'row', alignItems: 'flex-end', height: 110, gap: 3 },
  barGreen: { width: 6, backgroundColor: '#4ECCA3', borderTopLeftRadius: 3, borderTopRightRadius: 3 },
  barBlue: { width: 6, backgroundColor: '#2E7D32', borderTopLeftRadius: 3, borderTopRightRadius: 3 },
  barDayText: { fontSize: 10, color: '#777', marginTop: 5 },
  summaryRow: { flexDirection: 'row', gap: 15, marginBottom: 20 },
  summaryBox: { flex: 1, backgroundColor: '#F7FFF9', borderRadius: 20, padding: 15, alignItems: 'center' },
  summaryIcon: { fontSize: 20, marginBottom: 5 },
  summaryLabel: { fontSize: 12, color: '#777', marginBottom: 5 },
  summaryValueGreen: { fontSize: 14, fontWeight: 'bold', color: '#2E7D32' },
  summaryValueRed: { fontSize: 14, fontWeight: 'bold', color: '#D32F2F' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#F7FFF9', paddingVertical: 12, borderRadius: 25 },
  navIcon: { fontSize: 18, opacity: 0.5 },
  navIconActive: { fontSize: 18 },
});