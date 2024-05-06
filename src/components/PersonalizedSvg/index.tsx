import React from 'react';
import { View } from 'react-native';
import HomeIcon from '../Icons/HomeIcon';
import ChatIcon from '../Icons/ChatIcon';
import Calendar from '../Icons/Calendar';
import NotificationIcon from '../Icons/NotificationIcon';

type Props = {
  isFocused: boolean;
  name: string;
}

const PersonalizedSvg: React.FC<Props> = ({isFocused, name}) => {
  const strokeColor = isFocused ? '#FED36A' : '#617D8A';

  let renderSvg = null;

  switch (name) {
    case "Home":
      renderSvg = (
        <HomeIcon strokeColor={strokeColor} />
      )
      break;

      case "Chat":
      renderSvg = (
        <ChatIcon strokeColor={strokeColor} />
      )
      break;

      case "Calendar":
      renderSvg = (
        <Calendar strokeColor={strokeColor} />
      )
      break;
      
      case "Notification":
        renderSvg = (
          <NotificationIcon strokeColor={strokeColor} />
        )
        break;
    default:
      renderSvg = null
      break;
  }  

  return (
    <View>
      {renderSvg && renderSvg}
  </View>
   

  )
}

export default PersonalizedSvg;