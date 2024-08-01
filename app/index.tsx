import { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import Outputarea from "@/components/outputArea";
import Inputarea from "@/components/inputArea";

export default function HomeScreen() {
  //register new state here in out homescreen component

  //modal state

  const [modalVisibility, setModalVisibility] = useState(false);

  function modalDisplay() {
    setModalVisibility(true);
  }

  function modalClose() {
    setModalVisibility(false);
  }

  //user input state

  //the enteredCarCollection state which is set by setEnteredCarCollection function and initial string (enteredCarCollection) is empty

  // const [storedBarValue, setBarEnteredValue] = useState('');
  //moved to inputArea.tsx

  //list of goals state, because the list of goals is also dynamically changing data, for UI update (current changes reflect at very time)

  // in the below input car collection area, carDetails variable stores the car details like name and the setCarDetails function will set assign something to this variable, initially no cars

  const [belowListStoredValue, setValueForBelowList] = useState<
    { text: string; id: string }[]
  >([]);
  //belowListStoredValue is a array of strings
  //list state

  //to fetch information as user types and also add event listener prop onChange (that takes a function and without brackets so it will not fire the function on execution but only when the user enters somthing in the input) below in input tag

  //maintain state now like the current input value in the current state so use usestate hook

  // function inputTxtBar(enteredTextInBar: string) {
  //     //console.log(enteredText)

  //     setBarEnteredValue(enteredTextInBar);

  // };
  //moved to inputArea.tsx

  // the storedBarValue is coming from Inputarea.tsx through prop
  function afterButtonClick(storedBarValue: string) {
    //console.log(enteredCarCollection);
    //setCarDetails([...carDetails, enteredCarCollection]); //not the best way to update state if new state depends on previous state, so pass arrow function (this function will automatically receives the existing state) inside setCarDetails which will be called by react automatically to update the state

    //the currentCars (OLD cars in list) arrow function automatically receives parameter by react

    setValueForBelowList((currentValuesInList) => [
      ...belowListStoredValue,
      { text: storedBarValue, id: Math.random().toString() },
      // {text: storedBarValue, key: Math.random().toString()},
      //
    ]);
    //appending the new goal in front of existing goals

    // to display we will use mapping of string array (or object array) into an array of ts jsx elements returned by below component, the map function receives a function and arguments as individual car stored in carDetails array

    // setModalVisibility(false);//or below
    modalClose();
  }

  function deleteListItem(id: string) {
    // console.log('del');
    setValueForBelowList((currentValuesInList) => {
      return currentValuesInList.filter(
        (individualValue) => individualValue.id !== id
      );
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {/* {<View style={styles.headerContainer}>
          <Text>Car Collection</Text>
        </View>} */}
        {/* hi */}

        <Button
          title="Add New Item"
          
          color="#03DAC6"
          onPress={modalDisplay}
        ></Button>

        {/* {modalVisibility && <Inputarea afterButtonClickSpecialProp={afterButtonClick} />} */}
        {/* we have more better approach like using props inside modal component  */}

        <Inputarea
          afterButtonClickSpecialProp={afterButtonClick}
          modalDisplayProp={modalVisibility}
          modalRemove={modalClose}
        />

        <View style={styles.goalsContainer}>
          {/* renderitem will be passed a function that will render individual data prop items */}

          <FlatList
            data={belowListStoredValue}
            // list array: belowListStoredValue

            renderItem={(
              rendereditemOnDisplayObject /* this object wraps around individual data items */
            ) => {
              //rendereditemOnDisplayObject.index
              return (
                <Outputarea
                  text={rendereditemOnDisplayObject.item.text}
                  id={rendereditemOnDisplayObject.item.id}
                  onDelete={deleteListItem}
                />
              );

              /* we have to pass parameters as well to component, else error */
            }}
            //renderItem={({ item }) => <Outputarea rendereditemOnDisplayObject={item} />}

            alwaysBounceVertical={
              false
            } /* this prop is for IOS, if set true, the list (when having few elements) will bounce when scrolled */
            keyExtractor={(item, index) => {
              return item.id;
            }}

            /* these functions are like for each element(object or item) in the list */

            /* both the renderitem and the and the key extractor inside function will be executed when rendering display front list elements on the screen  */
          />
        </View>
      </View>
    </>
  );
}

//in mapping each child(item) in a list should have unique "key" prop, for efficient list updation, for now key={car} which can be same if same text is entered twice

//button don't have style prop
//handling events by event listeners functions, use states to manage state
//this is a just like react app


//objects inside stylesheet object
const styles = StyleSheet.create({
  appContainer: {
    //css like properties
    paddingTop: 40, //whole inside spacing of container
    paddingHorizontal: 16,
    // borderWidth:1,
    // borderColor:'red',
    flex: 1, //container stretched in main axis of the root mobile container which is column
     backgroundColor:'#121212',  //goto appjson, where color is applied to all screens, not to the modals
     
  },

  // headerContainer: {
  //   alignItems: "center",
  // },

  goalsContainer: {
    flex: 5, //container stretched in main axis of the app container(parent) which is column
  },
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

//flatlist has all scrollview props, but its more efficient

//in flatlist (2 important props) we no longer map our data manually, flatlist do it by itself efficiently
//data prop points to data that would be output of the list

//object contains items data like key value pairs, keys are important for lists so inside object description along with the item name, we also store key
//turn strings from primitive data values to object
//flatlist can handle both primitive and object data items

// () => {}  inline arrow function

// if flatlist didn't receive 'key' labelled property for an object, how will it find key, suppose the object has 'id' named property intead of 'key' (like we fetched an api and it has 'id' instead of 'key') so we add key extractor prop inside flatlist which will take function as value

// if 'key' attribute is their inside the object, no need to use the key extractor

//functional component
//export the single outputting item jsx code
