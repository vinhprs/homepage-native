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
import { styled } from "nativewind";

type Props = StackScreenProps<RootStackParamList, "Welcome">;

const StyledView = styled(View);
const StyledImage = styled(Image);
const Welcome: FC<Props> = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <StyledView className="h-full w-full justify-around bg-[#1F1F39]">
        <StyledView className="max-h-[55%] w-fit">
          <StyledImage
            source={background}
            resizeMode="stretch"
            className="m-auto mt-[130px] h-[260px] w-[60%]"
          />
        </StyledView>
        <StyledView className="w-[full] flex-1 items-center p-[25px]">
          <BigText textStyles="mb-[32px] text-[23px] w-[80%]">
            Chào mừng đến với PrimeEdu
          </BigText>
          <RegularText textStyles="mb-[32px] w-[90%]">
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
        </StyledView>
      </StyledView>
    </>
  );
};

export default Welcome;
