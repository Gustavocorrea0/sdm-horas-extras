import { createBottomTabNavigator } from  '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons"

import { Home } from "./pages/home"
import { Hours } from "./pages/hours"

const Tab = createBottomTabNavigator()

export function Routes(){
    <Tab.Navigator>
        <Tab.Screen
            name='Home'
            component={Home}
            options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ foused, size, color}) => {
                    if(foused){
                        return <Ionicons size={size} color={color} name="home"/>
                    }
                    return <Ionicons size={size} color={color} name="home-outline"/>
                }
            }}
        />

        <Tab.Screen
            name='Hours'
            component={Hours}
            options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ foused, size, color}) => {
                    if(foused){
                        return <Ionicons size={size} color={color} name="home"/>
                    }
                    return <Ionicons size={size} color={color} name="home-outline"/>
                }
            }}
        />
        
    </Tab.Navigator>
}