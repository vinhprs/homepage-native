import { Text } from "react-native";
import React, { FC } from "react";
import { TextProps } from "./types";
import { StyledText } from "./BigText";

const SmallText: FC<TextProps> = ({ textStyles, children }) => {
  return (
    <StyledText
      style={{ fontFamily: "Lato-Regular" }}
      className={`text-center text-[13px] text-gray ${textStyles}`}
    >
      {children}
    </StyledText>
  );
};

export default SmallText;
