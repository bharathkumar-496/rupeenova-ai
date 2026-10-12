import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_STUDENT_PROFILE,
  INITIAL_ROOMMATES,
  INITIAL_FOOD_SPLITS,
  INITIAL_RECENT_TRANSACTIONS
} from '../data/initialData';

const FinanceContext = createContext();

export function FinanceProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('rupeenova_profile');
    return saved ? JSON.parse(saved) : INITIAL_STUDENT_PROFILE;
  });

  const [roommates, setRoommates] = useState(() => {
    const saved = localStorage.getItem('rupeenova_roommates');
    return saved ? JSON.parse(saved) : INITIAL_ROOMMATES;
  });

  const [foodSplits, setFoodSplits] = useState(() => {
    const saved = localStorage.getItem('rupeenova_splits');
    return saved ? JSON.parse(saved) : INITIAL_FOOD_SPLITS;
  });

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('rupeenova_tx');
    return saved ? JSON.parse(saved) : INITIAL_RECENT_TRANSACTIONS;
  });

  // App device presentation view mode: 'desktop' (wide) or 'mobile' (phone bezel mockup)
  const [viewMode, setViewMode] = useState('desktop');

  // Emergency "Chai-Maggi" low-budget mode
  const [emergencyMode, setEmergencyMode] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'split', 'mess', 'agent', 'perks', 'pitch'

  // Persist to local storage
  useEffect(() => {
    localStorage.setItem('rupeenova_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('rupeenova_roommates', JSON.stringify(roommates));
  }, [roommates]);

  useEffect(() => {
    localStorage.setItem('rupeenova_splits', JSON.stringify(foodSplits));
  }, [foodSplits]);

  useEffect(() => {
    localStorage.setItem('rupeenova_tx', JSON.stringify(transactions));
  }, [transactions]);

  // Derived calculations:
  // Safe daily spend = current balance / days left in cycle
  const safeDailySpend = profile.daysLeftInCycle > 0 
    ? Math.max(0, Math.floor(profile.currentBalance / profile.daysLeftInCycle))
    : 0;

  // Total wasted on skipping hostel mess = (meals skipped * costPerMeal) + outside food spent on those occasions
  const messMealCost = profile.hostelMessPlan.costPerMeal || 63.33;
  const messWasteDirect = Math.round(profile.hostelMessPlan.skippedMealsCount * messMealCost);
  const totalOutsideSpentOnMessDays = profile.hostelMessPlan.outsideFoodSpentOnSkippedDays;
  const totalMessArbitrageLoss = messWasteDirect + totalOutsideSpentOnMessDays;

  // Add a food split (Star Feature requested by user!)
  const addFoodSplit = ({ title, category, totalAmount, totalPersons, paidBy, participantNames }) => {
    const numPersons = Number(totalPersons) || 1;
    const perPerson = Math.round((Number(totalAmount) / numPersons) * 100) / 100;

    const newSplit = {
      id: `split-${Date.now()}`,
      title: title || `${category} Food Split`,
      category: category || 'Food',
      totalAmount: Number(totalAmount),
      totalPersons: numPersons,
      perPersonAmount: perPerson,
      paidBy: paidBy || 'You',
      date: 'Just now',
      participants: participantNames || ['You', ...roommates.slice(0, numPersons - 1).map(r => r.name)],
      settledCount: 1, // 'You' already paid
      status: numPersons === 1 ? 'Settled' : 'Pending'
    };

    setFoodSplits(prev => [newSplit, ...prev]);

    // If paid by You, deduct your share from balance and add transaction
    if (paidBy === 'You') {
      const yourShare = perPerson;
      // You paid full total upfront, but you are owed (total - yourShare)
      setProfile(prev => ({
        ...prev,
        currentBalance: Math.max(0, prev.currentBalance - Number(totalAmount))
      }));

      setTransactions(prev => [
        {
          id: `tx-${Date.now()}`,
          title: `Paid Food: ${newSplit.title}`,
          category: category,
          amount: -Number(totalAmount),
          date: 'Just now',
          messSkipped: false
        },
        ...prev
      ]);
    }

    return newSplit;
  };

  // Log a skipped mess meal
  const logMessMealSkipped = (mealType, outsideFoodCost = 0, mealDesc = '') => {
    const cost = Number(outsideFoodCost) || 0;
    setProfile(prev => ({
      ...prev,
      currentBalance: Math.max(0, prev.currentBalance - cost),
      hostelMessPlan: {
        ...prev.hostelMessPlan,
        skippedMealsCount: prev.hostelMessPlan.skippedMealsCount + 1,
        outsideFoodSpentOnSkippedDays: prev.hostelMessPlan.outsideFoodSpentOnSkippedDays + cost
      }
    }));

    if (cost > 0) {
      setTransactions(prev => [
        {
          id: `tx-${Date.now()}`,
          title: `Outside ${mealType}: ${mealDesc || 'Swiggy/Canteen Food'}`,
          category: 'Food Delivery',
          amount: -cost,
          date: 'Today',
          messSkipped: true
        },
        ...prev
      ]);
    }
  };

  // Add standard transaction
  const addTransaction = (title, amount, category, messSkipped = false) => {
    const numAmount = Number(amount);
    setProfile(prev => ({
      ...prev,
      currentBalance: prev.currentBalance - numAmount
    }));

    setTransactions(prev => [
      {
        id: `tx-${Date.now()}`,
        title,
        category,
        amount: -numAmount,
        date: 'Just now',
        messSkipped
      },
      ...prev
    ]);
  };

  // Mark a split participant as settled (received UPI payment)
  const settleSplitParticipant = (splitId, roommateName, amount) => {
    setFoodSplits(prev => prev.map(s => {
      if (s.id === splitId) {
        const newSettled = s.settledCount + 1;
        return {
          ...s,
          settledCount: newSettled,
          status: newSettled >= s.totalPersons ? 'Settled' : 'Partially Settled'
        };
      }
      return s;
    }));

    // Credit balance
    setProfile(prev => ({
      ...prev,
      currentBalance: prev.currentBalance + Number(amount)
    }));

    setTransactions(prev => [
      {
        id: `tx-${Date.now()}`,
        title: `${roommateName} paid food share via UPI`,
        category: 'UPI Received',
        amount: Number(amount),
        date: 'Just now',
        isCredit: true
      },
      ...prev
    ]);
  };

  // Reset demo data
  const resetDemoData = () => {
    setProfile(INITIAL_STUDENT_PROFILE);
    setRoommates(INITIAL_ROOMMATES);
    setFoodSplits(INITIAL_FOOD_SPLITS);
    setTransactions(INITIAL_RECENT_TRANSACTIONS);
    setEmergencyMode(false);
  };

  return (
    <FinanceContext.Provider value={{
      profile,
      setProfile,
      roommates,
      setRoommates,
      foodSplits,
      transactions,
      viewMode,
      setViewMode,
      emergencyMode,
      setEmergencyMode,
      activeTab,
      setActiveTab,
      safeDailySpend,
      messMealCost,
      messWasteDirect,
      totalOutsideSpentOnMessDays,
      totalMessArbitrageLoss,
      addFoodSplit,
      logMessMealSkipped,
      addTransaction,
      settleSplitParticipant,
      resetDemoData
    }}>
      {children}
    </FinanceContext.Provider>
  );
}

export function useFinance() {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinance must be used within a FinanceProvider');
  }
  return context;
}
