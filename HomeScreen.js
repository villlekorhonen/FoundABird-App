import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,  View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

    const navigation = useNavigation();

    const AddButtonPress = () => {
        navigation.navigate('NewBird');
    };

    const ListButtonPress = () => {
        navigation.navigate('List');
    };

    const MapButtonPress = () => {
        navigation.navigate('Map');
    };

    const WeatherButtonPress = () => {
        navigation.navigate('Weather', { autoFetchLocation: true});
    };

    const AllBirdsButtonPress = () => {
        navigation.navigate('Database');
    }


return (
    <View style={styles.container}>
        <Image style={styles.imageheader} source={require('./images/header.png' )}
        />

<Image style={styles.image} source={require('./images/home_owl.png' )}
            />
<View style={styles.buttonRow}>
<TouchableOpacity
                style={styles.buttonTouchable1}
                onPress={AddButtonPress}
            >
                <Text style={styles.buttonText1}>Save sighting</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.buttonTouchable2}
                onPress={ListButtonPress}
            >
                <Text style={styles.buttonText2}>My Birds</Text>
            </TouchableOpacity>
        </View>
        
        <TouchableOpacity
                style={styles.buttonTouchableMid}
                onPress={AllBirdsButtonPress}
            >
                <Text style={styles.buttonTextMid}>All Birds of FINLAND</Text>
            </TouchableOpacity>
        <View style={styles.buttonRow}>
            
            <TouchableOpacity
                style={styles.buttonTouchable3}
                onPress={MapButtonPress}
            >
                <Text style={styles.buttonText3}>Map</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonTouchable4}
                onPress={WeatherButtonPress}
            >
                <Text style={styles.buttonText4}>Weather</Text>
            </TouchableOpacity>
        </View>

    </View>

);
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#262626',
    },
    imageheader: {
        width: '100%',
        height:'35%',
        marginBottom: -200,
        marginTop: -10
    },
    image: {
        marginTop: 10,
        width: '70%',
        height: '65%',
        borderRadius: 7,
        marginBottom: -128

    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0,
    },
    buttonTouchable1: {
        backgroundColor: '#FFFAF9',
        padding: 30,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 100,
        marginBottom: 0,
        borderBottomColor: '#004242',
        borderRightColor: '#004242',
        borderTopColor: '#FFFAF9',
        borderLeftColor: '#FFFAF9',
        borderWidth: 0.1,
        width: '40%',
        height: 110,
    },
    buttonText1: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        marginLeft: 10,
        marginTop: 6,

    },
    buttonTouchable2: {
        backgroundColor: '#FFFAF9',
        padding: 30,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 100,
        marginBottom: 0,
        borderBottomColor: '#004242',
        borderRightColor: '#FFFAF9',
        borderTopColor: '#FFFAF9',
        borderLeftColor: '#004242',
        borderWidth: 0.1,
        width: '40%',
        height: 110,
    
    },
    buttonText2: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        marginRight: 15,
        marginTop: 16

    },
    buttonTouchableMid: {
        backgroundColor: '#FFFAF9',
        padding: 30,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        marginBottom: 0,
        borderBottomColor: '#FFFAF9',
        borderRightColor: '#004242',
        borderTopColor: '#004242',
        borderLeftColor: '#FFFAF9',
        borderWidth: 0.1,
        width: '80%',
        height: 80,
    },
    buttonTextMid: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        marginLeft: 10,
        marginTop: 0,

    },
    buttonTouchable3: {
        backgroundColor: '#FFFAF9',
        padding: 30,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 100,
        marginBottom: 0,
        borderBottomColor: '#FFFAF9',
        borderRightColor: '#004242',
        borderTopColor: '#004242',
        borderLeftColor: '#FFFAF9',
        borderWidth: 0.1,
        width: '40%',
        height: 120,
    },
    buttonText3: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        marginLeft: 10,
        marginTop: 10,

    },
    buttonTouchable4: {
        backgroundColor: '#FFFAF9',
        padding: 30,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 0,
        marginBottom: 0,
        borderBottomColor: '#FFFAF9',
        borderRightColor: '#FFFAF9',
        borderTopColor: '#004242',
        borderLeftColor: '#004242',
        borderWidth: 0.1,
        width: '40%',
        height: 120,
        
    },
    buttonText4: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        marginRight: 15,
        marginTop: 10,

    },
});