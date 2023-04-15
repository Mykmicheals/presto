import { View, Text } from "react-native";
import React from "react";
import { center } from "../styles/HomeStyles";

const tableData = [
  { value: "Less than 100", rate: 520 },
  { value: "100 to 1000", rate: 535 },
  { value: "Above 1,000", rate: 550 },
];

const Table = () => {
  const renderTableData = (data, key) => (
    <View>
      <Text className="mb-2">{key}</Text>
      {data.map((each) => (
        <Text key={each.value} className="mb-3 text-blue-900">
          {each[key.toLowerCase()]}
        </Text>
      ))}
    </View>
  );

  return (
    <View className={`${center} flex flex-row gap-20`}>
      {renderTableData(tableData, "Value")}
      {renderTableData(tableData, "Rate")}
    </View>
  );
};


export default Table;
