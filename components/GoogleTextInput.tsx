import { GoogleInputProps } from "@/types/type";
import React from "react";
import { View, Text } from "react-native";

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => {
  return (
    <View
      className={`flex flex-row mb-5 items-center justify-center relative z-50 rounded-xl ${containerStyle}`}
    >
      <Text>Search</Text>
    </View>
  );
};

export default GoogleTextInput;
