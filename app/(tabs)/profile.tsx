import { IconSymbol } from '@/components/ui/IconSymbol';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
	return (
		<ScrollView style={styles.scroll}>
			<ThemedView style={styles.container}>
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
			</ThemedView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scroll: {
		flex: 1,
	},
	container: {
		flex: 1,
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
