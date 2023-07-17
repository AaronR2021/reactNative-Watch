import { StyleSheet } from "react-native";

export const StopWatchStyle = StyleSheet.create({
  title: {
    color: "orange",
    textAlign: "center",
  },
  headerTextLayout: {
    paddingTop: 10,
  },
  clickableLayout: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
    color: "white",
  },
  ButtonRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  displayTimerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    paddingTop: 20,
  },
  displayTimer: {
    color: "white",
    fontSize: 40,
  },
});
