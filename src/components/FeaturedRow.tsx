import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'

import ArrowIcon from 'react-native-vector-icons/AntDesign';
import Styles from '../styles/Styles';
import RestaurantCards from './RestaurantCards';

const FeaturedRow = ({ title, description, featuredCategory }) => {
    return (
        <View className="mt-2">
            <View className="mx-3 flex-row justify-between">
                <Text className={Styles.textMedium}>{title}</Text>
                <TouchableOpacity>
                    <ArrowIcon name="arrowright" size={26} color={Styles.Colors.blue} />
                </TouchableOpacity>
            </View>
            <View className="mx-3">
                <Text className={Styles.textSmall}>{description}</Text>
            </View>

            {/* Restaurant Cards */}
            <ScrollView
                contentContainerStyle={{
                    marginTop: 10,
                    marginLeft: 13
                }}
                showsHorizontalScrollIndicator={false}
                horizontal
            >
                <RestaurantCards
                    id={3}
                    imgURL='https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                    restaurantName='Restaurant C'
                    lat="40.7128"
                    long="-74.0060"
                    shortDescription='Authentic cuisine from around the world!'
                    dishes={['Tacos', 'Burger', 'Ice Cream']}
                    rating={4.2}
                    genre="Japanese"
                    reviews={50}
                />
                <RestaurantCards
                    id={3}
                    imgURL='https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                    restaurantName='Restaurant C'
                    lat="40.7128"
                    long="-74.0060"
                    shortDescription='Authentic cuisine from around the world!'
                    dishes={['Tacos', 'Burger', 'Ice Cream']}
                    rating={4.2}
                    genre="Japanese"
                    reviews={50}
                />
                <RestaurantCards
                    id={3}
                    imgURL='https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                    restaurantName='Restaurant C'
                    lat="40.7128"
                    long="-74.0060"
                    shortDescription='Authentic cuisine from around the world!'
                    dishes={['Tacos', 'Burger', 'Ice Cream']}
                    rating={4.2}
                    genre="Japanese"
                    reviews={50}
                />

            </ScrollView>
        </View>
    )
}

export default FeaturedRow

const styles = StyleSheet.create({})