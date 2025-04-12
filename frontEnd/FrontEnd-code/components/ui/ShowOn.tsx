import { Children } from "react";
import { Platform } from "react-native";

export const ShowOnAndroid = ({children}:{children: React.ReactNode}) =>{
    Platform.OS === "android" ? children : null;
}

export const ShowOnIos = ({children}:{children : React.ReactNode}) =>{
    Platform.OS === "ios" ? children:null;
}