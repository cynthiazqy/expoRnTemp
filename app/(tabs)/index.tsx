import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import {
	Alert,
	Button,
	Platform,
	StyleSheet,
	TouchableHighlight,
} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
	const router = useRouter();

	const onPressButton = () => {
		Alert.alert('You tapped the button!');
		// router.push('/profile');
		router.push({
			pathname: '/profile',
			params: {
				userId: '123test',
			},
		});
	};

	const onLongPressButton = () => {
		Alert.alert('You long-pressed the button!');
		router.replace('/explore');
	};

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={
				<Image
					source={require('@/assets/images/partial-react-logo.png')}
					style={styles.reactLogo}
				/>
			}>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Welcome!</ThemedText>
				<HelloWave />
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Step 1: Try it</ThemedText>
				<ThemedText>
					Edit{' '}
					<ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{' '}
					to see changes. Press{' '}
					<ThemedText type="defaultSemiBold">
						{Platform.select({
							ios: 'cmd + d',
							android: 'cmd + m',
							web: 'F12',
						})}
					</ThemedText>{' '}
					to open developer tools.
				</ThemedText>
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Step 2: Explore</ThemedText>
				<ThemedText>
					{`Tap the Explore tab to learn more about what's included in this starter app.`}
				</ThemedText>
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Step 3: navigation to</ThemedText>
				<TouchableHighlight
					onPress={onPressButton}
					onLongPress={onLongPressButton}
					underlayColor="white">
					<ThemedView style={styles.button}>
						<ThemedText type="link">jump to other page</ThemedText>
					</ThemedView>
				</TouchableHighlight>
				<Button
					title="open modal"
					onPress={() =>
						router.push({
							pathname: '/profile',
							params: {
								userId: 'test333-new',
								data: 'some data',
							},
						})
					}
				/>
			</ThemedView>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#DDD',
		padding: 10,
	},
});
