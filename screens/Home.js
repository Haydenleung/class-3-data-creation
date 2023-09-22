import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Button } from '@rneui/themed';

export default function Home({ navigation }) {
    const check = () => {
        navigation.push('Search')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Click Any Buttons</Text>
            <View style={styles.buttonContainer}>
                <Button size="lg" buttonStyle={styles.btn} titleStyle={styles.btnText} onPress={() => check()}>Go to Search Page</Button>
                <Button size="lg" buttonStyle={styles.btn} titleStyle={styles.btnText} onPress={() => check()}>Same Function</Button>
                <Button size="lg" buttonStyle={styles.btn} titleStyle={styles.btnText} onPress={() => check()}>Try It</Button>
            </View>
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    headingText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20
    },
    buttonContainer: {
        display: 'flex',
        gap: 20
    },
    btn: {
        backgroundColor: 'white',
        width: 300
    },
    btnText: {
        color: 'black',
        fontWeight: 800
    }
});
