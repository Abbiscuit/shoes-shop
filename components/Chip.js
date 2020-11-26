import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Chip = ({ title }) => {
  return (
    <View style={styles.chip}>
      <Text style={styles.chipText}>{title}</Text>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  selectedChip: {
    backgroundColor: '#222',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 16,
  },
  selectedChipText: {
    fontSize: 12,
    color: '#fff',
  },

  chip: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 16,
  },
  chipText: {
    fontSize: 12,
    color: '#222',
    fontWeight: 'bold',
  },
});
