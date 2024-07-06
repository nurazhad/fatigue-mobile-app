import {  Image, StyleSheet, Platform, View, Text } from 'react-native';
import React, { useState, useCallback, useRef } from "react";
import { Button, Alert } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView, } from 'react-native-safe-area-context';

export default function video() {
  const [playing, setPlaying] = useState(false);
  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    
    <View style={styles.container}> 
    <SafeAreaView>
      <View style = {styles.videoContainer}>
      <YoutubeIframe
        height={300}
        play={playing}
        videoId={"ByquaD-su7M"}
        // onChangeState={onStateChange}
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
