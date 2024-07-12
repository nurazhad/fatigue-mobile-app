import { StyleSheet, View, Text } from 'react-native';
import YoutubeIframe from "react-native-youtube-iframe";
import { SafeAreaView, } from 'react-native-safe-area-context';

export default function video() {
    return (
    <View style={styles.container}> 
    <SafeAreaView>
      <View style = {styles.videoContainer}>
      <YoutubeIframe
        height= {250}
        videoId={"ByquaD-su7M"}
      />
      </View>
      <View>
        <Text style = {styles.heading}>
          Deskripsi
        </Text>
        <Text style = {styles.desc}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Text>
      </View>
      </SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: "#FFF",
    justifyContent: "space-around", 
  },
  videoContainer : {
    width : '100%' ,
    height : 'auto'
  },
  heading : {
    fontSize: 18,
    color: "#BB0A21",
    padding : 24,
    fontWeight : 500
  },
  desc : {
    fontSize: 16,
    color: "#BB0A21",
    padding : 24,
    fontWeight : 300
  }
});
