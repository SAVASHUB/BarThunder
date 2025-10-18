import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signup = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Sign Up</Text>

      <Link style = {styles.link} href= "/">Back Home</Link>
    </View>
  )
}

export default signup

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