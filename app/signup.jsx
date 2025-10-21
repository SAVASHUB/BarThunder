import { StyleSheet, Text, View, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import { createUser } from '../lib/auth'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all fields')
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      Alert.alert('Error', 'Please enter a valid email address')
      return
    }

    // Password validation (minimum 8 characters)
    if (form.password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters long')
      return
    }

    setIsSubmitting(true)

    try {
      await createUser(form.email, form.password, form.username)
      Alert.alert('Success', 'Account created successfully')
      
      // Navigate to home or main app screen
      router.replace('/')
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to create account')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.content}>
            <Text style={styles.title}>Sign up for BarThunder</Text>
            <Text style={styles.subtitle}>Create your account to get started</Text>

            <FormField
              title="Username"
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
              otherStyles={styles.field}
              placeholder="Enter your username"
            />

            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles={styles.field}
              keyboardType="email-address"
              placeholder="Enter your email"
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles={styles.field}
              placeholder="Enter your password (min. 8 characters)"
              secureTextEntry
            />

            <CustomButton
              title="Sign Up"
              handlePress={submit}
              containerStyles={styles.button}
              isLoading={isSubmitting}
            />

            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <Link href="/login" style={styles.loginLink}>
                Log In
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  field: {
    marginTop: 16,
  },
  button: {
    marginTop: 32,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    color: '#666',
  },
  loginLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6B35',
  }
})