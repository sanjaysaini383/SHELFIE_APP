import { Client, Account, Avatars, Databases } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('682ebe4b002560cfda75')
    .setPlatform('dev.sanjay.shelfie');

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)