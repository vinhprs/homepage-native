import React, { FC } from "react";
import { TouchableHighlight } from "react-native-gesture-handler";

// screen width
import { ScreenWidth } from "../shared";

// components
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import Profile from "../Header/Profile";

// types
import { SendMoneyProp } from "./types";
import { styled } from "nativewind";

const StyledTouchableHighlight = styled(TouchableHighlight);

const SendMoneyItem: FC<SendMoneyProp> = ({
  name,
  amount,
  background,
  image,
}) => {
  return (
    <StyledTouchableHighlight
      underlayColor="#2C365A"
      style={{ width: ScreenWidth * 0.27, backgroundColor: background }}
      onPress={() => {
        alert("Send Money!");
      }}
      className="m mb-[10px] ml-0 mr-[10px] mt-0 h-[130px] justify-around rounded-[10px] p-[10px]"
    >
      <>
        <Profile img={image} imgContainerStyle="mb-[10xp]" />
        <SmallText textStyles="text-left text-white text-[12px]">
          {name}
        </SmallText>
        <RegularText textStyles="text-left text-white text-[13px]">
          {amount}
        </RegularText>
      </>
    </StyledTouchableHighlight>
  );
};

export default SendMoneyItem;
