import React from 'react'
import { View,Text,StyleSheet,FlatList,ScrollView,SafeAreaView,TextInput} from 'react-native'
import  Icon from 'react-native-vector-icons/MaterialIcons'

const SearchBars = () => {
  return (
    <View style={styles.background}>
         <Icon name='search' size={30} color={'red'} style={styles.IconStyle}/> 
         <TextInput style={styles.TextInputStyle}
         placeholder='Search'/>
    </View>
    
  )
}
const styles = StyleSheet.create({
    background:{
        backgroundColor:'#EEEEEE',
        height:50,
        marginHorizontal:10,
        borderRadius:12,
        marginTop:20,
        
        flexDirection:'row'

    },
    TextInputStyle:{
      flex:1,
      fontSize:18
    },
    IconStyle:{
      fontSize:35,
      alignSelf:'center'
    }
})

export default SearchBars