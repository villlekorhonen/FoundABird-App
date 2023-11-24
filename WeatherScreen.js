import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import * as Location from 'expo-location';

export default function WeatherScreen({route}) {
  const [temperature, setTemperature] = useState(0);
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');
  const [location, setLocation] = useState('');
  const [showResult, setShowResult] = useState(false);
  const navigation = useNavigation();
  const [forecastTemp, setForecastTemp] = useState(0);
  const [forecastDesc, setForecastDesc] = useState('');
  const [forecastIcon, setForecastIcon] = useState('');
  


  // Hae sijainti automaattisesti näkymän fokusoidessa
  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.autoFetchLocation) {
        // Tarkista, jos olemme saaneet parametrin autoFetchLocation
        fetchWeatherByCurrentLocation();
        fetchForecastByCurrentLocation(); 
      }
    }, [route.params?.autoFetchLocation])
  );

  const fetchWeatherByCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const locationData = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = locationData.coords;
        fetchWeatherByCoordinates(latitude, longitude);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchForecastByCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const locationData = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = locationData.coords;
        fetchForecastByCoordinates(latitude, longitude);
      }
    } catch (error) {
      console.error(error);
    }
  };


  const fetchWeatherByCoordinates = (latitude, longitude) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=3be3073e83197c3ed075b10aed8056bd`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setTemperature(responseData.main.temp);
        setDescription(responseData.weather[0].description);
        setIcon(responseData.weather[0].icon);
        setLocation(responseData.name);
        console.log(responseData.name);
        setShowResult(true);
      })
      .catch((err) => console.log(err));
  };

  const inputChanged = (text) => {
    setLocation(text);
  };

  const Clicked = () => {
    fetchWeatherByLocation(location);
    
  };

  const fetchWeatherByLocation = (location) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=3be3073e83197c3ed075b10aed8056bd`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setTemperature(responseData.main.temp);
        setDescription(responseData.weather[0].description);
        setIcon(responseData.weather[0].icon);
        setShowResult(true);
      })
      .catch((err) => console.log(err));
  };
  
  const fetchForecastByCoordinates = (latitude, longitude) => {
    fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly&APPID=3be3073e83197c3ed075b10aed8056bd`
    )
      .then((response) => response.json())
      .then((responseData) => {
        console.log("ForecastData",responseData);
  
        if (responseData.daily && responseData.daily.length > 0) {
          const firstDayForecast = responseData.daily[0];
          console.log("First day forecast:", firstDayForecast);
  
          // Tarkista, että haluamasi tiedot ovat saatavilla
          setForecastTemp(firstDayForecast.temp.day);
          setForecastDesc(firstDayForecast.summary);
          setForecastIcon(firstDayForecast.weather[0].icon);
  
          console.log("Temperature:", firstDayForecast.temp.day);
          console.log("Description:", firstDayForecast.summary);
  
          setShowResult(true);
        } else {
          console.error("Ei ennustetietoja saatavilla");
        }
      })
      .catch((err) => console.log(err));
  };
  
  
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.location}>{location}</Text>
      {showResult && (
        <View>
          <Text style={styles.header2}>Today:</Text>
          <Image
            style={styles.image}
            source={{
              uri: `https://openweathermap.org/img/w/${icon}.png`,
            }}
          />
          <Text style={{...styles.result, fontFamily: 'monospace'}}>
            Temperature: {(temperature.toFixed(1))} °C
            {"\n"}
            Weather: {description}
          </Text>

          <Text style={styles.header2}>Tomorrow:</Text>
          <Image
            style={styles.image}
            source={{
              uri: `https://openweathermap.org/img/w/${forecastIcon}.png`,
            }}
          />
          <Text style={{...styles.result, fontFamily: 'monospace'}}>
            Temperature: {(forecastTemp.toFixed(1))} °C
            {"\n"}
            Summary: {forecastDesc}
            
          </Text>
          
        </View>
      )}
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={inputChanged}
      />
      <TouchableOpacity style={styles.button} title="Get Weather" onPress={Clicked}>
        <Text style={styles.text}>Show Weather</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#262626',
    color: 'white',
    marginTop: -65
  },
  button: {
    justifyContent: 'center',
    height: 50,
    width: '60%',
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor: 'beige',
    borderRadius: 40,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 40,
    color: 'black',
  },
  image: {
    width: 100,
    height: 100,
  },
  location: {
    fontSize: 35,
    color: 'white',
    marginTop: 100,
  },
  result: {
    fontSize: 20,
    color: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  header2: {
    fontSize:27,
    color: 'yellow',
  }
});
