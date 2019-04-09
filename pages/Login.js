

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button} from 'react-native';


//SwithNavigator默认第一次显示的是首页,当点击跳转的时候,跳转到首页.但是返回的时候不会返回这个登录页,因为会将栈清空
export default class Login extends Component<Props> {

  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
        <View style={styles.container}>
          <Text>{'Login'}</Text>
          <Button title={'跳转到首页'} onPress={() => {
            navigation.navigate('App')
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
