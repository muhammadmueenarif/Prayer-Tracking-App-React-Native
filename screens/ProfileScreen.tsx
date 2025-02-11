import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const { width, height } = Dimensions.get('window');

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [bio, setBio] = useState('');

  // Function to handle image upload
  const pickImage = () => {
    // Open image picker
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        includeBase64: false, // Set to true if you need base64 image
      },
      (response) => {
        if (response.didCancel) {
          console.log('User canceled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorCode);
          Alert.alert('Error', 'Something went wrong while selecting the image');
        } else {
          // Ensure uri is a string or set null if undefined
          const imageUri = response.assets?.[0]?.uri || null;
          setProfileImage(imageUri);
        }
      }
    );
  };

  // Function to save or update bio
  const saveBio = () => {
    if (bio.trim().length === 0) {
      Alert.alert('Error', 'Bio cannot be empty');
    } else {
      Alert.alert('Success', 'Bio has been updated');
      // Here you can add your save logic, e.g., save bio to backend or local storage
    }
  };

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={profileImage ? { uri: profileImage } : require('../assets/logo.jpeg')} 
        style={styles.profileImage}
      />
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Text style={styles.uploadButtonText}>Upload/Update Image</Text>
      </TouchableOpacity>

      {/* Bio Input */}
      <Text style={styles.label}>Bio:</Text>
      <TextInput
        style={styles.bioInput}
        placeholder="Enter your bio"
        placeholderTextColor="#A9A9A9"
        value={bio}
        onChangeText={setBio}
        multiline
      />

      {/* Save/Update Button */}
      <TouchableOpacity style={styles.saveButton} onPress={saveBio}>
        <Text style={styles.saveButtonText}>Save/Update Bio</Text>
      </TouchableOpacity>

      {/* User Info Display */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.infoText}>moien_123</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.infoText}>moien@example.com</Text>

        <Text style={styles.label}>Password:</Text>
        <Text style={styles.infoText}>*********</Text>
      </View>
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
  profileImage: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.2,
    borderWidth: 2,
    borderColor: '#3498db',
    marginBottom: height * 0.02,
  },
  uploadButton: {
    backgroundColor: '#3498db',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.1,
    borderRadius: 10,
    marginBottom: height * 0.03,
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  bioInput: {
    width: '100%',
    height: height * 0.12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 16,
    padding: width * 0.04,
    textAlignVertical: 'top',
    marginBottom: height * 0.03,
  },
  saveButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.2,
    borderRadius: 10,
    marginBottom: height * 0.03,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: width * 0.05,
    borderRadius: 10,
    elevation: 2,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    backgroundColor: '#eee',
    padding: height * 0.015,
    borderRadius: 8,
    marginBottom: height * 0.02,
  },
});

export default ProfileScreen;
