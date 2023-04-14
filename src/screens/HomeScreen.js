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

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center mt-16 w-full bg-white">
      <Text className="text-2xl mb-5">Select Bitcoin</Text>
      <View>
        <Image className="mb-3" source={barcode} />
      </View>
      <View style={styles.container}>
        <Text className="text-lg">BTC Wallet Details</Text>
        <Text>3nofvnodslfihvolfishosfvonsXd</Text>
        <BtnPurple title="Click to copy" />
        <Text className="mx-9 mb-4 text-gray-500">
          The address and QR barcode are yours. you can recieve bitcoins into it
          and please provide proof.
        </Text>
        <Text className="text-left mb-2">Kindly upload Proof</Text>
        <View className="flex items-center justify-center">
          <View
            className={`${center} border-2 h-12  border-dotted border-gray-500 w-4/5 mb-8 px-24`}
          >
            <Text className={` text-center text-gray-500`}>Upload Proof</Text>
          </View>
        </View>

        <Text className='mb-4'>BTC Rates Table</Text>
        <Table />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
