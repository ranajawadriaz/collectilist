import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Outputarea(props: {
  text: string;
  id: string;
  onDelete: (value: string) => void;
}) {
  //     function afterButtonClick() {
  //         props.onDelete(props.id);

  //
  //       }

  return (
    <View style={styles.individualListValue}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        // for android
        onPress={props.onDelete.bind(null, props.id)}
        style={({ pressed }) => pressed && styles.pressedBelowBar}//for iOS and web
        // if pressed true then styling applied else no styling
        // style={(pressData)=>pressData.pressed}
      >
        <Text style={styles.individualListValueTxt}>
          {props.text /* single car in the list */}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  individualListValue: {
    margin: 8,
    // padding: 8, //inner spacing
    borderRadius: 6,
    backgroundColor: "#02AE9E",
    color: "white", //text color,
    paddingLeft:10
  },

  pressedBelowBar: {
    opacity: 0.5,
  },

  individualListValueTxt: {
    color: "white", //text color,
    padding: 8,
    // borderWidth:1,
    // borderColor:'black'
  },
});

// to make an item pressable, wrap it inside pressable component
//also have touchable but those are old
//pressable moved inside the view for ripple effect to be displayed properly inside the bar
//padding moved from value styline to Txt styling for ripple effect to spread along the bar

//below code is using outer function instead of bind

// import { Text, View, StyleSheet, Pressable } from "react-native";

// export default function Outputarea(props: { text: string;id: string; onDelete: (value:string) => void }) {

//     function afterButtonClick() {
//         props.onDelete(props.id);

//         // setBarEnteredValue("");
//       }
//   return (
//     <Pressable onPress={afterButtonClick}>
//       <View style={styles.individualListValue}>
//         <Text style={styles.individualListValueTxt}>
//           {props.text /* single car in the list */}
//         </Text>
//       </View>
//     </Pressable>
//   );
// }

// const styles = StyleSheet.create({
//   individualListValue: {
//     margin: 8,
//     padding: 8, //inner spacing
//     borderRadius: 6,
//     backgroundColor: "#5e0acc",
//     color: "white", //text color,
//   },

//   individualListValueTxt: {
//     color: "white", //text color,
//   },
// });

// // to make an item pressable, wrap it inside pressable component
// //also have touchable but those are old

//below code use inline function instead of bind function

// import { Text, View, StyleSheet, Pressable } from "react-native";

// export default function Outputarea(props: { text: string; id: string; onDelete: (value: string) => void }) {
//   return (
//     <Pressable onPress={() => props.onDelete(props.id)}>
//       <View style={styles.individualListValue}>
//         <Text style={styles.individualListValueTxt}>
//           {props.text /* single car in the list */}
//         </Text>
//       </View>
//     </Pressable>
//   );
// }

// const styles = StyleSheet.create({
//   individualListValue: {
//     margin: 8,
//     padding: 8, // inner spacing
//     borderRadius: 6,
//     backgroundColor: "#5e0acc",
//   },
//   individualListValueTxt: {
//     color: "white", // text color
//   },
// });
