import React, { useState } from 'react';
import {NavigationContainer, NavigationHelpers, ParamListBase, TabNavigationState} from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import iconExample from "../assets/home2.png";
import HomeScreen from '../screens/HomeScreen';
import moreIcon from "../assets/moreIcon.png";
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { BottomTabDescriptorMap, BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import PersonalizedSvg from '../components/PersonalizedSvg';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoreStackScreen from '../screens/MoreStackScreen';
import { useCustomParams } from '../hooks/useCustomParams';
// import { Container } from './styles';

// Defina os tipos para suas rotas
type RootTabParamList = {
  Home: undefined;
  Chat: undefined;
  More: undefined;
  Calendar: undefined;
  Notification: undefined;
};


type Props = {
  state:  TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;

}

const Tab = createBottomTabNavigator<any>();

function MyTabBar({ state, descriptors, navigation,  }: Props) {

  const { setParamsRoute } = useCustomParams();


 // Verificar se a rota atual é uma tela de Stack
 const isStackScreen = state.routes[state.index].name === 'More';

  return (
    <View style={{ flexDirection: 'row', paddingHorizontal: 10, backgroundColor: "#263238" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel.toString()
            : options.title !== undefined
            ? options.title.toString()
            : route.name.toString()

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
           
            setParamsRoute(state.routes[state.index].name);
            navigation.navigate(route.name, { fromTab: state.routes[state.index].name }); 
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        if (isStackScreen) {
          return null;
        }
       

        return (
          <TouchableOpacity
          key={route.path}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            activeOpacity={1}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, height: 87, backgroundColor:  "#263238" , alignItems: "center", justifyContent: "center",   }}
          >
           { route.name !== "More" ? (
            <>
            <PersonalizedSvg name={route.name} isFocused={isFocused} />
            <Text style={{ color: isFocused ? '#FED36A' : '#617D8A', fontSize: 10, marginTop: 10 }}>
              {label}
            </Text>
            </>
           ) : (
            <>
              <View style={{
                display: "flex",
                backgroundColor: "#FED36A",
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Image style={{width: 20, height: 20}} source={moreIcon} />
              </View>
            </>
           ) }
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Stack = createNativeStackNavigator();

export const StackRoute = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen  name="HomeStack" component={MoreStackScreen} />
    <Stack.Screen name="MoreStack" component={MoreStackScreen} />
  </Stack.Navigator>
);




const RoutesApp: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={({state, descriptors, navigation, }) => <MyTabBar  state={state} descriptors={descriptors} navigation={navigation} />} screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Chat" component={HomeScreen} />
          <Tab.Screen name="More" component={StackRoute} />
          <Tab.Screen name="Calendar" component={HomeScreen} />
          <Tab.Screen name="Notification" component={HomeScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  )
};

export default RoutesApp;
