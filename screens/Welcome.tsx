import { View, Image, FlatList, Animated } from "react-native";
import React, { FC, useRef, useState } from "react";

// components
import SlideItem from "./SlideItem";
import Slides from "./data/slide";
import Pagination from "./Pagination";

// types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

import { styled } from "nativewind";

type Props = StackScreenProps<RootStackParamList, "Welcome">;

const StyledView = styled(View);
const StyledImage = styled(Image);
const Welcome: FC<Props> = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }: any) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;
  return (
    <View>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={Slides} scrollX={scrollX} />

    </View>
  )
  // return (
  //   <>
  //     <StatusBar style="light" />
  //     <StyledView className="h-full w-full justify-around bg-[#1F1F39]">
  //       <StyledView className="max-h-[55%] w-fit">
  //         <StyledImage
  //           source={background}
  //           resizeMode="stretch"
  //           className="m-auto mt-[130px] h-[260px] w-[60%]"
  //         />
  //       </StyledView>

  //       <StyledView className="w-[full] flex-1 items-center p-[25px]">
  //         <BigText textStyles="mb-[32px] text-[23px] w-[80%]">
  //           Chào mừng đến với PrimeEdu
  //         </BigText>
  //         <RegularText textStyles="mb-[32px] w-[90%]">
  //           Tất cả khóa học này đều dành cho các bạn, giúp các bạn nâng cao kiến
  //           thức cùng với các giảng viên đầy kinh nghiệm
  //         </RegularText>
  //         <RegularButton
  //           onPress={() => {
  //             navigation.navigate("Home");
  //           }}
  //         >
  //           Get Started
  //         </RegularButton>
  //       </StyledView>
  //     </StyledView>
  //   </>
  // );
};

export default Welcome;
