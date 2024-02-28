import { FlatList } from "react-native-gesture-handler";
import React, { FC } from "react";
import CardItem from "./CardItem";
import { CardSectionProps } from "./types";
import { styled } from "nativewind";

const StyledFlatList = styled(FlatList);

const CardSection: FC<CardSectionProps> = ({ data }) => {
  return (
    <StyledFlatList
      className="w-full flex-1 pb-[15px] pl-[25px]"
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: "center", paddingRight: 25 }}
      keyExtractor={({ id }: any) => id.toString()}
      renderItem={({ item }: any) => <CardItem {...item} />}
    />
  );
};

export default CardSection;
