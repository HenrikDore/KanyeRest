import React from 'react'
import * as Animatable from 'react-native-animatable'

import { View, Text, StyleSheet, SafeAreaView, Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const About = () => {
  return (
    <SafeAreaView style={styles.safeAreaStyling}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>API USED:</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://kanye.rest')}>
          <Animatable.Text
            animation="bounceInDown"
            iterationCount={1}
            direction="alternate"
            style={styles.textAnimationStyle}
          >
            KANYE.REST API 🌊
          </Animatable.Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeAreaStyling: {
    flex: 1,
    backgroundColor: '#03045e'
  },
  textContainer: {
    flex: 0.5,
    justifyContent: 'center'
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  },
  textAnimationStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40
  }
})

export default About
