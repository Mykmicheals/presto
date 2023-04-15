import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import barcode from "../assests/images/barcode.png";
import { center, styles } from "../styles/HomeStyles";
import BtnPurple from "../components/BtnPurple";
import Table from "../components/Table";
import UploadInput from "../components/UploadInput";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center mt-16 w-full bg-white">
      <Text style={styles.styleHeader} className="text-2xl mb-4">
        Select Bitcoin
      </Text>
      <View>
        <Image className="mb-3" source={barcode} />
      </View>
      <View style={styles.container}>
        <Text className="text-lg font-[400]">BTC Wallet Details</Text>
        <Text className="font-[400]">3nofvnodslfihvolfishosfvonsXd</Text>
        <BtnPurple title="Click to copy" />

        <Text className="mx-9 mb-4 text-gray-500 text-xs">
          The address and QR barcode are yours. you can recieve bitcoins into it
          and please provide proof.
        </Text>
        <View>
          <Text className="items-left mb-2">Kindly upload Proof</Text>
          <UploadInput />
        </View>
        <View className="w-80">
          <Text className="items-left mb-4">BTC Rates Table</Text>
          <Table />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
