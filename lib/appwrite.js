import { Client, Account, ID } from 'appwrite';

// Appwrite configuration
export const appwriteConfig = {
    endpoint: 'https://fra.cloud.appwrite.io/v1/v1', // Your Appwrite Endpoint
    platform: 'BarThunder', // Your package name
    projectId: '68eeaf56001385556a50', // Your project ID from Appwrite
    databaseId: 'YOUR_DATABASE_ID', // You'll create this later
    userCollectionId: 'YOUR_USER_COLLECTION_ID', // You'll create this later
    storageId: 'YOUR_STORAGE_ID' // You'll create this later
}

// Initialize Appwrite Client
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform);

// Initialize Account service
export const account = new Account(client);

export default client;