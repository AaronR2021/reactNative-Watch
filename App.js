import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Alarm from "./extension/pages/Alarm.js";
import Calender from "./extension/pages/Calender.js";
import Clock from "./extension/pages/Clock.js";
import StopWatch from "./extension/pages/StopWatch.js";

export default function App() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle:{
            height:0
          },
          headerShown: false,
          tabBarShowIcon: false,
          tabBarShowLabel: false,
          tabBarIndicatorStyle: { backgroundColor: "transparent" },
        }}
      >
        <Tab.Screen name="Clock" component={Clock} />
        <Tab.Screen name="StopWatch" component={StopWatch} />
        <Tab.Screen name="Alarm" component={Alarm} />
        <Tab.Screen name="Calender" component={Calender} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
