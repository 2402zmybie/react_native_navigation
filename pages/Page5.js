

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';



export default class Page5 extends Component<Props> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
          <Text>{'Page5'}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
