import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
  const [currentGoal, setCurrentGoal] = useState([]);

  const addGoal = goalTitle => {
    setCurrentGoal(currentGoal => [
      ...currentGoal,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };
  const onDelete = id => {
    setCurrentGoal(currentGoal => {
      return currentGoal.filter(goal => goal.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <GoalInput addGoal={addGoal} />
      <FlatList
        data={currentGoal}
        keyExtractor={(item, index) => item.id}
        renderItem=
        {itemData => (
          <GoalItems title={itemData.item.value} id={itemData.item.id} onDelete={onDelete} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
