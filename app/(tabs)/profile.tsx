import { IconSymbol } from '@/components/ui/IconSymbol';
import { Image } from 'expo-image';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
	const { userId, data } = useLocalSearchParams();
	const navigation = useNavigation();

	useEffect(() => {
		// 路由生命周期
		const unsubscribe = navigation.addListener('focus', () => {
			console.log('路由参数', `userId: ${userId}, data: ${data}`);
			console.log('profile 页面获得焦点');
		});

		return unsubscribe;
	}, [navigation]);

	useEffect(() => {
		if (__DEV__ && (userId || data)) {
			Alert.alert('路由参数', `userId: ${userId}, data: ${data}`);
		}
	}, [userId, data]);

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={
				<Image
					source={require('@/assets/images/partial-react-logo.png')}
					style={styles.reactLogo}
				/>
			}>
			{/* 用户信息区域 */}
			<ThemedView style={styles.userInfo}>
				<TouchableOpacity style={styles.avatar}>
					<IconSymbol size={60} name="person.circle.fill" color="#666" />
				</TouchableOpacity>
				<ThemedText style={styles.username}>点击登录</ThemedText>
			</ThemedView>

			{/* 功能列表 */}
			<ThemedView style={styles.menuList}>
				<TouchableOpacity style={styles.menuItem}>
					<IconSymbol size={24} name="gear" color="#666" />
					<ThemedText style={styles.menuText}>设置</ThemedText>
				</TouchableOpacity>
			</ThemedView>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
	userInfo: {
		padding: 20,
		alignItems: 'center',
	},
	avatar: {
		width: 80,
		height: 80,
		borderRadius: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	username: {
		fontSize: 18,
		marginTop: 10,
		fontWeight: '500',
	},
	menuList: {
		marginTop: 20,
	},
	menuItem: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#ccc',
	},
	menuText: {
		fontSize: 16,
		marginLeft: 10,
	},
});
