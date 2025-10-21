import { StyleSheet, Text, View, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import { signIn } from '../lib/auth'

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all fields')
      return
    }

    setIsSubmitting(true)

    try {
      await signIn(form.email, form.password)
      Alert.alert('Success', 'Logged in successfully')
      
      // Navigate to home or main app screen
      router.replace('/')
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to sign in')
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
            <Text style={styles.title}>Log in to BarThunder</Text>
            <Text style={styles.subtitle}>Welcome back!</Text>

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
              placeholder="Enter your password"
              secureTextEntry
            />

            <CustomButton
              title="Sign In"
              handlePress={submit}
              containerStyles={styles.button}
              isLoading={isSubmitting}
            />

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <Link href="/signup" style={styles.signupLink}>
                Sign Up
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login

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
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: '#666',
  },
  signupLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6B35',
  }
})