import { View, Image } from "react-native";
import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";

// background image
import background from "./../assets/bgs/background_1.png";

// components
import SmallText from "../components/Texts/SmallText";
import BigText from "../components/Texts/BigText";
import RegularButton from "../components/Buttons/RegularButton";

// types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome: FC<Props> = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <View className="h-full w-full justify-between bg-[#1F1F39]">
        <View className="h-[260] w-[260]">
          <Image
            source={background}
            resizeMode="stretch"
            className="h-full w-full"
          />
        </View>
        <View className="w-full flex-1 justify-end p-[25px]">
          <BigText textStyles="mb-[25px] w-[70%]">
            Chào mừng đến với PrimeEdu
          </BigText>
          <SmallText textStyles="mb-[25px] w-[70%]">
            Tất cả khóa học này đều dành cho các bạn, giúp các bạn nâng cao kiến
            thức cùng với các giảng viên đầy kinh nghiệm
          </SmallText>
          <RegularButton
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            Get Started
          </RegularButton>
        </View>
      </View>
    </>
  );
};

export default Welcome;
