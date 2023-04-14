import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import barcode from "../assests/images/barcode.png";

const HomeScreen = () => {
  return (
    <View>
      <Text>Select BitCoin</Text>
      <View>
        <Image source={barcode} />
      </View>
      <View>
        <Text>Btc Wallet Details</Text>
        <Text>3nofvnodslfihvolfishosfvonsXd</Text>
        <TouchableOpacity>
          <Text>Click to copy</Text>
        </TouchableOpacity>
        <Text>
          The address and QR barcode are yours. you can recieve bitcoins into it
          and please provide proof.
        </Text>
        <Text>Kindly upload Proof</Text>
        <Text>BTC Rates Table</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
