import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const { width, height } = Dimensions.get('window');

const DailyRoutineScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [routineText, setRoutineText] = useState('');

  const handleSaveRoutine = () => {
    // You can store the routine in Firebase or AsyncStorage
    console.log(`Routine for ${selectedDate.toDateString()}: ${routineText}`);
  };

  return (
    <View style={styles.container}>
      {/* Date Picker */}
      <TouchableOpacity style={styles.dateButton} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateText}>Select Date: {selectedDate.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowDatePicker(false);
            if (date) setSelectedDate(date);
          }}
        />
      )}

      {/* Daily Routine Input */}
      <TextInput
        style={styles.input}
        placeholder="Write your daily routine..."
        multiline
        numberOfLines={5}
        textAlignVertical="top"
        value={routineText}
        onChangeText={setRoutineText}
      />

      {/* Save/Update Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveRoutine}>
        <Text style={styles.buttonText}>Save / Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    padding: width * 0.05,
    backgroundColor: '#f7f7f7',
  },
  dateButton: {
    backgroundColor: '#3498db',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.1,
    borderRadius: 10,
    marginBottom: height * 0.03,
  },
  dateText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    height: height * 0.2,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 16,
    padding: height * 0.015,
    elevation: 2,
    marginBottom: height * 0.02,
  },
  saveButton: {
    backgroundColor: '#27ae60',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default DailyRoutineScreen;
