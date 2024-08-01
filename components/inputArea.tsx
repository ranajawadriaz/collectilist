import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

// interface InputareaProps {
//   afterButtonClickSpecialProp: (value: string) => void;
// }
//for type casting, for props function passing

export default function Inputarea(props: {
  afterButtonClickSpecialProp: (value: string) => void;
  modalDisplayProp: boolean;
  modalRemove: () => void;
}) {
  //the parameters are type casted, don't be afraid

  const [storedBarValue, setBarEnteredValue] = useState("");

  function inputTxtBar(enteredTextInBar: string) {
    //console.log(enteredText)

    setBarEnteredValue(enteredTextInBar);
  }

  //after clicking the button, this function will pass the stored bar value to afterButtonClickSpecialProp prop, now go to main file (index.tsx) and see this component passed prop where the stored bar value would be received and passed to afterbuttonclick function. the afterbuttonclick will do the rest as intended.
  //also  this function clears the current storedbarvalue (not the text area, the text area is to be updated manually using value prop)
  function afterButtonClick() {
    props.afterButtonClickSpecialProp(storedBarValue);

    setBarEnteredValue("");
  }

  return (
    <Modal visible={props.modalDisplayProp} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("@/assets/images/list.jpg")}
          style={styles.image}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Enter List Item!"
          onChangeText={inputTxtBar}
          value={storedBarValue}
        />

        <View style={styles.buttonContainer}>
          {/* for styling each button since a button cannot be styled, we wrap each button inside View and style that view, only for width height or things like that but not the text color that would be done using own button called pressable  */}

          <View style={styles.buttonView}>
            <Button
              title="Cancel"
              onPress={props.modalRemove}
              color="#f31282"
            />
          </View>

          <View style={styles.buttonView}>
            <Button
              title="Add Item"
              onPress={afterButtonClick}
              color="#b180f0"
            />
            {/* on press function afterButtonClick is executed  */}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  //below are objects
  inputContainer: {
    // flexDirection: "row", //the elements inside the container will be placed like row
    // justifyContent: "space-between", //to place spacing between elements in container
    justifyContent: "center",
    alignItems: "center", //default was stretch so the childs were stretching in the cross axis
    // paddingBottom:24,
    // marginBottom: 24,
    paddingTop: 15,
    padding: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    flex: 1, //container stretched in main axis of the app container(parent) which is column
    backgroundColor: "#EDEDED",
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius:10
  },

  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    // borderWidth:2,
    // borderColor:'black',
    //alignItems:'center',//not to be added, for testing only
  },

  buttonView: {
    // width:'45%',//width:'45%'
    width: 100, //fixed width
    margin: 8, //margin:8
    // borderWidth:2,
    // borderColor:'black'
  },

  textInput: {
    width: "100%", //this text input element will take 80%of the container space in which it is contained
    borderWidth: 1,
    borderColor: "#e4d0ff",
    //margin: 8, //to place spacing between elements in container
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    padding: 16, // to place spacing inside the element
  },
});

//unlike div,h2 or any html element, the react native components View, Text etc have to be imported in other tsx files for usage

//talk to the parent components by passing event handler functions via props

//Modal is screen overlay display type component of react-native

//if prop is passed a function (type other than void and having parameters) then use bind or arrow function or outer function else just use props.x like props.text
