import React from 'react'
import { FlatList } from 'react-native'
import library from "@/assets/data/library.json"

export const AudioList = () => {
  return (
    <FlatList data={[library]} renderItem={() => null}/>
  )
}