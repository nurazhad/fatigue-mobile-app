import { useEffect} from "react";
import React from "react"   
import WavesurferPlayer from '@wavesurfer/react'
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
const { useMemo, useState, useCallback, useRef } = React
import { useWavesurfer } from '@wavesurfer/react'

const audioUrls = './../../../assets/music/Audio.mp3'
export default function audio() {
  const containerRef = useRef(null)
  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 50,
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
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsHorizontalScrollIndicator={false}
      style={{ paddingHorizontal: 4, backgroundColor: "#FFF" }}>
      <View style={styles.audioContainer}>
      <div ref={containerRef} />
      <Text>{formatTime(currentTime)}</Text>
        <TouchableOpacity
         onPress={onPlayPause} 
         style={styles.btnPlay}>
          <Text style = {{color : '#FFF'}}>
          {isPlaying ? 'Pause' : 'Play'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: "#FFF",
    justifyContent: "space-around", 
  },
  audioContainer:{
    justifyContent : 'center',
    alignItems: 'center'
  },
  btnPlay: {
    marginTop : 20,
    width: 60,
    height: 30,
    borderRadius: 16,
    backgroundColor: "#BB0A21",
    justifyContent: "center",
    alignItems: "center",
    color : "FFF"
  },
})