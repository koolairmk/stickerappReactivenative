import { Link, Stack } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function NotFoundScreen(){
    return (
        <>
         <Stack.Screen options={{title:"Oops! Not Found"}}/>
          <View style={styles.container}>
            <Link href="/" style={styles.button}>
            Goback to Homw Screen!
            </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
    },
    button:{
        fontSize:20,
        color:"black",
        textDecorationLine:"underline",
    }
})


