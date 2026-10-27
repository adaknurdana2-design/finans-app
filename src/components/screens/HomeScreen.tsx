import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Жоғарғы мәтін мен хабарлама белгішесі */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Hi, Welcome Back</Text>
          <Text style={styles.subWelcomeText}>Good Morning</Text>
        </View>
        <View style={styles.notificationBell}>
          <Text>🔔</Text>
        </View>
      </View>

      {/* Баланс карточкасы (Total Balance & Expense) */}
      <View style={styles.balanceCard}>
        <View style={styles.balanceRow}>
          <View>
            <Text style={styles.balanceLabel}>📊 Total Balance</Text>
            <Text style={styles.balanceAmount}>$7,783.00</Text>
          </View>
          <View>
            <Text style={styles.balanceLabel}>📉 Total Expense</Text>
            <Text style={styles.expenseAmount}>-$1,187.40</Text>
          </View>
        </View>

        {/* Прогресс жолағы */}
        <View style={styles.progressBarBg}>
          <View style={styles.progressBarFill} />
        </View>
        <Text style={styles.progressText}>30% Of Your Expanses, Looks Good.</Text>
      </View>

      {/* Орталық бөлік (Savings & Revenue) */}
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

      {/* Күнтізбе/Кезең таңдау (Daily, Weekly, Monthly) */}
      <View style={styles.filterTabContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterButton, styles.activeFilterButton]}>
          <Text style={[styles.filterText, styles.activeFilterText]}>Monthly</Text>
        </TouchableOpacity>
      </View>

      {/* Транзакциялар тізімі (Salary, Groceries, Rent) */}
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

      {/* Төменгі навігация мәзірі (Bottom Navigation) */}
      <View style={styles.bottomNav}>
        <Text style={styles.navIconActive}>🏠</Text>
        <Text style={styles.navIcon}>📊</Text>
        <Text style={styles.navIcon}>🔄</Text>
        <Text style={styles.navIcon}>📦</Text>
        <Text style={styles.navIcon}>👤</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ECCA3',
  },
  contentContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subWelcomeText: {
    fontSize: 12,
    color: '#E8F5E9',
  },
  notificationBell: {
    width: 36,
    height: 36,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceCard: {
    backgroundColor: '#2E7D32',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  balanceLabel: {
    fontSize: 11,
    color: '#C8E6C9',
  },
  balanceAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 4,
  },
  expenseAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#81D4FA',
    marginTop: 4,
  },
  progressBarBg: {
    height: 6,
    backgroundColor: '#1B5E20',
    borderRadius: 3,
    marginBottom: 8,
  },
  progressBarFill: {
    width: '30%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 11,
    color: '#C8E6C9',
  },
  statsCard: {
    backgroundColor: '#F7FFF9',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  savingsBox: {
    alignItems: 'center',
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#E0E0E0',
    paddingRight: 10,
  },
  circleIcon: {
    fontSize: 30,
    marginBottom: 5,
  },
  savingsTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  statsDetails: {
    flex: 1.5,
    paddingLeft: 15,
  },
  statItem: {
    marginVertical: 4,
  },
  statLabel: {
    fontSize: 10,
    color: '#777',
  },
  statValueGreen: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  statValueRed: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#D32F2F',
  },
  statDivider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 4,
  },
  filterTabContainer: {
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    borderRadius: 25,
    padding: 4,
    marginBottom: 20,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 20,
  },
  activeFilterButton: {
    backgroundColor: '#2E7D32',
  },
  filterText: {
    fontSize: 12,
    color: '#555',
    fontWeight: '500',
  },
  activeFilterText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  transactionList: {
    backgroundColor: '#F7FFF9',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  transIconBox: {
    width: 35,
    height: 35,
    backgroundColor: '#E8F5E9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  transInfo: {
    flex: 1,
  },
  transTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
  transDate: {
    fontSize: 10,
    color: '#888',
  },
  transCategory: {
    fontSize: 11,
    color: '#666',
    marginRight: 10,
  },
  transAmountGreen: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  transAmountRed: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F7FFF9',
    paddingVertical: 12,
    borderRadius: 25,
  },
  navIcon: {
    fontSize: 18,
    opacity: 0.5,
  },
  navIconActive: {
    fontSize: 18,
  },
});