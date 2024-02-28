import { View } from "react-native";
import React, { FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import RegularButton from "../Buttons/RegularButton";
import { styled } from "nativewind";

const StyledView = styled(View);

const ButtonSection: FC = () => {
  return (
    <StyledView className="w-full flex-1 items-center">
      <RegularButton btnStyles="w-[50%]" onPress={() => {}}>
        Cancel <Ionicons size={17} name="card" color="#FFFFFF" />
      </RegularButton>
    </StyledView>
  );
};

export default ButtonSection;
