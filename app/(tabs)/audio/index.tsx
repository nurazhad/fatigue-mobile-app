import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  useColorScheme,
  ScrollView,
} from "react-native";
export default function audio() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsHorizontalScrollIndicator={false}
      style={{ paddingHorizontal: 4, backgroundColor: "#FFF" }}
    ></ScrollView>
  );
}
