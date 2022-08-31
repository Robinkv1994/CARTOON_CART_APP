import React from "react";
import { Provider  } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import PassScreen from "./src/Navigation/PassScreen";
import CartItem from "./src/Reducer/CartItem";
import { store } from "./src/Store/Store";


const App=()=>{

  return(
    <NavigationContainer>
    <Provider store={store}>
      <PassScreen/>
    </Provider>
    </NavigationContainer>
  )
}
export default App