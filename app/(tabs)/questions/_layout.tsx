import { Stack } from 'expo-router'
import { View } from 'react-native'
import { StackScreenWithSearchBar } from '@/constants/layout'
import { defaultStyles } from '@/styles'

const QuestionLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen 
				options={{
						...StackScreenWithSearchBar,
						headerTitle: '',
					}}
					name="index"
				/>
			</Stack>
		</View>
	)
}

export default QuestionLayout