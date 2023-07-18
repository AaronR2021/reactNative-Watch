import React, { useEffect, useState, useRef } from "react";
import { View, Text } from "react-native";
import { ClockStyleSheet } from "../style/ClockStyle";
import * as Battery from "expo-battery";
import { useIsFocused } from "@react-navigation/native";

const Clock = () => {
  const batteryEvent = useRef(null);
  const timeFetchEvent = useRef(null);
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [time, setTime] = useState("21:10");
  const [opacity, setOpacity] = useState(false);

  const isFocused = useIsFocused(); //check if you are on the page

  const onPageFocus = async () => {
    const initialBatteryLevel = await Battery.getBatteryLevelAsync();
    setBatteryLevel((initialBatteryLevel * 100).toFixed(2));

    batteryEvent.current = Battery.addBatteryLevelListener(async ({ batteryLevel }) => {
      setBatteryLevel((batteryLevel * 100).toFixed(2));
    });
  };

  const onPageUnFocus = () => {
    batteryEvent.current?.remove();
  };

  useEffect(() => {
    if (isFocused) {
      onPageFocus();
    } else {
      onPageUnFocus();
    }
  }, [isFocused]);

  const getPaddedTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  const fetchTime = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    setTime(`${getPaddedTime(currentHour)}:${getPaddedTime(currentMinutes)}`);
  };

  const changeOpacity = () => {
    setOpacity((prevOpacity) => !prevOpacity);
  };

  useEffect(() => {
    if (isFocused) {
      timeFetchEvent.current = setInterval(() => {
        fetchTime();
        changeOpacity();
      }, 1000);
    } else {
      clearInterval(timeFetchEvent.current);
    }
    return () => {
      clearInterval(timeFetchEvent.current);
    };
  }, [isFocused]);

  return (
    <View style={ClockStyleSheet.pageLayout}>
      <Text style={{color:'orange'}}>Clock</Text>
      <View style={ClockStyleSheet.ClockLayout}>
      <View style={ClockStyleSheet.CircleLayout}>
        <View style={ClockStyleSheet.row}>
        <Text
          style={[
            ClockStyleSheet.TextFormat,
            opacity ? ClockStyleSheet.TextWhite : ClockStyleSheet.TextWhiteBeat,
          ]}
        >
          {time}
        </Text>

        </View>
          <View style={ClockStyleSheet.batteryBox}>
          <Text
               style={[ClockStyleSheet.TextBattery,
                opacity ? ClockStyleSheet.TextWhiteBattery : ClockStyleSheet.TextWhTextWhiteBatteryBeatiteBeat,
              ]}
          >{parseInt(batteryLevel)}%</Text>
          </View>
      </View>
      </View>
      
    </View>
  );
};

export default Clock;