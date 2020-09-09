import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/Ionicons';

//Images

import background from '../assets/backgroudCard.jpg';

import salon4 from '../assets/w4.jpg';
import salon5 from '../assets/w5.jpg';
import salon7 from '../assets/w7.png';
import salon8 from '../assets/w8.png';
import salon9 from '../assets/w9.jpg';

import Drawer from 'react-native-drawer';
import {Card} from 'native-base';

//Screen

const menu = [
  {title: 'HOME'},
  {title: 'SHOWWEATHER'},
  {title: 'Showdata'},
  {title: 'CONTACT US'},
  //{title: 'LOG OUT'},
];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/w1.jpg'),
        require('../assets/w5.jpg'),
        require('../assets/w3.jpg'),
        require('../assets/w4.jpg'),
      ],
    };
  }

  renderDrawer() {
    //SlideMenu

    return (
      <View style={styles.menuContainer}>
        <View style={styles.Register_Icon}>
          <Text style={styles.Reg_txt}>WELCOME</Text>
          <View style={styles.iconStyle}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LogIn')}>
              <Icon name="md-ellipsis-horizontal-circle-sharp" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          style={{flex: 1}}
          data={menu}
          extraData={this.state}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.menuTitleContainer}
                onPress={() => this.props.navigation.navigate(item.title)}>
                <Text style={styles.menuTitle} key={index}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }

  openDrawer() {
     this.drawer.open();
    //this.drawer.toggleDrwer();
  }

  closeDrawer() {
    this.drawer.close();
  }
  toggleDrwer(){}
  render() {
    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.mainContainer}>
          <Drawer
            ref={ref => (this.drawer = ref)}
            content={this.renderDrawer()}
            type="overlay"
            tapToClose={true}
            openDrawerOffset={0.35}
            styles={drawerStyles}>
            {/* //Main View */}

            <View style={styles.headerContainer}>
              <View style={styles.menuButton}>
                <TouchableOpacity onPress={this.openDrawer.bind(this)}>
                  <Icon name="md-menu" size={30} color="white" />
                </TouchableOpacity>
              </View>
              <View style={styles.iconStyle2}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Search')}>
                  <Icon name="md-search" size={30} color="white" />
                </TouchableOpacity>
              </View>
              <View style={styles.title}>
                <Text
                  style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                  Weather
                </Text>
              </View>
            </View>
            <View style={styles.maincardContainer}>
              <SliderBox images={this.state.images} />
            </View>
            <View style={styles.cardContainer}>
              <ScrollView horizontal={true}>
                <Card style={styles.cardBox}>
                  <ImageBackground
                    source={background}
                    style={styles.backgroundImage}>
                    <Text style={styles.CardTxt}>Monsoon</Text>
                  </ImageBackground>
                </Card>
                <Card style={styles.cardBox}>
                  <ImageBackground
                    source={background}
                    style={styles.backgroundImage}>
                    <Text style={styles.CardTxt}>Spring</Text>
                  </ImageBackground>
                </Card>
                <Card style={styles.cardBox}>
                  <ImageBackground
                    source={background}
                    style={styles.backgroundImage}>
                    <Text style={styles.CardTxt}>Winter</Text>
                  </ImageBackground>
                </Card>
                <Card style={styles.cardBox}>
                  <ImageBackground
                    source={background}
                    style={styles.backgroundImage}>
                    <Text style={styles.CardTxt}>Autumn</Text>
                  </ImageBackground>
                </Card>
                <Card style={styles.cardBox}>
                  <ImageBackground
                    source={background}
                    style={styles.backgroundImage}>
                    <Text style={styles.CardTxt}>Summer</Text>
                  </ImageBackground>
                </Card>
              </ScrollView>
            </View>

            <View>
              <Text
                style={{
                  fontFamily: 'monospace',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                Popular Citys
              </Text>
            </View>
            <View style={styles.mainContainer}>
              <ScrollView>
                <Card>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('ViewDetails')
                    }>
                    {<Image style={styles.imgCard_Popular} source={salon5} />}
                    <View style={styles.cardView_Pop}>
                      <Text style={styles.cardTxt_Pop}>NewYork</Text>
                      <Text style={styles.cardtxt_pop2}>
                        10:00 AM - 7:00 PM
                      </Text>
                      <Text style={styles.cardtxt_pop2}>aseemv</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
                <Card>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('ViewDetails')
                    }>
                    {<Image style={styles.imgCard_Popular} source={salon7} />}
                    <View style={styles.cardView_Pop}>
                      <Text style={styles.cardTxt_Pop}>Uk</Text>
                      <Text style={styles.cardtxt_pop2}>
                        10:00 AM - 7:00 PM
                      </Text>
                      <Text style={styles.cardtxt_pop2}>Onttario</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
                <Card>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('ViewDetails')
                    }>
                    {<Image style={styles.imgCard_Popular} source={salon8} />}
                    <View style={styles.cardView_Pop}>
                      <Text style={styles.cardTxt_Pop}>US</Text>
                      <Text style={styles.cardtxt_pop2}>
                        10:00 AM - 7:00 PM
                      </Text>
                      <Text style={styles.cardtxt_pop2}>Panama</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
                <Card>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('ViewDetails')
                    }>
                    {<Image style={styles.imgCard_Popular} source={salon9} />}
                    <View style={styles.cardView_Pop}>
                      <Text style={styles.cardTxt_Pop}>India</Text>
                      <Text style={styles.cardtxt_pop2}>
                        10:00 AM - 7:00 PM
                      </Text>
                      <Text style={styles.cardtxt_pop2}>Delhi</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
                <Card>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('ViewDetails')
                    }>
                    {<Image style={styles.imgCard_Popular} source={salon4} />}
                    <View style={styles.cardView_Pop}>
                      <Text style={styles.cardTxt_Pop}>Africa</Text>
                      <Text style={styles.cardtxt_pop2}>
                        10:00 AM - 7:00 PM
                      </Text>
                      <Text style={styles.cardtxt_pop2}>Amstradram</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
              </ScrollView>
            </View>
          </Drawer>
        </View>
      </SafeAreaView>
    );
  }
}

const drawerStyles = {
  drawer: {
    flex: 1.0,

    backgroundColor: '#5c4f4e',
  },

  main: {
    flex: 1.0,

    backgroundColor: 'white',
  },
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1.0,

    backgroundColor: 'white',
  },

  safeAreaStyle: {
    flex: 1.0,

    backgroundColor: '#332726',
  },

  headerContainer: {
    height: 50,

    flexDirection: 'row',

    backgroundColor: '#332726',
  },

  headerTitle: {
    flex: 1.0,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
  },

  menuButton: {
    marginLeft: 8,

    marginRight: 8,

    alignSelf: 'center',

    tintColor: 'white',
  },

  menuContainer: {
    flex: 1.0,

    backgroundColor: '#453b3b',
  },

  menuTitleContainer: {
    alignItems: 'center',
    height: 60,
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    marginLeft: 20,
    flexDirection: 'row',
  },

  menuTitle: {
    width: '100%',

    color: 'white',

    fontSize: 17,

    alignSelf: 'center',
  },
  maincardContainer: {
    marginTop: 10,

    marginBottom: 10,
  },
  cardBox: {
    height: 100,
    width: 100,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
  },
  CardTxt: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  backgroundImage: {
    width: '100%',
    height: 100,
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
  detailTxt: {
    justifyContent: 'center',
    fontFamily: 'monospace',
    fontSize: 14,
    color: 'white',
    marginLeft: 15,
  },
  Reg_txt: {
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 13,
    marginLeft: 20,
  },
  Reg_bt: {
    borderRadius: 10,
    backgroundColor: '#332726',
  },
  Register_Icon: {
    height: 50,
    backgroundColor: '#332726',
  },
  iconStyle: {
    position: 'absolute',
    right: 20,
    bottom: 4,
  },
  iconStyle2: {
    position: 'absolute',
    left:350,
    marginTop: 12,
  },
  title: {
    justifyContent: 'center',
    marginLeft: 135,
  },
});
