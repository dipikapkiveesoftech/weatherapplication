import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from 'react-native';
//import user from '../assets/user.png';

import {Form, Input, Label, Button, Item} from 'native-base';
import FontAwesome from 'react-native-fontawesome';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    strFullName: '',
    strPhone: '',
    strPassword: '',
  };

  static navigationOption = {
    title: 'Login',
    header: null,
  };

  CallAPI() {
    fetch('http://freshnme.shreeduttply.com/v1/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        PhoneNumber: this.state.strPhone,
        Password: this.state.strPassword,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log(JSON.stringify(this.state));

        //alert('DATA  :--' + JSON.stringify(json));
      })

      .catch(err => alert(err));
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="position"
        enabled>
        {/* <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')}></Image>
        </View> */}
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Phone</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="phone-pad"
              onChangeText={strPhone => this.setState({strPhone})}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              onChangeText={strPassword => this.setState({strPassword})}
            />
          </Item>
          <Button
            style={styles.button}
            full
            rounded
            onPress={() => {
              this.props.navigation.navigate('Profile');
            }}>
            <Text style={styles.buttonText}>LogIn</Text>
          </Button>
        </Form>
        <View style={styles.footer}>
          <Text>OR</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('SignUp');
            }}>
            <Text>Create a new account?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  form: {
    padding: 20,
    width: '100%',
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#332726',
  },
  buttonText: {
    color: '#fff',
  },
  footer: {
    alignItems: 'center',
  },
  empty: {
    height: 20,
  },
});
