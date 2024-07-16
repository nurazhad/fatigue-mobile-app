import * as React from 'react'
import {
  View,
} from "react-native";
import { defaultStyles } from '@/styles';
import { AudioList } from '@/components/AudioList';
import { useAudio } from '@/store/library'

export default function Audio() {
  const audio = useAudio()
  return (
    <View style={defaultStyles.container}>
    <View>
        <AudioList 
        audio={audio}
        scrollEnabled={false}
        />
    </View>
        
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
// 		backgroundColor: "#FFF",
//     justifyContent: "center", 
//     alignItems : 'center',
//   },
//   audioContainer:{
//     justifyContent : 'center',
//     alignItems: 'center',
//     // backgroundColor : '#FFF',
//     borderRadius : 16
//   },
//   btnPlay: {
//     marginTop : 20,
//     width: 90,
//     height: 30,
//     borderRadius: 16,
//     backgroundColor: "#BB0A21",
//     justifyContent: "center",
//     alignItems: "center",
//     alignSelf : 'center',
//     color : "FFF"
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//     width : '100%'
//   },
// })