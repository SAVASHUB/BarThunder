import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'

const CustomButton = ({ 
  title, 
  handlePress, 
  containerStyles, 
  textStyles, 
  isLoading = false 
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.button,
        containerStyles,
        isLoading && styles.buttonDisabled
      ]}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[styles.buttonText, textStyles]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  }
})