import React, {useState}from 'react';
import { TextInput, View, Text, Button}from 'react-native';

const GoalInput =  props  => {

  const [enteredGoal, setEnteredGoal] = useState('');

  const onChange = (value) => {
    setEnteredGoal(value);
  };
  const clearText = () => {
    setEnteredGoal('');
  }
  return (
    <View>
    <TextInput 
    placeholder="My Goal"
    onChangeText={onChange}
    value={enteredGoal}
    />
    <Button title="Add Goal" onPress={props.addGoal.bind(this, enteredGoal)} />
    <Button onPress={clearText } title="Clear Text"/>
  </View>
  )

}

export default GoalInput;