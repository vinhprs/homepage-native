import { FC } from "react";
import RegularText from "../Texts/RegularText";
import { styled } from "nativewind";
import { TextInput, View } from "react-native";

interface InputProp {
  label: string;
  text: string;
  textStyles: string;
  props: object;
}

const StyledView = styled(View);

const Input: FC<InputProp> = ({ label, props }) => {
  return (
    <StyledView>
      <RegularText>{label}</RegularText>
      <TextInput {...props}></TextInput>
    </StyledView>
  );
};

export default Input;
