import AsyncStorage from '@react-native-async-storage/async-storage';


export class Api {

  static KEYS = {
    ITEM_COMPRA: 'item_compra'
  }

  static generateKey() {
    return Math.random().toString(36).substr(2, 9);
  } 

  static save(key: string, value: any): Promise<any> {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static async get(key: string): Promise<any> {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
}