import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { useNavigation } from '@react-navigation/native';

const db = SQLite.openDatabase('birdlistdb.db');

export default function ListScreen() {

    const navigation = useNavigation();

    const [bird, setBird] = useState('');
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        db.transaction(tx => {
          tx.executeSql('create table if not exists list (id integer primary key not null, bird text, place text, date text);');
        }, null, updateList); 
      }, []);
    
      
 
    const updateList = () => {
        db.transaction(tx => {
          tx.executeSql('select * from list;', [], (_, { rows }) => {
          console.log('Select result:' ,rows._array);
            setList(rows._array);
        }); 
        });
      }
    
      
      const deleteItem = (id) => {
        Alert.alert(
          '⚠️                Alert                 ⚠️',
          'Are you sure, that you want delete this bird from your list?',
          [
            {
              text: 'NO',
              style: 'cancel',
            },
            {
              text: 'YES',
              onPress: () => {
        db.transaction(
          tx => {
            tx.executeSql(`delete from list where id = ?;`, [id]);
          }, null, updateList
        );  
      },
    },
  ],
  {cancelable: false} 
  );
};


    


    return (
        <View style={styles.container}>
          <Image style={styles.imageheader} source={require('./images/MyBirdsHeader.png' )}
        />
            <FlatList
                style={{ marginLeft: 0 }}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>  <View style={{ ...styles.listcontainer, borderBottomWidth: 1, borderBottomColor: 'gray' }}><Text style={styles.text}>{item.bird}, {item.place}, {item.date}</Text>
                    <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <Image style={{ width: 30, height: 35, marginTop: 6, marginLeft: 15 }} source={require('./Icons/delete.png')} />
            </TouchableOpacity>
                    </View>}
                data={list}   
                
 
            /> 
        </View>  

    );
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#262626',
    },
    imageheader: {
      width: '80%',
      height:'25%',
      marginBottom: -40,
      marginTop: -30,

  },
    listcontainer: {
     flexDirection: 'row',
     backgroundColor: '#262626',
     alignItems: 'center',
     
    },
     text: {
       fontSize: 16,
       fontWeight: 'bold',
       textAlign:'center',
       color: 'white',
     }, 
     
   
     
   });