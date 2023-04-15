import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const BtnPurple = (props) => {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={["#0B365B", "#124672"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="px-10 my-3 rounded-lg  h-12 flex items-center justify-center w-80"
      >
        <Text className="font-[500] text-lg text-center align-center text-white">
          {props.title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default BtnPurple;
