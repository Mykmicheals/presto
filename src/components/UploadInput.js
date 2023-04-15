import { View, Text,TouchableOpacity,Image } from "react-native";
import React from "react";
import { center } from "../styles/HomeStyles";
import arrowUp from '../assests/images/arrowUp.png'

const UploadInput = () => {
  return (
    <TouchableOpacity
      className={`${center} border-2 h-12 flex flex-row border-dotted border-gray-500 w-80 mb-8 `}
      >
          <Image source={arrowUp} />
      <Text className={` text-center text-gray-500 ml-4`}>Upload Proof</Text>
    </TouchableOpacity>
  );
};

export default UploadInput;
