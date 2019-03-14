import React, { Component } from 'react';
// import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import { Keyboard,StyleSheet,View,TextInput } from 'react-native'

export default class SearchBar extends Component {
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    )
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    )
  }

componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
}

  _keyboardDidShow() {
    console.log('Keyboard Shown');
  }

  _keyboardDidHide() {
    console.log('Keyboard Hidden');
  }



  render() {
    return (
      <View style={styles.searchContainer}>
       <TextInput 
                    style={styles.searchBox}
                    placeholder = 'search here..'
                    placeholderTextColor = '#000'
                    onSubmitEditing={Keyboard.dismiss}
                    onEndEditing={this.props.onSubmit}
                    onChangeText={this.props.onChangeText}
                />
      </View>

    );
  }
}

const styles = StyleSheet.create({
searchBox:{
  borderWidth:1,
  Width:'100%',
  padding:10,
  marginBottom:20,


  

},
searchContainer:{
  display:'flex',
  
  alignContent:'center',
     alignItems:'center',
}
});