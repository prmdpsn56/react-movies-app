import React,{Component} from 'react';
import {StyleSheet , View , Text, Image, ScrollView, Dimensions} from 'react-native';
import axios from 'axios';
const {height} = Dimensions.get('window')

export default class Toprated extends Component {

  state = {

    results: [],
    screenHeight:0
   }

   onContentSizeChange = (contentHeight) =>
{

  this.setState({screenHeight:contentHeight});
}


componentDidMount = async() => 
{
 

  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=8367b1854dccedcfc9001204de735470&language=en-US&page=1`

  axios
  .get(url)
  .then(data => {
    this.setState({
      results:data.data.results
    })
  })

}

  render() {
  const scrollEnabled = this.state.screenHeight > height 

    return (

      <ScrollView scrollEnabled={scrollEnabled}
      onContentSizeChange={this.onContentSizeChange}
      style={{padding: 10, maxWidth: '100%'}}>
          
          <View>
          <Text style={{textAlign:"center",marginBottom:15,fontSize:25,fontWeight:'200'}}>Toprated Movies
                </Text>
          {this.state.results.slice(0 ,10).map((result, i) =>  {
            return (
               
              <View style={styles.containerView}>
      
      <Image source={{uri:`https://image.tmdb.org/t/p/w500/${result.poster_path}`}} style={styles.image}>
      </Image>
      
       <View style={styles.listdesc}>
           
             <Text style={styles.title}>{result.title} </Text>
         
  
            
             <Text style={{fontSize: 15,paddingLeft:3}} ellipsizeMode='tail' numberOfLines={4}>
                  {result.overview}
             </Text>
             
  
       </View>
  
  
  
       </View>

            
            )
            })}
            </View>

    

 </ScrollView>
     
    )
  }
}




const styles = StyleSheet.create({
containerView:{
  display: 'flex',
  flexDirection: 'row',
  // justifyContent:'center',
  // alignItems:'center',
  // borderWidth:1,
  maxWidth:'100%',
  height: 'auto',
  flex: 1,
        flexGrow: 1,
        marginTop:6,
        marginBottom:10,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
        

},
image:{
  
  height:100,
  width:100,
  resizeMode: 'cover',
  
  borderRadius:20

},
listdesc:{
  maxWidth:'100%',
  flex: 1,
  padding: 5,
  flexShrink:1,
  
  display:'flex',
  flexDirection:'column',
  alignContent:'center',
 alignItems:'center',

},
title:{
  fontWeight: '700',
  paddingBottom:2
}
});

