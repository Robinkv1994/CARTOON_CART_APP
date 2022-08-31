import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet,FlatList,ScrollView,SafeAreaView, ActivityIndicator, StatusBar,Image} from 'react-native'


import Data from '../ApiData/Data'
import SearchBars from '../Components/SearchBars'
import WelcomScreen from '../Components/WelcomScreen'
import Whislist from '../Components/WhislistCardIcon'
import CartoonCard from '../Components/CartoonCard'

import { useSelector,useDispatch } from 'react-redux'




const HomeScreen = () => {

    const [result,setResults]= useState([])
    const [term ,setTerm] = useState('')
   
    const [isLoading,setIsLoading]= useState(true)



    useEffect(()=>{
        ApiResults()
    },[])

    const ApiResults =async () =>{
       
        const response = await Data.get('cartoons/cartoons2D')
        setResults(response.data)
        setIsLoading(false)
        console.log(response.data)
    }


  return (
    <View style={{backgroundColor:'#fff'
    ,flex:1, justifyContent:'center',alignItems:'center'}}>
         {isLoading ? (
        <View >
                <WelcomScreen/>
            </View>
            ): (
            <View>

         <View style={styles.ImageView}> 
         <Image style={styles.ImageStyle} source={require('../../Assets/pic.png')}/>
         <View style={{flexDirection:'column'}}>
         <Text style={styles.TitleStyle}> Cartoon Factory</Text>
         <Text style={styles.SubTitleStyle}> Most Popular cartoons in One Click</Text>
         </View>
        </View>

            <SearchBars/>

        
        <Text style={{marginLeft:10,marginTop:10}}> We found {result.length} results</Text>
        
            <FlatList 
            
            data={result}
            keyExtractor={(item)=>item}
            renderItem={({item})=>{

                return(
                <View>
                    <CartoonCard item ={item}/>
                    
                    </View>
                )
            }}>
                
            </FlatList>
            </View>)
        }
      
    </View>
    
  )

}

const styles=StyleSheet.create({
  ImageStyle:{
    height:100,
    width:40,   
    marginTop:10,
    marginLeft:10
  },
  ImageView:{
    flexDirection:'row',
  },
  TitleStyle:{
    marginTop:20,
    marginLeft:10,
    color:'red',
    fontSize:24

  },
  SubTitleStyle:{
    color:'red',
    fontSize:20,
    marginLeft:10

  }
})



export default HomeScreen