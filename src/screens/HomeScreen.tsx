import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import Styles from '../styles/Styles'
import Header from '../components/Header'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className="bg-white flex-1">

      {/* Header */}
      <Header/>
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})