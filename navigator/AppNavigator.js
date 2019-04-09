//导航器

import React, {Component} from 'react';
import {Platform,Button,ScrollView,SafeAreaView,View} from 'react-native';
import {createStackNavigator,createMaterialTopTabNavigator,createBottomTabNavigator,createDrawerNavigator,DrawerItems,createSwitchNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
//引入组件页面
import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import Page4 from '../pages/Page4'
import Page5 from '../pages/Page5'
import Login from '../pages/Login'

//1 创建两个导航器,用于演示createSwitchNavigator
const AppStack = createStackNavigator({
    Home: {
        screen:HomePage
    },
    Page1: {
        screen:Page1
    }
})
const AuthStack = createStackNavigator({
    Login: {
        screen:Login
    }
})
//2 将用于演示createSwitchNavigator导航器导出
export const AppSwitchNavigator =  createSwitchNavigator({
    Auth:AuthStack,
    App:AppStack
}, {
    initialRouteName:'Auth'
})



//创建Top导航器
const TopNavigator = createMaterialTopTabNavigator({
    Page1: {
        screen:Page1,
        navigationOptions: {
            tabBarLabel:'Android'
        }
    },
    Page2: {
        screen:Page2,
        navigationOptions: {
            tabBarLabel:'ios'
        }
    },
    Page3: {
        screen:Page3,
        navigationOptions: {
            tabBarLabel:'React'
        }
    },
    Page4: {
        screen:Page4,
        navigationOptions: {
            tabBarLabel:'React Navive'
        }
    },
    Page5:{
        screen:Page5,
        navigationOptions: {
            tabBarLabel:'My Pleasure'
        }
    }
},{
    tabBarOptions: {
        tabStyle: {mindWidth:50},
        upperCaseLabel:false,   //是否使标签大写,默认为true
        scrollEnabled:true,  //是否支持选项卡滑动,默认为fasle
        style: {            //设置整个TabBar样式
            backgroundColor:'#678'
        },
        indicatorStyle: {   //设置指示器样式(下面那条横线)
            height:2,
            backgroundColor:'pink'
        },
        labelStyle: {   //文字样式
            fontSize:13,
            marginTop:6,
            marginBottom:6
        }
    }
})

//创建底部导航
const BottomNavigator = createBottomTabNavigator({
    //底部的和头部的基本设置一样
    Page1: {
        screen:Page1,
        navigationOptions: {
            tabBarLabel:'最热',
            tabBarIcon:({tintColor,focused}) => {
                return <Ionicons
                    name={'ios-home'}
                    size={26}
                    style={{color:tintColor}}
                />
            }
        }
    },
    Page2: {
        screen:Page2,
        navigationOptions: {
            tabBarLabel:'趋势',
            tabBarIcon: ({tintColor,focused}) => (
                <Ionicons
                    name={'ios-people'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page3: {
        screen:Page3,
        navigationOptions: {
            tabBarLabel:'收藏',
            tabBarIcon: ({tintColor,focused}) => (
                <Ionicons
                    name={'ios-chatboxes'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page4: {
        screen:Page4,
        navigationOptions: {
            tabBarLabel:'我的',
            tabBarIcon: ({tintColor,focused}) => (
                <Ionicons
                    name={'ios-aperture'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    }
},{
    tabBarOptions: {
        activeTintColor:'red'
    }
})


//创建抽屉导航
const DrawerNavigator = createDrawerNavigator({
    Page4: {
        screen:Page4,
        navigationOptions: {
            drawerLabel:'Page4',
            drawerIcon: ({tintColor}) => {
                return <MaterialIcons
                    name={'drafts'}
                    size={24}
                    style={{color:tintColor}}
                />
            }
        }
    },
    Page5: {
        screen:Page5,
        navigationOptions: {
            drawerLabel:'Page5',
            drawerIcon: ({tintColor}) => {
                return <MaterialIcons
                    name={'move-to-inbox'}
                    size={24}
                    style={{color:tintColor}}
                />
            }
        }
    }
},{
    initialRouteName:'Page4',
    contentOptions: {
        activeTintColor:'#e91e63'
    },
    contentComponent: (props) => {
        return <ScrollView style={{backgroundColor:'#789',flex:1}}>
            {/*用于适配全面屏*/}
            <SafeAreaView forceInset={{top:'always',horizontal:'never'}}>
                <DrawerItems {...props}/>
            </SafeAreaView>
        </ScrollView>
    },
    drawerLockMode: 'unlocked',//设置是否响应手势

})


//创建导航器(包含底部和顶部导航器,抽屉导航器)
export const AppStackNavigator = createStackNavigator({
        HomePage: {
            screen:HomePage
        },
        Page1: {
            screen:Page1,
            navigationOptions: ({navigation}) => ({
                title: `${navigation.state.params.name}页面名`   //动态配置
            })
        },
        Page2: {
            screen:Page2,
            navigationOptions: {  //在这里定义每个页面的导航数据,静态配置
                title:'This is Page2'
            }
        },
        Page3: {
            screen:Page3,
            navigationOptions: (props) => {
                const {navigation} = props;
                const {state,setParams} = navigation;
                const {params} = state;
                return {
                    title:params.title ? params.title: 'This is Page3',
                    headerRight: (
                        <Button title={params.mode === 'edit' ? '保存' : '编辑'} onPress={() => {
                            setParams({mode: params.mode === 'edit' ? '' : 'edit'})
                        }}/>
                    )

                }
            }
        },
        Page4: {
            screen:Page4,
            navigationOptions: {
                title:'This is Page4'
            }
        },

        Bottom: {
            screen:BottomNavigator,
            navigationOptions: {
                title: 'BottomNavigator'
            }
        },
        Top: {
            screen:TopNavigator,
            navigationOptions: {
                title:'TopNavigator'
            }
        },
        DrawerNav: {
            screen:DrawerNavigator,
            navigationOptions: {
                title:'DrawerNav'
            }
        }
})