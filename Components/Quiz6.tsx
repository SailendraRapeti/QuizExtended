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
class Quiz6 extends Component<Iprops, Istate> {
  state = {
    checked: '',
    err: '',
  };
  onNext = () => {
    const {checked} = this.state;
    console.log(checked);
    if (checked === '') {
      this.setState({err: 'please select option'});
    } else if (checked === 'object-oriented') {
      this.props.navigation.navigate('Quiz7', {
        totalScore: this.props.route.params.totalScore + 1,
      });
    } else {
      this.props.navigation.navigate('Quiz7', {
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
            Question 6{' '}
          </Text>
        </View>
        <View style={{padding: 20}}>
          <Text style={{color: 'black', fontSize: 20, margin: 5}}>
            Javascript is an _______ language?
          </Text>
          <View style={style.radio}>
            <RadioButton
              value="object-oriented"
              status={
                this.state.checked === 'object-oriented'
                  ? 'checked'
                  : 'unchecked'
              } //if the value of checked is Apple, then select this button
              onPress={() => this.setState({checked: 'object-oriented'})} //when pressed, set the value of the checked Hook to 'Apple'
            />
            <Text
              style={{
                padding: 5,
                fontSize: 17,
                color: 'black',
                marginBottom: 10,
              }}>
              object-oriented
            </Text>
          </View>
          <View style={style.radio}>
            <RadioButton
              value="object-based"
              status={
                this.state.checked === 'object-based' ? 'checked' : 'unchecked'
              }
              onPress={() => this.setState({checked: 'object-based'})}
            />
            <Text
              style={{
                padding: 5,
                fontSize: 17,
                color: 'black',
                marginBottom: 10,
              }}>
              object-based
            </Text>
          </View>
          <View style={style.radio}>
            <RadioButton
              value="let"
              status={this.state.checked === 'let' ? 'checked' : 'unchecked'}
              onPress={() => this.setState({checked: 'let'})}
            />
            <Text
              style={{
                padding: 5,
                fontSize: 17,
                color: 'black',
                marginBottom: 10,
              }}>
              let{' '}
            </Text>
          </View>
          <View style={style.radio}>
            <RadioButton
              value="constant"
              status={
                this.state.checked === ' constant' ? 'checked' : 'unchecked'
              }
              onPress={() => this.setState({checked: ' constant'})}
            />
            <Text
              style={{
                padding: 5,
                fontSize: 17,
                color: 'black',
                marginBottom: 10,
              }}>
              constant{' '}
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
              onPress={() => this.props.navigation.navigate('Quiz5')}>
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
  bottonns: {
    backgroundColor: '#2196F3',
    width: 100,
    height: 35,
    padding: 7,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 8,
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
});

export default Quiz6;
