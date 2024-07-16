import {  unknownTrackImageUri } from '@/constants/image'
import React from 'react'
import { SafeAreaView, TouchableHighlight, View, StyleSheet, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import { colors, fontSize } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { Track, useActiveTrack } from 'react-native-track-player'

export type AudioListItemProps = {
	audio: Track
  onAudioSelect: (audio: Track) => void
}

export const AudioListItem = ({audio, onAudioSelect: handleAudioSelect,} : AudioListItemProps) => {
  // const { playing } = useIsPlaying()
  const isActiveTrack = useActiveTrack()?.url === audio.url 
  return (
    <TouchableHighlight onPress={() => handleAudioSelect(audio)}>
      <SafeAreaView style={styles.trackItemContainer}>
      <View>
          <FastImage
            source={{
              uri: audio.artwork ?? unknownTrackImageUri,
              priority : FastImage.priority.normal
            }}
            style={{
              ...styles.trackArtworkImage,
              opacity:isActiveTrack ? 0.6 : 1
            }}
          ></FastImage>
        </View>

        <View style={{width:'100%'}}>
            <Text numberOfLines={1}
            style={{
              ...styles.trackTitleText,
              color: isActiveTrack ? '#BB0A21' : '#000'
            }}>
              {audio.title}
            </Text>
              {audio.artist  && 
              <Text numberOfLines={1} style={styles.trackArtistText}>
                {audio.artist}
              </Text>}
        </View>

      </SafeAreaView>
        
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
	trackItemContainer: {
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
		paddingRight: 20,
	},
	trackPlayingIconIndicator: {
		position: 'absolute',
		top: 18,
		left: 16,
		width: 16,
		height: 16,
	},
	trackPausedIndicator: {
		position: 'absolute',
		top: 14,
		left: 14,
	},
	trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
  trackTitleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '90%',
	},
	trackArtistText: {
		...defaultStyles.text,
		color: colors.textMuted,
		fontSize: 14,
		marginTop: 4,
	},
})