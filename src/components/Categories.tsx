import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Categories = ({ imgURL, title}) => {
    return (
        <TouchableOpacity className="relative mr-3">
            <Image
                source={{ uri: imgURL }}
                className="h-20 w-20 rounded-sm"
            />
                <Text className="text-white absolute bottom-1 left-1 text-base font-bold">
                    {title}
                </Text>
        </TouchableOpacity>
    )
}

export default Categories

const styles = StyleSheet.create({})