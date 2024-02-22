import { Text } from "react-native";
import React, { FC } from "react";
import { TextProps } from "./types";
import { styled } from "nativewind";

export const StyledText = styled(Text);

const BigText: FC<TextProps> = ({ textStyles, children }) => {
  return (
    <StyledText
      style={{ fontFamily: "Lato-Bold" }}
      className={`text-center text-[32px] text-white ${textStyles}`}
    >
      {children}
    </StyledText>
  );
};

export default BigText;
