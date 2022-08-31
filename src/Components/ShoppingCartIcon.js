import React from 'react'
import { View,Text ,TouchableOpacity,StyleSheet} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'
import CartScreen from '../Screen/CartScreen'
import { useNavigation } from '@react-navigation/native'
import cartItem from '../Reducer/CartItem'
import { useSelector } from 'react-redux'

const ShoppingCartIcon = () => {
    const navigation = useNavigation()
    const cartItem = useSelector(state=>state)
    const wishItem = useSelector(state => state)
  return (
    <View style={styles.cartView}>
       <Icons name='favorite' size={30} style={styles.wishlistIcon} onPress={()=>navigation.navigate('Whislists')}>
        <Text>{wishItem.length}</Text>
       </Icons>
            <TouchableOpacity onPress={()=>navigation.navigate('My Cart')}>
              <View style={styles.cartNumber}> 
              <Text style={{color:'#fff'}}>{cartItem.length}</Text>
              </View> 
                <Icons name = 'shopping-cart' size={32} color={'black'}></Icons>
            </TouchableOpacity>
           
    </View>
  )
}
const styles = StyleSheet.create({
    cartNumber:{
        fontSize:18,
        position:'absolute',
        color:'white',
        left:-15,
        bottom:15,
        top:5,
        backgroundColor:'green',
        opacity:0.8,
        height:30,
        width:30,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        zIndex:2000,
        
        

    },
    cartView:{
        height:30,
        width:30,
        flexDirection:'row'
        
    },
    wishlistIcon:{
      position:'absolute',
      left:-50,
      color:'red'
    }
})

export default ShoppingCartIcon