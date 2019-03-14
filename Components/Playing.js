import React,{Component} from 'react';
import { StyleSheet,Text, View, Image , ScrollView, Dimensions } from 'react-native';
import axios from 'axios';
// import { Content } from 'native-base';

const {height} = Dimensions.get('window')


export default class Playing extends Component{
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
   const randomNumber = Math.floor(Math.random()*10)

   const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=8367b1854dccedcfc9001204de735470&language=en-US&page=${randomNumber}`

   axios
   .get(url)
   .then(data => {
     this.setState({
       results:data.data.results
     })
   })

 }


render()
{
  const scrollEnabled = this.state.screenHeight > height 
 return(
   

   <ScrollView scrollEnabled={scrollEnabled}
   onContentSizeChange={this.onContentSizeChange}
   style={{padding: 10, maxWidth: '100%'}}>
      
      <View>
      <Text style={{textAlign:"center",fontSize:25,fontWeight:'200'}}>Now playing
                </Text>
          {this.state.results.slice(0 ,1).map((result, i) =>  {
            return (

            <View key={i} style={styles.Container}>

                <Image source={{uri:`https://image.tmdb.org/t/p/w500/${result.poster_path}`}} style={styles.Image}>
                </Image>
                              
                <View style={styles.movieIntro}>
                        
                              <Text style={styles.title}>{result.title} </Text>
                     

                          <Text style={styles.pr}>
                                Popularity:<Text>{Math.round((result.popularity)/10)}%</Text>
                          </Text>
                        
                          <Text style={styles.pr}>
                                Release Date:<Text>{result.release_date}</Text>
                          </Text>
                  </View>


                  <View style={styles.movieDescription}>
                  

                  <Text>
                  {result.overview}
                  </Text>

                </View>

            </View>



     
  )
  } ) }
            
      </View>



          
</ScrollView>
          )

         
              }
            }


const styles = StyleSheet.create({
  movieIntro:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
           


  },
  movieDetails:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,

  },
  Container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // borderWidth:4,
    marginTop:10

  },
  Image:{
    alignSelf:'center',
    height:350,
    width:350,
    // borderWidth:1,
    borderRadius:20,
    resizeMode: 'contain'

  },
  movieDescription:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // borderWidth:1,
    marginTop:15,
    padding:5,
    fontSize:20


  },
  title:{
    // color:'red',
    fontSize:25,
    margin:5
  },
  pr:{
// color:'red',
fontSize:15,
fontWeight:'300',
padding:1
  }
})