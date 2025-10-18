import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{
        headerStyle: { backgroundColor: '#ddd' },
        headerTintColor: '#333'
        
    }}>
        <Stack.Screen name='index' options={{title: 'Home'}}/>
        <Stack.Screen name='login' options={{title: 'Login'}}/>
        <Stack.Screen name='signup' options={{title: 'Sign Up'}}/>
    </Stack>  
  )
}

export default RootLayout

const styles = StyleSheet.create({})