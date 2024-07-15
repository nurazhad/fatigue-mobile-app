import { useEffect} from "react";
import React from "react" 
import { BlurView } from "expo-blur";  
import WavesurferPlayer from '@wavesurfer/react'
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
const { useMemo, useState, useCallback, useRef } = React
import { useWavesurfer } from '@wavesurfer/react'
const image = {uri : './../../../assets/images/bg.jpg'}

const audioUrls = './../../../assets/music/Audio.mp3'
export default function audio() {
  const containerRef = useRef(null)
  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 100,
    width : "20em",
    waveColor: '#BB0A2150',
    progressColor: '#BB0A21',
    url: audioUrls,
  })
  const formatTime = (second) => [second / 60, second % 60].map((v) => `0${Math.floor(v)}`.slice(-2)).join(':')

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause()
  }, [wavesurfer])

  return (
    <View
      // contentInsetAdjustmentBehavior="automatic"
      // showsHorizontalScrollIndicator={false}
      style={styles.container}>
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
          <BlurView intensity={50} style={styles.audioContainer}>
      <div ref={containerRef} />
      <Text style = {{fontFamily : 'Roboto-Light'}}>{formatTime(currentTime)}</Text>
      </BlurView>
      <TouchableOpacity
         onPress={onPlayPause} 
         style={styles.btnPlay}>
          <Text style = {{color : '#FFF',
    fontFamily : 'Roboto-Light'}}>
          {isPlaying ? 'Berhenti' : 'Mainkan'}
          </Text>
        </TouchableOpacity>
      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		// backgroundColor: "#FFF",
    justifyContent: "center", 
    alignItems : 'center',
  },
  audioContainer:{
    justifyContent : 'center',
    alignItems: 'center',
    backgroundColor : '#FFF',
    borderRadius : 16
  },
  btnPlay: {
    marginTop : 20,
    width: 90,
    height: 30,
    borderRadius: 16,
    backgroundColor: "#BB0A21",
    justifyContent: "center",
    alignItems: "center",
    alignSelf : 'center',
    color : "FFF"
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width : '100%'
  },
})