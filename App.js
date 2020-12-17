import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Home } from './src/Screens/Home'
import { About } from './src/Screens/About'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const BottomTab = createMaterialBottomTabNavigator()

export default () => (
  <NavigationContainer>
    <BottomTab.Navigator barStyle={styles.bottomtabStyling}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
      <BottomTab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          )
        }}
      />
    </BottomTab.Navigator>
  </NavigationContainer>
)

const styles = StyleSheet.create({
  bottomtabStyling: {
    backgroundColor: '#03045e',
    paddingBottom: 30
  }
})
