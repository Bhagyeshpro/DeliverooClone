import { StyleSheet, Text, TouchableOpacity, View, Image, } from 'react-native'
import React from 'react'
import Styles from '../styles/Styles'
import StarIcon from 'react-native-vector-icons/Entypo';


const RestaurantCards = ({ id, title, lat, long, reviews, genre, dishes, imgURL, restaurantName, rating }) => {
    return (
        <TouchableOpacity className="mr-3 shadow shadow-red-600">
            <Image
                source={{ uri: imgURL }}
                className="h-32 w-56 rounded-sm"
            />
            <View className="shadow shadow-sm shadow-red-500">
                <Text className={Styles.textMedium}>{restaurantName}</Text>
                <View className="flex-row space-x-1 items-center">
                    <StarIcon name="star" opacity={0.5} color="green" size={18} />
                    <Text className={Styles.textSmall}> 
                        <Text className="text-green-700 opacity-5 text">{rating}</Text> • ({reviews}+)
                        • {genre}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCards

const styles = StyleSheet.create({})