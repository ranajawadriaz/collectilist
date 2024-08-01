import { useState } from 'react';

// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';

export default function HomeScreen() {

    //register new state here in out homescreen component

    //user input state

    //the enteredCarCollection state which is set by setEnteredCarCollection function and initial string (enteredCarCollection) is empty

    const [storedBarValue, setBarEnteredValue] = useState('');

    //list of goals state, because the list of goals is also dynamically changing data, for UI update (current changes reflect at very time)

    // in the below input car collection area, carDetails variable stores the car details like name and the setCarDetails function will set assign something to this variable, initially no cars

    const [belowListStoredValue, setValueForBelowList] = useState<string[]>([]);
    //list state






    //to fetch information as user types and also add event listener prop onChange (that takes a function and without brackets so it will not fire the function on execution but only when the user enters somthing in the input) below in input tag

    //maintain state now like the current input value in the current state so use usestate hook
    function inputTxtBar(enteredTextInBar: string) {
        //console.log(enteredText)

        setBarEnteredValue(enteredTextInBar);


    };

    function afterButtonClick() {
        //console.log(enteredCarCollection);
        //setCarDetails([...carDetails, enteredCarCollection]); //not the best way to update state if new state depends on previous state, so pass arrow function (this function will automatically receives the existing state) inside setCarDetails which will be called by react automatically to update the state

        //the currentCars (OLD cars in list) arrow function automatically receives parameter by react

        setValueForBelowList(currentValuesInList => [...belowListStoredValue, storedBarValue]);
        //appending the new goal in front of existing goals

        // to display we will use mapping of string array (or object array) into an array of ts jsx elements returned by below component, the map function receives a function and arguments as individual car stored in carDetails array


    };




    return (
        <View style={styles.appContainer}>
            <View style={styles.headerContainer}>
                <Text>Car Collection</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Enter Car Model!" onChangeText={inputTxtBar} />

                <Button title='Add Car' onPress={afterButtonClick} />

            </View>
            <View style={styles.goalsContainer}>


                <ScrollView alwaysBounceVertical={false} /* this prop is for IOS, if set true, the list (when having few elements) will bounce when scrolled */>
                    {/* <Text>List of Cars</Text> */}
                    {belowListStoredValue.map((car/* single car in the list */) =>
                        <View key={car/* unique value for the each list value */} style={styles.individualListValue}>
                            <Text style={styles.individualListValueTxt}>
                                {car/* single car in the list */}
                            </Text>
                        </View>
                    )}
                </ScrollView>
            </View>
        </View>
    );
}

//in mapping each child(item) in a list should have unique "key" prop, for efficient list updation, for now key={car} which can be same if same text is entered twice

//button don't have style prop
//handling events by event listeners functions, use states to manage state
//this is a just like react app



const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 40,//whole inside spacing of container
        paddingHorizontal: 16,
        // borderWidth:1,
        // borderColor:'red',
        flex: 1,//container stretched in main axis of the root mobile container which is column


    },

    inputContainer: {

        flexDirection: 'row',//the elements inside the container will be placed like row
        justifyContent: 'space-between',//to place spacing between elements in container
        alignItems: 'center',//default was stretch so the childs were stretching in the cross axis
        // paddingBottom:24,
        marginBottom: 24,
        paddingTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flex: 1,//container stretched in main axis of the app container(parent) which is column
    },

    textInput: {
        width: '65%',//this text input element will take 80%of the container space in which it is contained
        borderWidth: 1,
        borderColor: '#cccccc',
        margin: 8,//to place spacing between elements in container
        padding: 8,// to place spacing inside the element

    },

    headerContainer: {
        alignItems: 'center',


    },

    goalsContainer: {
        flex: 5,//container stretched in main axis of the app container(parent) which is column


    },

    individualListValue: {
        margin: 8,
        padding: 8,//inner spacing
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white',//text color, 


    },

    individualListValueTxt: {

        color: 'white',//text color, 


    }

});

//no style prop on button
//if flex direction is row, then align item (vertical) is by default stretch, so make it center
// always give the parent container the flex:1

// on IOS the output text rounded corners styling don't work, but on android it works, so for IOS, we have to enclose the text in a view and apply styling on the view

//style won't cascade, like from parent to childs

//by default view has no scrolling in mobile, also on web, scrolling turns on auomatically but on mobile it won't

//the area that's scrollable is in the end determined by the current, the container that holds the ScrollView. So what you should do here is to enclose the ScrollView inside another view and exchange styling from ScrollView to outer View

//press R in terminal to reload expo

//FLatlist vs ScrollView, some are platform (Android/IOS/WEB) restrcited, also check documentation

// Summary of Differences:
// Feature	    ScrollView	                    FlatList
// Rendering	Renders all children at once	Renders only visible items
// Performance	Not suitable for large lists	Optimized for large lists
// Use Case     Small lists, static content	    Large lists, dynamic content
// Additional Features	Simple scrolling	    Header/Footer, item separators, pull-to-refresh, scroll-to-index

//for lists flatlist, for dynamic list, renders only front displaying elements or childs
//for articles scrollview, limited amount, if large list then performance issue as scrollview renders all child elements at once