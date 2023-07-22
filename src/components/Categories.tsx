import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Categories = () => {
    return (
        <TouchableOpacity className="relative mr-3">
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' }}
                className="h-20 w-20 rounded-sm"
            />
                <Text className="text-white absolute bottom-1 left-1 text-base font-bold">
                    Cakes
                </Text>
        </TouchableOpacity>
    )
}

export default Categories

const styles = StyleSheet.create({})