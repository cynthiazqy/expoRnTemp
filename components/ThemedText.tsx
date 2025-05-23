import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
	lightColor?: string;
	darkColor?: string;
	type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
	style,
	lightColor,
	darkColor,
	type = 'default',
	...rest
}: ThemedTextProps) {
	const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

	const getTypeStyles = (type: ThemedTextProps['type']) => {
		switch (type) {
			case 'default':
				return styles.default;
			case 'title':
				return styles.title;
			case 'defaultSemiBold':
				return styles.defaultSemiBold;
			case 'subtitle':
				return styles.subtitle;
			case 'link':
				return styles.link;
			default:
				return undefined;
		}
	};

	return <Text style={[{ color }, getTypeStyles(type), style]} {...rest} />;
}

const styles = StyleSheet.create({
	default: {
		fontSize: 16,
		lineHeight: 24,
	},
	defaultSemiBold: {
		fontSize: 16,
		lineHeight: 24,
		fontWeight: '800',
		color: '#5b8a99',
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		lineHeight: 32,
	},
	subtitle: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	link: {
		lineHeight: 30,
		fontSize: 16,
		color: '#0a7ea4',
	},
});
