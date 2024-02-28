import { View } from "react-native";
import React, { FC } from "react";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { AmountProps } from "./types";
import { styled } from "nativewind";

const StyledView = styled(View);

const AmountSection: FC<AmountProps> = ({ balance }) => {
  return (
    <StyledView className="w-full flex-1 items-center pt-[5px]">
      <SmallText textStyles="text-secondary mb-[15px]">Total Balance</SmallText>
      <RegularText textStyles="text-secondary text-[28px]">
        $ {balance}
      </RegularText>
    </StyledView>
  );
};

export default AmountSection;
