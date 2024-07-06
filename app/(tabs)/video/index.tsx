import { StyleSheet, View } from 'react-native';
import YoutubeIframe from "react-native-youtube-iframe";
import { SafeAreaView, } from 'react-native-safe-area-context';

export default function video() {
    return (
    <View style={styles.container}> 
    <SafeAreaView>
      <View style = {styles.videoContainer}>
      <YoutubeIframe
        height={300}
        videoId={"ByquaD-su7M"}
      />
      </View>
      </SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width : '100%' ,
    justifyContent: "center", 
    backgroundColor : '#FFF',
  },
  videoContainer : {
    backgroundColor : '#FFF',
    width : '100%' ,

  }
});
