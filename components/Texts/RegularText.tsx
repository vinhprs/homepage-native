import { Text } from "react-native";
import React, { FC } from "react";
import { TextProps } from "./types";
import { StyledText } from "./BigText";

const RegularText: FC<TextProps> = ({ textStyles, children }) => {
  return (
    <StyledText
      style={{ fontFamily: "Lato-Regular" }}
      className={`text-center text-[15px] text-white  ${textStyles}`}
    >
      {children}
    </StyledText>
  );
};

export default RegularText;
