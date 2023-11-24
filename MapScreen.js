import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, View, Text, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapScreen() {
  
  
  const [location, setLocation] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('No permission to get location');
          return;
        }

        let { coords } = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
        setLocation(coords);
        console.log('Location:', coords);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchData();
  }, []);

  

  const initialRegion = {
    latitude: location ? location.latitude : 0,
    longitude: location ? location.longitude : 0,
    latitudeDelta: 0.0322,
    longitudeDelta: 0.0221
  };

 

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={initialRegion}
        showsUserLocation={true}
        loadingEnabled={false}
        
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title='Your location'
          />
        )}
       
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
});

