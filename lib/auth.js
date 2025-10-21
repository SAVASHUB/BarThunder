import { account, appwriteConfig } from './appwrite';
import { ID } from 'appwrite';

// Create new user account
export const createUser = async (email, password, username) => {
    try {
        // Create account
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount) throw new Error('Account creation failed');

        // Automatically sign in after registration
        await signIn(email, password);

        return newAccount;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

// Sign in user
export const signIn = async (email, password) => {
    try {
        // Delete any existing sessions first
        try {
            await account.deleteSession('current');
        } catch (error) {
            // No existing session, continue
        }

        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
}

// Get current logged in user
export const getCurrentUser = async () => {
    try {
        const currentUser = await account.get();
        return currentUser;
    } catch (error) {
        console.error('Error getting current user:', error);
        return null;
    }
}

// Sign out user
export const signOut = async () => {
    try {
        const session = await account.deleteSession('current');
        return session;
    } catch (error) {
        console.error('Error signing out:', error);
        throw error;
    }
}

// Check if user is logged in
export const checkSession = async () => {
    try {
        const session = await account.getSession('current');
        return session;
    } catch (error) {
        return null;
    }
}