import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
const { width, height } = Dimensions.get('window');
import HomeScreen from './HomeScreen';
interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    // view is like div
    // it used js objects type to style instead of css. if you want to use tailwind, need install externally
    <View style={styles.container}>
      {/* Logo Image */}
      <Image source={require('../assets/logo.jpeg')} style={styles.logo} />

      {/* text tag is like heading and p tags in html */}
      <Text style={styles.title}>Login</Text>

      {/* move to Homescreen when click on Home screen button */}
      <TouchableOpacity
        style={styles.homeBtn}
        onPress={() => navigation.navigate('HomeScreen')}
      ><Text style={styles.buttonText}>Home</Text></TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="#A9A9A9"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.showHideButton}
        >
          <Text style={styles.showHideText}>{passwordVisible ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
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
    width: width * 0.4,
    height: height * 0.1,
    marginBottom: height * 0.05,
    resizeMode: 'contain',
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
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
    paddingRight: 10, // Added padding to avoid overlap
  },
  passwordInput: {
    flex: 1,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
    fontSize: 16,
    color: '#000',
  },
  showHideButton: {
    position: 'absolute',
    right: 10,
  },
  showHideText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '500',
  },
  homeBtn: {
    marginTop: height * 0.03,
    marginBottom: 8,
    backgroundColor: '#3498db',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    elevation: 3,
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

export default LoginScreen;
