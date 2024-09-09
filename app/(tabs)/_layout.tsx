import { Tabs } from "expo-router";
import React from "react";
import {
  MaterialIcons, Octicons
} from "@expo/vector-icons";
export default function TabLayout() {
  return (
    <>
      <Tabs
        initialRouteName="home"
        screenOptions={{
          tabBarActiveTintColor : "#BB0A21",
          tabBarInactiveTintColor : "#BB0A2150",
          headerShown: false,
          
          // tabBarBackground : () => (
          //   <BlurView 
          //     intensity={50}
          //     style={{
          //       width : 1000,
          //       backgroundColor : "#000"
          //     }}
          //   />
          // )
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={35} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="video"
          options={{
            title: "Video",
            tabBarIcon: ({ color }) => (
              <Octicons name="video" size={35} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="audio"
          options={{
            title: "Audio",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="multitrack-audio" size={35} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="questions"
          options={{
            title: "Questions",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="quiz" size={35} color={color} />
            ),
          }}
        />
        
      </Tabs>
      
    </>
  );
}
