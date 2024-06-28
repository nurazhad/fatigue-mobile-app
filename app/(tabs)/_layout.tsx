import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
			<Tabs
				screenOptions={{
					tabBarLabelStyle: {
						fontWeight: '500',
					},
					headerShown: false,
					tabBarStyle: {
						position: 'absolute',
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						borderTopWidth: 0,
						paddingTop: 8,
					},
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: 'Home',
						tabBarIcon: ({ color }) => <FontAwesome name="home" size={20} color={color} />,
					}}
				/>
				<Tabs.Screen
					name="media"
					options={{
						title: 'Media',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="panorama-fisheye" size={28} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="question"
					options={{
						title: 'Questions',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="panorama-fisheye" size={28} color={color} />
						),
					}}
				/>
			</Tabs>
		</>
  );
}
