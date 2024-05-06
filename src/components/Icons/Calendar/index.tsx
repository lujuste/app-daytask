import React from 'react';
import { Path, Svg } from 'react-native-svg';

// import { Container } from './styles';
type Props = {
  strokeColor: "#FED36A" | "#617D8A"
}

const Calendar: React.FC<Props> = ({ strokeColor }) => {
  return (
    <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
  >
    <Path
        d="M8 2V5M16 2V5M3.5 9.09H20.5M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={"transparent"}
        strokeMiterlimit={"10"}
      />

    <Path
        d="M15.694 13.7H15.703M15.694 16.7H15.703M11.995 13.7H12.004M11.995 16.7H12.004M8.29504 13.7H8.30504M8.29504 16.7H8.30504"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={"transparent"}
      />
    
  </Svg>
  )
}

export default Calendar;