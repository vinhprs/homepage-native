import React, { FC } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AmountSection from "../components/Balance/AmountSection";
import BalanceCardSection from "../components/Balance/BalanceCardSection";
import ButtonSection from "../components/Balance/ButtonSection";
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { styled } from "nativewind";

const StyledView = styled(View);

type Props = StackScreenProps<RootStackParamList, "Balance">;

const Balance: FC<Props> = ({ route }) => {
  return (
    <StyledView className="w-full flex-1 bg-graylight p-[25px]">
      <StatusBar style="dark" />
      <AmountSection balance={route?.params?.balance} />
      <BalanceCardSection {...route?.params} />
      <ButtonSection />
    </StyledView>
  );
};

export default Balance;
