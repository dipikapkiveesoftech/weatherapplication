import React from 'react';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	ImageBackground,
	StatusBar,
	Image
} from 'react-native';
import SingleCardView from 'react-native-simple-card';

import getImageForWeather from '../utils/getImagesForWeather';
import { fetchLocationId, fetchWeather, fetchWeathericon } from '../utils/api';

import SearchInput from '../component/SearchInput';
import WeatherText from '../component/WeatherText';

export default class Showweather extends React.Component {
	state = {
		loading: false,
		error: false,
		location: '',
		temperature: 0,
		humidity: 0,
		weather: '',
		minTemp: 0,
		maxTemp: 0,
		windSpeed: 0,
		weathericon:''
	};

	componentDidMount() {
		this.handleUpdateLocation('San Francisco');
	}

	handleUpdateLocation = async city => {
		if (!city) return;

		this.setState({ loading: true }, async () => {
			try {
				const locationId = await fetchLocationId(city);
				const {
					location,
					weather,
					temperature,
					humidity,
					minTemp,
					maxTemp,
					windSpeed
				} = await fetchWeather(locationId);

				//const iconId = await fetchWeathericon(city);
				const {
					weathericon
				} = await fetchWeathericon(city);

				this.setState({
					loading: false,
					error: false,
					location,
					weather,
					temperature,
					humidity,
					minTemp,
					maxTemp,
					windSpeed,
					weathericon
				});
			} catch (e) {
				this.setState({
					loading: false,
					error: true
				});
			}
		});
	};

	render() {
		const {
			location,
			error,
			loading,
			weather,
			temperature,
			humidity,
			minTemp,
			maxTemp,
			windSpeed,
			weathericon
		} = this.state;
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<StatusBar barStyle="light-content" />
				<ImageBackground
					source={getImageForWeather(weather)}
					style={styles.imageContainer}
					imageStyle={styles.image}
				>
					<SearchInput
						placeholder="Select a City"
						onSubmit={this.handleUpdateLocation}
					/>
					<View style={styles.cards}>
						<SingleCardView backgroundColor="#DFDCDC">
							<WeatherText
								location={location}
								loading={loading}
								weather={weather}
								temperature={temperature}
								humidity={humidity}
								error={error}
								minTemp={minTemp}
								maxTemp={maxTemp}
								windSpeed={windSpeed}
								weathericon={weathericon}
							/>
							
						</SingleCardView>
					</View>
				</ImageBackground>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	imageContainer: {
		flex: 1
	},
	image: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover'
	},
	cards: {
		flex: 2
	}
});



/*import React, { useState } from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity,Option,PixelRatio, Switch,
  Image, StatusBar,KeyboardAvoidingView,ImageBackground} from 'react-native';
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import { Card, Divider } from 'react-native-elements';
const image = { uri: "https://wallpaper-house.com/data/out/12/wallpaper2you_542340.jpg" };

export default class Showweather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          loading: true,
            cca2: 'US',
            latitude: 0,
            longitude: 0,
            forecast: [],
            error:'',
            city:"",
            temp:"",
            visibility:"",
            cname:"",
            dataSource:[],
            icon:''
          };

         
  }
  
  
  
  cityapi = async() => {
      
    fetch('https://restcountries.eu/rest/v2/name/'+this.state.cname, {
         method: 'GET',
         headers: {//Header Defination 
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
      })
      .then((response) => response.json())
      .then((responseJson) => {
         this.state.dataSource=responseJson[0];
        this.state.city=  this.state.dataSource.capital;
         this.setState({
            city: this.state.dataSource.capital
         })
      })
      .catch(error=>console.log(error)) //to catch the errors if any
    }
    
    getWeather = async() =>{
      
       let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&appid=f77559a0db1ec3b427bec674abc8855e&units=metric';
        fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            temp: JSON.stringify(data.main.temp),
            visibility:data.visibility,
            icon: data.weather[0].icon
         })
        })
    }
    componentDidMount() {
      this.cityapi();
      this.getWeather();
    }
	render() {
		return (
        
         <ImageBackground source={image} style={styles.weatherContainer}>
   
                  <CountryPicker
                      onSelect={(value)=> this.setState({country: value})}
                      cca2={this.state.cca2}
                      translation='eng'
                      withFlag='true'
                      withAlphaFilter='true'
                      placeholder="Select Country"
                      />
                {this.state.country &&
                <Text style={styles.data}>
                    {this.state.cname=this.state.country.name}
                </Text>
                }
                <Text style={styles.instructions}
                onPress={() => {
                  this.cityapi();
                }}> 
                capital of country
                
                    <Text style={styles.data}>
                        {this.state.city}
                    </Text>
                </Text>
                <Text style={styles.instructions}
                onPress={() => {
                  this.getWeather();
                }}>
                  weatherDetails:------
                </Text>
                
                    <Text style={styles.tempText}>Temperature˚</Text>
                     <Text>{this.state.temp} </Text>
                  <View style={styles.bodyContainer}>
                  <Card containerStyle={styles.card}>
               
                        <Text>
                        Temperature:----
                            {this.state.temp} 
                        </Text>
                        
                        <Text>
                        Visibility:----
                        {this.state.visibility}
                        </Text>
                        
                    </Card>
                    <Text style={styles.title}>So Sunny</Text>
                    <Text style={styles.subtitle}>It hurts my eyes! {this.state.icon}</Text>
                    
                    <Image
                      source={{
                        uri: 'http://openweathermap.org/img/wn/'+ this.state.icon+'@2x.png',
                        method: 'POST',
                        headers: {
                          Pragma: 'no-cache'
                        },
                        body: 'Your Body goes here'
                      }}
                      style={{ width: 40, height: 40 }}
                    />
                </View>
                </ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    card:{
        backgroundColor:'#ffff',
        borderWidth:0,
        borderRadius:20
    },
    instructions: {
      fontSize: 13,
     // textAlign: 'center',
      color: '#808000',
      marginBottom: 2,
    },
    data: {
      padding: 10,
      marginTop: 5,
      backgroundColor: '#ddd',
      borderColor: '#808000',
      borderWidth: 1 / PixelRatio.get(),
      color: '#777'
    },
    weatherContainer: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    headerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    tempText: {
      fontSize: 48,
      color: '#A52A2A'
    },
    bodyContainer: {
      flex: 2,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingLeft: 25,
      marginBottom: 40
    },
    title: {
      fontSize: 48,
      color: '#fff'
    },
    subtitle: {
      fontSize: 24,
      color: '#fff'
    },
    iconimg : {
        flex:1,
        fontSize:12,
        width: 50,
        height: 50,
    }
  });*/
