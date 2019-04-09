

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button} from 'react-native';



export default class Page4 extends Component<Props> {

  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
        <View style={styles.container}>
          <Text>{'Page4'}</Text>
          <Button title={'Open Drawer'} onPress={() => {
            navigation.openDrawer()
          }}/>
          <Button title={'Close Drawer'} onPress={() => {
            navigation.closeDrawer()
          }}/>
          <Button title={'Go to Page5'} onPress={() => {
            navigation.navigate('Page5')
          }}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
