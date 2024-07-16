import { Stack } from 'expo-router'
import { View } from 'react-native'
import { defaultStyles } from '@/styles'
import { FloatingPlayer } from '@/components/FloatingPlayer'

const AudioLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
                    options={{
						headerShown : false,
						headerTitle: '',
						
					}}
				/>
			</Stack>
			<FloatingPlayer
				style={{
					position: 'absolute',
					left: 16,
					right: 16,
					bottom: 8,
				}}
			/>
		</View>
	)
}

export default AudioLayout