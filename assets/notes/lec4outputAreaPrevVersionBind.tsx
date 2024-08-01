import { Text, View, StyleSheet, Pressable } from "react-native";



export default function Outputarea(props: { text: string;id: string; onDelete: () => void }) {
    
  return (
    <Pressable onPress={props.onDelete.bind(props.id)}>
      <View style={styles.individualListValue}>
        <Text style={styles.individualListValueTxt}>
          {props.text /* single car in the list */}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  individualListValue: {
    margin: 8,
    padding: 8, //inner spacing
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white", //text color,
  },

  individualListValueTxt: {
    color: "white", //text color,
  },
});

// to make an item pressable, wrap it inside pressable component
//also have touchable but those are old
