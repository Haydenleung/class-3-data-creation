import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { useState } from 'react';

export default function Search({ navigation }) {
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>404! Go back!</Text>
            <View style={styles.searchContainer}>
                <SearchBar
                    containerStyle={styles.searchBar}
                    placeholder="It is not functionable!!!"
                    onChangeText={updateSearch}
                    value={search}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
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
    searchContainer: {
        margin: 10
    },
    searchBar: {
        width: 300
    }
});
