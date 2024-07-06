import React from "react";
import {
  ScrollView,
  View,
  Text
} from "react-native";
export default function audio() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsHorizontalScrollIndicator={false}
      style={{ paddingHorizontal: 4, backgroundColor: "#FFF" }}>
      <View>
      <Text> Audio Page </Text>
      </View>
    </ScrollView>
  );
}
