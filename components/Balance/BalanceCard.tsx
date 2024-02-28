import React, { FC } from "react";
import { ImageBackground, View, Image } from "react-native";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import card_bg from "./../../assets/bgs/background_transparent.png";
import { BalanceCardProps } from "./types";
import { styled } from "nativewind";

const StyledImageBackground = styled(ImageBackground);
const StyledView = styled(View);
const StyledImage = styled(Image);

const BalanceCard: FC<BalanceCardProps> = (props) => {
  return (
    <StyledImageBackground
      source={card_bg}
      resizeMode="cover"
      className="h-[75%] w-full overflow-hidden rounded-[25px] bg-accent"
    >
      <StyledView className="flex-1 items-center justify-between p-[30px]">
        <StyledView className="w-full flex-row items-center justify-between">
          <RegularText textStyles="text-white">
            ****** {props?.accountNo?.slice(6, 10)}
          </RegularText>
        </StyledView>
        <StyledView className="w-full flex-row items-center justify-between">
          <StyledView className="flex-[3]">
            <SmallText textStyles="mb-[5px] text-white">
              Total Balance
            </SmallText>
            <RegularText textStyles="text-[19px]">
              ${props?.balance}
            </RegularText>
          </StyledView>
          <StyledImage
            source={props?.logo}
            resizeMode="contain"
            className="h-full w-full flex-1"
          />
        </StyledView>
      </StyledView>
    </StyledImageBackground>
  );
};

export default BalanceCard;
