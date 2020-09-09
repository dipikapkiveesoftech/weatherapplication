import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React,{ Component ,useEffect } from 'react';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from 'react-native-splash-screen'
import Salon from './screens/Salon';
import ViewDetails from './screens/ViewDetails';
import ContactUs from './screens/ContactUs';
import Search from './screens/Search';
import Showweather from './screens/Showweather';
import Profile from './screens/Profile';
import Showdata from './screens/Showdata';


const Stack = createStackNavigator();

function LogoTitle() {
  return <HomeScreen />;
}


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          title: 'WELCOME',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="LogIn"
        component={LoginScreen}
        options={{
          title: 'LogIn',
          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
          name="Showdata"
          component={Showdata}
          options={{
            title: 'Showdata',
            headerStyle: {
              backgroundColor: '#332726',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          title: 'SignUp',

          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      

      <Stack.Screen
        name="SHOWWEATHER"
        component={Showweather}
        options={{
          title: 'Enter Details',
          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name="PROFILE"
        component={Profile}
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name="SALON"
        component={Salon}
        options={{
          title: 'Salon',

          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="ViewDetails"
        component={ViewDetails}
        options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="CONTACT US"
        component={ContactUs}
        options={{
          title: 'Contact Us',
          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Weather',
          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
 
  static navigationOption = {
    title: 'App',
    header: null,
  };
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}



/*import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

 

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#4F6D7A"
        />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});*/
