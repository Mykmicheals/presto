import { View, Text } from "react-native";
import React from "react";

var tableData = [
  { value: "Less than 100", rate: 520 },
  { value: "100 to 1000", rate: 535 },
  { value: "Above 1,000", rate: 550 },
];

const Table = () => {
  return (

    <View className="flex flex-row gap-20">
      <View>
        <Text className='mb-2'>Value</Text>
        {tableData.map((each) => {
          return <Text className='mb-1'>{each.value}</Text>;
        })}
      </View>
      <View>
        <Text className='mb-2'>Rate</Text>
        {tableData.map((each) => {
          return <Text className='mb-1'>{each.rate}</Text>;
        })}
      </View>
    </View>
  );
};

export default Table;
