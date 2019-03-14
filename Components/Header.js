import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Head = () => (

<View>
<Text style={styles.textTitle}>
Movies Application
</Text>
</View>

)

const styles = StyleSheet.create({
  textTitle: {
    color: 'black',
    textAlign:'center',
    fontSize: 20,
    marginTop:15,
    fontWeight: 'bold'
    // backgroundColor:'green'
  },
})

export default Head
