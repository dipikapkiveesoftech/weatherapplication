import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Input, Label, Form, Item, Button} from 'native-base';

export default class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    strFullName: '',
    strPhone: '',
    strAddress: '',
    birthDate: '',
    strGender: '',
    strPassword: '',
    strEmail: '',
  };

  static navigationOption = {
    title: 'SignUp',
    header: null,
  };

  CallAPI() {
    fetch('http://freshnme.shreeduttply.com/v1/api/registration', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        FirstName: this.state.strFullName,
        PhoneNumber: this.state.strPhone,
        Password: this.state.strPassword,
        Email: this.state.strEmail,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log(JSON.stringify(this.state));

        //alert('DATA  :--' + JSON.stringify(json));
      })
      .then(() => {
        this.props.navigation.replace('Login');
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
          <Image source={require('../assets/logo.png')} />
          <Text />
        </View> */}
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              onChangeText={strFullName => this.setState({strFullName})}
            />
          </Item>
          <Item floatingLabel>
            <Label>Address</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              onChangeText={strFullName => this.setState({strFullName})}
            />
          </Item>
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
            <Label>Email</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={strEmail => this.setState({strEmail})}
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
              this.CallAPI();
            }}>
            <Text style={styles.buttonText}>SignUp</Text>
          </Button>
        </Form>
        <View style={styles.footer}>
          <Text>OR</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('LogIn');
            }}>
            <Text>Already have an account?</Text>
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
  // logoContainer: {
  //   alignItems: 'center',
  //   marginTop: 15,
  // },
  form: {
    padding: 20,
    width: '100%',
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
});
