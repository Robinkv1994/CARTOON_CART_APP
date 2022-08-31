import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from "../Screen/HomeScreen";
import CartScreen from "../Screen/CartScreen";
import ShoppingCartIcon from "../Components/ShoppingCartIcon";


const PassScreen =()=>{

const MyStack =createNativeStackNavigator()

return(
    
        <MyStack.Navigator screenOptions={{
            fullScreenGestureEnabled:true,
            // title:'Cartoons',
            statusBarHidden:true,
            headerStyle:{backgroundColor:'#fff'}
            
        }}>
            <MyStack.Screen name="HomeScreen"
            component={HomeScreen}
            options={{
                headerRight: props => <ShoppingCartIcon {...props} 
                />}}
            
            />
            <MyStack.Screen name="My Cart"
            component={CartScreen}
            options={{headerShown:true}}/>
          
        </MyStack.Navigator>
    
)

}
export default PassScreen
