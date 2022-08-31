import React from 'react'
import { StyleSheet,View,Text,Image } from 'react-native'

const WelcomScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}} >
            <Text style={styles.LoadingText}>Welcome to Cartoon Factory</Text>
            <Image style={styles.LoadingImage} source={require('../../Assets/pic.png')}></Image>
            </View>
  )
}
const styles=StyleSheet.create({
    LoadingText:{
        fontSize:30,
        fontWeight:'bold',
        color:'black'
        
        
    },
    LoadingImage:{
        height:80,
        width:40,
        alignItems:'center',
        marginTop:10

    }
})


export default WelcomScreen