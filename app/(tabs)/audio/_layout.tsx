import { Stack } from 'expo-router'
import { View } from 'react-native'
import { defaultStyles } from '@/styles'

const AudioLayout = () => {
	return (
		<View style={{flex: 1,
			backgroundColor: "#FFF",
			justifyContent: "center", }}>
			<Stack>
				<Stack.Screen
					name="index"
                    options={{
						headerShown : false,
						headerTitle: '',
						
					}}
				/>
			</Stack>
		</View>
	)
}

export default AudioLayout