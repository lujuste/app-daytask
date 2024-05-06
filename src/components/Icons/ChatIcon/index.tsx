import React from 'react';
import { Path, Svg } from 'react-native-svg';

// import { Container } from './styles';
type Props = {
  strokeColor: "#FED36A" | "#617D8A"
}

const ChatIcon: React.FC<Props> = ({ strokeColor }) => {
  return (
    <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
  >
    <Path
        d="M2 10.79C2 7.86 3.35 6.27 6.04 6.04C6.28 6.01 6.53 6 6.79 6H13.19C16.38 6 17.98 7.6 17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C17.71 18.24 16.12 19.58 13.19 19.58H12.79C12.54 19.58 12.3 19.7 12.15 19.9L10.95 21.5C10.42 22.21 9.56 22.21 9.03 21.5L7.83 19.9C7.74995 19.8068 7.65212 19.7305 7.54223 19.6755C7.43234 19.6206 7.31259 19.5881 7.19 19.58H6.79C3.6 19.58 2 18.79 2 14.79"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={"transparent"}
      />
      <Path
        d="M21.98 6.79C21.98 3.6 20.38 2 17.19 2H10.79C7.86004 2 6.27004 3.35 6.04004 6.04C6.28004 6.01 6.53004 6 6.79004 6H13.19C16.38 6 17.98 7.6 17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C20.63 15.31 21.98 13.73 21.98 10.79"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={"transparent"}
      />
      <Path
        d="M13.495 13.25H13.505M9.995 13.25H10.005M6.495 13.25H6.505"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={"transparent"}
      />
  </Svg>
  )
}

export default ChatIcon;