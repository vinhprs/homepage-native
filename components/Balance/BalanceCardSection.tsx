import { View } from "react-native";
import React, { FC } from "react";
import BalanceCard from "./BalanceCard";
import { BalanceCardProps } from "./types";
import { styled } from "nativewind";

const StyledView = styled(View);

const BalanceCardSection: FC<BalanceCardProps> = (props) => {
  return (
    <StyledView className="w-full flex-[2] items-center">
      <BalanceCard {...props} />
    </StyledView>
  );
};

export default BalanceCardSection;
