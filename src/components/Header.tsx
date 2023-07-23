import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import Styles from '../styles/Styles'

const Header = () => {
    return (
        <View className="pt-3 px-3 flex-row items-center justify-between">
            <View className="flex-row">
                <Image
                    className="w-11 h-11 rounded-full mr-3"
                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_pb8CKmWvPBC8eEMUOV9_gmiWIHZysxtmA&usqp=CAU" }}
                />
                <View style="flex-col flex-1">
                    <Text className={Styles.textSmall}>Deliver Now!</Text>
                    <View className="flex-row">
                        <Text className={Styles.textMedium}>Current Location</Text>
                        <Icon
                            name="keyboard-arrow-down"
                            size={30}
                            color={Styles.Colors.blue}
                        />
                    </View>
                </View>
            </View>
            <TouchableOpacity className="bg-gray-50 m-1 px-3 py-2 rounded-full">
                <UserIcon
                    name="user-o"
                    size={30}
                    color={Styles.Colors.blue}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})