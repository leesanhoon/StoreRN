import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'

import motoImg from '../assets/motor.png'

export default function CatelogyListitem(props) {
    const { category } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category.name}</Text>
            <Image style={styles.catelogyImg} source={motoImg} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginBottom: 15,
        shadowColor: "#0000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        }
    },
    title: {
        textTransform: "uppercase",
        fontWeight: "700",
        marginBottom: 8
    },
    catelogyImg: {
        width: 64,
        height: 64

    }
})