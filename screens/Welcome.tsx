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
import RegularText from "../components/Texts/RegularText";

type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome: FC<Props> = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <View className="h-full w-full justify-around bg-[#1F1F39]">
        <View className="max-h-[55%] w-fit">
          <Image
            source={background}
            resizeMode="stretch"
            className="m-auto mt-[130px] h-[260px] w-[260px]"
          />
        </View>
        <View className="w-full flex-1 p-[25px]">
          <BigText textStyles="mb-[30px] w-fit">
            Chào mừng đến với PrimeEdu
          </BigText>
          <RegularText textStyles="mb-[25px] w-fit">
            Tất cả khóa học này đều dành cho các bạn, giúp các bạn nâng cao kiến
            thức cùng với các giảng viên đầy kinh nghiệm
          </RegularText>
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
