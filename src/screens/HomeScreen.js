import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import barcode from "../assests/images/barcode.png";
import { center, styles } from "../styles/HomeStyles";
import BtnPurple from "../components/BtnPurple";
import Table from "../components/Table";
import UploadInput from "../components/UploadInput";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center mt-16 w-full bg-white">
      <Text className="text-2xl mb-5 font-quicksand">Select Bitcoin</Text>
      <View>
        <Image className="mb-3" source={barcode} />
      </View>
      <View style={styles.container}>
        <Text className="text-lg">BTC Wallet Details</Text>
        <Text>3nofvnodslfihvolfishosfvonsXd</Text>
        <BtnPurple title="Click to copy" />

        <Text className="mx-9 mb-4 text-gray-500 text-xs">
          The address and QR barcode are yours. you can recieve bitcoins into it
          and please provide proof.
        </Text>

        <Text className="text-left mb-2">
          Kindly upload Proof
        </Text>

        <UploadInput />

        <Text className="mb-4">BTC Rates Table</Text>
        <Table />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
