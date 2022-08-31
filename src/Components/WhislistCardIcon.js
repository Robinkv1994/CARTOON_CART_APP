
import React, { useState } from 'react'
import {View ,StyleSheet,Text,TouchableOpacity, Dimensions,ScrollView,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useDispatch,useSelector } from 'react-redux'
import { ADD_TO_WISHLIST } from '../Reducer/WishListReducer'


const WhislistCardIcon = ({item}) => {
    const [clicked ,setClicked]= useState(false)


  return (
    <View>
        <TouchableOpacity onPress={()=>setClicked(!clicked)}>
         
         <Icon name= {clicked ?'heart': 'heart-o'}
         color = {clicked ? 'red':'black'}
         size={20}
         style={styles.IconStyle} ></Icon>
             
        </TouchableOpacity>
    </View>
  )
}
const styles =StyleSheet.create({
    IconStyle:{
        position:'absolute',
        left:180
    }
})

export default WhislistCardIcon