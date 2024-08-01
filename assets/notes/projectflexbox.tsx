


import React from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        //container is device so below view will take 80% of device width, also the elements inside (if height and width not set) will stretch along the cross axis (if container is stretched in that direction) like if cross axis is top to bottom so to stretch childs (default align items=strech), just increase height of parent container
        //justifycontent (main axis), align items (cross axis)
        //main-axis: left to right in row,right to left in row-reverse flexdirection and vice versa for column and cross axis
        //the parent will not tell child how much it will take space in the main axis (justify-content), so we use flex in childs, but parent can tell child how much it will take space in cross axis (align item)
        //flex directions are row, row-reverse and column, column-reverse
        //by default view only takes as much space as it childs require
        <View style={{ padding: 50,borderWidth:2,borderColor:'red',flexDirection:'row',height:300,width:'80%',justifyContent:'space-between',alignItems:'center'}}>
            <View
                style={{
                    backgroundColor: 'red',
                    // width: 100,
                    // height: 100,
                    //flex:1,//current container will take all available space that it can take in the main axis of outer container, applied to inside of flexbox, can also be applied for text
                    justifyContent: 'center',//vertical as default flex direction of this container is column
                    alignItems: 'center',//horizontal as default flex direction of this container is column
                    flex:3,//3/3+2(below flex) of the free available space
                }}
            >
                <Text>1</Text>
            </View>
            <View
                style={{
                    backgroundColor: 'blue',
                    // width: 100,
                    // height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex:2,
                }}
            >
                <Text>2</Text>
            </View>
            <View
                style={{
                    backgroundColor: 'green',
                    // width: 100,
                    // height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    //flex:3,
                }}
            >
                <Text>3</Text>
            </View>
        </View>
    );
}

// if alignitems is Stretch, width will not have any impact

//each view has by default flex display and flex direction row, flex means to arrange the childs of current container

//if a child has height or width, it is with respect to its parent

//i changed flex-direction to row, remove the height width inside the childs

//if the parent or child do not contain any height or width, the the container of content will only take place of its content

//if parent child hierarchy: view a,b,c with a as parent, if b is flex direction row and height,width is changed, the c elements will stretch along the height or cross axis and width will have no effect

//main axis is flex direction, cross axis is opposite

//justify content - main axis
//align items - cross axis
//align items is stretch by default
//align items is applied in parent to align childs
//for justify content (main axis ) stretch, use flex:1 etc in childs or elements inside flexbox
//flex:1 in child then child will take all the available space in the main axis or justify content


