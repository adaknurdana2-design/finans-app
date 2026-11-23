import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

interface AnalysisScreenProps {
  onBack: () => void;
  onOpenNotification: () => void;
  onOpenBalance?: () => void;
  onOpenQuickly?: () => void;
}

export default function AnalysisScreen({
  onBack,
  onOpenNotification,
  onOpenBalance,
  onOpenQuickly,
}: AnalysisScreenProps) {
  const [activeTab, setActiveTab] = useState<'Daily' | 'Weekly' | 'Monthly' | 'Year'>('Weekly');

  const getData = () => {
    switch (activeTab) {
      case 'Daily':
        return {
          income: '$4,120.00',
          expense: '$1,187.40',
          limit: '$20,000.00',
          percent: '30%',
          bars: [
            { label: 'Mon', inc: 45, exp: 75 },
            { label: 'Tue', inc: 15, exp: 45 },
            { label: 'Wed', inc: 70, exp: 35 },
            { label: 'Thu', inc: 10, exp: 55 },
            { label: 'Fri', inc: 95, exp: 80 },
            { label: 'Sat', inc: 30, exp: 10 },
            { label: 'Sun', inc: 35, exp: 65 },
          ],
        };
      case 'Weekly':
        return {
          income: '$11,420.00',
          expense: '$20,000.20',
          limit: '$20,000.00',
          percent: '30%',
          bars: [
            { label: '1st Week', inc: 45, exp: 75 },
            { label: '2nd Week', inc: 25, exp: 42 },
            { label: '3rd Week', inc: 40, exp: 58 },
            { label: '4th Week', inc: 22, exp: 48 },
          ],
        };
      case 'Monthly':
        return {
          income: '$4,120.00',
          expense: '$1,187.40',
          limit: '$20,000.00',
          percent: '30%',
          bars: [
            { label: 'Jan', inc: 70, exp: 40 },
            { label: 'Feb', inc: 55, exp: 60 },
            { label: 'Mar', inc: 85, exp: 45 },
            { label: 'Apr', inc: 60, exp: 35 },
          ],
        };
      case 'Year':
        return {
          income: '$48,200.00',
          expense: '$14,530.30',
          limit: '$100,000.00',
          percent: '45%',
          bars: [
            { label: '2023', inc: 65, exp: 50 },
            { label: '2024', inc: 75, exp: 45 },
            { label: '2025', inc: 85, exp: 40 },
            { label: '2026', inc: 95, exp: 30 },
          ],
        };
    }
  };

  const currentData = getData();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBtnTransparent} onPress={onBack}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Analysis</Text>
          <TouchableOpacity style={styles.notificationBell} onPress={onOpenNotification}>
            <Text style={{ fontSize: 16 }}>🔔</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.balanceRow}>
          <View style={styles.balanceCol}>
            <Text style={styles.balanceLabel}>☑ Total Balance</Text>
            <Text style={styles.balanceAmount}>$7,783.00</Text>
          </View>
          <View style={styles.verticalDivider} />
          <View style={styles.balanceCol}>
            <Text style={styles.balanceLabel}>☑ Total Expense</Text>
            <Text style={styles.expenseAmount}>-${currentData.expense.replace('$', '')}</Text>
          </View>
        </View>

        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: currentData.percent as any }]}>
            <Text style={styles.progressTextInside}>{currentData.percent}</Text>
          </View>
          <Text style={styles.progressLimitInside}>{currentData.limit}</Text>
        </View>

        <Text style={styles.progressSubText}>
          ☑ {currentData.percent} Of Your Expenses, Looks Good.
        </Text>
      </View>

      <View style={styles.bottomSheet}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 90 }}>
          <View style={styles.filterTabContainer}>
            {(['Daily', 'Weekly', 'Monthly', 'Year'] as const).map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.filterButton, activeTab === tab && styles.activeFilterButton]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.filterText, activeTab === tab && styles.activeFilterText]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.statsCard}>
            <View style={styles.statsHeaderRow}>
              <Text style={styles.statsTitle}>Income & Expenses</Text>
              <View style={styles.statsActionIcons}>
                <TouchableOpacity style={styles.circleActionBtn} onPress={onOpenQuickly}>
                  <Text style={styles.actionIcon}>🔍</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleActionBtn} onPress={onOpenBalance}>
                  <Text style={styles.actionIcon}>📅</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.chartContainer}>
              <View style={styles.yAxis}>
                <Text style={styles.chartLineText}>15k</Text>
                <Text style={styles.chartLineText}>10k</Text>
                <Text style={styles.chartLineText}>5k</Text>
                <Text style={styles.chartLineText}>1k</Text>
              </View>

              <View style={styles.barsArea}>
                {currentData.bars.map((item, index) => (
                  <View key={index} style={styles.barGroup}>
                    <View style={styles.barsWrapper}>
                      <View style={[styles.barGreen, { height: item.inc }]} />
                      <View style={[styles.barBlue, { height: item.exp }]} />
                    </View>
                    <Text style={styles.barDayText}>{item.label}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.summaryRow}>
            <View style={styles.summaryBox}>
              <View style={[styles.arrowBox, { borderColor: '#00D09E' }]}>
                <Text style={{ color: '#00D09E', fontWeight: 'bold' }}>↗</Text>
              </View>
              <Text style={styles.summaryLabel}>Income</Text>
              <Text style={styles.summaryValueDark}>{currentData.income}</Text>
            </View>
            <View style={styles.summaryBox}>
              <View style={[styles.arrowBox, { borderColor: '#0068FF' }]}>
                <Text style={{ color: '#0068FF', fontWeight: 'bold' }}>↘</Text>
              </View>
              <Text style={styles.summaryLabel}>Expense</Text>
              <Text style={styles.summaryValueBlue}>{currentData.expense}</Text>
            </View>
          </View>

          <Text style={styles.targetsTitle}>My Targets</Text>
        </ScrollView>

        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={onBack} style={styles.navItem}>
            <Text style={styles.navIcon}>🏠</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
            <Text style={styles.navIconActive}>📊</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onOpenBalance} style={styles.navItem}>
            <Text style={styles.navIcon}>⇄</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onOpenQuickly} style={styles.navItem}>
            <Text style={styles.navIcon}>📚</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onBack} style={styles.navItem}>
            <Text style={styles.navIcon}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#00D09E' },
  topSection: { paddingTop: 20, paddingHorizontal: 22, paddingBottom: 22 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  iconBtnTransparent: { padding: 6 },
  backButtonText: { fontSize: 22, fontWeight: 'bold', color: '#093030' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#093030' },
  notificationBell: { width: 34, height: 34, backgroundColor: '#F1FFF3', borderRadius: 17, justifyContent: 'center', alignItems: 'center' },
  balanceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  balanceCol: { flex: 1, alignItems: 'center' },
  verticalDivider: { width: 1, height: 40, backgroundColor: '#DFF7E2' },
  balanceLabel: { fontSize: 12, color: '#093030', fontWeight: '500' },
  balanceAmount: { fontSize: 22, fontWeight: 'bold', color: '#FFFFFF', marginTop: 4 },
  expenseAmount: { fontSize: 22, fontWeight: 'bold', color: '#0068FF', marginTop: 4 },
  progressBarBg: { height: 26, backgroundColor: '#F1FFF3', borderRadius: 13, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 14, marginBottom: 8, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: '#052224', borderRadius: 13, justifyContent: 'center', alignItems: 'center', minWidth: 45 },
  progressTextInside: { fontSize: 11, color: '#FFFFFF', fontWeight: 'bold' },
  progressLimitInside: { fontSize: 11, color: '#093030', fontWeight: '600', fontStyle: 'italic' },
  progressSubText: { fontSize: 12, color: '#093030', textAlign: 'center', fontWeight: '500' },
  bottomSheet: { flex: 1, backgroundColor: '#F1FFF3', borderTopLeftRadius: 40, borderTopRightRadius: 40, paddingTop: 22, paddingHorizontal: 20 },
  filterTabContainer: { flexDirection: 'row', backgroundColor: '#DFF7E2', borderRadius: 18, padding: 4, marginBottom: 20 },
  filterButton: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 15 },
  activeFilterButton: { backgroundColor: '#00D09E' },
  filterText: { fontSize: 12, color: '#093030', fontWeight: '600' },
  activeFilterText: { color: '#093030', fontWeight: 'bold' },
  statsCard: { backgroundColor: '#DFF7E2', borderRadius: 24, padding: 18, marginBottom: 20 },
  statsHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  statsTitle: { fontSize: 15, fontWeight: 'bold', color: '#093030' },
  statsActionIcons: { flexDirection: 'row', gap: 8 },
  circleActionBtn: { width: 30, height: 30, borderRadius: 10, backgroundColor: '#00D09E', justifyContent: 'center', alignItems: 'center' },
  actionIcon: { fontSize: 13 },
  chartContainer: { height: 130, flexDirection: 'row', alignItems: 'flex-end' },
  yAxis: { justifyContent: 'space-between', height: 105, marginRight: 10, paddingBottom: 18 },
  chartLineText: { fontSize: 10, color: '#4E8D7C' },
  barsArea: { flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', borderBottomWidth: 1, borderBottomColor: '#093030', paddingBottom: 4 },
  barGroup: { alignItems: 'center', flex: 1 },
  barsWrapper: { flexDirection: 'row', alignItems: 'flex-end', height: 100, gap: 4 },
  barGreen: { width: 6, backgroundColor: '#00D09E', borderTopLeftRadius: 3, borderTopRightRadius: 3 },
  barBlue: { width: 6, backgroundColor: '#0068FF', borderTopLeftRadius: 3, borderTopRightRadius: 3 },
  barDayText: { fontSize: 10, color: '#093030', marginTop: 6, position: 'absolute', bottom: -20 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, marginBottom: 20 },
  summaryBox: { alignItems: 'center' },
  arrowBox: { width: 26, height: 26, borderWidth: 1.5, borderRadius: 7, justifyContent: 'center', alignItems: 'center', marginBottom: 5 },
  summaryLabel: { fontSize: 12, color: '#093030' },
  summaryValueDark: { fontSize: 18, fontWeight: 'bold', color: '#093030', marginTop: 2 },
  summaryValueBlue: { fontSize: 18, fontWeight: 'bold', color: '#0068FF', marginTop: 2 },
  targetsTitle: { fontSize: 16, fontWeight: 'bold', color: '#093030' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#DFF7E2', paddingVertical: 14, borderTopLeftRadius: 30, borderTopRightRadius: 30 },
  navItem: { padding: 10, borderRadius: 18 },
  navItemActive: { backgroundColor: '#00D09E' },
  navIcon: { fontSize: 20, color: '#093030' },
  navIconActive: { fontSize: 20, color: '#093030' },
});