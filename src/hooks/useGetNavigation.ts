import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../routes";

const useGetNavigation = (key: keyof RootStackParamList) => {
  type loginScreenProp = NativeStackNavigationProp<
    RootStackParamList,
    typeof key
  >;

  return useNavigation<loginScreenProp>();
};

export default useGetNavigation;
