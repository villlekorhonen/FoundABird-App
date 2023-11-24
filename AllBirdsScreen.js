import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, FlatList, Image } from 'react-native';




export default function AllBirdsScreen() {
  const [birds, setBirds] = useState([]);
  const apiKey = 'a0oj2mqVoHYJhHb4xNZvDHddqa1TDzTbh5GpEH9tDZPPrGc6SVTGhNZwBmLqG9Ir';

  useEffect(() => {
    
    getBirds();
  }, []);

  const getBirds = () => {
    console.log('Haetaan lintutiedot...');
    fetch(`https://api.laji.fi/v0/taxa/MX.37580/species?lang=fi&langFallback=true&includeHidden=false&includeMedia=true&includeDescriptions=false&includeRedListEvaluations=false&onlyFinnish=true&sortOrder=taxonomic&pageSize=1000&access_token=${apiKey}`)
    
      .then((response) => response.json())
      .then((data) => {
        setBirds(data.results);
        console.log(data);
      })
      .catch((error) => {
        console.log('Fetch error:', error); 
        Alert.alert('Error', 'Fetch error. See console for details.');
      });
      
      
        
      
      
  }

  return (
    <View style={styles.container}>
      <Image style={styles.imageheader} source={require('./images/AllBirds.png' )}
        />
      <FlatList
        style={styles.list}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          return (
            <View style={{ ...styles.item, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
           {item.hasMultimedia && <Image source={{ uri: item.multimedia[0].thumbnailURL}} style={styles.thumbnail} />
        }
              <Text style={styles.birdName}>{item.vernacularName}</Text>
              <Text style={{...styles.scientificName, fontFamily:'monospace'}}>{item.scientificName}</Text>
              <Text style={{...styles.scientificName, fontFamily:'monospace'}}>Occurance Count:{item.occurrenceCount}</Text>
            </View>
          );
        }}
        
            data={birds}
            />
          
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626'
  },
  imageheader: {
    width: '100%',
    height:'30%',
    marginBottom: -40,
    marginTop: -50,

},
  item: {
    marginBottom: 10,
  },
  thumbnail: {
    width: 210,
    height: 200,
    borderRadius: 10
    
    
  },
  birdName: {
    fontSize: 16,
    fontWeight: '800',
    color: 'white'
  },
  scientificName: {
    fontSize: 13,
    color: 'gray',
  },
  list: {
    fontSize: 10,
    textAlign: 'center',
  }
});
