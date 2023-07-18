import React, { useEffect, useState, useRef } from "react";
import { ScrollView, Text, View } from "react-native";
import { ButtonComponent, TimerTile } from "../component/components";
import { StopWatchStyle } from "../style/StopWatchStyle.js";
function StopWatch() {
  const [displayTimer, setTimer] = useState("00:00:00");
  const [timerStart, setTimerStart] = useState(null); //start pause
  const [acceptedTime, SetAcceptedTime] = useState([]);
  const [save, setSave] = useState(false);
  const [pause, setPausedTime] = useState(null);
  const [deltaTime, setDeltaTime] = useState();

  const startDateRef = useRef(null);
  const deltaDateRef = useRef(null);
  const timerIdRef = useRef(null);

  const startFunction = () => {
    if (startDateRef.current) {
      const miliseconds = new Date() - deltaDateRef.current;
      const newDate = new Date();
      startDateRef.current = newDate.setTime(miliseconds);
      //timer starts
      setTimerStart(true);
      //toggle button
      setSave(true);
    } else {
      //first time
      startDateRef.current = new Date(); //ref persists value even during re-rendering
      setTimerStart(true);
      //toggle button
      setSave(true);
    }
  };
  const pauseFunction = () => {
    //clean up the timer
    setTimerStart(false);
    //toggle button
    setSave(false);

    deltaDateRef.current = new Date() - startDateRef.current;
  };
  const resetFunction = () => {
    startDateRef.current = null;
    deltaDateRef.current = null;
    clearTimeout(timerIdRef.current);
    setTimer("00:00:00");
    setTimerStart(false);
    SetAcceptedTime([]);
    //toggle button
    setSave(false);
  };

  const saveFunction = () => {
    //save timelaps
    const time = saveTime();

    SetAcceptedTime([
      ...acceptedTime,
      `${time.hours}:${time.minutes}:${time.seconds}`,
    ]);
  };

  const saveTime = () => {
    const differenceInMilliseconds = new Date() - startDateRef.current;

    const hours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor(
      (differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    )
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((differenceInMilliseconds % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");
    return { hours, minutes, seconds };
  };

  useEffect(() => {
    //when we press start
    if (timerStart) {
      timerIdRef.current = setInterval(() => {
        //display on screen
        const time = saveTime();

        setTimer(`${time.hours}:${time.minutes}:${time.seconds}`);
      }, 900);
    }
    //when we press pause
    else {
      clearTimeout(timerIdRef.current);
    }
    // Cleanup function
    return () => {
      clearInterval(timerIdRef.current); // Cancel the interval on unmount or re-trigger
    };
  }, [timerStart]);
  return (
    <View style={StopWatchStyle.clickableLayout}>
      <View style={StopWatchStyle.headerTextLayout}>
        <Text style={StopWatchStyle.title}>StopWatch</Text>
      </View>
      {/*Display */}
      <View style={StopWatchStyle.displayTimerContainer}>
        <Text style={StopWatchStyle.displayTimer}>{displayTimer}</Text>
      </View>

      {/*Buttons */}
      <View style={StopWatchStyle.ButtonRow}>
        {save ? (
          <ButtonComponent
            text="save"
            onPressFunction={saveFunction}
            color="orange"
          />
        ) : (
          <ButtonComponent
            text="Start"
            onPressFunction={startFunction}
            color="orange"
          />
        )}
        <ButtonComponent
          text="Pause"
          onPressFunction={pauseFunction}
          color="orange"
        />
        <ButtonComponent
          text="Reset"
          onPressFunction={resetFunction}
          color="orange"
        />
      </View>

      {/*List of timers*/}
      <ScrollView>
        {acceptedTime.map((time,index) => {
          return <TimerTile key={index} time={time} />;
        })}
      </ScrollView>
    </View>
  );
}

export default StopWatch;
