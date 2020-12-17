import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import FetchData from '../Components/FetchData'
import StatusBarConfig from '../Components/StatusBarConfig'

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/kanye.jpeg')}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.quoteContainer}>
        <FetchData />
      </View>
      <View style={styles.statusbarContainer}>
        <StatusBarConfig />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03045e'
  },
  imageContainer: {
    flex: 0.4
  },
  imageStyle: {
    flex: 1,
    width: '100%'
  },
  quoteContainer: {
    flex: 0.5,
    justifyContent: 'center'
  },
  statusbarContainer: {
    flex: 0.1,
    justifyContent: 'flex-end'
  }
})

export default Home
