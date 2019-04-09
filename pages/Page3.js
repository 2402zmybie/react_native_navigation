

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput} from 'react-native';


// 动态改变标题的页面
export default class Page3 extends Component<Props> {

  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    const {state,setParams} = navigation
    const {params} = state
    const showText = params && params.mode === 'edit' ? '正在编辑' : '编辑完成'
    return (
        <View style={styles.container}>
          <Text>{'Page3'}</Text>
          <Text>{showText}</Text>
          <TextInput
              style={styles.textInputStyle}
              onChangeText={text => {
                setParams({
                  title:text
                })
              }}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInputStyle: {
    borderColor:'#fac',
    borderWidth:1,
    borderRadius:5
  }
});
