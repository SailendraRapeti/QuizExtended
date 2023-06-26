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
class Quiz3 extends Component<Iprops, Istate> {
  state = {
    checked: '',
    err: '',
  };
  onNext = () => {
    const {checked} = this.state;
    console.log(checked);
    if (checked === '') {
      this.setState({err: 'please select option'});
    } else if (checked === 'Ignore the statement') {
      this.props.navigation.navigate('Quiz4', {
        totalScore: this.props.route.params.totalScore + 1,
      });
    } else {
      this.props.navigation.navigate('Quiz4', {
        totalScore: this.props.route.params.totalScore,
      });
    }
  };
  render() {
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
            Question 3{' '}
          </Text>
        </View>
        <View style={{padding: 20}}>
          <Text style={{color: 'black', fontSize: 20, margin: 5}}>
            Upon encountering empty statements, what does the Javascript
            Interpreter do?
          </Text>
          <View style={style.radio}>
            <RadioButton
              value="Throws an error"
              status={
                this.state.checked === 'Throws an error'
                  ? 'checked'
                  : 'unchecked'
              } //if the value of checked is Apple, then select this button
              onPress={() => this.setState({checked: 'Throws an error'})} //when pressed, set the value of the checked Hook to 'Apple'
            />
            <Text
              style={{
                padding: 5,
                fontSize: 17,
                color: 'black',
                marginBottom: 10,
              }}>
              Throws an error
            </Text>
          </View>
          <View style={style.radio}>
            <RadioButton
              value="Ignore the statement"
              status={
                this.state.checked === 'Ignore the statement'
                  ? 'checked'
                  : 'unchecked'
              }
              onPress={() => this.setState({checked: 'Ignore the statement'})}
            />
            <Text
              style={{
                padding: 5,
                fontSize: 17,
                color: 'black',
                marginBottom: 10,
              }}>
              Ignore the statement
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
          <Text>{this.state.err}</Text>
          <View style={style.bottonn}>
            <TouchableHighlight onPress={this.onNext}>
              <Text style={{color: 'white'}}>next page</Text>
            </TouchableHighlight>
          </View>
          <View style={style.bottonns}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Quiz2')}>
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
  but: {
    justifyContent: 'center',
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
});

export default Quiz3;
