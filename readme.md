# Versioning

#### version-"1.0.0"

- Completed the base structure of swipable screens and created a backbone for each page

- For navigation refer:https://reactnavigation.org/docs/material-top-tab-navigator

- Tab Navigation options were changed to get rid of the headers and make the UI look smooth,
  The options are pretty self explainatory

```
   <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowIcon: false,
            tabBarShowLabel: false,
            tabBarIndicatorStyle: { backgroundColor: 'transparent' },
          }}>

```

#### version-"2.0.0"

- StopWatch Complete
- for future ref just remember that useRef stores values, and once done they are no longer affected by re-rendering.

```
 const variableRef = useRef(null);
```

- variable.toString().padStart(2, '0') padds the value to 2 characters,if it crosses 2 or is already 2, it will ignore

#### version-"3.0.0"
- fetch system information 
`expo install expo-battery`
- import {useIsFocused } from '@react-navigation/native'; `to check if you are the current page, the moment you leave useInFocus is false`

