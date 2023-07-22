import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Styles from '../styles/Styles'

const Header = () => {
    return (
        <View className="px-2 py-2 flex-row">
            <Image
                className="w-12 h-12 rounded-full mr-3"
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_pb8CKmWvPBC8eEMUOV9_gmiWIHZysxtmA&usqp=CAU" }}
            />
            <View style="flex-col space-y-1">
                <Text className={Styles.textSmall}>Deliver Now</Text>
                <View>
                    <Text className={Styles.textMedium}>Current Location</Text>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})