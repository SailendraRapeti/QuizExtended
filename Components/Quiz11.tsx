import {Text, View} from 'react-native';
import React, {Component} from 'react';

interface Iprops {
  navigation?: any;
  route?: any;
}
interface Istate {}

export class Quiz11 extends Component<Iprops> {
  render() {
    const result = this.props.route.params.totalScore;
    // let count = 0;
    // switch (result) {
    //   case 'Both A and B':
    //     count = count + 1;
    //     break;
    //   case 'getElementById()':
    //     count++;
    //     break;
    //   case 'Ignore the statement':
    //     count++;
    //     break;
    //   case 'All of the above':
    //     count++;
    //     break;
    //   case 'const':
    //     count++;
    //     break;
    //   case 'object-oriented':
    //     count++;
    //     break;
    //   default:
    //     count = count;
    // }
    console.log(this.props.route.params);
    console.log(result);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text>Results</Text>
        <Text style={{fontWeight: 'bold', color: 'black'}}>{result}/10</Text>
        <Text style={{color: 'green', fontWeight: 'bold'}}>Thank you</Text>
      </View>
    );
  }
}

export default Quiz11;
