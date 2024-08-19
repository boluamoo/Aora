import { View, Text } from "react-native";
import React from "react";

const InfoBox = ({ title, subtitle, containerStyles, titleStyles }) => {
  return (
    <View className={containerStyles}>
      <Text className={`text-white text-center font-p-semibold ${titleStyles}`}>
        {title}
      </Text>
      <Text
        className={`text-gray-100 text-center text-sm font-pregular ${titleStyles}`}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export default InfoBox;
