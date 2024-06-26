import React from 'react';
import { Path, Svg } from 'react-native-svg';

// import { Container } from './styles';
type Props = {
  strokeColor: "#FED36A" | "#617D8A"
}

const NotificationIcon: React.FC<Props> = ({ strokeColor }) => {
  return (
    <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
  >
    <Path
        d="M18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91C8.70997 2.91 6.01997 5.6 6.01997 8.91V11.8C6.01997 12.41 5.75997 13.34 5.44997 13.86L4.29997 15.77C3.58997 16.95 4.07997 18.26 5.37997 18.7C9.68997 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={"transparent"}
        strokeMiterlimit={"10"}
      />
    <Path
        d="M13.87 3.20101C12.6608 2.8566 11.3793 2.8566 10.17 3.20101C10.46 2.46101 11.18 1.94101 12.02 1.94101C12.86 1.94101 13.58 2.46101 13.87 3.20101V3.20101Z"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={"transparent"}
        strokeMiterlimit={"10"}
      />
    <Path
        d="M15.02 19.059C15.02 20.709 13.67 22.059 12.02 22.059C11.2 22.059 10.44 21.719 9.90002 21.179C9.33818 20.6163 9.02181 19.8542 9.02002 19.059"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={"transparent"}
        strokeMiterlimit={"10"}
      />
    
  </Svg>
  )
}

export default NotificationIcon;