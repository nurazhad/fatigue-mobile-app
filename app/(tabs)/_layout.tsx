import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  MaterialIcons, Octicons
} from "@expo/vector-icons";
import { StyleSheet } from "react-native";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarLabelStyle: {
            fontWeight: "500",
          },
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopWidth: 0,
            paddingTop: 8,
            height : 50
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={30} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="media"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <Octicons name="video" size={30} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="audio"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="multitrack-audio" size={30} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="question"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="quiz" size={30} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
