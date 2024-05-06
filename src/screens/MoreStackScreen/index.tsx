import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, View } from "react-native"
import { Text } from 'react-native-svg';
import { useCustomParams } from '../../hooks/useCustomParams';

// import { Container } from './styles';

const MoreStackScreen: React.FC = () => {
  const { paramsRoute } = useCustomParams()

  const navigation = useNavigation<any>();


  const goBackToPreviousTab = () => {
   
    // const { fromTab } = route.params as { fromTab: string };
    // console.log(fromTab, "from?")
    navigation.navigate(paramsRoute);
  };

  return (
    <View style={stylish.container}>
      <Button onPress={() => {
       goBackToPreviousTab()
      }}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button" />
    </View>
  )
}

export default MoreStackScreen;

const stylish = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  }
})