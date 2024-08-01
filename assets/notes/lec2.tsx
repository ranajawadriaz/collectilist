// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View, Button } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.headerContainer}>
                <Text>Car Collection</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Enter Car Model!" />
                <Button title='Add Car' />
            </View>
            <View>
                <Text>List of Cars</Text>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    appContainer: {
        padding: 50,//whole inside spacing of container
    },

    inputContainer: {
        
        flexDirection:'row',//the elements inside the container will be placed like row
        justifyContent:'space-between',//to place spacing between elements in container
    },

    textInput: {
        width:'80%',//this text input element will take 80%of the container space in which it is contained
        borderWidth:1,
        borderColor:'#cccccc',
        margin:8,//to place spacing between elements in container
        padding: 8,// to place spacing inside the element

    },

    headerContainer:{
        alignItems:'center',
        

    }
    
});