

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';



export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'home'
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <Text>{'首页'}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
