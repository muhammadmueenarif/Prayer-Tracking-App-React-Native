import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

// Get screen dimensions for responsiveness
const { width, height } = Dimensions.get('window');

const SignUpScreen = ({ navigation }: any) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image 
        source={require('../assets/logo.jpeg')}
        style={styles.logo}
      />

      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#A9A9A9"
      />
      
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.showHideText}>
          <Text style={styles.showHideTextLabel}>
            {passwordVisible ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    backgroundColor: '#f7f7f7',
  },
  logo: {
    width: width * 0.4,  // Adjust width as needed
    height: height * 0.1,  // Adjust height as needed
    marginBottom: height * 0.05,  // Space between logo and title
    resizeMode: 'contain',  // Ensures the image scales properly
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: height * 0.05,
  },
  input: {
    width: '100%',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 16,
    marginBottom: height * 0.02,
    elevation: 2,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: height * 0.02,
    position: 'relative',
  },
  passwordInput: {
    flex: 1,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 16,
    elevation: 2,
  },
  showHideText: {
    position: 'absolute',
    right: width * 0.05,
    paddingVertical: height * 0.015,
  },
  showHideTextLabel: {
    color: '#3498db', 
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    marginTop: height * 0.03,
    backgroundColor: '#3498db',
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
  linkText: {
    marginTop: height * 0.02,
    color: '#3498db',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
