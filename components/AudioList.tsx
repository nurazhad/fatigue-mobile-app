import React from "react";
import { FlatList, FlatListProps, View } from "react-native";
import library from "@/assets/data/library.json";
import { AudioListItem } from "./AudioListItem";
import { utilsStyles } from "@/styles";
import TrackPlayer, { Track } from "react-native-track-player";

export type AudioListProps = Partial<FlatListProps<Track>> & {
  audio: Track[]
}

const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
)
export const AudioList = ({audio, ...flatlistProps} : AudioListProps) => {
  const handleAudioSelect = async (audio : Track) => {
    await TrackPlayer.load(audio)
  }
  return (
    <FlatList
      data={library}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({ item: audio }) => 
        <AudioListItem audio={audio} onAudioSelect={handleAudioSelect}
          
        />
      }
      {...flatlistProps}
    />
  );
};
