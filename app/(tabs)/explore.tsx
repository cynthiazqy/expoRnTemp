import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
	const goToLearnMore = () => {
		console.log('goToLearnMore===');
	};

	return (
		<ParallaxScrollView
			// headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
			headerBackgroundColor={{ light: '#5098a6', dark: '#053d3d' }}
			headerImage={
				<IconSymbol
					size={310}
					color="#808080"
					// name="chevron.left.forwardslash.chevron.right"
					name="paperplane.fill"
					style={styles.headerImage}
				/>
			}>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Explore1</ThemedText>
			</ThemedView>
			<ThemedText>
				This app includes example code to help you get started.
			</ThemedText>
			<Collapsible title="File-based routing">
				<ThemedText>
					This app has two screens:{' '}
					<ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{' '}
					and{' '}
					<ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
				</ThemedText>
				<ExternalLink href="https://docs.expo.dev/router/introduction">
					<ThemedText type="link" onPress={goToLearnMore}>
						Learn more
					</ThemedText>
				</ExternalLink>
			</Collapsible>
			<Collapsible title="Android, iOS, and web support">
				<ThemedText>
					You can open this project on Android, iOS, and the web. To open the
					web version, press <ThemedText type="defaultSemiBold">w</ThemedText>{' '}
					in the terminal running this project.
				</ThemedText>
			</Collapsible>
			<Collapsible title="Images">
				<ThemedText>
					For static images, you can use the{' '}
					<ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
					<ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to
					provide files for different screen densities
				</ThemedText>
				<Image
					source={require('@/assets/images/react-logo.png')}
					style={{ alignSelf: 'center' }}
				/>
				<ExternalLink href="https://reactnative.dev/docs/images">
					<ThemedText type="link">ExternalLink</ThemedText>
				</ExternalLink>
			</Collapsible>
			<Collapsible title="Animations">
				<ThemedText>
					This template includes an example of an animated component. The{' '}
					<ThemedText type="defaultSemiBold">
						components/HelloWave.tsx
					</ThemedText>{' '}
					component uses the powerful{' '}
					<ThemedText type="defaultSemiBold">
						react-native-reanimated
					</ThemedText>{' '}
					library to create a waving hand animation.
				</ThemedText>
				{Platform.select({
					ios: (
						<ThemedText>
							The{' '}
							<ThemedText type="defaultSemiBold">
								components/ParallaxScrollView.tsx
							</ThemedText>{' '}
							component provides a parallax effect for the header image.
						</ThemedText>
					),
				})}
			</Collapsible>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	headerImage: {
		color: '#808080',
		bottom: -90,
		left: -35,
		position: 'absolute',
	},
	titleContainer: {
		flexDirection: 'row',
		gap: 8,
	},
});
