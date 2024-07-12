import { Stack } from 'expo-router'
import { View } from 'react-native'
import { StackScreenWithSearchBar } from '@/constants/layout'
import { defaultStyles } from '@/styles'

const VideoLayout = () => {
	return (
		<View>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenWithSearchBar,
						headerTitle: '',
					}}
				/>
			</Stack>
		</View>
	)
}

export default VideoLayout