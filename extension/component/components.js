import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export const ButtonComponent = ({ text, onPressFunction, color }) => {
  return (
    <TouchableOpacity
      onPress={onPressFunction}
      style={[buttonStyle.buttonLayout, { backgroundColor: color }]}
    >
      <Text style={buttonStyle.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const buttonStyle = StyleSheet.create({
  buttonLayout: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export const TimerTile = ({ time }) => {
  return (
    <View style={TimerTileStyle.outline}>
      <TouchableOpacity style={[TimerTileStyle.buttonLayout]}>
        <Text style={TimerTileStyle.buttonText}>{time}</Text>
      </TouchableOpacity>
    </View>
  );
};

const TimerTileStyle = StyleSheet.create({
  buttonLayout: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:2,
    borderColor:'white'
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  outline:{
    marginBottom:15
  }
});
