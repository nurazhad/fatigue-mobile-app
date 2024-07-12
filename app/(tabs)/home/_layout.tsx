import { Stack } from 'expo-router'
import { View } from 'react-native'
import { defaultStyles } from '@/styles'

const HomeLayout = () => {
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
		</View>
	)
}

export default HomeLayout