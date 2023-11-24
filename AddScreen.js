import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Keyboard, Alert,  Image, } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { Input, Button } from '@rneui/themed';




const db = SQLite.openDatabase('birdlistdb.db');

export default function App() {

    const [bird, setBird] = useState('');
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');
    const [list, setList] = useState([]);





    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql('create table if not exists list (id integer primary key not null, bird text, place text, date text);');
        }, null, updateList);
    }, []);


    const saveBird = () => {
        console.log('Save bird:', bird, place, date);
        db.transaction(tx => {
            tx.executeSql('insert into list (bird, place, date) values (?, ?, ?);', [bird, place, date], (_, result) => {
                console.log('insert result:', result);
                Keyboard.dismiss();
                Alert.alert("Observation added succesfully in to My Birds-list")
            });
        }, null, updateList);

    }


    const updateList = () => {
        db.transaction(tx => {
            tx.executeSql('select * from list;', [], (_, { rows }) => {
                console.log('Select result:', rows._array);
                setList(rows._array);
            });
        });
    }






    return (
        <View style={styles.container}>

            <Image style={styles.image} source={require('./images/observe_owl.png')}
            />
            
            <Input placeholder=
                'Bird' label=
                'BIRD'
                onChangeText={(bird) => setBird(bird)} value={bird} inputStyle={styles.input}
                labelStyle={styles.label}/>

            <Input placeholder=
                'Place' label=
                'PLACE'
                onChangeText={(place) => setPlace(place)} value={place} inputStyle={styles.input}
                labelStyle={styles.label} />

            <Input placeholder=
                'Date' 
                keyboardType=
                'numeric'
                label=
                'DATE'
                onChangeText={(date) => setDate(date)} value={date} inputStyle={styles.input}
                labelStyle={styles.label}/>

            <Button raised icon={{ name: 'save', color:'white' }} onPress={saveBird} title=
                "SAVE" 
                buttonStyle={styles.saveButton}
                
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
    image: {
        marginTop: 0,
        width: '60%',
        height: '35%',
        marginBottom: 0,
        marginTop: -30
    },
    input: {
        color: 'white', 
    },
    label: {
        color: 'white', 
    },
    saveButton: {
        backgroundColor: 'grey',
        width: 250,
        height: 50
    },
    
      

});