import React, { useState } from 'react'
import { StyleSheet, StatusBar, View } from 'react-native'
import { Switch, Button } from 'react-native-paper'

const StatusBarConfig = () => {
  const styleTypes = ['dark-content', 'light-content']
  const [visibleStatusBar, setVisibleStatusBar] = useState(false)
  const [switchIsEnabled, setSwitchIsEnabled] = useState(false)
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0])

  const toggleSwitch = () => {
    setSwitchIsEnabled((previousState) => !previousState)
    changeVisibilityStatusBar()
  }

  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar)
  }

  const changeStyleStatusBar = () => {
    const styleId = styleTypes.indexOf(styleStatusBar) + 1

    if (styleId === styleTypes.length) {
      return setStyleStatusBar(styleTypes[0])
    }
    return setStyleStatusBar(styleTypes[styleId])
  }

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <StatusBar hidden={visibleStatusBar} />
        <StatusBar backgroundColor="blue" barStyle={styleStatusBar} />
        <Switch
          color="grey"
          onValueChange={toggleSwitch}
          value={switchIsEnabled}
        />
        <Button
          icon="cogs"
          labelStyle={{ fontSize: 15 }}
          mode="text"
          onPress={changeStyleStatusBar}
        >
          Change statusbar color
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default StatusBarConfig
