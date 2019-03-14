import React,{Component}from 'react'
import {ScrollView, View,Dimensions,StyleSheet, Image, Text} from 'react-native'
import SearchBar from './Searchbar'
const {height} = Dimensions.get('window')


export default class People extends Component{

    state = {
        search: "",
        results:[],
        screenHeight:0
    }
    
  
    
    onContentSizeChange = (contentHeight) =>
    {
    
      this.setState({screenHeight:contentHeight});
    }

    fetchPeople = () => 
    {
     
   
      const Url = `https://api.themoviedb.org/3/search/person?api_key=8367b1854dccedcfc9001204de735470&language=en-US&query=${this.state.search}&page=1`
        fetch(Url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        results: data.results
                    })
                })
      console.log('Hey');
   
    }


    render(){
  const scrollEnabled = this.state.screenHeight > height 

  return( 



    <ScrollView scrollEnabled={scrollEnabled}
    onContentSizeChange={this.onContentSizeChange}
    style={{padding: 10, maxWidth: '100%'}}>
        
        <View>
        <Text style={{textAlign:"center",marginBottom:15,fontSize:25,fontWeight:'200'}}>Seach People
                </Text>
          {this.fetchPeople}
        <SearchBar
            onSubmit={this.fetchPeople}
            onChangeText={search => this.setState({search})}
        />
        
        {this.state.results.slice(0 ,10).map((result, i) =>  {
          return (

            <View key={i} style={styles.containerView}>
    
                <Image source={{uri:`https://image.tmdb.org/t/p/w500/${result.profile_path}`}} style={styles.image}>
                </Image>
                
                <View style={styles.listdesc}>
                    <Text style={styles.textView}>
                   {result.name} 
                    </Text>

                     <Text style={{fontSize: 15,paddingLeft:3}} ellipsizeMode='tail' numberOfLines={4}>
                            {result.known_for[0].overview}
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
    textView:{
      color:'black',
      // alignContent: 'flex-end',
      fontWeight: '700',
      paddingBottom:2
    
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
    
