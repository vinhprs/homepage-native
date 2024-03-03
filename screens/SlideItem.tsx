import { styled } from "nativewind";
import React, { FC } from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SlideItemProp } from "./types";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const StyledView = styled(View);
const SlideItem: FC<SlideItemProp> = ({ item }) => {
  const navigation = useNavigation<any>();
  const handlePress = () => {
    navigation.navigate("Balance", {});
  };
  const handlePressSignIn=()=>{
    navigation.navigate("SignIn",{})
  }
  return (
    <StyledView style={styles.container}>
      {item.id == 3 && (
        <StyledView>
          <Text style={styles.nextButton}>Bỏ qua</Text>
        </StyledView>
      )}

      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={[styles.image]}
      />

      <StyledView style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </StyledView>

      {item.id == 3 && (
        <StyledView style={styles.authen}>
          <Pressable style={styles.signUpButton} onPress={handlePress}>
            <Text style={styles.signUPText}>Đăng kí</Text>
          </Pressable>
          <Pressable style={styles.signInButton} onPress={handlePressSignIn}>
            <Text style={styles.signInText}>Đăng nhập</Text>
          </Pressable>
        </StyledView>
      )}
    </StyledView>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    position: "relative",
    alignItems: "center",
    backgroundColor: "#1F1F39",
  },
  image: {
    width: "80%",
    marginTop: 120,
  },
  content: {
    flex: 0.4,
    alignItems: "center",
    width: "70%",
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    color: "#fff",
    paddingTop: 25,
  },
  description: {
    fontSize: 15,
    paddingTop: 35,
    paddingBottom: 50,
    textAlign: "center",
    color: "#fff",
    fontWeight: "300",
  },
  nextButton: {
    position: "absolute",
    left: 120,
    top: 60,
    color: "#fff",
    fontSize: 13,
  },
  authen: {
    position: "absolute",
    flexDirection: "row",
    // justifyContent: "space-between",
    bottom: 130,
  },
  signUpButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 48,
    paddingRight: 48,
    borderRadius: 12,
    backgroundColor: "#FF4105",
    color: "white",
  },
  signInButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 36,
    paddingRight: 36,
    marginLeft: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  signUPText: {
    fontSize: 16,
    letterSpacing: 0.25,
    color: "#fff",
  },
  signInText: {
    fontSize: 16,
    letterSpacing: 0.25,
    color: "#FF4105",
  },
});
