import { ImageSourcePropType } from "react-native";

export interface ItemType {
  id: number;
  img: ImageSourcePropType;
  title: string;
  description: string;
}
export interface SlideItemProp {
  item: ItemType;
}
