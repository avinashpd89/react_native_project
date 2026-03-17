import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style = {styles.headingText}>Trending Places</Text>
      <View style = {[styles.card, styles.cardElevated]}>
        <Image
            source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg'}}
        style = {styles.cardImage} />
        <View style = {styles.cardBoby}>
            <Text style = {styles.cardTitle}>
                Strawberry
            </Text>
            <Text style = {styles.cardLable}>
                A globally popular fruit
            </Text>
            <Text style = {styles.cardDescription}>
                The strawberry (Fragaria ×  ananassa) is a globally popular fruit known for its vibrant red colour, juicy texture, and sweet aroma. 
            </Text>
            <Text style = {styles.cardFooter}>
                12 mins away
            </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: 'white'
    },
    card: {
        width: 330,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated:{
        backgroundColor: "#FFFFFF",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },

    },
    cardImage:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBoby: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: "#000000",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 4
    },
    cardLable: {
        color: "#000000",
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: "#242B2E",
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        // flexShrink: 
    },
    cardFooter: {
        color: "#000000",
    },
})