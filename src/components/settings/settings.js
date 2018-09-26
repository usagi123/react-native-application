import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert
} from 'react-native'
import Touchable from './touchable'

export default class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onPress() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={{ marginTop: 120 }}>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 180 }}>
          <Touchable bgColor={{ backgroundColor: 'powderblue' }} onPress={this.onPress} icon="ios-people" text="Profile" />
          <Touchable bgColor={{ backgroundColor: 'skyblue' }} onPress={this.onPress} icon="ios-notifications" text="Notification" />
        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Touchable bgColor={{ backgroundColor: 'steelblue' }} onPress={this.onPress} icon="ios-mail" text="Mail" />
          <Touchable bgColor={{ backgroundColor: 'lightsteelblue' }} onPress={this.onPress} icon="ios-trophy" text="Rankings" />
        </View>

      </View>
    )
  }
}
