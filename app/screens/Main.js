import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, AntDesign, FontAwesome, Fontisto } from 'react-native-vector-icons';
import { Dashboard, UserProfile, Notifications, HouseholdProfile } from "../components"
import MapContainer from "./MapContainer";

const BottomTab = createBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="Dashboard" tabBarOptions={{ activeTintColor: '#e91e63', }}>
        <BottomTab.Screen name="Dashboard" component={Dashboard} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
        <BottomTab.Screen name="Notifications" component={Notifications} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard" color={color} size={size} />
          ),
        }} />
        <BottomTab.Screen name="My Stores" component={MapContainer} options={{
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="shopping-store" color={color} size={size} />
          ),
        }} />
        <BottomTab.Screen name="Me" component={UserProfile} options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}
