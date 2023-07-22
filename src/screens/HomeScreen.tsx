import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import Styles from '../styles/Styles'
import Header from '../components/Header'
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import MenuIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Categories from '../components/Categories'


const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className="bg-white">

      {/* Header */}
      <Header />
      {/* <View className="-border-b-1 border-gray-200" />       */}

      <View className="flex-row mr-3 items-center">
        <View className="flex-row flex-1 items-center px-3 h-10 bg-gray-200 mx-3 rounded-sm">
          <SearchIcon name="search" size={18} color="#888" style="" />
          <TextInput
            placeholder="Restaurant and cuisines"
            placeholderTextColor="#888"
            className="flex-1 bg-transparent ml-2 text-xl font-semibold text-black"
          />
        </View>
        <MenuIcon name="menu" size={25} color={Styles.Colors.blue} />
      </View>

      {/* Category */}
      <ScrollView
        contentContainerStyle={{
          paddingLeft: 13,
          paddingTop: 10
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />

      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen