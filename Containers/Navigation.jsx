import createBottomTabNavigation from "@react-navigation/native"
import { NavigationContainer } from '@react-navigation/native'


/* Screens */
import Header from '../Components/Header'
import Home from "./Home";

const Tab = createBottomTabNavigation()

function myTabs () {
    return (
        
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/>
        </Tab.Navigator>
        
    );
};

export default function Navigation(){
    return(
        <NavigationContainer>
            <myTabs/>
        </NavigationContainer>
    );
}