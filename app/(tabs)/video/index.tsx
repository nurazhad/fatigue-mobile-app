import { StyleSheet, View, Text } from 'react-native';
import YoutubeIframe from "react-native-youtube-iframe";
import { SafeAreaView, } from 'react-native-safe-area-context';
import Video from "react-native-video";

export default function video() {
    return (
    <View style={styles.container}> 
    <SafeAreaView>
      <View style = {styles.videoContainer}>
      {/* <YoutubeIframe
        height= {250}
        videoId={"ByquaD-su7M"}
      /> */}
      <Video source={{uri: 'https://drive.google.com/uc?export=download&id={1DkSKPXjbQd9mZMSrzdyImSqhlIDTJJ3z}'}}></Video>

      <Video source={{uri: 'https://drive.google.com/uc?export=download&id={1FS99A3_gZFEdUT2n9hzjzcqlbHaMoRb1}'}}></Video>

      
      </View>
      <View>
        {/* <Text style = {styles.heading}>
          Deskripsi
        </Text> */}

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
    // fontWeight : 500,
    fontFamily : 'Roboto-Medium'
  },
  desc : {
    fontSize: 16,
    color: "#BB0A21",
    padding : 24,
    // fontWeight : 200,    
    fontFamily : 'Roboto-Light'
  }
});
