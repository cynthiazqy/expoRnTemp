import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const setStorage = (key: string, value: string, timeout?: number) => {
	storage.set(
		key,
		JSON.stringify({
			data: value,
			timeout: timeout ? Date.now() + timeout : 0,
		})
	);
};

export const getStorage = (key: string) => {
	const value = storage.getString(key);
	if (!value) {
		return null;
	}
	try {
		const { data, timeout } = JSON.parse(value);
		if (timeout > 0 && Date.now() > timeout) {
			return null;
		}
		return data;
	} catch (error) {
		return value;
	}
};

export const removeStorage = (key: string) => {
	storage.delete(key);
};

export const clearStorage = () => {
	storage.clearAll();
};
