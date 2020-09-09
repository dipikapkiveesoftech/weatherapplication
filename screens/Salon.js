import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Card, Button} from 'native-base';

import salon4 from '../assets/w4.jpg';
import salon5 from '../assets/w5.jpg';
import salon7 from '../assets/w7.png';
import salon8 from '../assets/w8.png';
import salon9 from '../assets/w9.jpg';

export default class Salon extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <View style={styles.conatiner}>
        <ScrollView>
          <Card>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ViewDetails')}>
              {<Image style={styles.imgCard_Popular} source={salon5} />}
              <View style={styles.cardView_Pop}>
                <Text style={styles.cardTxt_Pop}>A1 Salon</Text>
                <Text style={styles.cardtxt_pop2}>10:00 AM - 7:00 PM </Text>
                <Text style={styles.cardtxt_pop2}>Unisex</Text>
              </View>
            </TouchableOpacity>
          </Card>
          <Card>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ViewDetails')}>
              {<Image style={styles.imgCard_Popular} source={salon7} />}
              <View style={styles.cardView_Pop}>
                <Text style={styles.cardTxt_Pop}>Jawed Salon</Text>
                <Text style={styles.cardtxt_pop2}>10:00 AM - 7:00 PM </Text>
                <Text style={styles.cardtxt_pop2}>Unisex</Text>
              </View>
            </TouchableOpacity>
          </Card>
          <Card>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ViewDetails')}>
              {<Image style={styles.imgCard_Popular} source={salon8} />}
              <View style={styles.cardView_Pop}>
                <Text style={styles.cardTxt_Pop}>JS Salon</Text>
                <Text style={styles.cardtxt_pop2}>10:00 AM - 7:00 PM </Text>
                <Text style={styles.cardtxt_pop2}>Unisex</Text>
              </View>
            </TouchableOpacity>
          </Card>
          <Card>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ViewDetails')}>
              {<Image style={styles.imgCard_Popular} source={salon9} />}
              <View style={styles.cardView_Pop}>
                <Text style={styles.cardTxt_Pop}>Stylo Salon</Text>
                <Text style={styles.cardtxt_pop2}>10:00 AM - 7:00 PM </Text>
                <Text style={styles.cardtxt_pop2}>Unisex</Text>
              </View>
            </TouchableOpacity>
          </Card>
          <Card>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ViewDetails')}>
              {<Image style={styles.imgCard_Popular} source={salon4} />}
              <View style={styles.cardView_Pop}>
                <Text style={styles.cardTxt_Pop}>Beauty Salon</Text>
                <Text style={styles.cardtxt_pop2}>10:00 AM - 7:00 PM </Text>
                <Text style={styles.cardtxt_pop2}>Unisex</Text>
              </View>
            </TouchableOpacity>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  headerContainer: {
    height: 50,

    flexDirection: 'row',

    backgroundColor: '#332726',
  },

  Card_Popular: {
    width: '100%',
    height: 120,
    marginTop: 10,
    borderRadius: 12,
  },
  imgCard_Popular: {
    height: 120,
    width: 120,

    borderRadius: 10,
  },

  cardView_Pop: {
    position: 'absolute',

    left: 130,
    top: 2,
  },
  cardTxt_Pop: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'monospace',
  },
  cardtxt_pop2: {
    fontSize: 12,
    fontFamily: 'monospace',
  },
  buton_Pop: {
    marginTop: 10,
    backgroundColor: '#332726',
    borderRadius: 10,
    width: '100%',
    height: 40,
  },
  iconStyle: {
    position: 'absolute',
    left: 370,
    marginTop: 12,
  },
});
