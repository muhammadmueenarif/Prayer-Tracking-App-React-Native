first of all install and setup react native project.
you can use expogo app or without expo go. it is easy with expogo but it not fully customized so it gives 
some functions for learning while if you don't use expo go you can make each and everything custom. 
you should have android studio and sdk and ndk tools installed in android studio. then you can use commands 
to run project for first time. 
app.tsx is main file. you can use tailwind but you need to install it externally and then use.. 
tests folder used for writing test cases of app.

npx react-native run-android
npx react-native start (run both each time when disconnect and connect mobile again)

view tag is like div tag of html. and text tag is like headings and p tags. we can pass props similar as in react. 
useState to manage state. 
      <Button title="Increase" onPress={() => setCount(count + 1)} />

inline styling: <Text style={{ color: 'blue', fontSize: 20 }}>Hello!</Text>
using stylesheet. 
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    color: 'blue',
    fontSize: 20,
  },
});

<Text style={styles.textStyle}>Hello!</Text>;

<Button title="Press Me" onPress={() => alert('Button Pressed!')} />

useEffect. import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const Example = () => {
  useEffect(() => {
    console.log('Component Loaded!');
  }, []);

  return (
    <View>
      <Text>Check the console!</Text>
    </View>
  );
};

export default Example;

Runs once when the component mounts.
Perfect for API calls or fetching data..


we will use navigation container in app.tsx to navigate between screens.

TouchableOpacity
TouchableOpacity is a component used to wrap around other components to make them clickable/tappable. It reduces 
the opacity of the wrapped component when touched, creating a "pressed" effect.
It's commonly used to handle user interactions like button clicks.

ScrollView is a container that allows its child components to be scrollable if they exceed the screen's visible area. It's useful for lists, large amounts of content, or when the screen can't hold everything at once.
ScrollView can be vertical or horizontal.

SafeAreaView is a special React Native component that prevents content from being hidden behind notches, status bars, and curved screen edges.

Navigation.navigate to navigate, Alert.alert to show alert.

