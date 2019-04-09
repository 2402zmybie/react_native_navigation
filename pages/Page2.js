

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';



export default class Page2 extends Component<Props> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
          <Text>{'Page2'}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
