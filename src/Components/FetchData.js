import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import { Button } from 'react-native-paper'

import Axios from 'axios'

const FetchData = () => {
  const [quote, setQuote] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    Axios.get('https://api.kanye.rest').then((res) => {
      setQuote(res.data.quote)
      setIsLoading(true)
    })
  }, [])

  function getNewQuote() {
    Axios.get('https://api.kanye.rest').then((res) => {
      setQuote(res.data.quote)
      setIsLoading(false)
    })
  }

  return (
    <View>
      {isLoading ? (
        <Text style={styles.textStyling}>{quote}</Text>
      ) : (
        <ActivityIndicator size="large" color="#FFFFFF" />
      )}

      <TouchableOpacity>
        <Button
          icon="format-quote-close"
          labelStyle={{ fontSize: 20 }}
          mode="text"
          onPress={getNewQuote}
        >
          Get new quote
        </Button>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyling: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  }
})

export default FetchData
