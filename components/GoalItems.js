import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const GoalItems = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItems;
