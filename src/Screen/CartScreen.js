import React from 'react'
import { View , StyleSheet, Text,Image,TouchableOpacity, Dimensions} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Provider, useDispatch,useSelector } from 'react-redux'
import { REMOVE_FROM_CART} from '../Reducer/CartItem'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Whislist from '../Components/WhislistCardIcon'

const {height,width} =Dimensions.get('window')


const CartScreen = () => {

  const dispatch =useDispatch()
  const cartItem = useSelector(state=>state)

  const removeFromCart = item =>
  dispatch({
    type:REMOVE_FROM_CART,
    payload:item
  })

  return (
   <View>
    {cartItem.length !== 0 ?(
   
      <FlatList data={cartItem}
      keyExtractor={(item)=>item}
      renderItem={({item})=>{
        return(
          <View style={styles.container}>
          <View style={styles.ImageCard}>
              <Image style={styles.image} source={{uri:item.image}}></Image>
             
              </View>
              <View style={styles.ImageCardView}>
                 <Text style={styles.TitleStyle}> {item.title}</Text>
                 <Text style={styles.CreatorStyle}>by :{item.creator}</Text>
                 <Text style={styles.YearStyle}>Published :{item.year}</Text>
                 
                 <TouchableOpacity onPress={()=>removeFromCart(item)} style={styles.Button}>
                  <Text style={styles.ButtonText}> + REMOVE</Text>
                 </TouchableOpacity>
                  
             
          </View>
  
      </View>
        )
      }}>

      </FlatList>
):(<View style={{alignSelf:'center',justifyContent:'center'}}>
  <Text style={{fontWeight:'bold',fontSize:24,alignItems:'center',marginTop:350 ,color:'red'}} >YOUR CART IS EMPTY .....</Text>
  
  </View>)}
   </View>
  )
}
const styles = StyleSheet.create({
  container:{
      height:height/2.8,
      width:'95%',
      backgroundColor:'#fff',
      marginHorizontal:10,
      marginVertical:10,
      borderRadius:12,
      elevation:7,
      flexDirection:'row'
  },
  ImageCard:{
      height:height*0.3,
      width:'40%',
      backgroundColor:'#fff',
      
      marginHorizontal:10,
      marginVertical:20,
      borderRadius:8,
      justifyContent:'center',
      
      
  },
  ImageCardView:{
      height:height*0.3,
      width:'52%',
      backgroundColor:'#fff',       
      marginVertical:20,
      borderRadius:8,
      flexDirection:'column'

  },
  image:{
    flex:1
     
  },
  Button:{
      height:30,
      width:60,
      backgroundColor:'green',
      margin:30,        
      borderRadius:8   ,
      alignItems:'center',
      justifyContent:'center'
  },
  ButtonText:{
      color :'black',
      
  },
  TitleStyle:{
      color:'red',
      fontSize:20,
      margin:5,
      fontWeight:'bold',
      marginTop:30

  },
  YearStyle:{
      color:'black',
      fontWeight:'bold',
      marginLeft:30,
      fontSize:18
  },
  CreatorStyle:{
      color:'black',
      fontWeight:'bold',
      marginLeft:30,
      marginTop:20,
      fontSize:18
  }



})

export default CartScreen