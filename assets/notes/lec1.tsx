// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.dummyText}>Another piece of text!</Text>
                {/* {{ margin: 16,border:'1px solid red' ,borderWidth: 2, borderColor: 'red', padding: 16element internal spacing }} */}

            </View>
            <Text style={styles.dummyText}>Hello World!!!!</Text>
            {/* {{ margin: 16,border:'1px solid red' ,borderWidth: 2, borderColor: 'red', padding: 16element internal spacing }} */}
            <Button title='Tap me!' />
            {/* <StatusBar style="auto" /> */}
        </View>
    );
}

// const styles2={

// };not to be used, as stylesheet object provides auto completion

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dummyText: {
        margin: 16,
        borderWidth: 2,
        borderColor: 'red',
        padding: 16,

    }
});