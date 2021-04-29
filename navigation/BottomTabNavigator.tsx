/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons, Entypo, MaterialCommunityIcons, Feather, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { Image, View, StyleSheet, Platform } from 'react-native';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="home"
      tabBarOptions={{ 
        //activeTintColor: Colors[colorScheme].tint ,
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        }}>
      <BottomTab.Screen
        name="home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={28} color={color} />,
          tabBarLabel: () => null,
        }}
      />
      <BottomTab.Screen
        name="search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Feather name="search" size={28} color={color} />,
          tabBarLabel: () => null,
        }}
      />
      <BottomTab.Screen
        name="post"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="television-play" size={28} color={color} />,
          tabBarLabel: () => null,
        }}
      />
      <BottomTab.Screen
        name="heart"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="shopping-bag" size={28} color={color} />,
          tabBarLabel: () => null,
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="ios-person-circle-outline" size={28} color={color} />,
          tabBarLabel: () => null,
          tabBarBadge: 3,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
function LogoTitle() {
  return (
    <View style={styles.header}>
      <IoniconsIcon style={ styles.camera } name="camera" size={25} color={"#545454"}/>
      <Image
        style={styles.Image}
        source={require('../assets/images/logo.png')}
      />
      <IoniconsIcon style={ styles.paper } name="paper-plane-outline" size={25} color={"#545454"}/>
    </View>
    
  );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: props => <LogoTitle/> }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  Image:{
    width: 130,
    height: 40,
    resizeMode: 'stretch',
  },
  camera:{
    marginLeft: Platform.OS === 'ios' ? 30 : 0,
  },
  paper:{
    marginRight: Platform.OS === 'ios' ? 30 : 0,
  }
});
