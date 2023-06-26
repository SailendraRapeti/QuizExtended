import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Quiz1 from './Components/Quiz1';
import Quiz2 from './Components/Quiz2';
import Quiz3 from './Components/Quiz3';
import Quiz4 from './Components/Quiz4';
import Quiz5 from './Components/Quiz5';
import Quiz6 from './Components/Quiz6';
import Quiz7 from './Components/Quiz7';
import Quiz8 from './Components/Quiz8';
import Quiz9 from './Components/Quiz9';
import Quiz10 from './Components/Quiz10';

  import Quiz11 from './Components/Quiz11';

const Stack = createNativeStackNavigator();
export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Quiz1">
          <Stack.Screen name="Quiz1" component={Quiz1} />
          <Stack.Screen name="Quiz2" component={Quiz2} />
          <Stack.Screen name="Quiz3" component={Quiz3} />
          <Stack.Screen name="Quiz4" component={Quiz4} />
          <Stack.Screen name="Quiz5" component={Quiz5} />
          <Stack.Screen name="Quiz6" component={Quiz6} />
          <Stack.Screen name="Quiz7" component={Quiz7} />
          <Stack.Screen name="Quiz8" component={Quiz8} />
          <Stack.Screen name="Quiz9" component={Quiz9} />
          <Stack.Screen name="Quiz10" component={Quiz10} />
          <Stack.Screen name="Quiz11" component={Quiz11} />
        
        
          

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
