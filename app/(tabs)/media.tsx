import {  Image, StyleSheet, Platform, View, Text } from 'react-native';
import React, { useState, useCallback, useRef } from "react";
import { Button, Alert } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView, } from 'react-native-safe-area-context';

export default function Media() {
  const [playing, setPlaying] = useState(false);

  

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}> 
      <YoutubeIframe
        height={300}
        width={400}
        play={playing}
        videoId={"ByquaD-su7M"}
        // onChangeState={onStateChange}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF3',
    height : '100%',
    alignItems : 'center',
    justifyContent : 'center',
    position : 'absolute',
    paddingTop: '100%'
  },
  videoContainer : {
    
  }
});
