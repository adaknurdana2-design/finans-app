import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

interface AccountBalanceScreenProps {
  onBackToHome: () => void;
  onOpenNotification?: () => void;
}

export default function AccountBalanceScreen({ onBackToHome, onOpenNotification }: AccountBalanceScreenProps) {
  return (
    <View style={styles.container}>
      {/* Жоғарғы шапка (Header) */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBackToHome} style={styles.iconButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Account Balance</Text>
        
        <TouchableOpacity onPress={onOpenNotification} style={styles.iconButtonBg}>
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Жалпы баланс мен шығын */}
        <View style={styles.balanceSummary}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>↗ Total Balance</Text>
            <Text style={styles.totalBalanceText}>$7,783.00</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>↘ Total Expense</Text>
            <Text style={styles.totalExpenseText}>-$1.187.40</Text>
          </View>
        </View>

        {/* Прогресс бар */}
        <View style={styles.progressCard}>
          <View style={styles.progressBg}>
            <View style={styles.progressFill} />
          </View>
          <View style={styles.progressLabels}>
            <Text style={styles.progressPercent}>30%</Text>
            <Text style={styles.progressTarget}>$20,000.00</Text>
          </View>
        </View>

        {/* Income және Expense карточкалары */}
        <View style={styles.cardRow}>
          <View style={styles.incomeCard}>
            <Text style={styles.cardIconGreen}>↗</Text>
            <Text style={styles.cardLabel}>Income</Text>
            <Text style={styles.incomeValue}>$4,000.00</Text>
          </View>

          <View style={styles.expenseCard}>
            <Text style={styles.cardIconBlue}>↘</Text>
            <Text style={styles.cardLabel}>Expense</Text>
            <Text style={styles.expenseValue}>$1.187.40</Text>
          </View>
        </View>

        <Text style={styles.subStatusText}>☑ 30% Of Your Expenses, Looks Good.</Text>

        {/* Транзакциялар бөлігі */}
        <View style={styles.transactionsContainer}>
          <View style={styles.transHeader}>
            <Text style={styles.transTitle}>Transactions</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          {/* Item 1 */}
          <View style={styles.transItem}>
            <View style={styles.transIconBox}><Text>💰</Text></View>
            <View style={styles.transInfo}>
              <Text style={styles.transName}>Salary</Text>
              <Text style={styles.transDate}>18:27 - April 30</Text>
            </View>
            <Text style={styles.transTag}>Monthly</Text>
            <Text style={styles.transAmountPlus}>$4.000,00</Text>
          </View>

          {/* Item 2 */}
          <View style={styles.transItem}>
            <View style={styles.transIconBox}><Text>🛒</Text></View>
            <View style={styles.transInfo}>
              <Text style={styles.transName}>Groceries</Text>
              <Text style={styles.transDate}>17:00 - April 24</Text>
            </View>
            <Text style={styles.transTag}>Pantry</Text>
            <Text style={styles.transAmountMinus}>-$100,00</Text>
          </View>

          {/* Item 3 */}
          <View style={styles.transItem}>
            <View style={styles.transIconBox}><Text>🏠</Text></View>
            <View style={styles.transInfo}>
              <Text style={styles.transName}>Rent</Text>
              <Text style={styles.transDate}>8:30 - April 15</Text>
            </View>
            <Text style={styles.transTag}>Rent</Text>
            <Text style={styles.transAmountMinus}>-$674,40</Text>
          </View>

          {/* Item 4 */}
          <View style={styles.transItem}>
            <View style={styles.transIconBox}><Text>🚌</Text></View>
            <View style={styles.transInfo}>
              <Text style={styles.transName}>Transport</Text>
              <Text style={styles.transDate}>9:30 - April 08</Text>
            </View>
            <Text style={styles.transTag}>Fuel</Text>
            <Text style={styles.transAmountMinus}>-$4,13</Text>
          </View>
        </View>
      </ScrollView>

      {/* Навигациялық төменгі меню */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={onBackToHome}>
          <Text style={styles.navIconActive}>🏠</Text>
        </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  iconButton: { width: 36, height: 36, justifyContent: 'center', alignItems: 'center' },
  iconButtonBg: { width: 36, height: 36, backgroundColor: '#FFFFFF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  backArrow: { fontSize: 24, color: '#FFFFFF', fontWeight: 'bold' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF' },
  bellIcon: { fontSize: 16 },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 20 },
  balanceSummary: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, marginTop: 10 },
  summaryItem: { flex: 1 },
  summaryDivider: { width: 1, backgroundColor: 'rgba(255,255,255,0.4)', marginHorizontal: 15 },
  summaryLabel: { fontSize: 11, color: '#E8F5E9' },
  totalBalanceText: { fontSize: 22, fontWeight: 'bold', color: '#FFFFFF', marginTop: 4 },
  totalExpenseText: { fontSize: 22, fontWeight: 'bold', color: '#2563EB', marginTop: 4 },
  progressCard: { marginBottom: 15 },
  progressBg: { height: 20, backgroundColor: '#FFFFFF', borderRadius: 10, overflow: 'hidden' },
  progressFill: { width: '30%', height: '100%', backgroundColor: '#222222' },
  progressLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  progressPercent: { fontSize: 11, color: '#FFFFFF', fontWeight: 'bold' },
  progressTarget: { fontSize: 11, color: '#FFFFFF', fontStyle: 'italic' },
  cardRow: { flexDirection: 'row', gap: 12, marginBottom: 12 },
  incomeCard: { flex: 1, backgroundColor: '#F7FFF9', borderRadius: 16, padding: 15, alignItems: 'center' },
  expenseCard: { flex: 1, backgroundColor: '#F7FFF9', borderRadius: 16, padding: 15, alignItems: 'center' },
  cardIconGreen: { fontSize: 20, color: '#2E7D32', fontWeight: 'bold' },
  cardIconBlue: { fontSize: 20, color: '#2563EB', fontWeight: 'bold' },
  cardLabel: { fontSize: 12, color: '#666', marginVertical: 4 },
  incomeValue: { fontSize: 16, fontWeight: 'bold', color: '#2E7D32' },
  expenseValue: { fontSize: 16, fontWeight: 'bold', color: '#2563EB' },
  subStatusText: { fontSize: 11, color: '#FFFFFF', marginBottom: 20, textAlign: 'center' },
  transactionsContainer: { backgroundColor: '#F7FFF9', borderRadius: 24, padding: 18 },
  transHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  transTitle: { fontSize: 16, fontWeight: 'bold', color: '#222' },
  seeAllText: { fontSize: 11, color: '#888' },
  transItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  transIconBox: { width: 36, height: 36, backgroundColor: '#E8F5E9', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  transInfo: { flex: 1 },
  transName: { fontSize: 13, fontWeight: 'bold', color: '#333' },
  transDate: { fontSize: 10, color: '#2563EB' },
  transTag: { fontSize: 11, color: '#777', marginHorizontal: 8 },
  transAmountPlus: { fontSize: 13, fontWeight: 'bold', color: '#333' },
  transAmountMinus: { fontSize: 13, fontWeight: 'bold', color: '#2563EB' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#F7FFF9', paddingVertical: 12, borderTopWidth: 1, borderTopColor: '#E0E0E0' },
  navIcon: { fontSize: 18, opacity: 0.5 },
  navIconActive: { fontSize: 18 },
});