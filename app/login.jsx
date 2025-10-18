import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const login = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Login</Text>

      <Link style = {styles.link} href= "/">Back Home</Link>
    </View>
  )
}

export default login

const styles = StyleSheet.create({
    container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginInline: 3
  },
  link: {
    marginVertical : 10,
    borderBottomWidth: 1
  }
})