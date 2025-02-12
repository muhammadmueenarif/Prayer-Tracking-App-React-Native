import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const { width, height } = Dimensions.get('window');

const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'] as const;

type PrayerStatuses = {
  [key in typeof prayers[number]]: string;
};

const TrackPrayerScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [prayerStatuses, setPrayerStatuses] = useState<PrayerStatuses>({
    Fajr: '',
    Dhuhr: '',
    Asr: '',
    Maghrib: '',
    Isha: '',
  });

  const handleStatusChange = (prayer: keyof PrayerStatuses, status: string) => {
    setPrayerStatuses((prev) => ({ ...prev, [prayer]: status }));
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

      {/* Prayer Status Selection */}
      {prayers.map((prayer) => (
        <View key={prayer} style={styles.prayerRow}>
          <Text style={styles.prayerLabel}>{prayer}</Text>
          
          <Picker
            selectedValue={prayerStatuses[prayer]}
            style={styles.picker}
            onValueChange={(itemValue) => handleStatusChange(prayer, itemValue)}
          >
            <Picker.Item label="Select Status" value="" />
            <Picker.Item label="Offered" value="Offered" />
            <Picker.Item label="Not Offered" value="Not Offered" />
            <Picker.Item label="Qazaa" value="Qazaa" />
          </Picker>

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  prayerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#fff',
    padding: height * 0.015,
    borderRadius: 10,
    marginBottom: height * 0.02,
    elevation: 2,
  },
  prayerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '25%',
  },
  picker: {
    width: '40%',
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  saveButton: {
    backgroundColor: '#27ae60',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.05,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default TrackPrayerScreen;
