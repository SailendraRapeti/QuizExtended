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
class Quiz4 extends Component<Iprops, Istate> {
  state = {
    checked: '',
    err: '',
  };
  onNext = () => {
    const {checked} = this.state;
    console.log(checked);
    if (checked === '') {
      this.setState({err: 'please select option'});
    } else if (checked === 'All of the above') {
      this.props.navigation.navigate('Quiz5', {
        totalScore: this.props.route.params.totalScore + 1,
      });
    } else {
      this.props.navigation.navigate('Quiz5', {
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
            Question 4{' '}
          </Text>
        </View>
        <View style={{padding: 20}}>
          <Text style={{color: 'black', fontSize: 20, margin: 5}}>
          Which of the following methods can be used to display data in some form using Javascript?
          </Text>
          <View style={style.radio}>
            <RadioButton
              value="document.write"
              status={
                this.state.checked === 'document.write'
                  ? 'checked'
                  : 'unchecked'
              } //if the value of checked is Apple, then select this button
              onPress={() => this.setState({checked: 'document.write'})} //when pressed, set the value of the checked Hook to 'Apple'
            />
            <Text
              style={{
                padding: 5,
                fontSize: 17,
                color: 'black',
                marginBottom: 10,
              }}>
             document.write
            </Text>
          </View>
          <View style={style.radio}>
            <RadioButton
              value="console.log()"
              status={
                this.state.checked === 'console.log()'
                  ? 'checked'
                  : 'unchecked'
              }
              onPress={() => this.setState({checked: 'console.log()'})}
            />
            <Text
              style={{
                padding: 5,
                fontSize: 17,
                color: 'black',
                marginBottom: 10,
              }}>
              console.log()
            </Text>
          </View>
          <View style={style.radio}>
            <RadioButton
              value="Window.alrt"
              status={
                this.state.checked === 'Window.alrt' ? 'checked' : 'unchecked'
              }
              onPress={() => this.setState({checked: 'Window.alrt'})}
            />
            <Text
              style={{
                padding: 5,
                fontSize: 17,
                color: 'black',
                marginBottom: 10,
              }}>
             Window.alrt{' '}
            </Text>
          </View>
          <View style={style.radio}>
            <RadioButton
              value=" All of the above"
              status={
                this.state.checked === ' All of the above'
                  ? 'checked'
                  : 'unchecked'
              }
              onPress={() => this.setState({checked: ' All of the above'})}
            />
            <Text
              style={{
                padding: 5,
                fontSize: 17,
                color: 'black',
                marginBottom: 10,
              }}>
              All of the above{' '}
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
              onPress={() => this.props.navigation.navigate('Quiz3')}>
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
  bottonns: {
    backgroundColor: '#2196F3',
    width: 100,
    height: 35,
    padding: 7,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 8,
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
});

export default Quiz4;
