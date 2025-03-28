import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface SearchBoxProps {
  placeholder: string;
  onPress: () => void;
}

const SearchBox = ({ onPress, placeholder }: SearchBoxProps) => {
  return (
    <View className="flex-row items-center bg-dark-200 rouded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#ab8bff"}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBox;
