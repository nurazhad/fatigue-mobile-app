import { Tabs } from "expo-router";
import React from "react";
import {
  MaterialIcons, Octicons
} from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import {BlurView} from "expo-blur"
export default function TabLayout() {
  return (
    <>
      <Tabs
        initialRouteName="home"
        screenOptions={{
          tabBarActiveTintColor : "#BB0A21",
          tabBarInactiveTintColor : "#BB0A2150",
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            borderTopWidth: 0,
            paddingTop: 10,
            height : 50
          },
          tabBarBackground : () => (
            <BlurView 
              intensity={50}
              style={{
                ...StyleSheet.absoluteFillObject,
                overflow: "hidden",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              }}
            />
          )
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={30} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="video"
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
          name="questions"
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
