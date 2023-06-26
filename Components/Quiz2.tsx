import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React, {Component} from 'react';
import {RadioButton} from 'react-native-paper';

interface Iprops {
  navigation?: any;
  route?: any;
}
interface Istate {
  checked: string;
  err: string;
}
class Quiz2 extends Component<Iprops, Istate> {
  state = {
    checked: '',
    err: '',
  };
  onNext = () => {
    const {checked} = this.state;
    console.log(checked);

    if (checked === '') {
      this.setState({err: 'please select option'});
    } else if (checked === 'getElementById()') {
      this.props.navigation.navigate('Quiz3', {
        totalScore: this.props.route.params.totalScore + 1,
      });
    } else {
      this.props.navigation.navigate('Quiz3', {
        totalScore: this.props.route.params.totalScore,
      });
    }
  };
  render() {
    console.log(this.props.route.params.totalScore);
    return (
      <View style={style.mainContainer}>
        <View style={style.questionCard}>
          <Text
            style={{
              padding: 10,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 40,
            }}>
            Question 2{' '}
          </Text>
        </View>
        <View style={{padding: 20}}>
          <Text style={{color: 'black', fontSize: 20, margin: 5}}>
            Which of the following methods is used to access HTML elements using
            Javascript?
          </Text>
          <View style={style.radio}>
            <RadioButton
              value="getElementById()"
              status={
                this.state.checked === 'getElementById()'
                  ? 'checked'
                  : 'unchecked'
              } //if the value of checked is Apple, then select this button
              onPress={() => this.setState({checked: 'getElementById()'})} //when pressed, set the value of the checked Hook to 'Apple'
            />
            <Text
              style={{
                padding: 5,
                fontSize: 17,
                color: 'black',
                marginBottom: 10,
              }}>
              getElementById()
            </Text>
          </View>
          <View style={style.radio}>
            <RadioButton
              value="getElementbyClassName()"
              status={
                this.state.checked === 'getElementbyClassName()'
                  ? 'checked'
                  : 'unchecked'
              }
              onPress={() =>
                this.setState({checked: 'getElementbyClassName()'})
              }
            />
            <Text
              style={{
                padding: 5,
                fontSize: 17,
                color: 'black',
                marginBottom: 10,
              }}>
              getElementbyClassName()
            </Text>
          </View>
          <View style={style.radio}>
            <RadioButton
              value="Both A and B"
              status={
                this.state.checked === 'Both A and B' ? 'checked' : 'unchecked'
              }
              onPress={() => this.setState({checked: 'Both A and B'})}
            />
            <Text
              style={{
                padding: 5,
                fontSize: 17,
                color: 'black',
                marginBottom: 10,
              }}>
              Both A and B{' '}
            </Text>
          </View>
          <View style={style.radio}>
            <RadioButton
              value=" None of the above"
              status={
                this.state.checked === ' None of the above'
                  ? 'checked'
                  : 'unchecked'
              }
              onPress={() => this.setState({checked: ' None of the above'})}
            />
            <Text
              style={{
                padding: 5,
                fontSize: 17,
                color: 'black',
                marginBottom: 10,
              }}>
              None of the above{' '}
            </Text>
          </View>
        </View>
        <View style={style.but}>
          <Text style={{color: 'red'}}>{this.state.err}</Text>
          <View style={style.bottonn}>
            <TouchableHighlight onPress={this.onNext}>
              <Text style={{color: 'white'}}>next page</Text>
            </TouchableHighlight>
          </View>
          <View style={style.bottonns}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Quiz1')}>
              <Text style={{color: 'white'}}>previous page</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  questionCard: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  radio: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  bottonn: {
    backgroundColor: '#2196F3',
    width: 100,
    height: 35,
    padding: 7,
    textAlign: 'center',
    alignItems: 'center',
  },
  bottonns: {
    backgroundColor: '#2196F3',
    width: 100,
    height: 35,
    padding: 7,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  but: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Quiz2;
