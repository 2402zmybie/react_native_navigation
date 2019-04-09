

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button} from 'react-native';



export default class Page1 extends Component<Props> {

  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
        <View style={styles.container}>
          <Text>{'Page1'}</Text>
          <Button title={'Go back'} onPress={() => {
            navigation.goBack()
          }}/>
          <Button title={'跳转到页面4'} onPress={() => {
            navigation.navigate('Page4')
          }}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
});
