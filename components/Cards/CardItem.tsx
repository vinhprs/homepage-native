import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, TouchableHighlight, View, Image } from "react-native";
import { ScreenWidth } from "../shared";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import card_bg from "./../../assets/bgs/background_transparent.png";
import { CardProps } from "./types";
import { useNavigation } from "@react-navigation/native";
import { Props as HomeProps } from "../../screens/Home";
import { styled } from "nativewind";

const StyledImageBackground = styled(ImageBackground);
const StyledTouchableHighlight = styled(TouchableHighlight);
const StyledView = styled(View);
const StyledImage = styled(Image);

const CardItem: FC<CardProps> = (props) => {
  const navigation = useNavigation<HomeProps["navigation"]>();

  const handlePress = () => {
    navigation.navigate("Balance", { ...props });
  };

  return (
    <>
      <StatusBar style="light" />
      <StyledImageBackground
        source={card_bg}
        resizeMode="cover"
        style={{ width: ScreenWidth * 0.67 }}
        className={`mr-[25px] h-[75%] overflow-hidden rounded-[25px] bg-accent`}
      >
        <StyledTouchableHighlight
          underlayColor="#2C365A"
          onPress={handlePress}
          className="h-full rounded-[25px]"
        >
          <StyledView className="flex-1 items-center justify-between p-[30px]">
            <StyledView className="w-full flex-row items-center justify-between">
              <RegularText textStyles="text-white">
                ****** {props.accountNo.slice(6, 10)}
              </RegularText>
            </StyledView>
            <StyledView className="w-full flex-row items-center justify-between">
              <StyledView className="flex-[3]">
                <SmallText textStyles="mb-[5px] text-white">
                  Total Balance
                </SmallText>
                <RegularText textStyles="text-[19px]">
                  ${props.balance}
                </RegularText>
              </StyledView>
              <StyledImage
                source={props.logo}
                resizeMode="contain"
                className="h-full w-full flex-1"
              />
            </StyledView>
          </StyledView>
        </StyledTouchableHighlight>
      </StyledImageBackground>
    </>
  );
};

export default CardItem;
