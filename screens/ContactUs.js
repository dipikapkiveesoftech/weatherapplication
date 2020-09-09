import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ContactUs extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.Cardcontainer}>
          <Button style={styles.bt1}>
            <Text style={styles.btTxt1}>+91-9510559353</Text>
            <View style={styles.iconStyle}>
              <TouchableOpacity>
                <Icon name="md-call" size={30} />
              </TouchableOpacity>
            </View>
          </Button>
          <Button style={styles.bt2}>
            <Text style={styles.btTxt2}>weather@gmail.com</Text>
            <View style={styles.iconStyle}>
              <TouchableOpacity>
                <Icon name="md-mail" size={30} />
              </TouchableOpacity>
            </View>
          </Button>
        </Card>
        <Card style={styles.infoCardContainer}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 20,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Weather
          </Text>
          <Text style={{marginLeft: 10}}>
          Get Bardoli, IN current weather report with temperature, 
          feels like, air quality, humidity, 
          UV report and pollen forecast from the weather app
          </Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Cardcontainer: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bt1: {
    backgroundColor: '#21cc2f',
    marginTop: 30,
    width: 250,
    marginLeft: 140,
    borderRadius: 10,
  },
  bt2: {
    backgroundColor: '#1091c4',
    marginTop: 20,
    width: 250,
    marginLeft: 140,
    borderRadius: 10,
  },
  btTxt1: {
    marginLeft: 15,
  },
  btTxt2: {
    marginLeft: 15,
  },
  iconStyle: {
    position: 'absolute',
    left: 200,
  },
  infoCardContainer: {
    flex: 1,
    width: '100%',
    marginTop: -5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
